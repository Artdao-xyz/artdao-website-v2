<script lang="ts">
	import { inview } from 'svelte-inview';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { usePageMetadata } from '$lib/utils/metadata';

	// Project data
	import { digitalHomesteadingIntro } from '../../data/Projects/DigitalHomesteading/ProjectIntro';
	import {
		about1,
		about1Images,
		about2,
		about2Images,
		about3,
		about3Images
	} from '../../data/Projects/DigitalHomesteading/ProjectAbout';
	import { digitalHomesteadingChatInterview } from '../../data/Projects/DigitalHomesteading/ProjectChatInterview';
	import {
		digitalHomesteadingArtworkGrid,
		digitalHomesteadingArtworkGridMobileLeft,
		digitalHomesteadingArtworkGridMobileRight
	} from '../../data/Projects/DigitalHomesteading/ProjectArtworkGrid';

	// Navigation and utilities
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { digitalHomesteadingNavStoreItems } from './store';
	import { digitalHomesteadingNavItems } from '../../data/Projects/DigitalHomesteading/NavItems';

	// Page metadata
	usePageMetadata({
		title: 'Digital Homesteading | Artdao',
		description:
			digitalHomesteadingIntro.description[0] ||
			'Artists cultivating sustainable relationships with technology and infrastructure.',
		ogImage: `https://artdao.xyz${digitalHomesteadingIntro.bgImage}`,
		canonical: 'https://artdao.xyz/digital-homesteading'
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
				digitalHomesteadingNavStoreItems,
				digitalHomesteadingNavItems,
				digitalHomesteadingNavItems[0].route
			);
		}
		if (about2IsInView) {
			updateNavBar(
				digitalHomesteadingNavStoreItems,
				digitalHomesteadingNavItems,
				digitalHomesteadingNavItems[1].route
			);
		}
		if (about3IsInView) {
			updateNavBar(
				digitalHomesteadingNavStoreItems,
				digitalHomesteadingNavItems,
				digitalHomesteadingNavItems[2].route
			);
		}
	};

	// Load images
	const loadImages = async () => {
		const images = await preloadImages([
			[digitalHomesteadingIntro.bgImage, digitalHomesteadingIntro.bgImageMobile],
			about1Images,
			about2Images,
			about3Images,
			[digitalHomesteadingChatInterview.background],
			digitalHomesteadingArtworkGrid.artworks.map((item) => item.image)
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
		...digitalHomesteadingChatInterview,
		background: $preloadedImagesStore
			? $preloadedImagesStore[4][0]
			: digitalHomesteadingChatInterview.background
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
				project={digitalHomesteadingIntro}
				textColor="white"
				isCenterImage
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

		<!-- Artwork Grid -->
		<div id="artwork-grid">
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={digitalHomesteadingArtworkGrid.artworks} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={digitalHomesteadingArtworkGridMobileLeft}
					imagesRight={digitalHomesteadingArtworkGridMobileRight}
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

		<!-- Interview -->
		<div
			id="interview"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				// optional: hook into nav if needed
			}}
		>
			<ChatInterview data={chatInterviewData} />
		</div>

		<HomeIcon />
		<Footer project={EProjects.DIGITAL_HOMESTEADING} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

