<script lang="ts">
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
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { getProjectRefs } from '../../utils/projectsRefs/getProjectRefs';
	import { nonPlacesNavStoreItems } from './store';

	let size: number;

	let videoIsInView: boolean;
	let exhibitionIsInView: boolean;
	let artistsAndArtworksIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (videoIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[0].route);
		}

		if (exhibitionIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[1].route);
		}

		if (artistsAndArtworksIsInView) {
			updateNavBar(nonPlacesNavStoreItems, nonPlacesNavItems, nonPlacesNavItems[2].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[nonPlacesProjectIntro.bgImage, nonPlacesProjectIntro.bgImageMobile],
			nonPlacesDropdownItems.map(item => item.image),
			nonPlacesTwoDropdownItems.map(item => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}

	let refs = getProjectRefs(EProjects.NON_PLACES);
</script>

<svelte:window bind:innerWidth={size} />

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<div
			id="video"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				videoIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				videoIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				videoIsInView = inView;
			}}
		>
			<ProjectIntro
				project={nonPlacesProjectIntro}
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>

		<div
			id="exhibition"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				exhibitionIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				exhibitionIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				exhibitionIsInView = inView;
			}}
		>
			<ProjectVideo videoProjects={nonPlacesVideo} route="venue-end" />

			<ProjectAboutDropdown
				images={$preloadedImagesStore[2]}
				aboutDropdownItems={nonPlacesTwoDropdownItems}
				route=""
			/>

			<ProjectVideo videoProjects={nonPlacesVernissageVideo} route="vernisagge-end" />
		</div>

		<div
			id="artists-and-artworks"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artistsAndArtworksIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				artistsAndArtworksIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				artistsAndArtworksIsInView = inView;
			}}
		>
			<ProjectAboutDropdown
				images={$preloadedImagesStore[1]}
				aboutDropdownItems={nonPlacesDropdownItems}
				route="artworks-end"
			/>
		</div>

		<HomeIcon />
		<Footer project={EProjects.NON_PLACES} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
