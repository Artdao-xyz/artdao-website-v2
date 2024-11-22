<script lang="ts">
	import Loading from '$lib/components/Loading/Loading.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { nonPlacesNavItems } from '../../data/Projects/NonPlaces/NavItems';
	import {
		nonPlacesDropdownItems,
		nonPlacesTwoDropdownItems
	} from '../../data/Projects/NonPlaces/ProjectAboutDropdown';
	import { nonPlacesProjectIntro } from '../../data/Projects/NonPlaces/ProjectIntro';
	import { nonPlacesVideo } from '../../data/Projects/NonPlaces/ProjectVideo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { nonPlacesNavStoreItems } from './store';

	let size: number;

	let introIsInView: boolean;
	let venueIsInView: boolean;
	let artworksIsInView: boolean;
	let vernisaggeIsInView: boolean;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[0].route);
		}

		if (venueIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[1].route);
		}

		if (artworksIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[2].route);
		}

		if (vernisaggeIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[3].route);
		}
	};

	const preloadedImages = preloadImages([
		[nonPlacesProjectIntro.bgImage, nonPlacesProjectIntro.bgImageMobile],
		nonPlacesDropdownItems.map((item) => item.image),
		nonPlacesTwoDropdownItems.map((item) => item.image)
	]);
</script>

<svelte:window bind:innerWidth={size} />

{#await preloadedImages}
	<Loading />
{:then images}
	<div
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
				project={nonPlacesProjectIntro}
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
		</div>

		<div
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
			<ProjectVideo videoProjects={nonPlacesVideo} route="venue" />
		</div>

		<div
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
				route="artworks"
			/>
		</div>

		<div
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
				route="vernisagge"
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
