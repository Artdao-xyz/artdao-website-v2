<script lang="ts">
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';
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
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { sulkianImages } from '../../data/Projects/DigitalMatter/ImgNavigator';
	import { digitalMatterNavItems } from '../../data/Projects/DigitalMatter/NavItems';
	import {
		marcusAbout,
		marcusAboutImages,
		parsaAbout,
		parsaAboutImages,
		sulkianAbout,
		sulkianAboutImages
	} from '../../data/Projects/DigitalMatter/ProjectAbout';
	import {
		marcusDropdownItems,
		sulkianDropdownItems
	} from '../../data/Projects/DigitalMatter/ProjectAboutDropdown';
	import {
		parsaArtworkImages,
		parsaArtworkImages1,
		parsaArtworkImages2
	} from '../../data/Projects/DigitalMatter/ProjectArtworkGallery';
	import { digitalMatterProjectIntro } from '../../data/Projects/DigitalMatter/ProjectIntro';
	import {
		marcusPolaroidsImages,
		parsaPolaroidsImages
	} from '../../data/Projects/DigitalMatter/ProjectPolaroids';
	import { aeroVideo, parsaVideo } from '../../data/Projects/DigitalMatter/ProjectVideo';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { digitalMatterNavStoreItems } from './store';

	let size: number;
	let introIsInView: boolean;
	let marcusIsInView: boolean;
	let sulkianIsInView: boolean;
	let parsaIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

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

	const preloadedImages = preloadImages([
		[digitalMatterProjectIntro.bgImage, digitalMatterProjectIntro.bgImageMobile],
		marcusAboutImages,
		marcusDropdownItems.map((item) => item.image),
		marcusPolaroidsImages.map((item) => item.image),
		sulkianAboutImages,
		parsaAboutImages,
		parsaArtworkImages.map((item) => item.image),
		parsaArtworkImages1.map((item) => item.src),
		parsaArtworkImages2.map((item) => item.src),
		parsaPolaroidsImages.map((item) => item.image)
	]);
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
				project={digitalMatterProjectIntro}
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
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
			<ProjectAbout aboutItem={marcusAbout} aboutImages={images[1]} route="" />

			<ProjectAboutDropdown images={images[2]} aboutDropdownItems={marcusDropdownItems} route="" />

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
			<ProjectAbout aboutItem={sulkianAbout} aboutImages={images[4]} route="" />

			<ProjectAboutDropdown
				images={sulkianImages}
				route={''}
				colorVariant={EColorVariant.BLACK}
				aboutDropdownItems={sulkianDropdownItems}
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
			<ProjectAbout aboutItem={parsaAbout} aboutImages={images[5]} route="" />

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
		<Footer project={EProjects.DIGITAL_MATTER} />
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
