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
	import { syntheticSensesNavItems } from '../../data/Projects/SyntheticSenses/NavItems';
	import {
		syntheticSensesAuroraMititeluAbout,
		syntheticSensesAuroraMititeluAboutImage,
		syntheticSensesDataVisualizationAbout,
		syntheticSensesDataVisualizationImage,
		syntheticSensesParagMitalAbout,
		syntheticSensesParagMitalAboutImage
	} from '../../data/Projects/SyntheticSenses/ProjectAbout';
	import {
		syntheticSensesAuroraGridImages,
		syntheticSensesParagDropdownItems,
		syntheticSensesParagGridImages
	} from '../../data/Projects/SyntheticSenses/ProjectAboutDropdown';
	import {
		syntheticSensesChatInterview,
		syntheticSensesChatInterviewBackground
	} from '../../data/Projects/SyntheticSenses/ProjectChatInterview';
	import { syntheticSensesIntro } from '../../data/Projects/SyntheticSenses/ProjectIntro';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { syntheticSensesNavStoreItems } from './store';

	usePageMetadata({
		title: 'Synthetic Senses | Artdao',
		description:
			syntheticSensesIntro.description[0] ||
			'Artists using machine learning, sensors, and generative systems to scramble perception—where installations take on their own personalities.',
		ogImage: `https://artdao.xyz${syntheticSensesIntro.bgImage}`,
		canonical: 'https://artdao.xyz/synthetic-senses'
	});

	let introIsInView: boolean;
	let dataVizIsInView: boolean;
	let paragSectionIsInView: boolean;
	let auroraSectionIsInView: boolean;
	let qaIsInView: boolean;

	let containerRef: HTMLElement;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(syntheticSensesNavStoreItems, syntheticSensesNavItems, 'intro');
		}
		if (dataVizIsInView) {
			updateNavBar(
				syntheticSensesNavStoreItems,
				syntheticSensesNavItems,
				syntheticSensesNavItems[0].route
			);
		}
		if (paragSectionIsInView) {
			updateNavBar(
				syntheticSensesNavStoreItems,
				syntheticSensesNavItems,
				syntheticSensesNavItems[1].route
			);
		}
		if (auroraSectionIsInView) {
			updateNavBar(
				syntheticSensesNavStoreItems,
				syntheticSensesNavItems,
				syntheticSensesNavItems[2].route
			);
		}
		if (qaIsInView) {
			updateNavBar(
				syntheticSensesNavStoreItems,
				syntheticSensesNavItems,
				syntheticSensesNavItems[3].route
			);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[syntheticSensesIntro.bgImage, syntheticSensesIntro.bgImageMobile],
			[syntheticSensesDataVisualizationImage],
			[syntheticSensesParagMitalAboutImage],
			syntheticSensesParagGridImages,
			[syntheticSensesAuroraMititeluAboutImage],
			syntheticSensesAuroraGridImages,
			[syntheticSensesChatInterviewBackground]
		]);

		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	$: if ($metaballReady) {
		loadImages();
	}

	$: chatInterviewData = {
		...syntheticSensesChatInterview,
		background: $preloadedImagesStore
			? $preloadedImagesStore[6][0]
			: syntheticSensesChatInterview.background
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
				project={syntheticSensesIntro}
				textColor="black"
				forceHeroBackgroundCover={true}
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
				backgroundPosition="center"
			/>
		</div>

		<div
			id="data-visualization"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				dataVizIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={syntheticSensesDataVisualizationAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route="data-visualization-inner"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="parag-mital"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				paragSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={syntheticSensesParagMitalAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="parag-mital-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={syntheticSensesParagDropdownItems}
				images={$preloadedImagesStore[3]}
				route="parag-mital-works"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="aurora-mititelu"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				auroraSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={syntheticSensesAuroraMititeluAbout}
				aboutImage={$preloadedImagesStore[4][0]}
				route="aurora-mititelu-inner"
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[5]}
				route="aurora-mititelu-works"
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
		<Footer project={EProjects.SYNTHETIC_SENSES} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
