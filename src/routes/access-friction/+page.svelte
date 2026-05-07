<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { accessFrictionNavItems } from '../../data/Projects/AccessFriction/NavItems';
	import {
		accessFrictionCieloAbout,
		accessFrictionCieloAboutImage,
		accessFrictionNataleeAbout,
		accessFrictionNataleeAboutImage,
		accessFrictionSectionAbout,
		accessFrictionSectionImage
	} from '../../data/Projects/AccessFriction/ProjectAbout';
	import { accessFrictionChatInterview } from '../../data/Projects/AccessFriction/ProjectChatInterview';
	import { accessFrictionIntro } from '../../data/Projects/AccessFriction/ProjectIntro';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { accessFrictionNavStoreItems } from './store';

	usePageMetadata({
		title: 'Access Friction | Artdao',
		description:
			accessFrictionIntro.description[0] ||
			'Disabled artists working in VR and motion capture refute the clean data normative platforms demand—where glitches become evidence and virtuality is rewritten on disabled terms.',
		ogImage: `https://artdao.xyz${accessFrictionIntro.bgImage}`,
		canonical: 'https://artdao.xyz/access-friction'
	});

	let introIsInView: boolean;
	let frictionSectionIsInView: boolean;
	let cieloSectionIsInView: boolean;
	let nataleeSectionIsInView: boolean;
	let qaIsInView: boolean;

	let containerRef: HTMLElement;

	/** Single flight: page content must not wait only on metaball (slow load / direct navigation). */
	let preloadTask: Promise<void> | null = null;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(accessFrictionNavStoreItems, accessFrictionNavItems, 'intro');
		}
		if (frictionSectionIsInView) {
			updateNavBar(
				accessFrictionNavStoreItems,
				accessFrictionNavItems,
				accessFrictionNavItems[0].route
			);
		}
		if (cieloSectionIsInView) {
			updateNavBar(
				accessFrictionNavStoreItems,
				accessFrictionNavItems,
				accessFrictionNavItems[1].route
			);
		}
		if (nataleeSectionIsInView) {
			updateNavBar(
				accessFrictionNavStoreItems,
				accessFrictionNavItems,
				accessFrictionNavItems[2].route
			);
		}
		if (qaIsInView) {
			updateNavBar(
				accessFrictionNavStoreItems,
				accessFrictionNavItems,
				accessFrictionNavItems[3].route
			);
		}
	};

	function loadProjectImages() {
		if (!preloadTask) {
			preloadTask = (async () => {
				const images = await preloadImages([
					[accessFrictionIntro.bgImage, accessFrictionIntro.bgImageMobile],
					[accessFrictionSectionImage],
					[accessFrictionCieloAboutImage],
					[accessFrictionNataleeAboutImage],
					[accessFrictionChatInterview.background]
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
		...accessFrictionChatInterview,
		background:
			$preloadedImagesStore?.[4]?.[0] ?? accessFrictionChatInterview.background
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
				project={accessFrictionIntro}
				textColor="black"
				forceHeroBackgroundCover={true}
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
				backgroundPosition="center"
			/>
		</div>

		<div
			id="friction"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				frictionSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={accessFrictionSectionAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route="friction-inner"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="cielo-g-saucedo"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				cieloSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={accessFrictionCieloAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="cielo-g-saucedo-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
		</div>

		<div
			id="natalee-decker"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				nataleeSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={accessFrictionNataleeAbout}
				aboutImage={$preloadedImagesStore[3][0]}
				route="natalee-decker-inner"
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
		<Footer project={EProjects.ACCESS_FRICTION} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
