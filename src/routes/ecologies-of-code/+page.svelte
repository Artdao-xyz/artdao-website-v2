<script lang="ts">
	import ecoInterviewBg from '$lib/assets/images/projects/ecologiesOfCode/ecologies-interview-bg.webp';
	import PolaroidsMobile from '$lib/components/PolaroidsMobile/PolaroidsMobile.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';
	import { inview } from 'svelte-inview';
	import { EProjects } from '../../constants/enums';
	import { ecologiesNavItems } from '../../data/Projects/EcologiesOfCode/NavItems';
	import {
		hypereikonAbout,
		hypereikonAboutImages,
		joaquinaAbout,
		joaquinaAboutImages,
		okytomoAbout,
		okytomoAboutImages
	} from '../../data/Projects/EcologiesOfCode/ProjectAbout';
	import {
		ecologiesArtworkImages,
		ecologiesGallery1,
		ecologiesGallery2
	} from '../../data/Projects/EcologiesOfCode/ProjectArtworkGallery';
	import { ecologiesQuestions } from '../../data/Projects/EcologiesOfCode/ProjectInterview';
	import { ecologiesOfCodeProject } from '../../data/Projects/EcologiesOfCode/ProjectIntro';
	import {
		ecologiesPolaroidImages,
		ecologiesPolaroidImagesTwo
	} from '../../data/Projects/EcologiesOfCode/ProjectPolaroids';
	import {
		ecologiesVideoProjectOne,
		okyVideos
	} from '../../data/Projects/EcologiesOfCode/ProjectVIdeo';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { ecologiesNavStoreItems } from './store';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	
	let size: number;

	let introIsInView: boolean;
	let joaquinaIsInView: boolean;
	let okiIsInView: boolean;
	let hyperIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(ecologiesNavStoreItems, ecologiesNavItems, ecologiesNavItems[0].route);
		}

		if (joaquinaIsInView) {
			updateNavBar(ecologiesNavStoreItems, ecologiesNavItems, ecologiesNavItems[1].route);
		}

		if (okiIsInView) {
			updateNavBar(ecologiesNavStoreItems, ecologiesNavItems, ecologiesNavItems[2].route);
		}

		if (hyperIsInView) {
			updateNavBar(ecologiesNavStoreItems, ecologiesNavItems, ecologiesNavItems[3].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[ecologiesOfCodeProject.bgImage, ecologiesOfCodeProject.bgImageMobile],
			joaquinaAboutImages,
			[ecoInterviewBg],
			ecologiesPolaroidImages.map((item) => item.image),
			okytomoAboutImages,
			ecologiesPolaroidImagesTwo.map((item) => item.image),
			hypereikonAboutImages,
			ecologiesArtworkImages.map((item) => item.image),
			ecologiesGallery1.map((item) => item.src),
			ecologiesGallery2.map((item) => item.src)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}
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
			id="intro"
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
				project={ecologiesOfCodeProject}
				textColor="white"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>

			<ProjectInterview bgImage={$preloadedImagesStore[2][0]} filteredQuestions={ecologiesQuestions} isCover />
		</div>

		<div
			id="joaquina"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				joaquinaIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				joaquinaIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				joaquinaIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={joaquinaAbout} aboutImages={$preloadedImagesStore[1]} route="" />

			<ProjectVideo videoProjects={[ecologiesVideoProjectOne]} />

			{#if size > 1100}
				<ProjectPolaroids
					images={ecologiesPolaroidImages}
					route="joaquina-end"
					polaroidsTypes={[
						EPolaroidType.RECTANGLE,
						EPolaroidType.VERTICAL,
						EPolaroidType.RECTANGLE,
						EPolaroidType.RECTANGLE
					]}
					viewImageFit="cover"
				/>
			{:else}
				<PolaroidsMobile polaroidImages={ecologiesPolaroidImages} route="joaquina-end" />
			{/if}
		</div>

		<div
			id="oki"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				okiIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				okiIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				okiIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={okytomoAbout} aboutImages={$preloadedImagesStore[4]} route="" />

			<ProjectVideo videoProjects={okyVideos} />

			{#if size > 1100}
				<ProjectPolaroids
					images={ecologiesPolaroidImagesTwo}
					route="oki-end"
					polaroidsTypes={[
						EPolaroidType.RECTANGLE,
						EPolaroidType.VERTICAL,
						EPolaroidType.RECTANGLE,
						EPolaroidType.RECTANGLE
					]}
					viewImageFit="cover"
				/>
			{:else}
				<PolaroidsMobile polaroidImages={ecologiesPolaroidImagesTwo} route="oki-end" />
			{/if}
		</div>

		<div
			id="hypereikon"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				hyperIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				hyperIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				hyperIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={hypereikonAbout} aboutImages={$preloadedImagesStore[6]} route="" />

			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={ecologiesArtworkImages} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={ecologiesGallery1}
					imagesRight={ecologiesGallery2}
				/>
			</div>
		</div>

		<HomeIcon />
		<Footer project={EProjects.ECOLOGIES_OF_CODE} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
