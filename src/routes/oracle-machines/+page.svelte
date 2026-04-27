<script lang="ts">
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { oracleMachinesNavItems } from '../../data/Projects/OracleMachines/NavItems';
	import {
		oracleMachinesEdgarFriasAbout,
		oracleMachinesEdgarFriasAboutImage,
		oracleMachinesNoraBermanAbout,
		oracleMachinesNoraBermanAboutImage,
		oracleMachinesSacredTechnologyAbout,
		oracleMachinesSacredTechnologyAboutImage,
		oracleMachinesSpiritualTechnologyAbout,
		oracleMachinesSpiritualTechnologyAboutImage
	} from '../../data/Projects/OracleMachines/ProjectAbout';
	import { oracleMachinesGrid1Images, oracleMachinesGrid2Images } from '../../data/Projects/OracleMachines/ProjectAboutDropdown';
	import { oracleMachinesChatInterview } from '../../data/Projects/OracleMachines/ProjectChatInterview';
	import { oracleMachinesIntro } from '../../data/Projects/OracleMachines/ProjectIntro';
	import {
		oracleMachinesBermanVideos,
		oracleMachinesFriasVideos
	} from '../../data/Projects/OracleMachines/ProjectVideo';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { oracleMachinesNavStoreItems } from './store';

	usePageMetadata({
		title: 'Oracle Machines | Artdao',
		description:
			oracleMachinesIntro.description[0] ||
			'Digital spirituality, ritual livestreams, and artists probing spiritual technology beyond extraction.',
		ogImage: `https://artdao.xyz${oracleMachinesIntro.bgImage}`,
		canonical: 'https://artdao.xyz/oracle-machines'
	});

	let introIsInView: boolean;
	let spiritualIsInView: boolean;
	let edgarSectionIsInView: boolean;
	let noraSectionIsInView: boolean;
	let sacredIsInView: boolean;

	let containerRef: HTMLElement;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		/* Later branches win when multiple sections overlap in view (deeper content overrides intro). */
		if (introIsInView) {
			updateNavBar(oracleMachinesNavStoreItems, oracleMachinesNavItems, 'intro');
		}
		if (spiritualIsInView) {
			updateNavBar(oracleMachinesNavStoreItems, oracleMachinesNavItems, oracleMachinesNavItems[0].route);
		}
		if (edgarSectionIsInView) {
			updateNavBar(oracleMachinesNavStoreItems, oracleMachinesNavItems, oracleMachinesNavItems[1].route);
		}
		if (noraSectionIsInView) {
			updateNavBar(oracleMachinesNavStoreItems, oracleMachinesNavItems, oracleMachinesNavItems[2].route);
		}
		if (sacredIsInView) {
			updateNavBar(oracleMachinesNavStoreItems, oracleMachinesNavItems, oracleMachinesNavItems[3].route);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[oracleMachinesIntro.bgImage, oracleMachinesIntro.bgImageMobile],
			[oracleMachinesSpiritualTechnologyAboutImage],
			[oracleMachinesChatInterview.background],
			[oracleMachinesEdgarFriasAboutImage],
			oracleMachinesGrid1Images,
			[oracleMachinesNoraBermanAboutImage],
			oracleMachinesGrid2Images,
			[oracleMachinesSacredTechnologyAboutImage]
		]);

		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	$: if ($metaballReady) {
		loadImages();
	}

	$: chatInterviewData = {
		...oracleMachinesChatInterview,
		background: $preloadedImagesStore ? $preloadedImagesStore[2][0] : oracleMachinesChatInterview.background
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
				project={oracleMachinesIntro}
				textColor="white"
				forceHeroBackgroundCover={true}
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
				backgroundPosition="center"
			/>
		</div>

		<div
			id="spiritual-technology"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				spiritualIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={oracleMachinesSpiritualTechnologyAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route="spiritual-technology-inner"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="edgar-frias"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				edgarSectionIsInView = event.detail.inView;
			}}
		>
			<ChatInterview data={chatInterviewData} />
			<ProjectAbout
				aboutItem={oracleMachinesEdgarFriasAbout}
				aboutImage={$preloadedImagesStore[3][0]}
				route="edgar-frias-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[4]}
				route="oracle-works-one"
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectVideo videoProjects={oracleMachinesFriasVideos} route="edgar-frias-video" />
		</div>

		<div
			id="nora-berman"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				noraSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={oracleMachinesNoraBermanAbout}
				aboutImage={$preloadedImagesStore[5][0]}
				route="nora-berman-inner"
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[6]}
				route="oracle-works-two"
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectVideo videoProjects={oracleMachinesBermanVideos} route="nora-berman-video" />
		</div>

		<div
			id="sacred-technology"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				sacredIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={oracleMachinesSacredTechnologyAbout}
				aboutImage={$preloadedImagesStore[7][0]}
				route="sacred-technology-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
		</div>

		<HomeIcon />
		<Footer project={EProjects.ORACLE_MACHINES} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
