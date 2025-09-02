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

<div class="hidden lg:grid grid-cols-3 flex-1 w-full h-full overflow-y-auto gap-2 pt-10 scrollbar-hide" style="overflow: visible;">
    {#each Array(projects.length) as _, i}
            <StackedCards3D projects={projects[i]} isSelected={selectedProjectIndexes.includes(i)} hasSelection={selectedProjectIndexes.length > 0} isHovered={hoveredProjectIndexes.includes(i)} hasHover={hoveredProjectIndexes.length > 0} onSelect={onImageSelect} onHover={onImageHover} index={i} />
    {/each}
</div>
 