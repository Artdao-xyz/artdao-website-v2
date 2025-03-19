<script lang="ts">
	import Loading from '$lib/components/Loading/Loading.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EProjects } from '../../constants/enums';
	import { artificeNavItems } from '../../data/Projects/Artifice/NavItems';
	import {
		furnitureAboutImages,
		kokoAbout,
		kokoAboutImahges,
		panelsAboutImages,
		rnaAbout,
		rnaAboutImages,
		oceanicWhispersAbout,
		oceanicWhispersImages,
		kokoExpoAboutImages,
	} from '../../data/Projects/Artifice/ProjectAbout';
	import {
		psipsikokoDropdownItems,
		vernisaggeDropdownItems
	} from '../../data/Projects/Artifice/ProjectAboutDropdown';
	import { artificeProjectIntro } from '../../data/Projects/Artifice/ProjectIntro';
	import { afterEventVideo, furnitureVideo } from '../../data/Projects/Artifice/ProjectVideo';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { artificeNavStoreItems } from './store';

	let size: number;

	let introIsInView: boolean;
	let kokoIsInView: boolean;
	let panelsIsInView: boolean;
	let videosIsInView: boolean;
	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(artificeNavStoreItems, artificeNavItems, artificeNavItems[0].route);
		}

		if (kokoIsInView) {
			updateNavBar(artificeNavStoreItems, artificeNavItems, artificeNavItems[1].route);
		}

		if (panelsIsInView) {
			updateNavBar(artificeNavStoreItems, artificeNavItems, artificeNavItems[2].route);
		}

		if (videosIsInView) {
			updateNavBar(artificeNavStoreItems, artificeNavItems, artificeNavItems[3].route);
		}
	};

	const preloadedImages = preloadImages([
		[artificeProjectIntro.bgImage, artificeProjectIntro.bgImageMobile],
		kokoAboutImahges,
		furnitureAboutImages,
		psipsikokoDropdownItems.map((item) => item.image),
		panelsAboutImages,
		vernisaggeDropdownItems.map((item) => item.image),
		rnaAboutImages,
		oceanicWhispersImages,
		kokoExpoAboutImages
	]);
</script>

<svelte:window bind:innerWidth={size} />

{#await preloadedImages}
	<Loading />
{:then images}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<div
			id="intro"
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
				project={artificeProjectIntro}
				isCenterImage
				textColor="white"
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
			<ProjectVideo videoProjects={afterEventVideo} route="" />
		</div>

		<div
			id="koko"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				kokoIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				kokoIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				kokoIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={kokoAbout} aboutImages={images[1]} route="" isImageLeft />
		</div>

		<div>
			<ProjectAboutDropdown images={kokoExpoAboutImages} aboutDropdownItems={psipsikokoDropdownItems} route="" />
		</div>

		<div
			id="panels"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				panelsIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				panelsIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				panelsIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={rnaAbout} aboutImages={rnaAboutImages} route="" />

		</div>

		<div
		>
			<!-- <ProjectAbout aboutItem={panelsAbout} aboutImages={images[4]} route="" /> -->

			<ProjectAboutDropdown
				images={images[4]}
				aboutDropdownItems={vernisaggeDropdownItems}
				route=""
			/>
		</div>

		<div>
			<ProjectAbout aboutItem={oceanicWhispersAbout} aboutImages={oceanicWhispersImages} route="" />
		</div>

		<div id="videos"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				videosIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				videosIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				videosIsInView = inView;
			}}
		>
			<ProjectVideo videoProjects={furnitureVideo} route="" />
			<HomeIcon />
			<Footer project={EProjects.ARTIFICE} />
		</div>
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
