<script lang="ts">
    import { projects as projectsData, type Project } from '../../../../constants/projects';
    import StackedCards3D from '../../../components/StackedCards3D/StackedCards3D.svelte';
    import { onMount } from 'svelte';
    import { expandedProjectIndex, toggleExpansion } from '../../../stores/expansionStore';

    // Props
    export let projects: Project[];
    export let selectedProjectIndexes: number[];

    export let hoveredProjectIndexes: number[];
    export let onImageHover: (index: number | null) => void;
    export const onImageSelect: (index: number) => void = () => {};
    export const imageButtons: HTMLAnchorElement[] = [];

    // Mantener el orden original de los proyectos
    $: orderedProjects = projects.map((project, i) => ({ 
        project, 
        originalIndex: i, 
        isSelected: selectedProjectIndexes.includes(i) 
    }));

    let gridContainer: HTMLDivElement;
    let wrapGridFunction: any = null;

    onMount(async () => {
        if (gridContainer) {
            try {
                // Importación dinámica para evitar problemas con Vite
                const { wrapGrid } = await import('animate-css-grid');
                wrapGridFunction = wrapGrid;
                
                wrapGrid(gridContainer, {
                    stagger: 0,
                    duration: 300, // Animación más rápida para reducir desplazamiento
                    easing: 'easeIn',
                    onStart: (animatingElementList) => {
                        console.log('Grid animation started', animatingElementList);
                    },
                    onEnd: (animatingElementList) => {
                        console.log('Grid animation ended', animatingElementList);
                    }
                });
            } catch (error) {
                console.error('Error loading animate-css-grid:', error);
            }
        }
    });

    // Función para manejar click
    function handleClick(originalIndex: number) {
        // Solo usar el store para toggle de expansión
        toggleExpansion(originalIndex);
    }

    // Funciones para manejar hover de las cartas
    function handleMouseEnter(originalIndex: number) {
        // Notificar al padre para que actualice el hover global
        onImageHover(originalIndex);
    }

    function handleMouseLeave() {
        // Limpiar el hover
        onImageHover(null);
    }
</script>

<div 
    bind:this={gridContainer}
    class="hidden lg:grid grid-cols-3 flex-1 w-full h-full overflow-visible gap-6 pt-20 scrollbar-hide relative"
>
    
    <!-- Proyectos reorganizados: seleccionados primero -->
    {#each orderedProjects as { project, originalIndex, isSelected }, i}
        {@const isActive = $expandedProjectIndex === originalIndex}
        <div 
            class="grid-item flex items-center justify-center w-full h-full cursor-pointer
                   {isActive ? 'grid-item-expanded' : 'grid-item-normal'}"
            role="button"
            tabindex="0"
            on:click={() => handleClick(originalIndex)}
            on:keydown={(e) => e.key === 'Enter' && handleClick(originalIndex)}
            on:mouseenter={() => handleMouseEnter(originalIndex)}
            on:mouseleave={handleMouseLeave}
        >
        <!-- <img 
            src={project.thumbnailPath[0]} 
            alt={project.title}
            class="w-full h-full object-contain rounded-lg transition-all duration-400 ease-linear"
        > -->
                         <StackedCards3D
                 projects={project}
                 isSelected={$expandedProjectIndex === originalIndex}
                 hasSelection={selectedProjectIndexes.length > 0}
                 isHovered={hoveredProjectIndexes.includes(originalIndex)}
                 hasHover={hoveredProjectIndexes.length > 0}
                 index={originalIndex}
                 onSelect={() => {}}
                 onHover={onImageHover}
             />

        </div>
    {/each}

</div>

<style>
    /* Clases para animate-css-grid */
    .grid-item-normal {
        grid-column: span 1;
        grid-row: span 1;
    }
    
    .grid-item-expanded {
        grid-column: span 2;
        grid-row: span 2;
        z-index: 10;
    }
    
</style>
 