<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { portalHighwayNavItems } from '../../data/Projects/PortalHighway/NavItems';
	import {
		portalHighwayClaudiaHartAbout,
		portalHighwayCollectivePassageAbout,
		portalHighwayCollectivePassageImage,
		portalHighwaySpacePopularAbout,
		portalHighwaySpacePopularAboutImage
	} from '../../data/Projects/PortalHighway/ProjectAbout';
	import { portalHighwaySpacePopularGridImages } from '../../data/Projects/PortalHighway/ProjectAboutDropdown';
	import { portalHighwayChatInterview } from '../../data/Projects/PortalHighway/ProjectChatInterview';
	import { portalHighwayIntro } from '../../data/Projects/PortalHighway/ProjectIntro';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { portalHighwayNavStoreItems } from './store';

	usePageMetadata({
		title: 'Portal Highway | Artdao',
		description:
			portalHighwayIntro.description[0] ||
			'Artists reclaim the gradient, the curtain, and the visible seam—designing civic infrastructure for worlds that do not yet exist.',
		ogImage: `https://artdao.xyz${portalHighwayIntro.bgImage}`,
		canonical: 'https://artdao.xyz/portal-highway'
	});

	let introIsInView: boolean;
	let collectivePassageIsInView: boolean;
	let spacePopularSectionIsInView: boolean;
	let claudiaHartSectionIsInView: boolean;
	let qaIsInView: boolean;

	let containerRef: HTMLElement;

	let preloadTask: Promise<void> | null = null;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(portalHighwayNavStoreItems, portalHighwayNavItems, 'intro');
		}
		if (collectivePassageIsInView) {
			updateNavBar(
				portalHighwayNavStoreItems,
				portalHighwayNavItems,
				portalHighwayNavItems[0].route
			);
		}
		if (spacePopularSectionIsInView) {
			updateNavBar(
				portalHighwayNavStoreItems,
				portalHighwayNavItems,
				portalHighwayNavItems[1].route
			);
		}
		if (claudiaHartSectionIsInView) {
			updateNavBar(
				portalHighwayNavStoreItems,
				portalHighwayNavItems,
				portalHighwayNavItems[2].route
			);
		}
		if (qaIsInView) {
			updateNavBar(portalHighwayNavStoreItems, portalHighwayNavItems, portalHighwayNavItems[3].route);
		}
	};

	function loadProjectImages() {
		if (!preloadTask) {
			preloadTask = (async () => {
				const images = await preloadImages([
					[portalHighwayIntro.bgImage, portalHighwayIntro.bgImageMobile],
					[portalHighwayCollectivePassageImage],
					[portalHighwaySpacePopularAboutImage],
					portalHighwaySpacePopularGridImages,
					[portalHighwayChatInterview.background]
				]);

				preloadedImagesStore.set(images);
				imagesLoaded.set(true);
			})();
		}
		return preloadTask;
	}

	$: if ($metaballReady) {
		void loadProjectImages();
	}

	onMount(() => {
		void loadProjectImages();
	});

	$: chatInterviewData = {
		...portalHighwayChatInterview,
		background: $preloadedImagesStore?.[4]?.[0] ?? portalHighwayChatInterview.background
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
		<div
			id="intro"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				introIsInView = event.detail.inView;
			}}
		>
			<ProjectIntro
				project={portalHighwayIntro}
				textColor="white"
				forceHeroBackgroundCover={true}
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
				backgroundPosition="center"
			/>
		</div>

		<div
			id="collective-passage"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				collectivePassageIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={portalHighwayCollectivePassageAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route="collective-passage-inner"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="space-popular"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				spacePopularSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={portalHighwaySpacePopularAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="space-popular-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[3]}
				route="space-popular-works"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="claudia-hart"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				claudiaHartSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={portalHighwayClaudiaHartAbout}
				route="claudia-hart-inner"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="qa"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				qaIsInView = event.detail.inView;
			}}
		>
			<ChatInterview data={chatInterviewData} />
		</div>

		<HomeIcon />
		<Footer project={EProjects.PORTAL_HIGHWAY} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
