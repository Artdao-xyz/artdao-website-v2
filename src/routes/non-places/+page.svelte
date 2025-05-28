<script lang="ts">
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EProjects } from '../../constants/enums';
	import { nonPlacesNavItems } from '../../data/Projects/NonPlaces/NavItems';
	import {
		nonPlacesDropdownItems,
		nonPlacesTwoDropdownItems
	} from '../../data/Projects/NonPlaces/ProjectAboutDropdown';
	import { nonPlacesProjectIntro } from '../../data/Projects/NonPlaces/ProjectIntro';
	import {
		nonPlacesVernissageVideo,
		nonPlacesVideo
	} from '../../data/Projects/NonPlaces/ProjectVideo';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { getProjectRefs } from '../../utils/projectsRefs/getProjectRefs';
	import { nonPlacesNavStoreItems } from './store';

	let size: number;

	let introIsInView: boolean;
	let venueIsInView: boolean;
	let artworksIsInView: boolean;
	let vernisaggeIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[0].route);
		}

		if (venueIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[1].route);
		}

		if (vernisaggeIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[2].route);
		}

		if (artworksIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[3].route);
		}
	};

	const preloadedImages = preloadImages([
		[nonPlacesProjectIntro.bgImage, nonPlacesProjectIntro.bgImageMobile],
		nonPlacesDropdownItems.map((item) => item.image),
		nonPlacesTwoDropdownItems.map((item) => item.image)
	]);

	let refs = getProjectRefs(EProjects.NON_PLACES);
</script>

<svelte:window bind:innerWidth={size} />

{#await preloadedImages}
	<LoadingV2 />
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
				project={nonPlacesProjectIntro}
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
		</div>

		<div
			id="venue"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				venueIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				venueIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				venueIsInView = inView;
			}}
		>
			<ProjectVideo videoProjects={nonPlacesVideo} route="venue-end" />
		</div>

		<div
			id="vernisagge"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				vernisaggeIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				vernisaggeIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				vernisaggeIsInView = inView;
			}}
		>
			<ProjectAboutDropdown
				images={images[2]}
				aboutDropdownItems={nonPlacesTwoDropdownItems}
				route=""
			/>

			<ProjectVideo videoProjects={nonPlacesVernissageVideo} route="vernisagge-end" />
		</div>

		<div
			id="artworks"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artworksIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				artworksIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				artworksIsInView = inView;
			}}
		>
			<ProjectAboutDropdown
				images={images[1]}
				aboutDropdownItems={nonPlacesDropdownItems}
				route="artworks-end"
			/>
		</div>

		<HomeIcon />
		<Footer project={EProjects.NON_PLACES} />
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
