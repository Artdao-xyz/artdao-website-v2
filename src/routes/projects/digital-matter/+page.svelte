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
	import { inview } from 'svelte-inview';
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
	import { marcusDropdownItems } from '../../../data/Projects/DigitalMatter/ProjectAboutDropdown';
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
	import { aeroVideo, parsaVideo } from '../../../data/Projects/DigitalMatter/ProjectVideo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../../utils/nav/updateNavBar';
	import { digitalMatterNavStoreItems } from './store';

	let size: number;
	let introIsInView: boolean;
	let marcusIsInView: boolean;
	let sulkianIsInView: boolean;
	let parsaIsInView: boolean;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(
				digitalMatterNavStoreItems,
				digitalMatterNavItems,
				digitalMatterNavItems[0].route
			);
		}

		if (marcusIsInView) {
			updateNavBar(
				digitalMatterNavStoreItems,
				digitalMatterNavItems,
				digitalMatterNavItems[1].route
			);
		}

		if (sulkianIsInView) {
			updateNavBar(
				digitalMatterNavStoreItems,
				digitalMatterNavItems,
				digitalMatterNavItems[2].route
			);
		}

		if (parsaIsInView) {
			updateNavBar(
				digitalMatterNavStoreItems,
				digitalMatterNavItems,
				digitalMatterNavItems[3].route
			);
		}
	};
</script>

<svelte:window bind:innerWidth={size} />
<div
	on:scroll={handleOnScroll}
	on:touchmove={handleOnScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden sm:snap-y sm:snap-mandatory overflow-y-auto sm:min-h-screen"
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
		<ProjectIntro project={digitalMatterProjectIntro} />
	</div>

	<div
		id="marcus"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			marcusIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			marcusIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			marcusIsInView = inView;
		}}
	>
		<ProjectAbout aboutItem={marcusAbout} aboutImages={marcusAboutImages} route="" />

		<ProjectAboutDropdown
			images={marcusDropdownItems.map((item) => item.image)}
			aboutDropdownItems={marcusDropdownItems}
			route=""
		/>

		{#if size > 1100}
			<ProjectPolaroids images={marcusPolaroidsImages} />
		{:else}
			<PolaroidsMobile polaroidImages={marcusPolaroidsImages} route="" />
		{/if}
	</div>

	<div
		id="sulkian"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			sulkianIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			sulkianIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			sulkianIsInView = inView;
		}}
	>
		<ProjectAbout aboutItem={sulkianAbout} aboutImages={sulkianAboutImages} route="" />

		<ProjectAboutDropdown
			images={sulkianImages}
			route={''}
			colorVariant={EColorVariant.BLACK}
			aboutDropdownItems={undefined}
			isImageWhiteBg
		/>

		<ProjectVideo videoProjects={aeroVideo} route="sulkian-end" />
	</div>

	<div
		id="parsa"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			parsaIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			parsaIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			parsaIsInView = inView;
		}}
	>
		<ProjectAbout aboutItem={parsaAbout} aboutImages={parsaAboutImages} route="" />

		<ProjectVideo videoProjects={parsaVideo} route="" />

		<div class="hidden sm:block">
			<ProjectArtworkGrid galleryImages={parsaArtworkImages} showDetails />
		</div>

		<div class="block sm:hidden sm:snap-start">
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
	</div>

	<HomeIcon />
	<Footer />
</div>
