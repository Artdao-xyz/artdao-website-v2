<script lang="ts">
    import { type Project } from '../../../../constants/projects';

    // Props
    export let projects: Project[];
    export let selectedProjectIndexes: number[];

    export let hoveredProjectIndexes: number[];
    export let onProjectClick: (index: number) => void;
    export let onProjectHover: (index: number | null) => void;
    export let variant: 'mobile' | 'desktop' = 'desktop';
    
    // Debug: ver qué está recibiendo
    // console.log('ProjectsColumn received projects:', projects);
    
    // Ordenar proyectos: solo seleccionados primero, hover no cambia posición
    $: sortedProjects =  projects.map((project, index) => ({ project, index })); // Sin selección, orden original
</script>

{#if variant === 'desktop'}
    <!-- Layout Desktop -->
    <div class="hidden lg:flex flex-col h-full w-full overflow-y-auto p-5 lg:p-10 scrollbar-hide">
        <h1 class="text-black text-sm font-medium font-clash leading-none tracking-wide mb-4">Welcome to the <br class="lg:hidden">Artdao zine</h1>
        {#each sortedProjects as { project, index }}
            <button
                class="rounded-[100px] outline outline-[1.5px] text-left outline-offset-[-1.5px] flex justify-center items-center leading-none tracking-tight text-xs font-robotoMono font-normal px-2.5 py-1.5 w-fit transition-all text-[#949391] duration-300 {selectedProjectIndexes.includes(index) ? 'outline-none bg-black text-white' : hoveredProjectIndexes.includes(index) ? 'outline-black text-black' : 'outline-[#949391] hover:outline-black hover:text-black'}"
                on:click={() => onProjectClick(index)}
                on:mouseenter={() => onProjectHover(index)}
                on:mouseleave={() => onProjectHover(null)}>
                {project.title}
            </button>
        {/each}
    </div>
{:else}
    <!-- Layout Mobile -->
    <div class="lg:hidden p-5 lg:p-10 overflow-y-auto border-r border-black border-dashed">
        <div class="flex flex-col space-y-4">
            {#each sortedProjects as { project, index }}
                {#if !selectedProjectIndexes.includes(index)}
                    <button
                        class="text-left leading-none tracking-tight text-xs font-robotoMono font-normal w-full transition-all text-[#949391] duration-300 hover:text-black"
                        on:click={() => onProjectClick(index)}
                        on:mouseenter={() => onProjectHover(index)}
                        on:mouseleave={() => onProjectHover(null)}
                    >
                        {project.title}
                    </button>
                {/if}
            {/each}
        </div>
    </div>
{/if}
