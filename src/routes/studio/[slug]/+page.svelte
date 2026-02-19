<script lang="ts">
	import { page } from '$app/stores';
	import { studioProjects } from '../../../data/Studio/studioProjects';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';        
	import { MoveUpRightIcon, ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { setPageMetadata } from '$lib/stores/pageMetadata';
	
	// Obtener el proyecto actual basado en el slug
	$: currentProject = studioProjects.find(project => 
		project.route === `/studio/${$page.params.slug}`
	);

	// Set page metadata reactively
	$: if (currentProject) {
		setPageMetadata({
			title: `${currentProject.title} | Studio | Artdao`,
			description: currentProject.description || 'Studio project at Artdao',
			ogImage: currentProject.imageHover ? `https://artdao.xyz${currentProject.imageHover}` : 'https://artdao.xyz/banner.png',
			canonical: `https://artdao.xyz${currentProject.route}`
		});
	}

	// Variables para el carrusel
	let emblaApi: EmblaCarouselType | null = null;
	let selectedIndex = 0;
	let scrollSnaps = [];

	// Función para inicializar el carrusel
	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
		scrollSnaps = emblaApi.scrollSnapList();
		selectedIndex = emblaApi.selectedScrollSnap();
		
		// Escuchar cambios de selección
		emblaApi.on('select', onSelect);
	}

	// Función para ir a una diapositiva específica
	function scrollTo(index: number) {
		if (emblaApi) {
			emblaApi.scrollTo(index);
		}
	}

	// Función para ir a la diapositiva anterior
	function scrollPrev() {
		if (emblaApi) {
			emblaApi.scrollPrev();
		}
	}

	// Función para ir a la siguiente diapositiva
	function scrollNext() {
		if (emblaApi) {
			emblaApi.scrollNext();
		}
	}

	// Actualizar el índice seleccionado
	function onSelect() {
		selectedIndex = emblaApi?.selectedScrollSnap() ?? 0;
	}

	// Función para ir al siguiente proyecto
	function goToNextProject() {
		if (currentProject) {
			const currentIndex = studioProjects.findIndex(project => project.route === currentProject.route);
			const nextIndex = (currentIndex + 1) % studioProjects.length;
			const nextProject = studioProjects[nextIndex];
			window.location.href = nextProject.route;
		}
	}
</script>

{#if currentProject}
	<div 
		class="h-screen max-h-screen flex flex-col bg-black text-white p-8 md:pt-28 lg:pt-20 max-w-4xl mx-auto overflow-hidden"
		transition:fly={{ duration: 1000, delay: 200, y: 30, easing: cubicInOut }}
	>
		<div class="flex-shrink-0 flex flex-col md:flex-row items-center w-full justify-between gap-4 my-4">
			<div class="flex items-center justify-center gap-3">
				<img 
					src={currentProject.imageHover} 
					alt={currentProject.title}
					class="h-10 object-cover rounded-lg flex-shrink-0"
				/>
				<h1 class="text-2xl font-medium font-clash">
					{currentProject.title}
				</h1>
			</div>

			<a href="/studio" class="text-white hover:text-gray-300 font-bold text-xs underline font-geistMono transition-colors duration-300">return</a>

		</div>

		<!-- Carrusel de imágenes del proyecto - Flexible -->
		<div class="flex-1 min-h-0 flex flex-col max-w-[1000px] mx-auto w-full">
			<div 
				class="embla overflow-hidden flex-1 min-h-0"
				use:emblaCarouselSvelte={{ options: { loop: true, align: 'center' }, plugins: [] }}
				on:emblaInit={onInit}
			>
				<div class="embla__container flex h-full">
					{#each currentProject.carouselImages as image, index}
						<div class="embla__slide flex-[0_0_100%] min-w-0 pl-4 flex items-center justify-center">
							<div class="w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
								<img 
									src={image} 
									alt="{currentProject.title} - Image {index + 1}"
									class="max-w-full max-h-full w-auto h-auto object-contain"
								/>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Controles de navegación con flechas -->
			<div class="flex-shrink-0 flex justify-between items-center gap-4 mt-4">
				<button
					class="text-white hover:text-gray-300 transition-colors duration-300 py-2"
					on:click={scrollPrev}
					aria-label="Previous slide"
				>
					<ArrowLeft class="w-6 h-6" />
				</button>

				<div class="text-center justify-start text-white text-xs font-normal font-geistMono leading-4">
					{currentProject.categories.join(', ')}
				</div>
				<button
					class="text-white hover:text-gray-300 transition-colors duration-300 py-2"
					on:click={scrollNext}
					aria-label="Next slide"
				>
					<ArrowRight class="w-6 h-6" />
				</button>
			</div>
		</div>

		<!-- Fecha del proyecto -->
		{#if currentProject.year}
			<div class="flex-shrink-0 flex justify-between items-center mt-4">
				<p class="font-geistMono text-xs leading-relaxed">
					{currentProject.year}
				</p>
				{#if currentProject.link}
					<a href={currentProject.link} target="_blank" class="underline text-xs font-geistMono leading-relaxed hover:text-gray-300 transition-colors duration-300">
						{currentProject.link?.replace('https://', '')}
					</a>
				{/if}
			</div>
		{/if}

	</div>
{:else}
	<!-- Página de error para proyecto no encontrado -->
	<div 
		class="min-h-screen bg-black text-white flex items-center justify-center"
		transition:fly={{ duration: 1000, delay: 200, y: 30, easing: cubicInOut }}
	>
		<div class="text-center">
			<h1 class="text-4xl font-bold font-robotoMono mb-4">Project Not Found</h1>
			<p class="text-lg text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
			<a 
				href="/studio" 
				class="inline-block bg-white text-black px-6 py-3 font-robotoMono font-semibold hover:bg-gray-200 transition-colors duration-300"
			>
				Back to Studio
			</a>
		</div>
	</div>
{/if}
