<script lang="ts">
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
	import { humanCausedErrorNavItems } from '../../data/Projects/HumanCausedError/NavItems';
	import {
		humanCausedErrorFrictionAbout,
		humanCausedErrorFrictionImage,
		humanCausedErrorMarcoDonnarummaAbout,
		humanCausedErrorMarcoDonnarummaAboutImage,
		humanCausedErrorMonicaRikicAbout,
		humanCausedErrorMonicaRikicAboutImage
	} from '../../data/Projects/HumanCausedError/ProjectAbout';
	import {
		humanCausedErrorMarcoGridImages,
		humanCausedErrorMonicaGridImages
	} from '../../data/Projects/HumanCausedError/ProjectAboutDropdown';
	import {
		humanCausedErrorChatInterview,
		humanCausedErrorChatInterviewBackground
	} from '../../data/Projects/HumanCausedError/ProjectChatInterview';
	import { humanCausedErrorIntro } from '../../data/Projects/HumanCausedError/ProjectIntro';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { humanCausedErrorNavStoreItems } from './store';

	usePageMetadata({
		title: 'Human Caused Error | Artdao',
		description:
			humanCausedErrorIntro.description[0] ||
			'Artists who claim misalignment, breakdown, and error as productive sites for inquiry—where friction between human bodies and machines exposes technological assumptions.',
		ogImage: `https://artdao.xyz${humanCausedErrorIntro.bgImage}`,
		canonical: 'https://artdao.xyz/human-caused-error'
	});

	let introIsInView: boolean;
	let frictionIsInView: boolean;
	let marcoSectionIsInView: boolean;
	let monicaSectionIsInView: boolean;
	let qaIsInView: boolean;

	let containerRef: HTMLElement;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(humanCausedErrorNavStoreItems, humanCausedErrorNavItems, 'intro');
		}
		if (frictionIsInView) {
			updateNavBar(
				humanCausedErrorNavStoreItems,
				humanCausedErrorNavItems,
				humanCausedErrorNavItems[0].route
			);
		}
		if (marcoSectionIsInView) {
			updateNavBar(
				humanCausedErrorNavStoreItems,
				humanCausedErrorNavItems,
				humanCausedErrorNavItems[1].route
			);
		}
		if (monicaSectionIsInView) {
			updateNavBar(
				humanCausedErrorNavStoreItems,
				humanCausedErrorNavItems,
				humanCausedErrorNavItems[2].route
			);
		}
		if (qaIsInView) {
			updateNavBar(
				humanCausedErrorNavStoreItems,
				humanCausedErrorNavItems,
				humanCausedErrorNavItems[3].route
			);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[humanCausedErrorIntro.bgImage, humanCausedErrorIntro.bgImageMobile],
			[humanCausedErrorFrictionImage],
			[humanCausedErrorMarcoDonnarummaAboutImage],
			humanCausedErrorMarcoGridImages,
			[humanCausedErrorMonicaRikicAboutImage],
			humanCausedErrorMonicaGridImages,
			[humanCausedErrorChatInterviewBackground]
		]);

		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	$: if ($metaballReady) {
		loadImages();
	}

	$: chatInterviewData = {
		...humanCausedErrorChatInterview,
		background: $preloadedImagesStore
			? $preloadedImagesStore[6][0]
			: humanCausedErrorChatInterview.background
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
				project={humanCausedErrorIntro}
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
				frictionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={humanCausedErrorFrictionAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route="friction-inner"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="marco-donnarumma"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				marcoSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={humanCausedErrorMarcoDonnarummaAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="marco-donnarumma-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[3]}
				route="marco-donnarumma-works"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="monica-rikic"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				monicaSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={humanCausedErrorMonicaRikicAbout}
				aboutImage={$preloadedImagesStore[4][0]}
				route="monica-rikic-inner"
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[5]}
				route="monica-rikic-works"
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
		<Footer project={EProjects.HUMAN_CAUSED_ERROR} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
