<script lang="ts">
    import { projects as projectsData, type Project } from '../../../../constants/projects';
    import StackedCards3D from '../../../components/StackedCards3D/StackedCards3D.svelte';

    // Props
    export let projects: Project[];
    export let selectedProjectIndexes: number[];

    export let hoveredProjectIndexes: number[];
    export let onImageHover: (index: number | null) => void;
    export let onImageSelect: (index: number) => void;
    export const imageButtons: HTMLAnchorElement[] = [];

    // Crear array reorganizado: seleccionados primero, luego no seleccionados
    $: orderedProjects = [
        ...selectedProjectIndexes.map(i => ({ project: projects[i], originalIndex: i, isSelected: true })),
        ...projects.map((project, i) => ({ project, originalIndex: i, isSelected: false }))
            .filter(item => !selectedProjectIndexes.includes(item.originalIndex))
    ];
</script>

<div class="hidden lg:grid flex-1 w-full h-full overflow-y-auto overflow-x-visible gap-6 pt-20 scrollbar-hide relative"
     class:grid-cols-2={projects.length <= 4}>
    
    <!-- Proyectos reorganizados: seleccionados primero -->
    {#each orderedProjects as { project, originalIndex, isSelected }, i}
        <div class="transition-all duration-700 ease-in-out delay-1000 flex items-center justify-center w-full h-full min-h-[300px]"
             class:col-span-2={isSelected && projects.length <= 4}
             class:col-span-1={!isSelected}>
            <StackedCards3D 
                projects={project} 
                isSelected={isSelected} 
                hasSelection={selectedProjectIndexes.length > 0} 
                isHovered={hoveredProjectIndexes.includes(originalIndex)} 
                hasHover={hoveredProjectIndexes.length > 0} 
                onSelect={onImageSelect} 
                onHover={onImageHover} 
                index={originalIndex} />
        </div>
    {/each}

</div>
 