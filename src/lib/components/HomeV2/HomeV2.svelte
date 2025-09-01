<script lang="ts">
    import { projectsV2, type ProjectV2 } from '../../../constants/projectsV2';
    import ProjectsColumn from './ProjectsColumn/ProjectsColumn.svelte';
    import ImageGrid from './ImageGrid/ImageGrid.svelte';
    import ArtistsColumn from './ArtistsColumn/ArtistsColumn.svelte';
    import Navbar from './Navbar/Navbar.svelte';

    // Extraer solo los títulos de los proyectos para la primera columna
    const projects = projectsV2.map((p: ProjectV2) => p.title);
    
    // Extraer todos los artistas únicos de todos los proyectos
    const allArtists = [...new Set(projectsV2.flatMap((p: ProjectV2) => p.artists))];
    
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
        const projectIndex = projectsV2.findIndex(project => project.artists.includes(artist));
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
            const projectIndex = projectsV2.findIndex(project => project.artists.includes(artist));
            if (projectIndex !== -1) hoveredProjectIndex = projectIndex;
        } else {
            hoveredProjectIndex = null;
        }
    }
</script>

<div class="relative w-full min-h-screen text-white flex flex-col items-center justify-center pt-10 bg-dot">
    
    <Navbar />
    
    <div class="hidden relative lg:flex justify-between max-w-screen-2xl w-full h-full">
        <!-- Columna 1: Projects -->
        <ProjectsColumn 
            {projects}
            {selectedProjectIndex}
            {hoveredProjectIndex}
            onProjectClick={scrollToProject}
            onProjectHover={(index) => hoveredProjectIndex = index}
        />
        
        <!-- Columnas 2, 3, 4: Grilla única de 3xN con imágenes -->
        <ImageGrid 
            {projects}
            {selectedProjectIndex}
            {hoveredProjectIndex}
            {imageButtons}
            onImageHover={(index) => hoveredProjectIndex = index}
        />
        
        <!-- Columna 5: Artists -->
        <ArtistsColumn 
            {artists}
            {selectedProjectIndex}
            {hoveredProjectIndex}
            onArtistClick={toggleArtist}
            onArtistHover={handleArtistHover}
        />
    </div>

    <!-- Layout Mobile -->
    <div class="lg:hidden w-full flex flex-col flex-1">
        <!-- Proyecto Seleccionado -->
        {#if selectedProjectIndex !== null}
            <div class="w-full p-5 lg:p-10">
                <div class="flex flex-col space-y-2">
                    <!-- Proyecto y Artistas en columna -->
                     <div class="flex justify-between">
                         <h1 class="text-black text-sm font-medium font-clash leading-none tracking-tight">
                             Welcome to the artdao zine
                            </h1>
                            <h1 class="text-black text-sm font-medium font-clash leading-none tracking-tight">
                                Featuring
                            </h1>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <!-- Título del proyecto -->
                            <button
                                class="text-black text-xs font-clash leading-none tracking-tight hover:text-[#949391] cursor-pointer transition-all"
                                on:click={() => selectedProjectIndex !== null && scrollToProject(selectedProjectIndex)}
                            >
                                {projects[selectedProjectIndex]}
                            </button>
                        </div>
                        
                        <!-- Título "Featuring" y artistas -->
                        <div class="flex flex-col items-end gap-1.5">
                            {#each projectsV2[selectedProjectIndex].artists as artist}
                                <button
                                    class="rounded-[100px] inline-flex justify-center items-center leading-none tracking-tight text-xs font-robotoMono font-normal w-fit transition-all text-black hover:text-[#949391] cursor-pointer"
                                    on:click={() => toggleArtist(artist)}
                                >
                                    {artist}
                                </button>
                            {/each}
                        </div>
                    </div>
                    
                    <!-- Imagen del proyecto en full width -->
                    <div class="w-full">
                        <img 
                            src={projectsV2[selectedProjectIndex].thumbnailPath} 
                            alt={projects[selectedProjectIndex]}
                            class="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        {/if}
        
        <!-- Contenido Principal Mobile -->
        <div class="flex-1 grid grid-cols-2 w-full min-h-0">
            <!-- Columna Izquierda: Proyectos -->
            <div class="p-5 lg:p-10 overflow-y-auto">
                <div class="space-y-2">
                    {#each projects as project, index}
                        {#if selectedProjectIndex !== index}
                            <button
                                class="text-left leading-none tracking-tight text-xs font-robotoMono font-normal w-fit transition-all text-[#949391] duration-300 hover:text-black"
                                on:click={() => scrollToProject(index)}
                                on:mouseenter={() => hoveredProjectIndex = index}
                                on:mouseleave={() => hoveredProjectIndex = null}
                            >
                                {project}
                            </button>
                        {/if}
                    {/each}
                </div>
            </div>
            
            <!-- Columna Derecha: Artistas -->
            <div class="p-5 lg:p-10 overflow-y-auto">
                <div class="space-y-2">
                    {#each artists as artist}
                        {#if selectedProjectIndex === null || !projectsV2[selectedProjectIndex].artists.includes(artist)}
                            <button
                                class="text-right flex justify-end leading-none tracking-tight text-xs font-robotoMono font-normal w-full transition-all duration-300 text-[#949391] hover:text-black"
                                on:click={() => toggleArtist(artist)}
                                on:mouseenter={() => handleArtistHover(artist)}
                                on:mouseleave={() => handleArtistHover('')}
                            >
                                {artist}
                            </button>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>

</div>

<style>
    .bg-dot {
        background: #F7F5F2 url("media/home/home-dot.svg") repeat;
    }
</style>
