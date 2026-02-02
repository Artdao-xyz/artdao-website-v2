<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { everyCreationIsLossNavItems } from '../../data/Projects/EveryCreationIsLoss/NavItems';
	import {
		about1,
		about1Images,
		about2,
		about2Images,
		about3,
		about3Images
	} from '../../data/Projects/EveryCreationIsLoss/ProjectAbout';
	import { everyCreationIsLossIntro } from '../../data/Projects/EveryCreationIsLoss/ProjectIntro';
	import { everyCreationIsLossChatInterview, everyCreationIsLossChatInterview2 } from '../../data/Projects/EveryCreationIsLoss/ProjectChatInterview';
	import { EveryCreationIsLossArtworkGrid, EveryCreationIsLossArtworkGrid2 } from '../../data/Projects/EveryCreationIsLoss/ProjectArtworkGrid';
	import { chepertomVideos } from '../../data/Projects/EveryCreationIsLoss/ProjectVideo';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import preloadImages from '../../utils/preloadImages';
	import { everyCreationIsLossNavStoreItems } from './store';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let introIsInView: boolean;
	let about1IsInView: boolean;
	let about2IsInView: boolean;
	let about3IsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);
		
		if (introIsInView) {
			updateNavBar(everyCreationIsLossNavStoreItems, everyCreationIsLossNavItems, everyCreationIsLossNavItems[0].route);
		}
		if (about1IsInView) {
			updateNavBar(everyCreationIsLossNavStoreItems, everyCreationIsLossNavItems, everyCreationIsLossNavItems[1].route);
		}
		if (about2IsInView) {
			updateNavBar(everyCreationIsLossNavStoreItems, everyCreationIsLossNavItems, everyCreationIsLossNavItems[2].route);
		}
		if (about3IsInView) {
			updateNavBar(everyCreationIsLossNavStoreItems, everyCreationIsLossNavItems, everyCreationIsLossNavItems[3].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[everyCreationIsLossIntro.bgImage, everyCreationIsLossIntro.bgImageMobile],
			about1Images,
			about2Images,
			about3Images,
			[everyCreationIsLossChatInterview.background],
			[everyCreationIsLossChatInterview2.background],
			EveryCreationIsLossArtworkGrid.artworks.map((item) => item.image),
			EveryCreationIsLossArtworkGrid2.artworks.map((item) => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};
	
	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}

	$: chatInterviewData = {
		...everyCreationIsLossChatInterview,
		background: $preloadedImagesStore ? $preloadedImagesStore[4][0] : everyCreationIsLossChatInterview.background
	};

	$: chatInterviewData2 = {
		...everyCreationIsLossChatInterview2,
		background: $preloadedImagesStore ? $preloadedImagesStore[5][0] : everyCreationIsLossChatInterview2.background
	};
</script>

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		transition:fly={{ duration: 1000, delay: 750, y: 30, easing: cubicInOut }}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<!-- Intro Section -->
		<div
			id="intro"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				introIsInView = inView;
			}}
		>
			<ProjectIntro
				project={everyCreationIsLossIntro}
				textColor="white"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>

		<!-- About 1 Section -->
		<div
			id="about1"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				about1IsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={about1}
				aboutImages={$preloadedImagesStore[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>


		<!-- Chat Interview Section 1 - Chepertom -->
		<div>
			<ChatInterview data={chatInterviewData} />
		</div>

		<!-- About 2 Section -->
		<div
			id="about2"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				about2IsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={about2}
				aboutImages={$preloadedImagesStore[2]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

                		<!-- Artwork Grid Section 1 -->
		<div>
			<ProjectArtworkGrid galleryImages={EveryCreationIsLossArtworkGrid.artworks} />
		</div>

		<!-- Video Section - Chepertom -->
		<div>
			<ProjectVideo videoProjects={chepertomVideos} />
		</div>

		<!-- About 3 Section -->
		<div
			id="about3"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				about3IsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={about3}
				aboutImages={$preloadedImagesStore[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>


		<!-- Chat Interview Section 2 - Asdrúbal Gomez -->
		<div>
			<ChatInterview data={chatInterviewData2} />
		</div>

		<!-- Artwork Grid Section 2 -->
		<div>
			<ProjectArtworkGrid galleryImages={EveryCreationIsLossArtworkGrid2.artworks} />
		</div>

		<HomeIcon />
		<Footer project={EProjects.EVERY_CREATION_IS_LOSS} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

