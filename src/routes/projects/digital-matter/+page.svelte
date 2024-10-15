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
	import { EColorVariant, ESizesVariant } from '../../../constants/enums';
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
	import { parsaArtworkImages } from '../../../data/Projects/DigitalMatter/ProjectArtworkGallery';
	import { digitalMatterProjectIntro } from '../../../data/Projects/DigitalMatter/ProjectIntro';
	import {
		marcusPolaroidsImages,
		parsaPolaroidsImages
	} from '../../../data/Projects/DigitalMatter/ProjectPolaroids';
	import { aeroVideo } from '../../../data/Projects/DigitalMatter/ProjectVideo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { digitalMatterNavStoreItems } from './store';

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const marcus = document.getElementById('marcus');
		const marcusEnd = document.getElementById('narcus-end');
		const sulkian = document.getElementById('sulkian');
		const sulkianEnd = document.getElementById('sulkian-end');
		const parsa = document.getElementById('parsa');
		const parsaEnd = document.getElementById('parsa-end');

		if (elementIsVisibleInViewport(intro, true)) {
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

		if (elementIsVisibleInViewport(marcus) || elementIsVisibleInViewport(marcusEnd)) {
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

		if (elementIsVisibleInViewport(sulkian) || elementIsVisibleInViewport(sulkianEnd)) {
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

		if (elementIsVisibleInViewport(parsa) || elementIsVisibleInViewport(parsaEnd)) {
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

<div
	on:scroll={handleScroll}
	id="rave"
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory ooverflow-y-auto sm:h-screen scroll-smooth"
>
	<ProjectIntro project={digitalMatterProjectIntro} />

	<ProjectAbout
		aboutItem={marcusAbout}
		aboutImages={marcusAboutImages}
		route={digitalMatterNavItems[1].route}
	/>

	<ProjectAboutDropdown
		images={marcusDropdownItems.map((item) => item.image)}
		aboutDropdownItems={marcusDropdownItems}
		route={digitalMatterNavItems[1].route}
	/>

	<div class="hidden sm:block">
		<ProjectPolaroids images={marcusPolaroidsImages} />
	</div>

	<PolaroidsMobile polaroidImages={marcusPolaroidsImages} />

	<ProjectAbout
		aboutItem={sulkianAbout}
		aboutImages={sulkianAboutImages}
		route={digitalMatterNavItems[2].route}
	/>

	<ProjectAboutDropdown
		images={sulkianImages}
		route={''}
		colorVariant={EColorVariant.BLACK}
		aboutDropdownItems={undefined}
		isImageWhiteBg
	/>

	<ProjectVideo videoProjects={[aeroVideo]} size={ESizesVariant.MEDIUM} />

	<ProjectAbout
		aboutItem={parsaAbout}
		aboutImages={parsaAboutImages}
		route={digitalMatterNavItems[3].route}
	/>

	<ProjectAboutDropdown
		images={parsaDropdownItems.map((item) => item.image)}
		aboutDropdownItems={parsaDropdownItems}
		route={digitalMatterNavItems[1].route}
	/>

	<div class="hidden sm:block">
		<ProjectArtworkGrid galleryImages={parsaArtworkImages} showDetails />
	</div>

	<ProjectArtworkGridMobile galleryImages={parsaArtworkImages} showDetails />

	<div class="hidden sm:block">
		<ProjectPolaroids
			images={parsaPolaroidsImages}
			polaroidsTypes={[
				EPolaroidType.RECTANGLE,
				EPolaroidType.RECTANGLE,
				EPolaroidType.RECTANGLE,
				EPolaroidType.VERTICAL
			]}
		/>
	</div>

	<PolaroidsMobile polaroidImages={parsaPolaroidsImages} />

	<HomeIcon />
	<Footer />
</div>
