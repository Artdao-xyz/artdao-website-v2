<script lang="ts">
	import { inview } from 'svelte-inview';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { usePageMetadata } from '$lib/utils/metadata';

	// Project data
	import { careBotsBrowserBeastsIntro } from '../../data/Projects/CareBotsBrowserBeasts/ProjectIntro';
	import {
		about1,
		about1Images,
		about2,
		about2Images,
		about3,
		about3Images
	} from '../../data/Projects/CareBotsBrowserBeasts/ProjectAbout';
	import { careBotsBrowserBeastsChatInterview } from '../../data/Projects/CareBotsBrowserBeasts/ProjectChatInterview';
	import {
		careBotsBrowserBeastsArtworkGrid,
		careBotsBrowserBeastsArtworkGridMobileLeft,
		careBotsBrowserBeastsArtworkGridMobileRight
	} from '../../data/Projects/CareBotsBrowserBeasts/ProjectArtworkGrid';
	import { careBotsBrowserBeastsVideos } from '../../data/Projects/CareBotsBrowserBeasts/ProjectVideo';

	// Navigation and utilities
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { careBotsBrowserBeastsNavStoreItems } from './store';
	import { careBotsBrowserBeastsNavItems } from '../../data/Projects/CareBotsBrowserBeasts/NavItems';

	// Page metadata
	usePageMetadata({
		title: 'CARE BOTS/BROWSER BEASTS | Artdao',
		description:
			careBotsBrowserBeastsIntro.description[0] ||
			'Artists reimagining digital beings and care beyond gamified platforms.',
		ogImage: `https://artdao.xyz${careBotsBrowserBeastsIntro.bgImage}`,
		canonical: 'https://artdao.xyz/care-bots-browser-beasts'
	});

	// State variables
	let introIsInView: boolean;
	let about1IsInView: boolean;
	let about2IsInView: boolean;
	let about3IsInView: boolean;
	let containerRef: any;

	// Scroll function
	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (about1IsInView) {
			updateNavBar(
				careBotsBrowserBeastsNavStoreItems,
				careBotsBrowserBeastsNavItems,
				careBotsBrowserBeastsNavItems[0].route
			);
		}
		if (about2IsInView) {
			updateNavBar(
				careBotsBrowserBeastsNavStoreItems,
				careBotsBrowserBeastsNavItems,
				careBotsBrowserBeastsNavItems[1].route
			);
		}
		if (about3IsInView) {
			updateNavBar(
				careBotsBrowserBeastsNavStoreItems,
				careBotsBrowserBeastsNavItems,
				careBotsBrowserBeastsNavItems[2].route
			);
		}
	};

	// Load images
	const loadImages = async () => {
		const images = await preloadImages([
			[careBotsBrowserBeastsIntro.bgImage, careBotsBrowserBeastsIntro.bgImageMobile],
			about1Images,
			about2Images,
			about3Images,
			[careBotsBrowserBeastsChatInterview.background],
			careBotsBrowserBeastsArtworkGrid.artworks.map((item) => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Loading reactive
	$: if ($metaballReady) {
		loadImages();
	}

	// Chat interview data with preloaded background
	$: chatInterviewData = {
		...careBotsBrowserBeastsChatInterview,
		background: $preloadedImagesStore
			? $preloadedImagesStore[4][0]
			: careBotsBrowserBeastsChatInterview.background
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
				project={careBotsBrowserBeastsIntro}
				textColor="white"
				backgroundPosition="top"
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

		<!-- Interview -->
		<div
		id='interview'
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			// optional: hook into nav if needed
		}}
	>
		<ChatInterview data={chatInterviewData} />
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

		<!-- Artwork Grid 1 -->
		<div id="artwork-grid">
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={careBotsBrowserBeastsArtworkGrid.artworks} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={careBotsBrowserBeastsArtworkGridMobileLeft}
					imagesRight={careBotsBrowserBeastsArtworkGridMobileRight}
				/>
			</div>
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
				aboutImages={$preloadedImagesStore[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Video -->
		<div id="video">
			<ProjectVideo videoProjects={careBotsBrowserBeastsVideos} />
		</div>

		<HomeIcon />
		<Footer project={EProjects.CARE_BOTS_BROWSER_BEASTS} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

