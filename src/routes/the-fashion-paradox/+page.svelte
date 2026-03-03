<script lang="ts">
	import { inview } from 'svelte-inview';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
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
	import { theFashionParadoxIntro } from '../../data/Projects/TheFashionParadox/ProjectIntro';
	import {
		about1,
		about1Images,
		about2,
		about2Images,
		about3,
		about3Images
	} from '../../data/Projects/TheFashionParadox/ProjectAbout';
	import {
		theFashionParadoxChatInterview1,
		theFashionParadoxChatInterview2
	} from '../../data/Projects/TheFashionParadox/ProjectChatInterview';
	import {
		theFashionParadoxArtworkGrid,
		theFashionParadoxArtworkGridMobileLeft,
		theFashionParadoxArtworkGridMobileRight
	} from '../../data/Projects/TheFashionParadox/ProjectArtworkGrid';
	import { theFashionParadoxVideos } from '../../data/Projects/TheFashionParadox/ProjectVideo';
	import {
		theFashionParadoxDropdownImages,
		theFashionParadoxDropdownItems
	} from '../../data/Projects/TheFashionParadox/ProjectAboutDropdown';

	// Navigation and utilities
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { theFashionParadoxNavStoreItems } from './store';
	import { theFashionParadoxNavItems } from '../../data/Projects/TheFashionParadox/NavItems';

	// Page metadata
	usePageMetadata({
		title: 'The Fashion Paradox | Artdao',
		description:
			theFashionParadoxIntro.description[0] ||
			'Fashion artists rethinking the role of garments in virtual and physical space.',
		ogImage: `https://artdao.xyz${theFashionParadoxIntro.bgImage}`,
		canonical: 'https://artdao.xyz/the-fashion-paradox'
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
				theFashionParadoxNavStoreItems,
				theFashionParadoxNavItems,
				theFashionParadoxNavItems[0].route
			);
		}
		if (about2IsInView) {
			updateNavBar(
				theFashionParadoxNavStoreItems,
				theFashionParadoxNavItems,
				theFashionParadoxNavItems[1].route
			);
		}
		if (about3IsInView) {
			updateNavBar(
				theFashionParadoxNavStoreItems,
				theFashionParadoxNavItems,
				theFashionParadoxNavItems[2].route
			);
		}
	};

	// Load images
	const loadImages = async () => {
		const images = await preloadImages([
			[theFashionParadoxIntro.bgImage, theFashionParadoxIntro.bgImageMobile],
			about1Images,
			[theFashionParadoxChatInterview1.background],
			about2Images,
			[theFashionParadoxChatInterview2.background],
			about3Images,
			theFashionParadoxArtworkGrid.artworks.map((item) => item.image),
			theFashionParadoxDropdownImages
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Loading reactive
	$: if ($metaballReady) {
		loadImages();
	}

	// Chat interview data with preloaded backgrounds
	$: chatInterviewData1 = {
		...theFashionParadoxChatInterview1,
		background: $preloadedImagesStore
			? $preloadedImagesStore[2][0]
			: theFashionParadoxChatInterview1.background
	};

	$: chatInterviewData2 = {
		...theFashionParadoxChatInterview2,
		background: $preloadedImagesStore
			? $preloadedImagesStore[4][0]
			: theFashionParadoxChatInterview2.background
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
				project={theFashionParadoxIntro}
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
				aboutImages={$preloadedImagesStore[3]}
				route=""
				isImageLeft={false}
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Interview 1 -->
		<div
			id="interview-1"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				// optional: hook into nav if needed
			}}
		>
			<ChatInterview data={chatInterviewData1} />
		</div>

		<!-- Artwork Grid -->
		<div id="artwork-grid">
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={theFashionParadoxArtworkGrid.artworks} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={theFashionParadoxArtworkGridMobileLeft}
					imagesRight={theFashionParadoxArtworkGridMobileRight}
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
				aboutImages={$preloadedImagesStore[5]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Interview 2 -->
		<div
			id="interview-2"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				// optional: hook into nav if needed
			}}
		>
			<ChatInterview data={chatInterviewData2} />
		</div>

		<!-- Dropdown -->
		<div id="artwork-dropdown">
			<ProjectAboutDropdown
				images={$preloadedImagesStore[7]}
				aboutDropdownItems={theFashionParadoxDropdownItems}
				route=""
			/>
		</div>

		<!-- Video -->
		<div id="video">
			<ProjectVideo videoProjects={theFashionParadoxVideos} />
		</div>

		<HomeIcon />
		<Footer project={EProjects.THE_FASHION_PARADOX} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

