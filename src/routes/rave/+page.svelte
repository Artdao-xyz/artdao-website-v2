<script lang="ts">
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectAudioFiles from '$lib/components/ProjectAudioFiles/ProjectAudioFiles.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EProjects } from '../../constants/enums';
	import { raveNavItems } from '../../data/Projects/Rave/NavItems';
	import {
		performanceDropdownItems,
		raveAboutDropdopwnItems,
		raveAboutDropdopwnItemsTwo
	} from '../../data/Projects/Rave/ProjectAboutDropdown';
	import { raveAudioFiles } from '../../data/Projects/Rave/ProjectAudioFiles';
	import { raveProject } from '../../data/Projects/Rave/ProjectIntro';
	import {
		afterPartyVideo,
		blessingForSaleVideo,
		frequencyVideo,
		fwvnVideo,
		petroVideo
	} from '../../data/Projects/Rave/ProjectVideo';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { raveNavStoreItems } from './store';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import { raveAbout, findingNewLifeAboutImages, digitalRaveAbout, digitalRaveAboutImages, mixingWorldsAbout, mixingWorldsAboutImages } from '../../data/Projects/Rave/about';
	import { EColorVariant } from '../../constants/enums';

	let introIsInView: boolean;
	let digitalRaveIsInView: boolean;
	let artworksIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);
		
		if (introIsInView) {
			updateNavBar(raveNavStoreItems, raveNavItems, raveNavItems[0].route);
		}

		if (digitalRaveIsInView) {
			updateNavBar(raveNavStoreItems, raveNavItems, raveNavItems[1].route);
		}

		if (artworksIsInView) {
			updateNavBar(raveNavStoreItems, raveNavItems, raveNavItems[2].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[raveProject.bgImage, raveProject.bgImageMobile],
			findingNewLifeAboutImages,
			raveAboutDropdopwnItems.map(item => item.image),
			performanceDropdownItems.map(item => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}
</script>

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
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
				project={raveProject}
				isCenterImage
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
			<ProjectAbout
				aboutItem={raveAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route=""
				colorVariant={EColorVariant.BLACK}
				isImageLeft={true}
			/>
			<ProjectVideo videoProjects={[afterPartyVideo]} />
		</div>

		<div 
			id="digital-rave"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				digitalRaveIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				digitalRaveIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				digitalRaveIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={digitalRaveAbout}
				aboutImages={digitalRaveAboutImages}
				route=""
				colorVariant={EColorVariant.BLACK}
				isImageLeft={true}
			/>
			<ProjectVideo videoProjects={[blessingForSaleVideo, fwvnVideo, frequencyVideo]} />
		</div>

		<div
			id="artworks"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artworksIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				artworksIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				artworksIsInView = inView;
			}}
		>
			<ProjectAboutDropdown
				images={$preloadedImagesStore[2]}
				aboutDropdownItems={raveAboutDropdopwnItems}
				route={raveNavItems[2].route}
			/>
			

			<ProjectAbout
				aboutItem={mixingWorldsAbout}
				aboutImages={mixingWorldsAboutImages}
				route=""
				colorVariant={EColorVariant.BLACK}
				isImageLeft={true}
			/>
			<ProjectAudioFiles
				audioItems={raveAudioFiles}
				title="Proxy Fae are an electronic duo fusing electronic experimentation and live performances into 
				a genre-bending sonic experience"
				route="artists-end"
			/>

			<ProjectAboutDropdown
				images={$preloadedImagesStore[3]}
				aboutDropdownItems={performanceDropdownItems}
				route={raveNavItems[2].route}
			/>
		</div>

		<HomeIcon />
		<Footer project={EProjects.RAVE} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
