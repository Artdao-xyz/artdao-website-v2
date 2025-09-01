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
    
    // Estado para el proyecto seleccionado
    let selectedProjectIndex: number | null = null;
    
    // Referencias a los botones de imagen para hacer scroll
    let imageButtons: HTMLAnchorElement[] = [];
    
    // Función para hacer scroll a una imagen específica y seleccionar el proyecto
    function scrollToProject(projectIndex: number) {
        // Toggle: si ya está seleccionado, deseleccionar; si no, seleccionar
        if (selectedProjectIndex === projectIndex) {
            selectedProjectIndex = null;
        } else {
            selectedProjectIndex = projectIndex;
            
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
    
    // Función para toggle de artistas
    function toggleArtist(artist: string) {
        // Buscar en qué proyecto está este artista
        const projectIndex = projects.findIndex(project => project.artists.includes(artist));
        if (projectIndex === -1) return;
        
        // Toggle: si ya está seleccionado el proyecto de este artista, deseleccionar; si no, seleccionar
        if (selectedProjectIndex === projectIndex) {
            selectedProjectIndex = null;
        } else {
            selectedProjectIndex = projectIndex;
            
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

    // Función para manejar hover de artistas
    function handleArtistHover(artist: string) {
        if (artist) {
            const projectIndex = projects.findIndex(project => project.artists.includes(artist));
            if (projectIndex !== -1) hoveredProjectIndex = projectIndex;
        } else {
            hoveredProjectIndex = null;
        }
    }
</script>

<div class="relative w-full min-h-screen lg:max-h-screen text-white flex flex-col items-center lg:justify-center lg:pt-10 bg-dot">
    
    <Navbar />
    
    <!-- Layout Unificado -->
    <div class="w-full flex flex-col lg:flex-row lg:justify-between lg:max-w-screen-2xl lg:h-screen lg:overflow-hidden">
        <!-- Proyecto Seleccionado (solo mobile) -->
        <div class="lg:hidden">
            <SelectedProject 
                {selectedProjectIndex}
                projects={projects}
                onProjectClick={scrollToProject}
                onArtistClick={toggleArtist}
            />
        </div>
        
        <!-- Columna 1: Projects -->
        <ProjectsColumn 
            projects={projects}
            {selectedProjectIndex}
            {hoveredProjectIndex}
            onProjectClick={scrollToProject}
            onProjectHover={(index) => hoveredProjectIndex = index}
            variant="desktop"
        />
        
        <!-- Columnas 2, 3, 4: Grilla única de 3xN con imágenes (solo desktop) -->
        <div class="hidden lg:block">
            <ImageGrid 
                projects={projects}
                {selectedProjectIndex}
                {hoveredProjectIndex}
                {imageButtons}
                onImageHover={(index) => hoveredProjectIndex = index}
            />
        </div>
        
        <!-- Columna 5: Artists -->
        <ArtistsColumn 
            {artists}
            {selectedProjectIndex}
            {hoveredProjectIndex}
            onArtistClick={toggleArtist}
            onArtistHover={handleArtistHover}
            variant="desktop"
        />
        
        <!-- Layout Mobile: Columnas de proyectos y artistas -->
        <div class="lg:hidden flex-1 grid grid-cols-2 w-full min-h-0">
            <!-- Columna Izquierda: Proyectos -->
            <ProjectsColumn 
                projects={projects}
                {selectedProjectIndex}
                {hoveredProjectIndex}
                onProjectClick={scrollToProject}
                onProjectHover={(index) => hoveredProjectIndex = index}
                variant="mobile"
            />
            
            <!-- Columna Derecha: Artistas -->
            <ArtistsColumn 
                {artists}
                {selectedProjectIndex}
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
        background: #F7F5F2 url("media/home/home-dot.svg") repeat;
    }
</style>
