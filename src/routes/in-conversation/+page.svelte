<script lang="ts">
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EProjects } from '../../constants/enums';
	import { inConversationNavItems } from '../../data/Projects/InConversation/NavItems';
	import { inConversationDropdownItems } from '../../data/Projects/InConversation/ProjectAboutDropdown';
	import { inConversationProjectIntro } from '../../data/Projects/InConversation/ProjectIntro';
	import { inConversationVideo } from '../../data/Projects/InConversation/ProjectVideo';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';

	// Set page metadata
	usePageMetadata({
		title: 'In Conversation with Operator | Artdao',
		description: inConversationProjectIntro.description[0] || 'An intimate conversation with the artistic duo Operator.',
		ogImage: 'https://artdao.xyz/banner.png', // Using default since bgImage is an import
		canonical: 'https://artdao.xyz/in-conversation'
	});
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { inConversationNavStoreItems } from './store';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	
	let size: number;
	let introIsInView: boolean;
	let interviewIsInView: boolean;
	let exhibitionIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(
				inConversationNavStoreItems,
				inConversationNavItems,
				inConversationNavItems[0].route
			);
		}

		if (interviewIsInView) {
			updateNavBar(
				inConversationNavStoreItems,
				inConversationNavItems,
				inConversationNavItems[1].route
			);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[inConversationProjectIntro.bgImage, inConversationProjectIntro.bgImageMobile],
			inConversationDropdownItems.map((item) => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}
</script>

<svelte:window bind:innerWidth={size} />

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		transition:fly={{ duration: 1000, delay: 750, y: 30, easing: cubicInOut }}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<div
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
				project={inConversationProjectIntro}
				textColor="white"
				isCenterImage
				isWiderTitle
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>

		<div
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				interviewIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				interviewIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				interviewIsInView = inView;
			}}
		>
			<ProjectVideo videoProjects={inConversationVideo} route="interview" />
		</div>

		<HomeIcon />
		<Footer project={EProjects.IN_CONVERSATION} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
