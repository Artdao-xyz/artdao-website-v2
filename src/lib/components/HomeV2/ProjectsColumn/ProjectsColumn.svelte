<script lang="ts">
    import { projects as projectsData, type Project } from '../../../../constants/projects';

    // Props
    export let projects: Project[];
    export let selectedProjectIndex: number | null;
    export let hoveredProjectIndex: number | null;
    export let onProjectClick: (index: number) => void;
    export let onProjectHover: (index: number | null) => void;
    export let variant: 'mobile' | 'desktop' = 'desktop';
    
    // Debug: ver qué está recibiendo
    console.log('ProjectsColumn received projects:', projects);
</script>

{#if variant === 'desktop'}
    <!-- Layout Desktop -->
    <div class="hidden lg:flex flex-col h-full w-full overflow-y-auto p-5 lg:p-10 scrollbar-hide">
        <h1 class="text-black text-sm font-medium font-clash leading-none tracking-tight mb-4">Welcome to the artdao zine</h1>
        {#each projects as project, i}
            <button
                class="rounded-[100px] outline outline-[1.5px] text-left outline-offset-[-1.5px] flex justify-center items-center leading-none tracking-tight text-xs font-robotoMono font-normal px-2.5 py-1.5 w-fit transition-all text-[#949391] duration-300 {selectedProjectIndex === i ? 'outline-none bg-black text-white' : hoveredProjectIndex === i ? 'outline-black text-black' : 'outline-[#949391] hover:outline-black hover:text-black'}"
                on:click={() => onProjectClick(i)}
                on:mouseenter={() => onProjectHover(i)}
                on:mouseleave={() => onProjectHover(null)}>
                {project.title}
            </button>
        {/each}
    </div>
{:else}
    <!-- Layout Mobile -->
    <div class="lg:hidden p-5 lg:p-10 overflow-y-auto">
        <div class="flex flex-col space-y-2">
            {#each projects as project, i}
                {#if selectedProjectIndex !== i}
                    <button
                        class="text-left leading-none tracking-tight text-xs font-robotoMono font-normal w-full transition-all text-[#949391] duration-300 hover:text-black"
                        on:click={() => onProjectClick(i)}
                        on:mouseenter={() => onProjectHover(i)}
                        on:mouseleave={() => onProjectHover(null)}
                    >
                        {project.title}
                    </button>
                {/if}
            {/each}
        </div>
    </div>
{/if}
