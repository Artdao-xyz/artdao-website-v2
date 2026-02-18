<script lang="ts">
	import { inview } from 'svelte-inview';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	
	// Project data
	import { postCatastropheImaginationIntro } from '../../data/Projects/PostCatastropheImagination/ProjectIntro';
	import { about1, about1Images, about2, about2Images, about3, about3Images } from '../../data/Projects/PostCatastropheImagination/ProjectAbout';
	import { postCatastropheImaginationChatInterview1, postCatastropheImaginationChatInterview2 } from '../../data/Projects/PostCatastropheImagination/ProjectChatInterview';
	import { 
		postCatastropheImaginationDropdown1Images, 
		postCatastropheImaginationDropdown1Items,
		postCatastropheImaginationDropdown2Images,
		postCatastropheImaginationDropdown2Items
	} from '../../data/Projects/PostCatastropheImagination/ProjectAboutDropdown';
	import { postCatastropheImaginationVideos } from '../../data/Projects/PostCatastropheImagination/ProjectVideo';
	
	// Navigation and utilities
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { metaballReady, preloadedImages as preloadedImagesStore, imagesLoaded } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { postCatastropheImaginationNavStoreItems } from './store';
	import { postCatastropheImaginationNavItems } from '../../data/Projects/PostCatastropheImagination/NavItems';
	
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
			updateNavBar(postCatastropheImaginationNavStoreItems, postCatastropheImaginationNavItems, postCatastropheImaginationNavItems[0].route);
		}
		if (about2IsInView) {
			updateNavBar(postCatastropheImaginationNavStoreItems, postCatastropheImaginationNavItems, postCatastropheImaginationNavItems[1].route);
		}
		if (about3IsInView) {
			updateNavBar(postCatastropheImaginationNavStoreItems, postCatastropheImaginationNavItems, postCatastropheImaginationNavItems[2].route);
		}
	};
	
	// Load images
	const loadImages = async () => {
		const images = await preloadImages([
			[postCatastropheImaginationIntro.bgImage, postCatastropheImaginationIntro.bgImageMobile],
			about1Images,
			about2Images,
			[postCatastropheImaginationChatInterview1.background],
			postCatastropheImaginationDropdown1Images,
			about3Images,
			[postCatastropheImaginationChatInterview2.background],
			postCatastropheImaginationDropdown2Images
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};
	
	// Loading reactive
	$: if ($metaballReady) {
		loadImages();
	}
	
	$: chatInterviewData1 = {
		...postCatastropheImaginationChatInterview1,
		background: $preloadedImagesStore ? $preloadedImagesStore[3][0] : postCatastropheImaginationChatInterview1.background
	};
	
	$: chatInterviewData2 = {
		...postCatastropheImaginationChatInterview2,
		background: $preloadedImagesStore ? $preloadedImagesStore[6][0] : postCatastropheImaginationChatInterview2.background
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
				project={postCatastropheImaginationIntro}
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
		
		<!-- Chat Interview 1 -->
		<div
			id="interview"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				// interviewIsInView = event.detail.inView;
			}}
		>
			<ChatInterview data={chatInterviewData1} />
		</div>
		
		<!-- Dropdown 1 -->
		<div>
			<ProjectAboutDropdown 
				images={$preloadedImagesStore[4]} 
				aboutDropdownItems={postCatastropheImaginationDropdown1Items} 
				route="" 
			/>
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
		
		<!-- Chat Interview 2 -->
		<div
			id="interview-2"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				// interview2IsInView = event.detail.inView;
			}}
		>
			<ChatInterview data={chatInterviewData2} />
		</div>
		
		<!-- Dropdown 2 -->
		<div>
			<ProjectAboutDropdown 
				images={$preloadedImagesStore[7]} 
				aboutDropdownItems={postCatastropheImaginationDropdown2Items} 
				route="" 
			/>
		</div>
		
		<!-- Video -->
		<div>
			<ProjectVideo videoProjects={postCatastropheImaginationVideos} />
		</div>
		
		<HomeIcon />
		<Footer project={EProjects.POST_CATASTROPHE_IMAGINATION} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

