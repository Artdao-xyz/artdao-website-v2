<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { studioProjects } from '../../../data/Studio/studioProjects';
	import { activeFilters, hoveredProject } from '../../stores/studio';
	import { ArrowRightIcon } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	// Estado para la animación secuencial
	let animatedProjectIndex: number | null = null;
	let animatedProjectIndices: number[] = []; // Para animación de todos juntos
	let animationInterval: ReturnType<typeof setInterval> | null = null;
	let animationTimeouts: ReturnType<typeof setTimeout>[] = [];
	// Animación solo secuencial de izquierda a derecha
	
	// Función para verificar si un proyecto debe mostrarse
	function shouldShowProject(project: typeof studioProjects[0], filters: string[]): boolean {
		if (filters.length === 0) return true; // Si no hay filtros, mostrar todos
		return project.categories.some(category => filters.includes(category));
	}
	
	// Función para manejar hover - solo se activa desde la imagen
	function handleImageMouseEnter(projectTitle: string) {
		hoveredProject.set(projectTitle);
	}
	
	// Función para resetear el hover cuando el mouse sale del contenedor completo del proyecto
	function handleProjectMouseLeave() {
		// Solo resetear si realmente salimos del proyecto completo (imagen + overlays)
		hoveredProject.set(null);
	}
	
	// Función para resetear el hover cuando el mouse sale del contenedor completo
	function handleContainerMouseLeave() {
		// Siempre resetear cuando no hay hover sobre ningún proyecto
		hoveredProject.set(null);
	}
	
	// Reactive: verificar si un proyecto está animado (sin función, acceso directo en template)
	
</script>

{#if $hoveredProject === null && $activeFilters.length === 0}
<div transition:fly={{ duration: 500 }} class="hidden md:block fixed left-1/2 top-40 -translate-x-1/2 w-full max-w-4xl z-10 h-fit">
	<h1 class="relative text-white px-4 lg:px-0 w-full text-xl font-medium leading-6 font-clash text-center tracking-wide">
		Excavating the architectures of technology in search of spaces<br/> where topologies of potential take affective form
	</h1>
</div>
{/if}

<!-- Desktop version -->
<div 
	class="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 bottom-1/2 translate-y-1/2 items-center justify-center flex-nowrap md:-space-x-8 w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
	on:mouseleave={handleContainerMouseLeave}
	role="group"
>
	{#each studioProjects as project, index}
		{#if $activeFilters.length === 0 || shouldShowProject(project, $activeFilters)}
			{#if project.title === 'Future Art Ecosystems'}
				<div 
					class="group relative flex-shrink-0 flex-1 max-w-xs opacity-100 cursor-default transition-transform duration-700"
					role="button"
					aria-label={project.title}
					tabindex="0"
					on:mouseleave={handleProjectMouseLeave}
				>
					<!-- Área invisible que conecta la imagen con el header overlay (solo visible cuando hay hover) -->
					{#if $hoveredProject === project.title}
						<div class="hidden md:block absolute left-1/2 bottom-full -translate-x-1/2 w-[26rem] h-[150%] z-[5] pointer-events-auto"></div>
					{/if}
					
					<!-- Área invisible que conecta la imagen con el bottom overlay (solo visible cuando hay hover) -->
					{#if $hoveredProject === project.title}
						<div class="hidden md:block absolute left-1/2 top-full -translate-x-1/2 w-80 h-[150%] z-[5] pointer-events-auto"></div>
					{/if}

					<!-- Header overlay (desktop only, visible on hover) -->
					<div class="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[150%] w-[26rem] z-10 transition-opacity duration-300 pointer-events-none text-white {$hoveredProject === project.title ? 'opacity-100' : 'opacity-0'}">
						<div class="flex flex-col justify-center items-center gap-3.5">
							<h3 class="font-clash font-medium text-2xl tracking-tight">{project.title}</h3>
							{#if project.year}
								<div class="text-xs font-robotoMono leading-none">{project.year}</div>
							{/if}
							<div class="flex items-center">
								{#if project.link === undefined}
									<span class="text-xs font-robotoMono leading-none">under construction</span>
								{:else if project.link !== null}
									<a href={project.link} target="_blank" rel="noopener noreferrer" class="text-xs font-bold font-robotoMono underline pointer-events-auto">{project.link.replace('https://', '')}</a>
								{/if}
							</div>
						</div>
					</div>

					<!-- Bottom overlay: description + see more -->
					<div class="hidden md:block absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-[-150%] w-80 z-10 transition-opacity duration-300 pointer-events-none {$hoveredProject === project.title ? 'opacity-100' : 'opacity-0'}">
						<div class="text-white w-full space-y-6">
							<p class="text-xs text-center font-robotoMono font-normal tracking-wider max-w-80 mx-auto leading-4">{project.description}</p>
						</div>
					</div>
					
					<!-- Contenedor de imagen con hover solo en la imagen -->
					<div class="relative" role="button" aria-label={`Hover to view ${project.title} details`} tabindex="0" on:mouseenter={() => handleImageMouseEnter(project.title)}>
						<!-- Imagen OFF (base) -->
						<img 
							src={project.image} 
							alt={project.title}
							class="w-full h-auto object-contain transition-opacity duration-700 {($activeFilters.length > 0 && shouldShowProject(project, $activeFilters)) || $hoveredProject === project.title || ($hoveredProject === null && (animatedProjectIndex === index || animatedProjectIndices.includes(index))) ? 'opacity-0' : 'opacity-100'}"
						/>
						<!-- Imagen ON (overlay) -->
						<img 
							src={project.imageHover} 
							alt={project.title}
							class="w-full h-auto object-contain absolute inset-0 transition-opacity duration-700 {($activeFilters.length > 0 && shouldShowProject(project, $activeFilters)) || $hoveredProject === project.title || ($hoveredProject === null && (animatedProjectIndex === index || animatedProjectIndices.includes(index))) ? 'opacity-100' : 'opacity-0'}"
						/>
					</div>
				</div>
			{:else}
				<div 
					class="group relative flex-shrink-0 flex-1 max-w-72 opacity-100"
					role="group"
					on:mouseleave={handleProjectMouseLeave}
				>
					<!-- Área invisible que conecta la imagen con el header overlay (solo visible cuando hay hover) -->
					{#if $hoveredProject === project.title}
						<div class="hidden md:block absolute left-1/2 bottom-full -translate-x-1/2 w-[26rem] h-[150%] z-[5] pointer-events-auto"></div>
					{/if}
					
					<!-- Área invisible que conecta la imagen con el bottom overlay (solo visible cuando hay hover) -->
					{#if $hoveredProject === project.title}
						<div class="hidden md:block absolute left-1/2 top-full -translate-x-1/2 w-80 h-[150%] z-[5] pointer-events-auto"></div>
					{/if}

					<!-- Contenedor de imagen con hover solo en la imagen -->
					<a 
						href={project.route}
						class="block relative transition-all duration-700 hover:shadow-2xl"
					>
						<div class="relative" role="button" aria-label={`Hover to view ${project.title} details`} tabindex="0" on:mouseenter={() => handleImageMouseEnter(project.title)}>
							<!-- Imagen OFF (base) -->
							<img 
								src={project.image} 
								alt={project.title}
								class="w-full h-auto object-contain transition-opacity duration-700 {($activeFilters.length > 0 && shouldShowProject(project, $activeFilters)) || $hoveredProject === project.title || ($hoveredProject === null && (animatedProjectIndex === index || animatedProjectIndices.includes(index))) ? 'opacity-0' : 'opacity-100'}"
							/>
							<!-- Imagen ON (overlay) -->
							<img 
								src={project.imageHover} 
								alt={project.title}
								class="w-full h-auto object-contain absolute inset-0 transition-opacity duration-700 {($activeFilters.length > 0 && shouldShowProject(project, $activeFilters)) || $hoveredProject === project.title || ($hoveredProject === null && (animatedProjectIndex === index || animatedProjectIndices.includes(index))) ? 'opacity-100' : 'opacity-0'}"
							/>
						</div>
					</a>
					
					<!-- Header overlay (desktop only, visible on hover) -->
					<div class="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[150%] w-[26rem] z-10 transition-opacity duration-300 text-white {$hoveredProject === project.title ? 'opacity-100' : 'opacity-0'}">
						<div class="flex flex-col justify-center items-center gap-3.5">
							<h3 class="font-clash font-medium text-2xl">{project.title}</h3>
							{#if project.year}
								<div class="text-xs font-robotoMono leading-none">{project.year}</div>
							{/if}
							<div class="flex items-center">
								{#if project.link === undefined}
									<span class="text-xs font-robotoMono leading-none">under construction</span>
								{:else if project.link !== null}
									<a href={project.link} target="_blank" rel="noopener noreferrer" class="text-xs font-bold font-robotoMono underline" on:click|stopPropagation>{project.link.replace('https://', '')}</a>
								{/if}
							</div>
						</div>
					</div>

					<!-- Bottom overlay: description + see more -->
					<div class="hidden md:block absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-[-150%] w-80 z-10 transition-opacity duration-300 {$hoveredProject === project.title ? 'opacity-100' : 'opacity-0'}">
						<div class="text-white w-full space-y-6">
							<p class="text-xs text-center font-robotoMono font-normal tracking-wider max-w-80 mx-auto leading-4">{project.description}</p>
							<div class="flex items-center justify-center">
								<a href={project.route} target="_blank" class="flex items-center gap-2 hover:gap-4 transition-all duration-300 text-xs leading-none">
									<span class="transition-all duration-300 font-robotoMono font-bold">see more</span>
									<ArrowRightIcon class="transition-all duration-300 w-4 h-4" />
								</a>
							</div>
						</div>
					</div>
				</div>
			{/if}
		{:else}
			<a 
				href={project.route}
				class="group flex flex-col bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 flex-1 max-w-xs opacity-100 pointer-events-none"
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
<div 
	class="flex md:hidden flex-col gap-10 px-4"
	on:mouseleave={handleContainerMouseLeave}
	role="group"
>
	<h1 class="relative text-white px-4 lg:px-0 w-full text-lg font-medium leading-6 font-clash text-center tracking-wide">
		Excavating the architectures of technology in search of spaces where topologies of potential take affective form
	</h1>

	{#each studioProjects as project}
		{#if $activeFilters.length === 0 || shouldShowProject(project, $activeFilters)}
			{#if project.title === 'Future Art Ecosystems'}
				<div class="flex flex-row gap-4 items-center cursor-default">
					<!-- Image -->
					<!-- Info -->
					<div class="flex-1 text-white">
						<h3 class="font-robotoMono text-lg font-semibold mb-2">{project.title}</h3>
						{#if project.year}
							<p class="text-[10px] font-robotoMono text-gray-400 mb-1">{project.year}</p>
						{/if}
						<p class="text-[10px] md:text-xs font-robotoMono text-gray-300 mb-2">{project.description}</p>
					</div>

					<div class="flex-shrink-0">
						<img 
							src={project.imageHover} 
							alt={project.title}
							class="h-28 object-cover"
						/>
					</div>
				</div>
			{:else}
				<a 
					href={project.route}
					class="flex flex-row gap-4 items-center">
					<!-- Image -->
					<!-- Info -->
					<div class="flex-1 text-white space-y-1">
						<h3 class="font-robotoMono text-lg font-semibold">{project.title}</h3>
						{#if project.year}
							<p class="text-[10px] font-robotoMono text-gray-400">{project.year}</p>
						{/if}
						{#if project.link}
							<a 
								href={project.link} 
								target="_blank" 
								rel="noopener noreferrer"
								class="text-[10px] font-robotoMono underline"
								on:click|stopPropagation
							>
								{project.link}
							</a>
						{/if}
						<p class="text-[10px] md:text-xs font-robotoMono text-gray-300">{project.description}</p>
					</div>

					<div class="flex-shrink-0">
						<img 
							src={project.imageHover} 
							alt={project.title}
							class="h-28 object-cover"
						/>
					</div>
				</a>
			{/if}
		{/if}
	{/each}
</div>
