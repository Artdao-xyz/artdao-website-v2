<script lang="ts">
    import { projects as projectsData, type Project } from '../../../../constants/projects';
    import StackedCards3D from '../../../components/StackedCards3D/StackedCards3D.svelte';
    import { onMount } from 'svelte';
    import { expandedProjectIndex, toggleExpansion } from '../../../stores/expansionStore';
    import { clearAllButtons } from '../../../stores/buttonVisibilityStore';

    // Props
    export let projects: Project[];
    export let selectedProjectIndexes: number[];

    export let hoveredProjectIndexes: number[];
    export let onImageHover: (index: number | null) => void;

    // Mantener el orden original de los proyectos
    $: orderedProjects = projects.map((project, i) => ({ 
        project, 
        originalIndex: i, 
        isSelected: selectedProjectIndexes.includes(i)
    }));

    let gridContainer: HTMLDivElement;
    let wrapGridFunction: any = null;
    let isGridAnimating = false;
    let hoverBlocked = false;

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
                        // console.log('Grid animation started', animatingElementList);
                        isGridAnimating = true;
                        hoverBlocked = true;
                        // Limpiar hover actual inmediatamente
                        onImageHover(null);
                    },
                    onEnd: (animatingElementList) => {
                        // console.log('Grid animation ended', animatingElementList);
                        isGridAnimating = false;
                        // Rehabilitar después de un delay más corto
                        setTimeout(() => {
                            hoverBlocked = false;
                        }, 50);
                    }
                });
            } catch (error) {
                console.error('Error loading animate-css-grid:', error);
            }
        }
    });

    // Función para manejar click
    function handleClick(originalIndex: number) {
        // Bloquear hover inmediatamente al hacer click
        hoverBlocked = true;
        // Limpiar hover actual
        onImageHover(null);
        // Solo usar el store para toggle de expansión
        toggleExpansion(originalIndex);
        
        // Rehabilitar hover después de un delay más corto
        setTimeout(() => {
            hoverBlocked = false;
            // Forzar hover en el elemento clickeado si está expandido
            if (isProjectActive(originalIndex)) {
                onImageHover(originalIndex);
            }
        }, 50);
    }

    // Funciones para manejar hover de las cartas
    function handleMouseEnter(originalIndex: number) {
        // No reaccionar al hover si está bloqueado o animando
        if (hoverBlocked || isGridAnimating) {
            return;
        }
        
        // Notificar al padre para que actualice el hover global
        onImageHover(originalIndex);
    }

    function handleMouseLeave() {
        // No reaccionar al hover si está bloqueado o animando
        if (hoverBlocked || isGridAnimating) {
            return;
        }
        
        // Limpiar el hover
        onImageHover(null);
        
        // Limpiar visibilidad de todos los botones
        clearAllButtons();
    }

    // Función para manejar mouse move - más suave
    function handleMouseMove(originalIndex: number) {
        // Solo actualizar si no está animando y no está bloqueado
        if (!hoverBlocked && !isGridAnimating) {
            onImageHover(originalIndex);
        }
    }
    
    
    // Función para determinar si un proyecto está activo/expandido
    function isProjectActive(originalIndex: number) {
        return $expandedProjectIndex === originalIndex;
    }
    
</script>

<div 
    bind:this={gridContainer}
    class="hidden lg:grid grid-cols-3 flex-1 w-full overflow-y-auto overflow-x-hidden gap-6 py-20 scrollbar-hide relative"
    style="max-height: calc(100dvh); grid-auto-rows: minmax(0, calc((100dvh - 10rem - 3rem) / 3));"
>
    
    <!-- Proyectos reorganizados: seleccionados primero -->
    {#each orderedProjects as { project, originalIndex, isSelected }, i}
        <div 
            class="grid-item  w-full h-full cursor-pointer relative
                    {isProjectActive(originalIndex) ? 'grid-item-expanded' : 'grid-item-normal'}"
            role="button"
            tabindex="0"
            on:click={() => handleClick(originalIndex)}
            on:keydown={(e) => e.key === 'Enter' && handleClick(originalIndex)}
            on:mouseenter={() => handleMouseEnter(originalIndex)}
            on:mouseleave={handleMouseLeave}
            on:mousemove={() => handleMouseMove(originalIndex)}
        >
                <StackedCards3D
                    projects={project}
                    isSelected={isProjectActive(originalIndex)}
                    hasSelection={selectedProjectIndexes.length > 0}
                    isHovered={hoveredProjectIndexes.includes(originalIndex)}
                    index={originalIndex}
                    isAnimating={isGridAnimating}
                    showEnterButton={isProjectActive(originalIndex) && hoveredProjectIndexes.includes(originalIndex)}
                    onSelect={() => {}}
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
 