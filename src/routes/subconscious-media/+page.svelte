<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { subconsciousMediaNavItems } from '../../data/Projects/SubconsciousMedia/NavItems';
	import { subconsciousMediaAbout1, subconsciousMediaAbout1Images, subconsciousMediaAbout2, subconsciousMediaAbout2Images, subconsciousMediaAbout3, subconsciousMediaAbout3Images } from '../../data/Projects/SubconsciousMedia/ProjectAbout';
	import { subconsciousMediaDropdown1, subconsciousMediaDropdown2 } from '../../data/Projects/SubconsciousMedia/ProjectAboutDropdown';
	import { subconsciousMediaIntro } from '../../data/Projects/SubconsciousMedia/ProjectIntro';
	import { subconsciousMediaChatInterview, subconsciousMediaChatInterview2 } from '../../data/Projects/SubconsciousMedia/ProjectChatInterview';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { subconsciousMediaNavStoreItems } from './store';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import { subconsciousMediaArtworkGrid } from '../../data/Projects/SubconsciousMedia/ProjectArtworkGrid';

	let introIsInView: boolean;
	let vidalHerreraIsInView: boolean;
	let gregorioNashIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		if (introIsInView) updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[0].route);
		if (vidalHerreraIsInView) updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[1].route);
		if (gregorioNashIsInView) updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[2].route);
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([

		[subconsciousMediaIntro.bgImage, subconsciousMediaIntro.bgImageMobile
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}
</script>

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<!-- Intro Section -->
		<div id="intro" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { introIsInView = event.detail.inView; }}>
			<ProjectIntro project={subconsciousMediaIntro} textColor="black" bgImage={$preloadedImagesStore[0][0]} bgImageMobile={$preloadedImagesStore[0][1]} />
			<ProjectAbout aboutItem={subconsciousMediaAbout1} aboutImages={$preloadedImagesStore[1]} route="" colorVariant={EColorVariant.BLACK} />
		</div>

		<!-- Vidal Herrera Section (agrupa about, chat, grid) -->
		<div id="vidal-herrera" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { vidalHerreraIsInView = event.detail.inView; }}>
			<ProjectAbout aboutItem={subconsciousMediaAbout2} aboutImages={$preloadedImagesStore[3]} route="" colorVariant={EColorVariant.BLACK} />
			<ChatInterview data={subconsciousMediaChatInterview} />
			<ProjectArtworkGrid galleryImages={subconsciousMediaArtworkGrid} showDetails={true} />
		</div>

		<!-- Gregorio Nash Section (agrupa about, chat, dropdown) -->
		<div id="gregorio-nash" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { gregorioNashIsInView = event.detail.inView; }}>
			<ProjectAbout aboutItem={subconsciousMediaAbout3} aboutImages={$preloadedImagesStore[5]} route="" colorVariant={EColorVariant.BLACK} />
			<ChatInterview data={subconsciousMediaChatInterview2} />
			<ProjectAboutDropdown images={$preloadedImagesStore[4]} aboutDropdownItems={subconsciousMediaDropdown2} route="" />
		</div>
		<Footer project={EProjects.SUBCONSCIOUS_MEDIA} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 