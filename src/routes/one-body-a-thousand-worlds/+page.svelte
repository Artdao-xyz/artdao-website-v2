<script lang="ts">
	import { inview } from 'svelte-inview';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import { EColorVariant, EProjects } from '../../constants/enums';
	
	// Project data
	import { oneBodyAThousandWorldsIntro } from '../../data/Projects/OneBodyAThousandWorlds/ProjectIntro';
	import { about1, about1Images, about2, about2Images, about3, about3Images } from '../../data/Projects/OneBodyAThousandWorlds/ProjectAbout';
	import { oneBodyAThousandWorldsChatInterview, oneBodyAThousandWorldsChatInterviewTurro } from '../../data/Projects/OneBodyAThousandWorlds/ProjectChatInterview';
	import { oneBodyAThousandWorldsArtworkGrid } from '../../data/Projects/OneBodyAThousandWorlds/ProjectArtworkGrid';
	
	// Navigation and utilities
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { metaballReady, preloadedImages as preloadedImagesStore, imagesLoaded } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { oneBodyAThousandWorldsNavStoreItems } from './store';
	import { oneBodyAThousandWorldsNavItems } from '../../data/Projects/OneBodyAThousandWorlds/NavItems';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	
	// State variables
	let introIsInView: boolean;
	let about1IsInView: boolean;
	let about2IsInView: boolean;
	let about3IsInView: boolean;
	let containerRef: any;
	
	// Scroll function
	const handleOnScroll = () => {
		getMetaballProgress(containerRef);
		
		if (introIsInView) {
			updateNavBar(oneBodyAThousandWorldsNavStoreItems, oneBodyAThousandWorldsNavItems, oneBodyAThousandWorldsNavItems[0].route);
		}
		if (about1IsInView) {
			updateNavBar(oneBodyAThousandWorldsNavStoreItems, oneBodyAThousandWorldsNavItems, oneBodyAThousandWorldsNavItems[1].route);
		}
		if (about2IsInView) {
			updateNavBar(oneBodyAThousandWorldsNavStoreItems, oneBodyAThousandWorldsNavItems, oneBodyAThousandWorldsNavItems[2].route);
		}
		if (about3IsInView) {
			updateNavBar(oneBodyAThousandWorldsNavStoreItems, oneBodyAThousandWorldsNavItems, oneBodyAThousandWorldsNavItems[3].route);
		}
	};
	
	// Load images
	const loadImages = async () => {
		const images = await preloadImages([
			[oneBodyAThousandWorldsIntro.bgImage, oneBodyAThousandWorldsIntro.bgImageMobile],
			about1Images,
			about2Images,
			[oneBodyAThousandWorldsChatInterview.background],
			about3Images,
			[oneBodyAThousandWorldsChatInterviewTurro.background],
			oneBodyAThousandWorldsArtworkGrid.map((item) => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};
	
	// Loading reactive
	$: if ($metaballReady) {
		loadImages();
	}
	
	$: chatInterviewData = {
		...oneBodyAThousandWorldsChatInterview,
		background: $preloadedImagesStore ? $preloadedImagesStore[3][0] : oneBodyAThousandWorldsChatInterview.background
	};
	
	$: chatInterviewDataTurro = {
		...oneBodyAThousandWorldsChatInterviewTurro,
		background: $preloadedImagesStore ? $preloadedImagesStore[5][0] : oneBodyAThousandWorldsChatInterviewTurro.background
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
		<!-- Intro -->
		<div
			id="intro"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				introIsInView = event.detail.inView;
			}}
		>
			<ProjectIntro
				project={oneBodyAThousandWorldsIntro}
				textColor="white"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>
		
		<!-- About 1 -->
		<div
			id="about1"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				about1IsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={about1}
				aboutImages={$preloadedImagesStore[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>
		
		<!-- About 2 -->
		<div
			id="about2"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				about2IsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={about2}
				aboutImages={$preloadedImagesStore[2]}
				route=""
				isImageLeft={false}
				colorVariant={EColorVariant.BLACK}
			/>
		</div>
		
		<!-- Chat Interview -->
		<div>
			<ChatInterview data={chatInterviewData} />
		</div>
		
		<!-- About 3 -->
		<div
			id="about3"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				about3IsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={about3}
				aboutImages={$preloadedImagesStore[4]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>
		
		<!-- Chat Interview Turro -->
		<div>
			<ChatInterview data={chatInterviewDataTurro} />
		</div>
		
		<!-- Artwork Grid -->
		<div>
			<ProjectArtworkGrid galleryImages={oneBodyAThousandWorldsArtworkGrid} showDetails={false} />
		</div>
		
		<HomeIcon />
		<Footer project={EProjects.ONE_BODY_A_THOUSAND_WORLDS} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
