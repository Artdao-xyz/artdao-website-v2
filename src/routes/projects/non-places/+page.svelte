<script lang="ts">
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { nonPlacesNavItems } from '../../../data/Projects/NonPlaces/NavItems';
	import {
		nonPlacesDropdownItems,
		nonPlacesTwoDropdownItems
	} from '../../../data/Projects/NonPlaces/ProjectAboutDropdown';
	import { nonPlacesProjectIntro } from '../../../data/Projects/NonPlaces/ProjectIntro';
	import { nonPlacesVideo } from '../../../data/Projects/NonPlaces/ProjectVideo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../../utils/nav/updateNavBar';
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
</script>

<svelte:window bind:innerWidth={size} />

{#each nonPlacesProjectIntro.bgImage as image}
	<link rel="preload" as="image" href={image} />
{/each}

{#each nonPlacesProjectIntro.bgImageMobile as image}
	<link rel="preload" as="image" href={image} />
{/each}

{#each nonPlacesDropdownItems.map((item) => item.image) as image}
	<link rel="preload" as="image" href={image} />
{/each}

{#each nonPlacesTwoDropdownItems.map((item) => item.image) as image}
	<link rel="preload" as="image" href={image} />
{/each}

<div
	on:scroll={handleOnScroll}
	on:touchmove={handleOnScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden sm:snap-y sm:snap-mandatory overflow-y-auto sm:h-screen"
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
		<ProjectIntro project={nonPlacesProjectIntro} />
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
			images={nonPlacesDropdownItems.map((item) => item.image)}
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
			images={nonPlacesTwoDropdownItems.map((item) => item.image)}
			aboutDropdownItems={nonPlacesTwoDropdownItems}
			route="vernisagge"
		/>
	</div>

	<HomeIcon />
	<Footer />
</div>
