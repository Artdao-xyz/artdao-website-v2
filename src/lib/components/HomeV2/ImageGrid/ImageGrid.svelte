<script lang="ts">
    import { projects as projectsData, type Project } from '../../../../constants/projects';
    import StackedCards3D from '../../../components/StackedCards3D/StackedCards3D.svelte';

    // Props
    export let projects: Project[];
    export let selectedProjectIndexes: number[];

    export let hoveredProjectIndexes: number[];
    export let onImageHover: (index: number | null) => void;
    export let onImageSelect: (index: number) => void;
    export let imageButtons: HTMLAnchorElement[];
</script>

<div class="hidden lg:grid grid-cols-3 flex-1 w-full h-full overflow-y-auto overflow-x-visible gap-6 pt-20 scrollbar-hide relative">
    
    <!-- Todos los proyectos en orden, con clases dinámicas -->
    {#each Array(projects.length) as _, i}
        {@const isSelected = selectedProjectIndexes.includes(i)}
        <div class="transition-all duration-700 ease-in-out delay-1000 flex items-center justify-center"
             class:col-span-3={isSelected}
             class:col-span-1={!isSelected}>
            <StackedCards3D 
                projects={projects[i]} 
                isSelected={isSelected} 
                hasSelection={selectedProjectIndexes.length > 0} 
                isHovered={hoveredProjectIndexes.includes(i)} 
                hasHover={hoveredProjectIndexes.length > 0} 
                onSelect={onImageSelect} 
                onHover={onImageHover} 
                index={i} />
        </div>
    {/each}

</div>
 