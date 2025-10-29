<script lang="ts">
	import { page } from '$app/stores';
	import { studioProjects } from '../../../data/Studio/studioProjects';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType } from 'embla-carousel';        
	import { MoveUpRightIcon, ArrowLeft, ArrowRight } from 'lucide-svelte';
	// Obtener el proyecto actual basado en el slug
	$: currentProject = studioProjects.find(project => 
		project.route === `/studio/${$page.params.slug}`
	);

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
		class="min-h-screen flex flex-col justify-between md:block bg-black text-white p-8 md:pt-28 lg:pt-32"
		transition:fly={{ duration: 1000, delay: 200, y: 30, easing: cubicInOut }}
	>
		<!-- Header del proyecto -->
		<div class="max-w-4xl mx-auto mb-12">
			<div class="flex items-start md:items-center justify-between mb-8">
				<a href="/studio" class="flex-1 text-white hover:text-gray-300 font-bold text-xs font-geistMono transition-colors duration-300">← return</a>
							<!-- Título e imagen principal -->
                                <div class="flex flex-col md:flex-row items-center gap-4">
                                        <img 
                                                src={currentProject.imageHover} 
                                                alt={currentProject.title}
                                                class="h-10 object-cover rounded-lg flex-shrink-0"
                                        />
                                        <h1 class="text-2xl font-medium font-clash">
                                                {currentProject.title}
                                        </h1>
                                </div>
                                 <div class="flex-1 flex justify-end">
 					<button 
						class="text-white hover:text-gray-300 font-bold text-xs font-geistMono transition-colors duration-300"
						on:click={goToNextProject}
					>
 						next project →
 					</button>
 				</div>
			</div>
			

		</div>

		<!-- Carrusel de imágenes del proyecto -->
		<div class="max-w-[1000px] mx-auto mb-12">
			<div 
				class="embla overflow-hidden"
				use:emblaCarouselSvelte={{ options: { loop: true, align: 'center' }, plugins: [] }}
				on:emblaInit={onInit}
			>
				<div class="embla__container flex">
					{#each currentProject.carouselImages as image, index}
						<div class="embla__slide flex-[0_0_100%] min-w-0 pl-4">
							<div class="aspect-square md:aspect-[1.56] overflow-hidden rounded-lg">
								<img 
									src={image} 
									alt="{currentProject.title} - Image {index + 1}"
									class="w-full h-full object-cover"
								/>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Controles de navegación con flechas -->
			<div class="flex justify-between items-center mt-6 gap-4">
				<button
					class="text-white hover:text-gray-300 transition-colors duration-300 p-2"
					on:click={scrollPrev}
					aria-label="Previous slide"
				>
					<ArrowLeft class="w-6 h-6" />
				</button>
				<button
					class="text-white hover:text-gray-300 transition-colors duration-300 p-2"
					on:click={scrollNext}
					aria-label="Next slide"
				>
					<ArrowRight class="w-6 h-6" />
				</button>
			</div>
		</div>

		<!-- Descripción del proyecto -->
		<div class="max-w-4xl mx-auto mb-8">
			<p class="text-xs font-geistMono text-center max-w-md mx-auto leading-relaxed">
				{currentProject.description}
			</p>
		</div>

		<!-- Fecha del proyecto -->
		{#if currentProject.year}
			<div class="max-w-4xl mx-auto mb-8 flex items-center gap-2">
				<p class="text-xs font-geistMono text-center max-w-md mx-auto leading-relaxed">
					{currentProject.year}
				</p>
                                {#if currentProject.link}
                                        <a href={currentProject.link} target="_blank" class="underline text-xs font-geistMono text-center max-w-md mx-auto leading-relaxed hover:text-gray-300 transition-colors duration-300">
                                                <span>{currentProject.link?.replace('https://', '')}</span>
                                                <MoveUpRightIcon class="w-3 h-3 inline-block" />
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
