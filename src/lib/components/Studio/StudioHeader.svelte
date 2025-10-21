<script lang="ts">
	import { studioProjects } from '../../../data/Studio/studioProjects';
	import { activeFilters, hoveredProject } from '../../stores/studio';
	import { ArrowRightIcon } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	// Función para verificar si un proyecto debe mostrarse
	function shouldShowProject(project: typeof studioProjects[0], filters: string[]): boolean {
		if (filters.length === 0) return true;
		return project.categories.some(category => filters.includes(category));
	}
	
	$: activeProject = (() => {
		// Si hay filtros activos, buscar el primer proyecto que coincida
		if ($activeFilters.length > 0) {
			const filteredProject = studioProjects.find(project => shouldShowProject(project, $activeFilters));
			if (filteredProject) return filteredProject;
		}
		
		// Solo si NO hay filtros activos, mostrar el proyecto en hover
		if ($activeFilters.length === 0 && $hoveredProject) {
			return studioProjects.find(project => project.title === $hoveredProject);
		}
		
		return null;
	})();

</script>

{#if activeProject}
	<div in:fly={{ duration: 1000 }} class="text-white w-full max-w-[800px] mx-auto space-y-4 hidden md:block">
                <div class="flex justify-between items-center">
                        <h1 class="font-geist text-4xl font-semibold">{activeProject.title}</h1>
                        <div class="justify-start text-xs font-normal font-geistMono leading-none">2024 - Present</div>
                </div>

		<p class="text-xs font-geistMono">{activeProject.description}</p>

                <div class="flex justify-between items-center group">
                        <a href="https://turtle.xyz" target="_blank" class="hover:text-white/50 transition-all duration-300 justify-start text-xs font-normal font-geistMono underline leading-none">Turtle.xyz</a>
                        <a 
			href={activeProject.route}
			class="flex items-center gap-2 transition-all duration-300 text-xs font-bold font-geistMono leading-none"
                        >
                                <span class="group-hover:-translate-x-1 transition-all duration-300">see more</span>
                                <ArrowRightIcon class="group-hover:translate-x-1 transition-all duration-300 w-4 h-4" />
                        </a>
                </div>
	</div>
{:else}
	<h1 in:fly={{ duration: 1000 }} class="text-white p-4 lg:p-0 text-xl lg:text-2xl font-light leading-snug font-clash text-center tracking-wide block">Excavating the architectures of<br/>technology in search of spaces<br/> where topologies of potential take<br/> affective form</h1>
{/if}
