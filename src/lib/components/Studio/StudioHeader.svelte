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

<!-- Fixed height container to prevent layout shifts -->
<div class="md:h-48 flex items-center justify-center">
	{#if activeProject}
		<div in:fly={{ duration: 1000 }} class="text-white w-full max-w-96 mx-auto space-y-4">
			<div class="flex justify-between items-center">
				<h1 class="font-clash font-medium text-2xl">{activeProject.title}</h1>
				<div class="justify-start text-xs font-robotoMono leading-none">{activeProject.year}</div>
			</div>

			<p class="text-xs font-robotoMono w-full max-w-80 tracking-wider">{activeProject.description}</p>

			<div class="flex items-center group">
				<div class="flex-1">
					{#if activeProject.link === undefined}
						<span class="text-xs font-robotoMono leading-none">under construction</span>
					{:else if activeProject.link !== null}
						<a href={activeProject.link} target="_blank" class="hover:text-white/50 transition-all duration-300 justify-start text-xs font-bold font-robotoMono underline leading-none">{activeProject.link.replace('https://', '')}</a>
					{/if}
				</div>
				<a 
					href={activeProject.route}
					target="_blank"
					class="flex items-center gap-2 transition-all duration-300 text-xs font-bold font-robotoMono leading-none"
				>
					<span class="group-hover:-translate-x-1 transition-all duration-300">see more</span>
					<ArrowRightIcon class="group-hover:translate-x-1 transition-all duration-300 w-4 h-4" />
				</a>
			</div>
		</div>
	{:else}
		<h1 in:fly={{ duration: 1000 }} class="text-white p-4 lg:p-0 text-xl lg:text-2xl font-light leading-snug font-clash text-center tracking-wide">Excavating the architectures of<br/>technology in search of spaces<br/> where topologies of potential take<br/> affective form</h1>
	{/if}
</div>
