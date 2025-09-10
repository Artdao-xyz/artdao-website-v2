<script lang="ts">
    import { projects as projectsData, type Project } from '../../../../constants/projects';
    import { fade } from 'svelte/transition';

    // Props
    export let artists: string[];
    export let selectedProjectIndexes: number[];
    export let selectedArtists: string[];
    export let highlightedArtists: string[];
    export let hoveredProjectIndex: number | null;
    export let onArtistClick: (artist: string) => void;
    export let onArtistHover: (artist: string) => void;
    export let variant: 'mobile' | 'desktop' = 'desktop';
    
    // Mantener artistas en su orden original (sin reordenar)
    $: sortedArtists = artists; // Sin selección, orden original
</script>

{#if variant === 'desktop'}
    <!-- Layout Desktop -->
    <div class="hidden lg:flex flex-col h-full w-full overflow-y-auto p-5 lg:p-10 scrollbar-hide">
        <h1 class="text-black text-sm font-medium font-clash leading-none tracking-wide mb-4 self-end">Featuring</h1>
        {#key selectedProjectIndexes}
            {#each sortedArtists as artist, i (artist)}
                <button 
                    class="rounded-[100px] outline outline-[1.5px] text-right outline-offset-[-1.5px] inline-flex self-end leading-none tracking-tight text-xs font-robotoMono font-normal px-2.5 py-1.5 w-fit transition-all duration-300 text-[#949391] {selectedArtists.includes(artist) ? 'outline-none bg-black text-white' : highlightedArtists.includes(artist) ? 'outline-black text-black' : hoveredProjectIndex !== null && projectsData[hoveredProjectIndex]?.artists.includes(artist) ? 'outline-black text-black' : 'outline-[#949391] hover:outline-black hover:text-black'}"
                    on:click={() => onArtistClick(artist)}
                    on:mouseenter={() => onArtistHover(artist)}
                    on:mouseleave={() => onArtistHover('')}
                    transition:fade={{ duration: 300, delay: i * 50 }}>
                    {artist}
                </button>
            {/each}
            
            <!-- Imagen del proyecto seleccionado (solo en mobile) -->
            {#if selectedProjectIndexes.length > 0}
                <div class="w-full mb-8 flex justify-center lg:hidden" transition:fade={{ duration: 400 }}>
                    <div class="w-full max-w-2xl">
                        <a href={projectsData[selectedProjectIndexes[0]].pagePath} rel="noopener noreferrer">
                            <img 
                                src={projectsData[selectedProjectIndexes[0]].thumbnailPathMobile} 
                                alt={`${projectsData[selectedProjectIndexes[0]].title} thumbnail`}
                                class="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                            />
                        </a>
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
        <div class="space-y-4">
            {#each artists as artist}
                {#if highlightedArtists.length === 0 || !highlightedArtists.includes(artist)}
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
