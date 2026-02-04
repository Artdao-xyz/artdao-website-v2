<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { viralityOvernightNavItems } from '../../data/Projects/ViralityOvernight/NavItems';
	import {
		ephemeralityAbout,
		ephemeralityAboutImages,
		riniifishAbout,
		riniifishAboutImages,
		wocAbout,
		wocAboutImages
	} from '../../data/Projects/ViralityOvernight/ProjectAbout';
	import { viralityOvernightIntro } from '../../data/Projects/ViralityOvernight/ProjectIntro';
	import { viralityOvernightChatInterview } from '../../data/Projects/ViralityOvernight/ProjectChatInterview';
	import { ViralityOvernightArtworkGrid, viralityOvernightArtworkGridMobileLeft, viralityOvernightArtworkGridMobileRight } from '../../data/Projects/ViralityOvernight/ProjectArtworkGrid';
	import { viralityOvernightVideos } from '../../data/Projects/ViralityOvernight/ProjectVideo';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import preloadImages from '../../utils/preloadImages';
	import { viralityOvernightNavStoreItems } from './store';
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
			updateNavBar(viralityOvernightNavStoreItems, viralityOvernightNavItems, viralityOvernightNavItems[0].route);
		}
		if (about1IsInView) {
			updateNavBar(viralityOvernightNavStoreItems, viralityOvernightNavItems, viralityOvernightNavItems[1].route);
		}
		if (about2IsInView) {
			updateNavBar(viralityOvernightNavStoreItems, viralityOvernightNavItems, viralityOvernightNavItems[2].route);
		}
		if (about3IsInView) {
			updateNavBar(viralityOvernightNavStoreItems, viralityOvernightNavItems, viralityOvernightNavItems[3].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[viralityOvernightIntro.bgImage, viralityOvernightIntro.bgImageMobile],
			ephemeralityAboutImages,
			[viralityOvernightChatInterview.background],
			riniifishAboutImages,
			wocAboutImages,
			ViralityOvernightArtworkGrid.artworks.map((item) => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};
	
	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}

	$: chatInterviewData = {
		...viralityOvernightChatInterview,
		background: $preloadedImagesStore ? $preloadedImagesStore[2][0] : viralityOvernightChatInterview.background
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
				project={viralityOvernightIntro}
				textColor="black"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>

		<!-- About 1 Section - Ephemerality -->
		<div
			id="about1"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				about1IsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={ephemeralityAbout}
				aboutImages={$preloadedImagesStore[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Chat Interview Section -->
		<div>
			<ChatInterview data={chatInterviewData} />
		</div>

		<!-- About 2 Section - riniifish -->
		<div
			id="about2"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				about2IsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={riniifishAbout}
				aboutImages={$preloadedImagesStore[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectVideo videoProjects={viralityOvernightVideos} />
		</div>

		<!-- About 3 Section - woc -->
		<div
			id="about3"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				about3IsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={wocAbout}
				aboutImages={$preloadedImagesStore[4]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Artwork Grid Section -->
		<div>
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={ViralityOvernightArtworkGrid.artworks} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={viralityOvernightArtworkGridMobileLeft}
					imagesRight={viralityOvernightArtworkGridMobileRight}
				/>
			</div>
		</div>

		<HomeIcon />
		<!-- <Footer project={EProjects.VIRALITY_OVERNIGHT} /> -->
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

