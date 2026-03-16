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
	import { onlineFemininityIntro } from '../../data/Projects/OnlineFemininity/ProjectIntro';
	import {
		about1,
		about1Images,
		about2,
		about2Images,
		about3,
		about3Images
	} from '../../data/Projects/OnlineFemininity/ProjectAbout';
	import { onlineFemininityChatInterview } from '../../data/Projects/OnlineFemininity/ProjectChatInterview';
import {
	onlineFemininityArtworkGrid,
	onlineFemininityArtworkGridMobileLeft,
	onlineFemininityArtworkGridMobileRight,
	onlineFemininityArtworkGrid2,
	onlineFemininityArtworkGrid2MobileLeft,
	onlineFemininityArtworkGrid2MobileRight
} from '../../data/Projects/OnlineFemininity/ProjectArtworkGrid';

	// Navigation and utilities
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { onlineFemininityNavStoreItems } from './store';
	import { onlineFemininityNavItems } from '../../data/Projects/OnlineFemininity/NavItems';

	// Page metadata
	usePageMetadata({
		title: 'Online Femininity | Artdao',
		description:
			onlineFemininityIntro.description[0] ||
			'Femme and women artists navigating Web3’s power structures.',
		ogImage: `https://artdao.xyz${onlineFemininityIntro.bgImage}`,
		canonical: 'https://artdao.xyz/online-feminity'
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
				onlineFemininityNavStoreItems,
				onlineFemininityNavItems,
				onlineFemininityNavItems[0].route
			);
		}
		if (about2IsInView) {
			updateNavBar(
				onlineFemininityNavStoreItems,
				onlineFemininityNavItems,
				onlineFemininityNavItems[1].route
			);
		}
		if (about3IsInView) {
			updateNavBar(
				onlineFemininityNavStoreItems,
				onlineFemininityNavItems,
				onlineFemininityNavItems[2].route
			);
		}
	};

	// Load images
	const loadImages = async () => {
		const images = await preloadImages([
			[onlineFemininityIntro.bgImage, onlineFemininityIntro.bgImageMobile],
			about1Images,
			about2Images,
			about3Images,
			[onlineFemininityChatInterview.background],
			onlineFemininityArtworkGrid.artworks.map((item) => item.image),
			onlineFemininityArtworkGrid2.artworks.map((item) => item.image)
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
		...onlineFemininityChatInterview,
		background: $preloadedImagesStore
			? $preloadedImagesStore[4][0]
			: onlineFemininityChatInterview.background
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
				project={onlineFemininityIntro}
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
				<ProjectArtworkGrid galleryImages={onlineFemininityArtworkGrid.artworks} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={onlineFemininityArtworkGridMobileLeft}
					imagesRight={onlineFemininityArtworkGridMobileRight}
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


		<!-- Artwork Grid 2 -->
		<div id="artwork-grid-2">
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={onlineFemininityArtworkGrid2.artworks} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={onlineFemininityArtworkGrid2MobileLeft}
					imagesRight={onlineFemininityArtworkGrid2MobileRight}
				/>
			</div>
		</div>

		<HomeIcon />
		<Footer project={EProjects.ONLINE_FEMINITY} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

