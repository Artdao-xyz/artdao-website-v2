<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import {
		furnitureAbout,
		furnitureAboutImages,
		kokoAbout,
		kokoAboutImahges,
		panelsAbout,
		panelsAboutImages
	} from '../../../data/Projects/Artifice/ProjectAbout';
	import {
		psipsikokoDropdownItems,
		vernisaggeDropdownItems
	} from '../../../data/Projects/Artifice/ProjectAboutDropdown';
	import { artificeProjectIntro } from '../../../data/Projects/Artifice/ProjectIntro';
	import { afterEventVideo, furnitureVideo } from '../../../data/Projects/Artifice/ProjectVideo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { artificeNavStoreItems } from './store';

	let size: number;

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const koko = document.getElementById('koko');
		const furniture = document.getElementById('furniture');
		const furnitureEnd = document.getElementById('furniture-end');
		const panels = document.getElementById('panels');

		if (elementIsVisibleInViewport(intro)) {
			artificeNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: true
				},
				{
					text: 'Ko Ko ??',
					route: 'koko',
					selected: false
				},
				{
					text: 'Furniture Searchi',
					route: 'furniture',
					selected: false
				},
				{
					text: 'Panels & Exhibition',
					route: 'panels',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(koko)) {
			artificeNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Ko Ko ??',
					route: 'koko',
					selected: true
				},
				{
					text: 'Furniture Searchi',
					route: 'furniture',
					selected: false
				},
				{
					text: 'Panels & Exhibition',
					route: 'panels',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(furniture) || elementIsVisibleInViewport(furnitureEnd)) {
			artificeNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Ko Ko ??',
					route: 'koko',
					selected: false
				},
				{
					text: 'Furniture Searchi',
					route: 'furniture',
					selected: true
				},
				{
					text: 'Panels & Exhibition',
					route: 'panels',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(panels)) {
			artificeNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Ko Ko ??',
					route: 'koko',
					selected: false
				},
				{
					text: 'Furniture Searchi',
					route: 'furniture',
					selected: false
				},
				{
					text: 'Panels & Exhibition',
					route: 'panels',
					selected: true
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
	<ProjectIntro project={artificeProjectIntro} />

	<ProjectVideo videoProjects={furnitureVideo} route="" />

	<div id="koko">
		<ProjectAbout aboutItem={kokoAbout} aboutImages={kokoAboutImahges} route="" isImageLeft />
	</div>

	<div id="furniture">
		<ProjectAbout aboutItem={furnitureAbout} aboutImages={furnitureAboutImages} route="" />
	</div>

	<ProjectAboutDropdown
		images={psipsikokoDropdownItems.map((item) => item.image)}
		aboutDropdownItems={psipsikokoDropdownItems}
		route="furniture-end"
	/>

	<div id="panels">
		<ProjectAbout aboutItem={panelsAbout} aboutImages={panelsAboutImages} route="" />
	</div>

	<ProjectAboutDropdown
		images={vernisaggeDropdownItems.map((item) => item.image)}
		aboutDropdownItems={vernisaggeDropdownItems}
		route=""
	/>

	<ProjectVideo videoProjects={afterEventVideo} route="" />

	<HomeIcon />
	<Footer />
</div>
