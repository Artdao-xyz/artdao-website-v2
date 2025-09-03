<script lang="ts">
    import { projects, type Project } from '../../../constants/projects';
    import ProjectsColumn from './ProjectsColumn/ProjectsColumn.svelte';
    import ImageGrid from './ImageGrid/ImageGrid.svelte';
    import ArtistsColumn from './ArtistsColumn/ArtistsColumn.svelte';
    import SelectedProject from './SelectedProject/SelectedProject.svelte';
    import Navbar from './Navbar/Navbar.svelte';

    // Extraer solo los títulos de los proyectos para la primera columna
    const projectTitles = projects.map((p: Project) => p.title);
    
    // Debug: ver qué está pasando con los datos
    console.log('Projects data:', projects);
    console.log('Project titles:', projectTitles);
    
    // Extraer todos los artistas únicos de todos los proyectos
    const allArtists = [...new Set(projects.flatMap((p: Project) => p.artists))];
    
    // Mantener el orden original de los artistas
    const artists = allArtists;
    
    // Estado para el hover
    let hoveredProjectIndex: number | null = null;
    let hoveredProjectIndexes: number[] = [];
    
    // Estado para los proyectos seleccionados (array para múltiples selecciones)
    let selectedProjectIndexes: number[] = [];
    
    // Estado para los artistas seleccionados (los que hice click)
    let selectedArtists: string[] = [];
    
    // Estado para los artistas highlighteados (los relacionados)
    let highlightedArtists: string[] = [];
    
    // Referencias a los botones de imagen para hacer scroll
    let imageButtons: HTMLAnchorElement[] = [];
    
    // Función para hacer scroll a una imagen específica y seleccionar el proyecto
    function scrollToProject(projectIndex: number) {
        // Toggle: si ya está seleccionado, deseleccionar; si no, seleccionar
        if (selectedProjectIndexes.includes(projectIndex)) {
            selectedProjectIndexes = [];
            selectedArtists = [];
            highlightedArtists = [];
        } else {
            // Si zine seleccionado -> seleccionar ese zine + artistas contenidos
            selectedProjectIndexes = [projectIndex];
            selectedArtists = projects[projectIndex].artists;
            highlightedArtists = projects[projectIndex].artists;
            
            // Hacer scroll a la imagen correspondiente solo si se está seleccionando
            if (imageButtons[projectIndex]) {
                imageButtons[projectIndex].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                    inline: 'center'
                });
            }
        }
    }
    
    // Función para toggle de artistas con lógica inteligente
    function toggleArtist(artist: string) {
        // Buscar todos los proyectos donde aparece este artista
        const artistProjectIndexes = projects
            .map((project, index) => project.artists.includes(artist) ? index : -1)
            .filter(index => index !== -1);
        
        if (artistProjectIndexes.length === 0) return;
        
        // Si no hay artistas seleccionados, seleccionar este artista
        if (selectedArtists.length === 0) {
            selectedProjectIndexes = artistProjectIndexes;
            selectedArtists = [artist]; // Solo el artista clickeado está seleccionado
            // Highlightear todos los artistas que están en los proyectos seleccionados
            highlightedArtists = [...new Set(artistProjectIndexes.flatMap(index => projects[index].artists))];
        } else {
            // Verificar si este artista ya está seleccionado
            if (selectedArtists.includes(artist)) {
                // Si está seleccionado, deseleccionar todo
                selectedProjectIndexes = [];
                selectedArtists = [];
                highlightedArtists = [];
            } else {
                // Verificar si este artista combina con los artistas actualmente seleccionados
                const combinedArtists = [...selectedArtists, artist];
                const combinedProjectIndexes = projects
                    .map((project, index) => {
                        // Un proyecto debe contener TODOS los artistas seleccionados
                        return combinedArtists.every(selectedArtist => 
                            project.artists.includes(selectedArtist)
                        ) ? index : -1;
                    })
                    .filter(index => index !== -1);
                
                if (combinedProjectIndexes.length > 0) {
                    // Si hay proyectos que contienen ambos artistas, mostrar esos
                    selectedProjectIndexes = combinedProjectIndexes;
                    selectedArtists = combinedArtists; // Los artistas clickeados están seleccionados
                    // Highlightear todos los artistas que están en los proyectos combinados
                    highlightedArtists = [...new Set(combinedProjectIndexes.flatMap(index => projects[index].artists))];
                } else {
                    // Si no hay proyectos que contengan ambos, reemplazar con el nuevo artista
                    selectedProjectIndexes = artistProjectIndexes;
                    selectedArtists = [artist]; // Solo el nuevo artista está seleccionado
                    // Highlightear todos los artistas que están en los proyectos del nuevo artista
                    highlightedArtists = [...new Set(artistProjectIndexes.flatMap(index => projects[index].artists))];
                }
            }
        }
        
        // Hacer scroll al primer proyecto seleccionado
        if (selectedProjectIndexes.length > 0 && imageButtons[selectedProjectIndexes[0]]) {
            imageButtons[selectedProjectIndexes[0]].scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'center'
            });
        }
    }

    // Función para manejar hover de artistas
    function handleArtistHover(artist: string) {
        if (artist) {
            // Buscar todos los proyectos donde aparece este artista
            const projectIndexes = projects
                .map((project, index) => project.artists.includes(artist) ? index : -1)
                .filter(index => index !== -1);
            
            hoveredProjectIndexes = projectIndexes;
            // Para compatibilidad, mantener el primer proyecto como hoveredProjectIndex
            hoveredProjectIndex = projectIndexes.length > 0 ? projectIndexes[0] : null;
        } else {
            hoveredProjectIndexes = [];
            hoveredProjectIndex = null;
        }
    }
    
    // Función para manejar hover de cartas
    function handleCardHover(index: number | null) {
        hoveredProjectIndex = index;
        hoveredProjectIndexes = index !== null ? [index] : [];
    }
</script>

<div class="relative w-full min-h-screen lg:max-h-screen text-white flex flex-col gap-10 lg:gap-0 items-center lg:justify-center bg-dot">
    
    <Navbar />
    
    <!-- Layout Unificado -->
    <div class="w-full flex flex-col lg:flex-row lg:max-w-screen-2xl lg:h-screen">
        <!-- Proyecto Seleccionado (solo mobile) -->
        <div class="lg:hidden">
            <SelectedProject 
                selectedProjectIndex={selectedProjectIndexes[0] || null}
                projects={projects}
                onProjectClick={scrollToProject}
                onArtistClick={toggleArtist}
            />
        </div>
        
        <!-- Columna 1: Projects (solo espacio necesario) -->
        <div class="hidden lg:block flex-shrink-0">
            <ProjectsColumn 
                projects={projects}
                selectedProjectIndexes={selectedProjectIndexes}
                {hoveredProjectIndexes}
                onProjectClick={scrollToProject}
                onProjectHover={(index) => hoveredProjectIndex = index}
                variant="desktop"
            />
        </div>
        
        <!-- Columnas 2, 3, 4: Grilla única de 3xN con imágenes (ocupa todo el espacio) -->
        <div class="hidden lg:block flex-1 min-w-0">
            <ImageGrid 
                projects={projects}
                selectedProjectIndexes={selectedProjectIndexes}
                {hoveredProjectIndexes}
                {imageButtons}
                onImageHover={handleCardHover}
                onImageSelect={scrollToProject}
            />
        </div>
        
        <!-- Columna 5: Artists (solo espacio necesario) -->
        <div class="hidden lg:block flex-shrink-0">
            <ArtistsColumn 
                {artists}
                selectedProjectIndexes={selectedProjectIndexes}
                {selectedArtists}
                {highlightedArtists}
                {hoveredProjectIndex}
                onArtistClick={toggleArtist}
                onArtistHover={handleArtistHover}
                variant="desktop"
            />
        </div>
        
        <!-- Layout Mobile: Columnas de proyectos y artistas -->
        <div class="lg:hidden flex-1 grid grid-cols-2 w-full h-full min-h-0">
            <!-- Columna Izquierda: Proyectos -->
            <ProjectsColumn 
                projects={projects}
                selectedProjectIndexes={selectedProjectIndexes}
                {hoveredProjectIndexes}
                onProjectClick={scrollToProject}
                onProjectHover={(index) => hoveredProjectIndex = index}
                variant="mobile"
            />
            
            <!-- Columna Derecha: Artistas -->
            <ArtistsColumn 
                {artists}
                selectedProjectIndexes={selectedProjectIndexes}
                {selectedArtists}
                {highlightedArtists}
                {hoveredProjectIndex}
                onArtistClick={toggleArtist}
                onArtistHover={handleArtistHover}
                variant="mobile"
            />
        </div>
    </div>

</div>

<style>
    .bg-dot {
        background: #F7F5F2 url("/media/home/home-dot.svg") repeat;
    }
</style>
