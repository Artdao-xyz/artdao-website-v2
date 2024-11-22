<script lang="ts">
	import Loading from '$lib/components/Loading/Loading.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectAudioFiles from '$lib/components/ProjectAudioFiles/ProjectAudioFiles.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { raveNavItems } from '../../data/Projects/Rave/NavItems';
	import {
		performanceDropdownItems,
		raveAboutDropdopwnItems,
		raveAboutDropdopwnItemsTwo
	} from '../../data/Projects/Rave/ProjectAboutDropdown';
	import { raveAudioFiles } from '../../data/Projects/Rave/ProjectAudioFiles';
	import { raveProject } from '../../data/Projects/Rave/ProjectIntro';
	import {
		afterPartyVideo,
		blessingForSaleVideo,
		frequencyVideo,
		fwvnVideo,
		petroVideo
	} from '../../data/Projects/Rave/ProjectVideo';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { raveNavStoreItems } from './store';

	let introIsInView: boolean;
	let artistsIsInView: boolean;
	let eventIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(raveNavStoreItems, raveNavItems, raveNavItems[0].route);
		}

		if (artistsIsInView) {
			updateNavBar(raveNavStoreItems, raveNavItems, raveNavItems[1].route);
		}

		if (eventIsInView) {
			updateNavBar(raveNavStoreItems, raveNavItems, raveNavItems[2].route);
		}
	};

	const preloadedImages = preloadImages([
		[raveProject.bgImage, raveProject.bgImageMobile],
		raveAboutDropdopwnItems.map((image) => image.image),
		performanceDropdownItems.map((item) => item.image),
		raveAboutDropdopwnItemsTwo.map((item) => item.image)
	]);
</script>

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
				project={raveProject}
				isCenterImage
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
		</div>

		<div
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artistsIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				artistsIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				artistsIsInView = inView;
			}}
		>
			<ProjectAboutDropdown
				images={images[1]}
				aboutDropdownItems={raveAboutDropdopwnItems}
				route={raveNavItems[1].route}
			/>

			<ProjectVideo videoProjects={[blessingForSaleVideo, fwvnVideo, frequencyVideo]} />

			<ProjectAudioFiles
				audioItems={raveAudioFiles}
				title="Cybernetic collaboration between Clauthewitch and NICØ"
				route="artists-end"
			/>
		</div>

		<div
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				eventIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				eventIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				eventIsInView = inView;
			}}
		>
			<ProjectAboutDropdown
				images={images[2]}
				aboutDropdownItems={performanceDropdownItems}
				route={raveNavItems[2].route}
			/>

			<ProjectVideo videoProjects={[afterPartyVideo, petroVideo]} />

			<ProjectAboutDropdown
				images={images[3]}
				aboutDropdownItems={raveAboutDropdopwnItemsTwo}
				route=""
			/>
		</div>

		<HomeIcon />
		<Footer />
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
