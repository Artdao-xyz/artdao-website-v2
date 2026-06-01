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
	import { motherboardNavItems } from '../../data/Projects/Motherboard/NavItems';
	import {
		motherboardAddieAbout,
		motherboardAddieAboutImage,
		motherboardLaborAbout,
		motherboardLaborImage,
		motherboardWednesdayAbout,
		motherboardWednesdayAboutImage
	} from '../../data/Projects/Motherboard/ProjectAbout';
	import {
		motherboardAddieGridImages,
		motherboardWednesdayGridImages
	} from '../../data/Projects/Motherboard/ProjectAboutDropdown';
	import { motherboardChatInterview } from '../../data/Projects/Motherboard/ProjectChatInterview';
	import { motherboardIntro } from '../../data/Projects/Motherboard/ProjectIntro';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { motherboardNavStoreItems } from './store';

	usePageMetadata({
		title: 'MOTHERBOARD | Artdao',
		description:
			motherboardIntro.description[0] ||
			'Mothers and artists making care legible in digital space—through machines, glitches, and refusal to optimize labor away.',
		ogImage: `https://artdao.xyz${motherboardIntro.bgImage}`,
		canonical: 'https://artdao.xyz/motherboard'
	});

	let introIsInView: boolean;
	let laborIsInView: boolean;
	let wednesdaySectionIsInView: boolean;
	let addieSectionIsInView: boolean;
	let qaIsInView: boolean;

	let containerRef: HTMLElement;

	let preloadTask: Promise<void> | null = null;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(motherboardNavStoreItems, motherboardNavItems, 'intro');
		}
		if (laborIsInView) {
			updateNavBar(
				motherboardNavStoreItems,
				motherboardNavItems,
				motherboardNavItems[0].route
			);
		}
		if (wednesdaySectionIsInView) {
			updateNavBar(
				motherboardNavStoreItems,
				motherboardNavItems,
				motherboardNavItems[1].route
			);
		}
		if (addieSectionIsInView) {
			updateNavBar(
				motherboardNavStoreItems,
				motherboardNavItems,
				motherboardNavItems[2].route
			);
		}
		if (qaIsInView) {
			updateNavBar(motherboardNavStoreItems, motherboardNavItems, motherboardNavItems[3].route);
		}
	};

	function loadProjectImages() {
		if (!preloadTask) {
			preloadTask = (async () => {
				const images = await preloadImages([
					[motherboardIntro.bgImage, motherboardIntro.bgImageMobile],
					[motherboardLaborImage],
					[motherboardWednesdayAboutImage],
					motherboardWednesdayGridImages,
					[motherboardAddieAboutImage],
					motherboardAddieGridImages,
					[motherboardChatInterview.background]
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
		...motherboardChatInterview,
		background: $preloadedImagesStore?.[6]?.[0] ?? motherboardChatInterview.background
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
				project={motherboardIntro}
				textColor="white"
				forceHeroBackgroundCover={true}
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
				backgroundPosition="center"
			/>
		</div>

		<div
			id="labor-underneath"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				laborIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={motherboardLaborAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route="labor-underneath-inner"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="wednesday-kim"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				wednesdaySectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={motherboardWednesdayAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="wednesday-kim-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[3]}
				route="wednesday-kim-works"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="addie-wagenknecht"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				addieSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={motherboardAddieAbout}
				aboutImage={$preloadedImagesStore[4][0]}
				route="addie-wagenknecht-inner"
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[5]}
				route="addie-wagenknecht-works"
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
		<Footer project={EProjects.MOTHERBOARD} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
