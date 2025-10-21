<script lang="ts">
	import { studioProjects } from '../../../data/Studio/studioProjects';
	import { activeFilters, hoveredProject } from '../../stores/studio';
	
	// Función para verificar si un proyecto debe mostrarse
	function shouldShowProject(project: typeof studioProjects[0], filters: string[]): boolean {
		if (filters.length === 0) return true; // Si no hay filtros, mostrar todos
		return project.categories.some(category => filters.includes(category));
	}
	
	// Función para manejar hover
	function handleMouseEnter(projectTitle: string) {
		hoveredProject.set(projectTitle);
	}
	
	function handleMouseLeave() {
		// No hacemos nada, mantenemos el hover persistente
	}
</script>

<!-- Desktop version -->
<div class="hidden md:flex items-center justify-center flex-nowrap px-10">
	{#each studioProjects as project}
		{#if $activeFilters.length === 0 || shouldShowProject(project, $activeFilters)}
			<a 
				href={project.route}
				class="group relative hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl flex-shrink-0 flex-1 max-w-xs opacity-100"
				on:mouseenter={() => handleMouseEnter(project.title)}
				on:mouseleave={handleMouseLeave}
			>
				<!-- Imagen OFF (base) -->
				<img 
					src={project.image} 
					alt={project.title}
					class="w-full h-auto object-contain transition-opacity duration-500 {($activeFilters.length > 0 && shouldShowProject(project, $activeFilters)) || $hoveredProject === project.title ? 'opacity-0' : 'opacity-100'}"
				/>
				<!-- Imagen ON (overlay) -->
				<img 
					src={project.imageHover} 
					alt={project.title}
					class="w-full h-auto object-contain absolute inset-0 transition-opacity duration-500 {($activeFilters.length > 0 && shouldShowProject(project, $activeFilters)) || $hoveredProject === project.title ? 'opacity-100' : 'opacity-0'}"
				/>
			</a>
		{:else}
			<a 
				href={project.route}
				class="group flex flex-col bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 flex-1 max-w-xs opacity-30 pointer-events-none"
			>
				<img 
					src={project.image} 
					alt={project.title}
					class="w-full h-auto object-contain"
				/>
			</a>
		{/if}
	{/each}
</div>

<!-- Mobile version -->
<div class="flex md:hidden flex-col gap-2 px-4">
	{#each studioProjects as project}
		{#if $activeFilters.length === 0 || shouldShowProject(project, $activeFilters)}
			<a 
				href={project.route}
				class="flex flex-row gap-4 items-center">
				<!-- Image -->
				<div class="flex-shrink-0">
					<img 
						src={project.imageHover} 
						alt={project.title}
						class="h-36 object-cover"
					/>
				</div>
				<!-- Info -->
				<div class="flex-1 text-white">
					<h3 class="font-geist text-lg font-semibold mb-2">{project.title}</h3>
					<p class="text-xs font-geistMono text-gray-300 mb-2">{project.description}</p>
				</div>
			</a>
		{/if}
	{/each}
</div>
