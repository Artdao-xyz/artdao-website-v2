<script lang="ts">
    import { projects as projectsData, type Project } from '../../../../constants/projects';

    // Props
    export let selectedProjectIndex: number | null;
    export let projects: Project[];
    export let onProjectClick: (index: number) => void;
    export let onArtistClick: (artist: string) => void;
</script>

<div class="w-full px-5 lg:p-10">
    <div class="flex flex-col space-y-2">
        <!-- Títulos siempre visibles -->
        <div class="flex justify-between">
            <h1 class="text-black text-sm font-medium font-clash leading-none tracking-tight">
                Welcome to the<br>artdao zine
            </h1>
            <h1 class="text-black text-sm font-medium font-clash leading-none tracking-tight">
                Featuring
            </h1>
        </div>
        
        <!-- Contenido del proyecto solo cuando está seleccionado -->
        {#if selectedProjectIndex !== null}
            <div class="flex justify-between">
                <div class="flex flex-col">
                    <!-- Título del proyecto -->
                    <button
                        class="text-black text-xs font-clash leading-none tracking-tight hover:text-[#949391] cursor-pointer transition-all"
                        on:click={() => selectedProjectIndex !== null && onProjectClick(selectedProjectIndex)}
                    >
                        {projects[selectedProjectIndex].title}
                    </button>
                </div>
                
                <!-- Título "Featuring" y artistas -->
                <div class="flex flex-col items-end gap-1.5">
                    {#each projects[selectedProjectIndex].artists as artist}
                        <button
                            class="rounded-[100px] inline-flex justify-center items-center leading-none tracking-tight text-xs font-robotoMono font-normal w-fit transition-all text-black hover:text-[#949391] cursor-pointer"
                            on:click={() => onArtistClick(artist)}
                        >
                            {artist}
                        </button>
                    {/each}
                </div>
            </div>
            
            <!-- Imagen del proyecto en full width -->
            <div class="w-full">
                <a href={projects[selectedProjectIndex].pagePath} rel="noopener noreferrer">
                    <img 
                        src={projects[selectedProjectIndex].thumbnailPath} 
                        alt={projects[selectedProjectIndex].title}
                        class="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                    />
                </a>
            </div>
        {/if}
    </div>
</div>
