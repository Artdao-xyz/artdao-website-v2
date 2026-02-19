<script lang="ts">
	import PolaroidsMobile from '$lib/components/PolaroidsMobile/PolaroidsMobile.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { sulkianImages } from '../../data/Projects/DigitalMatter/ImgNavigator';
	import { digitalMatterNavItems } from '../../data/Projects/DigitalMatter/NavItems';
	import {
		marcusAbout,
		marcusAboutImages,
		parsaAbout,
		parsaAboutImages,
		sulkianAbout,
		sulkianAboutImages
	} from '../../data/Projects/DigitalMatter/ProjectAbout';
	import {
		marcusDropdownItems,
		sulkianDropdownItems
	} from '../../data/Projects/DigitalMatter/ProjectAboutDropdown';
	import {
		parsaArtworkImages,
		parsaArtworkImages1,
		parsaArtworkImages2
	} from '../../data/Projects/DigitalMatter/ProjectArtworkGallery';
	import { digitalMatterProjectIntro } from '../../data/Projects/DigitalMatter/ProjectIntro';
	import {
		marcusPolaroidsImages,
		parsaPolaroidsImages
	} from '../../data/Projects/DigitalMatter/ProjectPolaroids';
	import { aeroVideo, parsaVideo } from '../../data/Projects/DigitalMatter/ProjectVideo';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';

	// Set page metadata
	// Note: digitalMatter uses imported assets, so we use a static path for ogImage
	usePageMetadata({
		title: 'Digital Matter | Artdao',
		description: digitalMatterProjectIntro.description[0] || 'Exploring the fluid boundary between physical and virtual realms.',
		ogImage: 'https://artdao.xyz/banner.png', // Using default since bgImage is an import
		canonical: 'https://artdao.xyz/digital-matter'
	});
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { digitalMatterNavStoreItems } from './store';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	
	let size: number;
	let introIsInView: boolean;
	let marcusIsInView: boolean;
	let sulkianIsInView: boolean;
	let parsaIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(
				digitalMatterNavStoreItems,
				digitalMatterNavItems,
				digitalMatterNavItems[0].route
			);
		}

		if (marcusIsInView) {
			updateNavBar(
				digitalMatterNavStoreItems,
				digitalMatterNavItems,
				digitalMatterNavItems[1].route
			);
		}

		if (sulkianIsInView) {
			updateNavBar(
				digitalMatterNavStoreItems,
				digitalMatterNavItems,
				digitalMatterNavItems[2].route
			);
		}

		if (parsaIsInView) {
			updateNavBar(
				digitalMatterNavStoreItems,
				digitalMatterNavItems,
				digitalMatterNavItems[3].route
			);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		// console.log('🖼️ Digital Matter: Iniciando carga de imágenes...');
		const images = await preloadImages([
			[digitalMatterProjectIntro.bgImage, digitalMatterProjectIntro.bgImageMobile],
			marcusAboutImages,
			marcusDropdownItems.map((item) => item.image),
			marcusPolaroidsImages.map((item) => item.image),
			sulkianAboutImages,
			parsaAboutImages,
			parsaArtworkImages.map((item) => item.image),
			parsaArtworkImages1.map((item) => item.src),
			parsaArtworkImages2.map((item) => item.src),
			parsaPolaroidsImages.map((item) => item.image)
		]);
		// console.log('🖼️ Digital Matter: Imágenes cargadas:', images);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
		// console.log('🖼️ Digital Matter: Store actualizado');
	};

	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		// console.log('🎯 Digital Matter: Metaball listo, ejecutando loadImages');
		loadImages();
	}

	// Debug: verificar estado del store
	// $: console.log('🔍 Digital Matter: metaballReady:', $metaballReady, 'preloadedImagesStore:', $preloadedImagesStore);
</script>

<svelte:window bind:innerWidth={size} />

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		transition:fly={{ duration: 1000, delay: 750, y: 30, easing: cubicInOut }}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<div
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				introIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				introIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				introIsInView = inView;
			}}
		>
			<ProjectIntro
				project={digitalMatterProjectIntro}
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>

		<div
			id="marcus"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				marcusIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				marcusIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				marcusIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={marcusAbout} aboutImages={$preloadedImagesStore[1]} route="" />

			<ProjectAboutDropdown images={$preloadedImagesStore[2]} aboutDropdownItems={marcusDropdownItems} route="" />

			{#if size > 1100}
				<ProjectPolaroids images={marcusPolaroidsImages} />
			{:else}
				<PolaroidsMobile polaroidImages={marcusPolaroidsImages} route="" />
			{/if}
		</div>

		<div
			id="sulkian"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				sulkianIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				sulkianIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				sulkianIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={sulkianAbout} aboutImages={$preloadedImagesStore[4]} route="" />

			<ProjectAboutDropdown
				images={sulkianImages}
				route={''}
				colorVariant={EColorVariant.BLACK}
				aboutDropdownItems={sulkianDropdownItems}
				isImageWhiteBg
			/>

			<ProjectVideo videoProjects={aeroVideo} route="sulkian-end" />
		</div>

		<div
			id="parsa"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				parsaIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				parsaIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				parsaIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={parsaAbout} aboutImages={$preloadedImagesStore[5]} route="" />

			<ProjectVideo videoProjects={parsaVideo} route="" />

			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={parsaArtworkImages} showDetails />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={parsaArtworkImages1}
					imagesRight={parsaArtworkImages2}
				/>
			</div>

			{#if size > 1100}
				<ProjectPolaroids
					images={parsaPolaroidsImages}
					polaroidsTypes={[
						EPolaroidType.RECTANGLE,
						EPolaroidType.RECTANGLE,
						EPolaroidType.RECTANGLE,
						EPolaroidType.VERTICAL
					]}
				/>
			{:else}
				<PolaroidsMobile polaroidImages={parsaPolaroidsImages} route="" />
			{/if}
		</div>

		<HomeIcon />
		<Footer project={EProjects.DIGITAL_MATTER} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
