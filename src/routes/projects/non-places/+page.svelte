<script lang="ts">
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import {
		nonPlacesDropdownItems,
		nonPlacesTwoDropdownItems
	} from '../../../data/Projects/NonPlaces/ProjectAboutDropdown';
	import { nonPlacesProjectIntro } from '../../../data/Projects/NonPlaces/ProjectIntro';
	import { nonPlacesVideo } from '../../../data/Projects/NonPlaces/ProjectVideo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { nonPlacesNavStoreItems } from './store';

	let size: number;

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const marcus = document.getElementById('marcus');
		const marcusEnd = document.getElementById('marcus-end');
		const sulkian = document.getElementById('sulkian');
		const sulkianEnd = document.getElementById('sulkian-end');
		const parsa = document.getElementById('parsa');
		const parsaEnd = document.getElementById('parsa-end');

		if (elementIsVisibleInViewport(intro)) {
			nonPlacesNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'The Venue',
					route: 'venue',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(marcus, true) || elementIsVisibleInViewport(marcusEnd)) {
			nonPlacesNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'The Venue',
					route: 'venue',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(sulkian, true) || elementIsVisibleInViewport(sulkianEnd)) {
			nonPlacesNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'The Venue',
					route: 'venue',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(parsa, true) || elementIsVisibleInViewport(parsaEnd)) {
			nonPlacesNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'The Venue',
					route: 'venue',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}
	};
</script>

<svelte:window bind:innerWidth={size} />
<div
	on:scroll={handleScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden sm:snap-y sm:snap-mandatory overflow-y-auto sm:h-screen"
>
	<ProjectIntro project={nonPlacesProjectIntro} />

	<ProjectVideo videoProjects={nonPlacesVideo} route="" />

	<ProjectAboutDropdown
		images={nonPlacesDropdownItems.map((item) => item.image)}
		aboutDropdownItems={nonPlacesDropdownItems}
		route=""
	/>

	<ProjectAboutDropdown
		images={nonPlacesTwoDropdownItems.map((item) => item.image)}
		aboutDropdownItems={nonPlacesTwoDropdownItems}
		route=""
	/>

	<HomeIcon />
	<Footer />
</div>
