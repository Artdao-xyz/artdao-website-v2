<script lang="ts">
    import { projectsV2, type ProjectV2 } from '../../../../constants/projectsV2';
    import { fade } from 'svelte/transition';

    // Props
    export let artists: string[];
    export let selectedProjectIndex: number | null;
    export let hoveredProjectIndex: number | null;
    export let onArtistClick: (artist: string) => void;
    export let onArtistHover: (artist: string) => void;
    export let variant: 'mobile' | 'desktop' = 'desktop';
    
    // Ordenar artistas: en mobile, los seleccionados van primero
    $: sortedArtists = selectedProjectIndex !== null ? 
        [
            // Primero los artistas del proyecto seleccionado
            ...artists.filter(artist => 
                projectsV2[selectedProjectIndex]?.artists.includes(artist)
            ),
            // Luego el resto de artistas
            ...artists.filter(artist => 
                !projectsV2[selectedProjectIndex]?.artists.includes(artist)
            )
        ] : 
        artists; // En desktop o sin selección, orden original
</script>

{#if variant === 'desktop'}
    <!-- Layout Desktop -->
    <div class="hidden lg:flex flex-col h-full w-full overflow-y-auto p-5 lg:p-10 scrollbar-hide">
        <h1 class="text-black text-sm font-medium font-clash leading-none tracking-tight mb-4 self-end">Featuring</h1>
        {#key selectedProjectIndex}
            {#each sortedArtists as artist, i (artist)}
                <button 
                    class="rounded-[100px] outline outline-[1.5px] text-right outline-offset-[-1.5px] inline-flex self-end leading-none tracking-tight text-xs font-robotoMono font-normal px-2.5 py-1.5 w-fit transition-all duration-300 text-[#949391] {selectedProjectIndex !== null && projectsV2[selectedProjectIndex]?.artists.includes(artist) ? 'outline-none bg-black text-white' : hoveredProjectIndex !== null && projectsV2[hoveredProjectIndex]?.artists.includes(artist) ? 'outline-black text-black' : 'outline-[#949391] hover:outline-black hover:text-black'}"
                    on:click={() => onArtistClick(artist)}
                    on:mouseenter={() => onArtistHover(artist)}
                    on:mouseleave={() => onArtistHover('')}
                    transition:fade={{ duration: 300, delay: i * 50 }}>
                    {artist}
                </button>
            {/each}
            
            <!-- Línea divisoria -->
            {#if selectedProjectIndex !== null}
                <div class="w-full my-6 flex justify-center" transition:fade={{ duration: 300 }}>
                    <div class="w-full h-px bg-gray-300"></div>
                </div>
            {/if}
            
            <!-- Imagen del proyecto seleccionado (solo en mobile) -->
            {#if selectedProjectIndex !== null}
                <div class="w-full mb-8 flex justify-center lg:hidden" transition:fade={{ duration: 400 }}>
                    <div class="w-full max-w-2xl">
                        <img 
                            src={projectsV2[selectedProjectIndex].thumbnailPath} 
                            alt={`${projectsV2[selectedProjectIndex].title} thumbnail`}
                            class="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                
                <!-- Línea divisoria después de la imagen (solo en mobile) -->
                <div class="w-full mb-6 flex justify-center lg:hidden" transition:fade={{ duration: 300 }}>
                    <div class="w-full h-px bg-gray-300"></div>
                </div>
            {/if}
        {/key}
    </div>
{:else}
    <!-- Layout Mobile -->
    <div class="lg:hidden p-5 lg:p-10 overflow-y-auto">
        <div class="space-y-2">
            {#each artists as artist}
                {#if selectedProjectIndex === null || !projectsV2[selectedProjectIndex].artists.includes(artist)}
                    <button
                        class="text-right flex justify-end leading-none tracking-tight text-xs font-robotoMono font-normal w-full transition-all duration-300 text-[#949391] hover:text-black"
                        on:click={() => onArtistClick(artist)}
                        on:mouseenter={() => onArtistHover(artist)}
                        on:mouseleave={() => onArtistHover('')}
                    >
                        {artist}
                    </button>
                {/if}
            {/each}
        </div>
    </div>
{/if}
