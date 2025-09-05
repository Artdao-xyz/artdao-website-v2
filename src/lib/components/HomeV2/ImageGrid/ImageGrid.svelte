<script lang="ts">
    import { projects as projectsData, type Project } from '../../../../constants/projects';
    import StackedCards3D from '../../../components/StackedCards3D/StackedCards3D.svelte';
    import EnterZineButton from '../EnterZineButton/EnterZineButton.svelte';
    import { onMount } from 'svelte';
    import { expandedProjectIndex, toggleExpansion } from '../../../stores/expansionStore';
    import { buttonVisibility, updateButtonVisibility, clearAllButtons } from '../../../stores/buttonVisibilityStore';

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
    let isGridAnimating = false;

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
                        isGridAnimating = true;
                    },
                    onEnd: (animatingElementList) => {
                        console.log('Grid animation ended', animatingElementList);
                        isGridAnimating = false;
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
        // No reaccionar al hover si la grilla está animando
        if (isGridAnimating) {
            console.log('Hover blocked - grid is animating');
            return;
        }
        
        // Notificar al padre para que actualice el hover global
        onImageHover(originalIndex);
    }

    function handleMouseLeave() {
        // No reaccionar al hover si la grilla está animando
        if (isGridAnimating) {
            console.log('Hover leave blocked - grid is animating');
            return;
        }
        
        // Limpiar el hover
        onImageHover(null);
    }
    
    // Función para determinar si un proyecto está activo/expandido
    function isProjectActive(originalIndex: number) {
        return $expandedProjectIndex === originalIndex;
    }
    
    // Función para determinar si mostrar el botón Enter the zine
    function shouldShowEnterButton(originalIndex: number) {
        const isActive = isProjectActive(originalIndex);
        const isHovered = hoveredProjectIndexes.includes(originalIndex);
        const shouldShow = isActive && isHovered;
        
        // Debug detallado para el primer proyecto
        if (originalIndex === 0) {
            console.log(`shouldShowEnterButton(${originalIndex}):`, {
                isActive,
                isHovered,
                shouldShow,
                expandedProjectIndex: $expandedProjectIndex,
                hoveredProjectIndexes: [...hoveredProjectIndexes]
            });
        }
        
        return shouldShow;
    }
    
    // Actualizar visibilidad de botones cuando cambien los estados
    $: {
        // Actualizar botones para cada proyecto
        orderedProjects.forEach(({ originalIndex }) => {
            const isActive = isProjectActive(originalIndex);
            const isHovered = hoveredProjectIndexes.includes(originalIndex);
            const shouldShow = isActive && isHovered;
            
            // Actualizar inmediatamente sin delays
            updateButtonVisibility(originalIndex, shouldShow);
            
            // Debug para el primer proyecto
            if (originalIndex === 0) {
                console.log(`Button visibility for project ${originalIndex}:`, {
                    isActive,
                    isHovered,
                    shouldShow,
                    expandedProjectIndex: $expandedProjectIndex,
                    hoveredProjectIndexes,
                    isGridAnimating
                });
            }
        });
    }
</script>

<div 
    bind:this={gridContainer}
    class="hidden lg:grid grid-cols-3 flex-1 w-full h-full overflow-visible gap-6 pt-20 scrollbar-hide relative border-2 border-red-500"
>
    
    <!-- Proyectos reorganizados: seleccionados primero -->
    {#each orderedProjects as { project, originalIndex, isSelected }, i}
        <div 
            class="grid-item flex items-center justify-center w-full h-full cursor-pointer relative
                   {isProjectActive(originalIndex) ? 'grid-item-expanded' : 'grid-item-normal'} border-2 border-blue-500"
            role="button"
            tabindex="0"
            on:click={() => handleClick(originalIndex)}
            on:keydown={(e) => e.key === 'Enter' && handleClick(originalIndex)}
            on:mouseenter={() => handleMouseEnter(originalIndex)}
            on:mouseleave={handleMouseLeave}
        >
            <!-- Contenedor único para animate-css-grid -->
            <div class="grid-item-content flex items-center justify-center relative w-full h-full">
                <StackedCards3D
                    projects={project}
                    isSelected={isProjectActive(originalIndex)}
                    hasSelection={selectedProjectIndexes.length > 0}
                    isHovered={hoveredProjectIndexes.includes(originalIndex)}
                    hasHover={hoveredProjectIndexes.length > 0}
                    index={originalIndex}
                    onSelect={() => {}}
                    onHover={onImageHover}
                />

                <!-- Botón Enter the zine -->
                <EnterZineButton 
                    href={project.pagePath}
                    isVisible={$buttonVisibility[originalIndex] || false}
                />
            </div>
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
 