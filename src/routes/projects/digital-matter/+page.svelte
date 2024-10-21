<script lang="ts">
	import PolaroidsMobile from '$lib/components/PolaroidsMobile/PolaroidsMobile.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';
	import { EColorVariant } from '../../../constants/enums';
	import { sulkianImages } from '../../../data/Projects/DigitalMatter/ImgNavigator';
	import { digitalMatterNavItems } from '../../../data/Projects/DigitalMatter/NavItems';
	import {
		marcusAbout,
		marcusAboutImages,
		parsaAbout,
		parsaAboutImages,
		sulkianAbout,
		sulkianAboutImages
	} from '../../../data/Projects/DigitalMatter/ProjectAbout';
	import {
		marcusDropdownItems,
		parsaDropdownItems
	} from '../../../data/Projects/DigitalMatter/ProjectAboutDropdown';
	import {
		parsaArtworkImages,
		parsaArtworkImages1,
		parsaArtworkImages2
	} from '../../../data/Projects/DigitalMatter/ProjectArtworkGallery';
	import { digitalMatterProjectIntro } from '../../../data/Projects/DigitalMatter/ProjectIntro';
	import {
		marcusPolaroidsImages,
		parsaPolaroidsImages
	} from '../../../data/Projects/DigitalMatter/ProjectPolaroids';
	import { aeroVideo } from '../../../data/Projects/DigitalMatter/ProjectVideo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { digitalMatterNavStoreItems } from './store';

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
			digitalMatterNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: true
				},
				{
					text: 'Marcus',
					route: 'marcus',
					selected: false
				},
				{
					text: 'Sulkian',
					route: 'sulkian',
					selected: false
				},
				{
					text: 'Parsa',
					route: 'parsa',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(marcus, true) || elementIsVisibleInViewport(marcusEnd)) {
			digitalMatterNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Marcus',
					route: 'marcus',
					selected: true
				},
				{
					text: 'Sulkian',
					route: 'sulkian',
					selected: false
				},
				{
					text: 'Parsa',
					route: 'parsa',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(sulkian, true) || elementIsVisibleInViewport(sulkianEnd)) {
			digitalMatterNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Marcus',
					route: 'marcus',
					selected: false
				},
				{
					text: 'Sulkian',
					route: 'sulkian',
					selected: true
				},
				{
					text: 'Parsa',
					route: 'parsa',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(parsa, true) || elementIsVisibleInViewport(parsaEnd)) {
			digitalMatterNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Marcus',
					route: 'marcus',
					selected: false
				},
				{
					text: 'Sulkian',
					route: 'sulkian',
					selected: false
				},
				{
					text: 'Parsa',
					route: 'parsa',
					selected: true
				}
			]);
		}
	};
</script>

<svelte:window bind:innerWidth={size} />
<div
	on:scroll={handleScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory overflow-y-auto h-screen"
>
	<ProjectIntro project={digitalMatterProjectIntro} />

	<div id="marcus">
		<ProjectAbout aboutItem={marcusAbout} aboutImages={marcusAboutImages} route="" />
	</div>

	<ProjectAboutDropdown
		images={marcusDropdownItems.map((item) => item.image)}
		aboutDropdownItems={marcusDropdownItems}
		route=""
	/>

	{#if size > 1100}
		<ProjectPolaroids images={marcusPolaroidsImages} route="marcus-end" />
	{:else}
		<PolaroidsMobile polaroidImages={marcusPolaroidsImages} route="marcus-end" />
	{/if}

	<div id="sulkian">
		<ProjectAbout aboutItem={sulkianAbout} aboutImages={sulkianAboutImages} route="" />
	</div>

	<ProjectAboutDropdown
		images={sulkianImages}
		route={''}
		colorVariant={EColorVariant.BLACK}
		aboutDropdownItems={undefined}
		isImageWhiteBg
	/>

	<ProjectVideo videoProjects={aeroVideo} route="sulkian-end" />

	<div id="parsa">
		<ProjectAbout aboutItem={parsaAbout} aboutImages={parsaAboutImages} route="" />
	</div>

	<ProjectAboutDropdown
		images={parsaDropdownItems.map((item) => item.image)}
		aboutDropdownItems={parsaDropdownItems}
		route={digitalMatterNavItems[1].route}
	/>

	<div class="hidden sm:block">
		<ProjectArtworkGrid galleryImages={parsaArtworkImages} showDetails />
	</div>

	<div class="block sm:hidden snap-start">
		<ProjectArtworkGridMobile
			isOverflow={false}
			imagesLeft={parsaArtworkImages1}
			imagesRight={parsaArtworkImages2}
		/>
	</div>

	{#if size > 1100}
		<ProjectPolaroids
			images={parsaPolaroidsImages}
			polaroidsTypes={[
				EPolaroidType.RECTANGLE,
				EPolaroidType.RECTANGLE,
				EPolaroidType.RECTANGLE,
				EPolaroidType.VERTICAL
			]}
		/>
	{:else}
		<PolaroidsMobile polaroidImages={parsaPolaroidsImages} route="" />
	{/if}

	<HomeIcon />
	<Footer />
</div>
