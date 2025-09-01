<script lang="ts">
    import { projectsV2, type ProjectV2 } from '../../../../constants/projectsV2';

    // Props
    export let selectedProjectIndex: number | null;
    export let projects: string[];
    export let onProjectClick: (index: number) => void;
    export let onArtistClick: (artist: string) => void;
</script>

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
                        on:click={() => selectedProjectIndex !== null && onProjectClick(selectedProjectIndex)}
                    >
                        {projects[selectedProjectIndex]}
                    </button>
                </div>
                
                <!-- Título "Featuring" y artistas -->
                <div class="flex flex-col items-end gap-1.5">
                    {#each projectsV2[selectedProjectIndex].artists as artist}
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
                <img 
                    src={projectsV2[selectedProjectIndex].thumbnailPath} 
                    alt={projects[selectedProjectIndex]}
                    class="w-full h-auto object-cover rounded-lg"
                />
            </div>
        </div>
    </div>
{/if}
