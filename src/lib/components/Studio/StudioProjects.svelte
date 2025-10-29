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
	let animationMode: 'sequential' | 'all-together' = 'sequential'; // Alterna entre secuencial y todos juntos
	
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
		// No hacemos nada, mantenemos el hover persistente cuando pasas entre proyectos
	}
	
	// Función para resetear el hover cuando el mouse sale del contenedor completo
	function handleContainerMouseLeave() {
		// Siempre resetear cuando no hay hover sobre ningún proyecto
		hoveredProject.set(null);
	}
	
	// Reactive: verificar si un proyecto está animado (sin función, acceso directo en template)
	
	// Función para limpiar los timeouts de animación
	function clearAnimationTimeouts() {
		animationTimeouts.forEach(timeout => clearTimeout(timeout));
		animationTimeouts = [];
	}
	
	// Función para ejecutar la secuencia de animación
	function runAnimationSequence() {
		console.log(`🔄 Ejecutando secuencia de animación: ${animationMode}`);
		
		// Limpiar cualquier animación anterior
		clearAnimationTimeouts();
		animatedProjectIndex = null;
		animatedProjectIndices = [];
		
		// Calcular los índices reales de los proyectos visibles
		const visibleIndices: number[] = [];
		studioProjects.forEach((project, index) => {
			if ($activeFilters.length === 0 || shouldShowProject(project, $activeFilters)) {
				visibleIndices.push(index);
			}
		});
		
		console.log('📋 Índices visibles:', visibleIndices);
		
		if (animationMode === 'all-together') {
			// Modo: Todos juntos (sin delay)
			const allTogetherDelay = 0;
			
			// Encender todos al mismo tiempo
			const turnOnTimeout = setTimeout(async () => {
				await tick();
				if ($hoveredProject === null) {
					console.log('✨ Encendiendo todos los proyectos juntos');
					animatedProjectIndices = [...visibleIndices]; // Asignar nuevo array para reactividad
				}
			}, allTogetherDelay);
			animationTimeouts.push(turnOnTimeout);
			
			// Apagar todos después de 600ms
			const turnOffTimeout = setTimeout(async () => {
				await tick();
				if ($hoveredProject === null) {
					console.log('💤 Apagando todos los proyectos');
					animatedProjectIndices = []; // Asignar nuevo array vacío para reactividad
				}
			}, allTogetherDelay + 600);
			animationTimeouts.push(turnOffTimeout);
		} else {
			// Modo: Secuencial (uno por uno con delay)
			visibleIndices.forEach((realIndex, sequenceIndex) => {
				const delay = sequenceIndex * 500; // 300ms entre cada proyecto
				
				// Encender
				const turnOnTimeout = setTimeout(async () => {
					await tick();
					if ($hoveredProject === null) {
						console.log(`✨ Encendiendo proyecto ${realIndex}`);
						animatedProjectIndex = realIndex;
					} else {
						console.log('⏸️ Hover activo, saltando animación');
					}
				}, delay);
				animationTimeouts.push(turnOnTimeout);
				
				// Apagar después de 600ms
				const turnOffTimeout = setTimeout(async () => {
					await tick();
					if (animatedProjectIndex === realIndex && $hoveredProject === null) {
						console.log(`💤 Apagando proyecto ${realIndex}`);
						animatedProjectIndex = null;
					}
				}, delay + 600);
				animationTimeouts.push(turnOffTimeout);
			});
		}
		
		// Alternar el modo para la próxima vez
		animationMode = animationMode === 'sequential' ? 'all-together' : 'sequential';
	}
	
	onMount(() => {
		// Iniciar la animación inmediatamente
		runAnimationSequence();
		
		// Configurar el intervalo para repetir cada 5 segundos
		animationInterval = setInterval(() => {
			runAnimationSequence();
		}, 5000);

		return () => {
			if (animationInterval) {
				clearInterval(animationInterval);
			}
			clearAnimationTimeouts();
		};
	});
</script>

<!-- Desktop version -->
<div 
	class="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 bottom-1/3 translate-y-1/3 items-center justify-center flex-nowrap md:-space-x-2 w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
	on:mouseleave={handleContainerMouseLeave}
	role="group"
>
	{#if $hoveredProject === null && $activeFilters.length === 0}
		<div transition:fly={{ duration: 500 }} class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[150%] w-full max-w-lg z-10 ">
			<h1 class="text-white px-4 lg:px-0 text-xl lg:text-2xl font-light leading-snug font-clash text-center tracking-wide max-w-xl">
				Excavating the architectures of<br/>technology in search of spaces<br/> where topologies of potential take<br/> affective form
			</h1>
		</div>
	{/if}
	{#each studioProjects as project, index}
		{#if $activeFilters.length === 0 || shouldShowProject(project, $activeFilters)}
			{#if project.title === 'Future Art Ecosystems'}
				<div 
					class="group relative flex-shrink-0 flex-1 max-w-xs opacity-100 cursor-default transition-transform duration-700 {($hoveredProject === null && (animatedProjectIndex === index || animatedProjectIndices.includes(index))) ? 'scale-105' : 'scale-100'}"
					role="button"
					aria-label={project.title}
					tabindex="0"
					on:mouseenter={() => handleMouseEnter(project.title)}
					on:mouseleave={handleMouseLeave}
				>
					<!-- Header overlay (desktop only, visible on hover) -->
					<div class="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[120%] w-[24rem] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
						<div class="text-white w-full space-y-3">
							<div class="flex justify-between items-center">
								<h3 class="font-clash font-medium text-2xl tracking-tight">{project.title}</h3>
								{#if project.year}
									<div class="text-xs font-robotoMono leading-none">{project.year}</div>
								{/if}
							</div>

							<p class="text-xs font-robotoMono tracking-wider max-w-80">{project.description}</p>

							<div class="flex items-center group/cta">
								<div class="flex-1">
									{#if project.link === undefined}
										<span class="text-xs font-robotoMono leading-none">under construction</span>
									{:else if project.link !== null}
										<a href={project.link} target="_blank" rel="noopener noreferrer" class="text-xs font-bold font-robotoMono underline pointer-events-auto">{project.link.replace('https://', '')}</a>
									{/if}
								</div>
								<a href={project.route} target="_blank" class="flex items-center gap-2 transition-all duration-300 text-xs font-bold font-robotoMono leading-none pointer-events-auto">
									<span class="group-hover/cta:-translate-x-1 transition-all duration-300">see more</span>
									<ArrowRightIcon class="group-hover/cta:translate-x-1 transition-all duration-300 w-4 h-4" />
								</a>
							</div>
						</div>
					</div>
					
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
			{:else}
				<a 
					href={project.route}
					class="group relative hover:-translate-y-2 transition-all duration-700 hover:shadow-2xl flex-shrink-0 flex-1 max-w-xs opacity-100 {($hoveredProject === null && (animatedProjectIndex === index || animatedProjectIndices.includes(index))) ? 'scale-105' : 'scale-100'}"
					on:mouseenter={() => handleMouseEnter(project.title)}
					on:mouseleave={handleMouseLeave}
				>
					<!-- Header overlay (desktop only, visible on hover) -->
					<div class="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[120%] w-[26rem] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
						<div class="text-white w-full space-y-3">
							<div class="flex justify-between items-center">
								<h3 class="font-clash font-medium text-2xl">{project.title}</h3>
								{#if project.year}
									<div class="text-xs font-robotoMono leading-none">{project.year}</div>
								{/if}
							</div>

							<p class="text-xs font-robotoMono tracking-wider max-w-80">{project.description}</p>

							<div class="flex items-center group/cta">
								<div class="flex-1">
									{#if project.link === undefined}
										<span class="text-xs font-robotoMono leading-none">under construction</span>
									{:else if project.link !== null}
										<a href={project.link} target="_blank" rel="noopener noreferrer" class="text-xs font-bold font-robotoMono underline pointer-events-auto" on:click|stopPropagation>{project.link.replace('https://', '')}</a>
									{/if}
								</div>
								<a href={project.route} target="_blank" class="flex items-center gap-2 transition-all duration-300 text-xs font-bold font-robotoMono leading-none pointer-events-auto">
									<span class="group-hover/cta:-translate-x-1 transition-all duration-300">see more</span>
									<ArrowRightIcon class="group-hover/cta:translate-x-1 transition-all duration-300 w-4 h-4" />
								</a>
							</div>
						</div>
					</div>
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
				</a>
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
