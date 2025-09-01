<script lang="ts">
    import { projects as projectsData, type Project } from '../../../../constants/projects';

    // Props
    export let projects: Project[];
    export let selectedProjectIndex: number | null;
    export let hoveredProjectIndex: number | null;
    export let onImageHover: (index: number | null) => void;
    export let imageButtons: HTMLAnchorElement[];
</script>

<div class="hidden lg:grid grid-cols-3 flex-1 w-full h-full overflow-y-auto gap-2 pt-10 scrollbar-hide">
    {#each Array(projects.length) as _, i}
        <a href={projects[i].pagePath} rel="noopener noreferrer"
            class="aspect-square transition-all duration-300 {hoveredProjectIndex === i ? (selectedProjectIndex === i ? 'opacity-100 scale-105' : 'opacity-100 scale-100') : selectedProjectIndex === i ? 'opacity-100 scale-105' : selectedProjectIndex !== null ? 'opacity-40 scale-100' : 'opacity-100'} hover:opacity-100 hover:scale-105"
            bind:this={imageButtons[i]}
            on:mouseenter={() => onImageHover(i)}
            on:mouseleave={() => onImageHover(null)}>
            <img src={projects[i].thumbnailPath} alt="Zine Cover" class="w-full h-full object-contain transition-all duration-300" />
        </a>
    {/each}
</div>
 