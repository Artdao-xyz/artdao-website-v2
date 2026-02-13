<script lang="ts">
	import { inview } from 'svelte-inview';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import type { IGalleryImageMobile } from '$lib/elements/ArtworkContainer/interfaces';
	
	// Project data
	import { corruptedFleshIntro } from '../../data/Projects/CorruptedFlesh/ProjectIntro';
	import { about1, about1Images, about2, about2Images, about3, about3Images, about4, about4Images } from '../../data/Projects/CorruptedFlesh/ProjectAbout';
	import { corruptedFleshChatInterview } from '../../data/Projects/CorruptedFlesh/ProjectChatInterview';
	import { 
		corruptedFleshArtworkGrid1, 
		corruptedFleshArtworkGrid1Mobile,
		corruptedFleshArtworkGrid2, 
		corruptedFleshArtworkGrid2Mobile,
		corruptedFleshArtworkGrid3,
		corruptedFleshArtworkGrid3Mobile
	} from '../../data/Projects/CorruptedFlesh/ProjectArtworkGrid';
	
	// Navigation and utilities
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { metaballReady, preloadedImages as preloadedImagesStore, imagesLoaded } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { corruptedFleshNavStoreItems } from './store';
	import { corruptedFleshNavItems } from '../../data/Projects/CorruptedFlesh/NavItems';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	
	// Split mobile arrays into left/right halves for the grid
	const splitMobileGrid = (arr: IGalleryImageMobile[]) => {
		const half = Math.ceil(arr.length / 2);
		return [arr.slice(0, half), arr.slice(half)];
	};

	const [corruptedFleshArtworkGrid1MobileLeft, corruptedFleshArtworkGrid1MobileRight] = splitMobileGrid(corruptedFleshArtworkGrid1Mobile);
	const [corruptedFleshArtworkGrid2MobileLeft, corruptedFleshArtworkGrid2MobileRight] = splitMobileGrid(corruptedFleshArtworkGrid2Mobile);
	const [corruptedFleshArtworkGrid3MobileLeft, corruptedFleshArtworkGrid3MobileRight] = splitMobileGrid(corruptedFleshArtworkGrid3Mobile);
	
	// State variables
	let introIsInView: boolean;
	let about1IsInView: boolean;
	let interviewIsInView: boolean;
	let about2IsInView: boolean;
	let about3IsInView: boolean;
	let about4IsInView: boolean;
	let containerRef: any;
	
	// Scroll function
	const handleOnScroll = () => {
		getMetaballProgress(containerRef);
		
		if (about1IsInView) {
			updateNavBar(corruptedFleshNavStoreItems, corruptedFleshNavItems, corruptedFleshNavItems[0].route);
		}
		if (about2IsInView) {
			updateNavBar(corruptedFleshNavStoreItems, corruptedFleshNavItems, corruptedFleshNavItems[1].route);
		}
		if (about3IsInView) {
			updateNavBar(corruptedFleshNavStoreItems, corruptedFleshNavItems, corruptedFleshNavItems[2].route);
		}
		if (about4IsInView) {
			updateNavBar(corruptedFleshNavStoreItems, corruptedFleshNavItems, corruptedFleshNavItems[3].route);
		}
	};
	
	// Load images
	const loadImages = async () => {
		const images = await preloadImages([
			[corruptedFleshIntro.bgImage, corruptedFleshIntro.bgImageMobile],
			about1Images,
			[corruptedFleshChatInterview.background],
			about2Images,
			corruptedFleshArtworkGrid1.map((item) => item.image),
			about3Images,
			corruptedFleshArtworkGrid2.map((item) => item.image),
			about4Images,
			corruptedFleshArtworkGrid3.map((item) => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};
	
	// Loading reactive
	$: if ($metaballReady) {
		loadImages();
	}
	
	$: chatInterviewData = {
		...corruptedFleshChatInterview,
		background: $preloadedImagesStore ? $preloadedImagesStore[2][0] : corruptedFleshChatInterview.background
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
				project={corruptedFleshIntro}
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
		
		<!-- Chat Interview -->
		<div
			id="interview"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				interviewIsInView = event.detail.inView;
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
				aboutImages={$preloadedImagesStore[3]}
				isImageLeft={false}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>
		
		<!-- Artwork Grid 1 -->
		<div>
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={corruptedFleshArtworkGrid1} showDetails={false} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={corruptedFleshArtworkGrid1MobileLeft}
					imagesRight={corruptedFleshArtworkGrid1MobileRight}
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
		
		<!-- Artwork Grid 2 -->
		<div>
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={corruptedFleshArtworkGrid2} showDetails={false} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={corruptedFleshArtworkGrid2MobileLeft}
					imagesRight={corruptedFleshArtworkGrid2MobileRight}
				/>
			</div>
		</div>
		
		<!-- About 4 -->
		<div
			id="about4"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				about4IsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={about4}
				aboutImages={$preloadedImagesStore[7]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>
		
		<!-- Artwork Grid 3 -->
		<div>
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={corruptedFleshArtworkGrid3} showDetails={false} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={corruptedFleshArtworkGrid3MobileLeft}
					imagesRight={corruptedFleshArtworkGrid3MobileRight}
				/>
			</div>
		</div>
		
		<HomeIcon />
		<Footer project={EProjects.CORRUPTED_FLESH} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
