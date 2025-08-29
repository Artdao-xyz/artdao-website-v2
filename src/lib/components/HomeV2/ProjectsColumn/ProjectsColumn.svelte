<script lang="ts">
    import { projectsV2, type ProjectV2 } from '../../../../constants/projectsV2';

    // Props
    export let projects: string[];
    export let selectedProjectIndex: number | null;
    export let hoveredProjectIndex: number | null;
    export let onProjectClick: (index: number) => void;
    export let onProjectHover: (index: number | null) => void;
</script>

<div class="flex flex-col h-full w-full max-w-[180px] overflow-y-auto p-5 lg:p-10 scrollbar-hide">
    <h1 class="text-black text-sm font-medium font-clash leading-none tracking-tight mb-4">Welcome to the artdao zine</h1>
    {#each projects as project, i}
        <button
            class="rounded-[100px] lg:outline outline-[1.5px] text-left outline-offset-[-1.5px] inline-flex justify-center items-center leading-none tracking-tight text-xs font-robotoMono font-normal lg:px-2.5 py-1.5 w-fit transition-all text-[#949391] duration-300 {selectedProjectIndex === i ? 'lg:outline-none lg:bg-black text-black' : hoveredProjectIndex === i ? 'lg:outline-black lg:text-black' : 'outline-[#949391] lg:hover:outline-black lg:hover:text-black'}"
            on:click={() => onProjectClick(i)}
            on:mouseenter={() => onProjectHover(i)}
            on:mouseleave={() => onProjectHover(null)}>
            {project}
        </button>
    {/each}
</div>
