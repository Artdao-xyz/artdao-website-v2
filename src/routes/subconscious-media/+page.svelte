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
	import { subconsciousMediaAbout1, subconsciousMediaAbout1Images, subconsciousMediaAbout2, subconsciousMediaAbout2Images, subconsciousMediaAbout3, subconsciousMediaAbout3Images, subconsciousMediaAbout4, subconsciousMediaAbout4Images } from '../../data/Projects/SubconsciousMedia/ProjectAbout';
	import { subconsciousMediaDropdown1, subconsciousMediaDropdown2 } from '../../data/Projects/SubconsciousMedia/ProjectAboutDropdown';
	import { subconsciousMediaIntro } from '../../data/Projects/SubconsciousMedia/ProjectIntro';
	import { subconsciousMediaChatInterview, subconsciousMediaChatInterview2 } from '../../data/Projects/SubconsciousMedia/ProjectChatInterview';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';

	// Set page metadata
	usePageMetadata({
		title: 'Subconscious Media | Artdao',
		description: subconsciousMediaIntro.description[0] || 'Exploring digital technology and artistic practice.',
		ogImage: `https://artdao.xyz${subconsciousMediaIntro.bgImage}`,
		canonical: 'https://artdao.xyz/subconscious-media'
	});
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import preloadImages from '../../utils/preloadImages';
	import { subconsciousMediaNavStoreItems } from './store';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import { subconsciousMediaGallery1, subconsciousMediaGallery2 } from '../../data/Projects/SubconsciousMedia/ProjectArtworkGalleryMobile';
	import { subconsciousMediaArtworkGrid } from '../../data/Projects/SubconsciousMedia/ProjectArtworkGrid';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	
	let introIsInView: boolean;
	let vidalHerreraIsInView: boolean;
	let gregorioNashIsInView: boolean;
	let technologyAsABindingForceIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);
		
		if (introIsInView) updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[0].route);
		if (vidalHerreraIsInView) updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[1].route);
		if (gregorioNashIsInView) updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[2].route);
		if (technologyAsABindingForceIsInView) updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[3].route);
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[subconsciousMediaIntro.bgImage, subconsciousMediaIntro.bgImageMobile],
			subconsciousMediaAbout1Images,
			subconsciousMediaAbout2Images,
			subconsciousMediaDropdown1.map(item => item.image),
			subconsciousMediaAbout3Images,
			subconsciousMediaAbout4Images
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
		transition:fly={{ duration: 1000, delay: 750, y: 30, easing: cubicInOut }}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<!-- Intro Section -->
		<div id="intro" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { introIsInView = event.detail.inView; }}>
			<ProjectIntro project={subconsciousMediaIntro} textColor="black" bgImage={$preloadedImagesStore[0][0]} bgImageMobile={$preloadedImagesStore[0][1]} />
			<ProjectAbout aboutItem={subconsciousMediaAbout1} aboutImages={$preloadedImagesStore[1]} route="" colorVariant={EColorVariant.BLACK} />
		</div>

		<!-- Vidal Herrera Section (agrupa about, chat, grid) -->
		<div id="vidal-herrera" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { vidalHerreraIsInView = event.detail.inView; }}>
			<ProjectAbout isImageLeft={false} aboutItem={subconsciousMediaAbout2} aboutImages={$preloadedImagesStore[2]} route="" colorVariant={EColorVariant.BLACK} />
			<ChatInterview data={subconsciousMediaChatInterview} />
			
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={subconsciousMediaArtworkGrid} showDetails={true} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={subconsciousMediaGallery1}
					imagesRight={subconsciousMediaGallery2}
				/>
			</div>
		</div>

		<!-- Gregorio Nash Section (agrupa about, chat, dropdown) -->
		<div id="gregorio-nash" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { gregorioNashIsInView = event.detail.inView; }}>
			<ProjectAbout aboutItem={subconsciousMediaAbout3} aboutImages={$preloadedImagesStore[4]} route="" colorVariant={EColorVariant.BLACK} />
			<ChatInterview data={subconsciousMediaChatInterview2} />
			<ProjectAboutDropdown images={$preloadedImagesStore[3]} aboutDropdownItems={subconsciousMediaDropdown2} route="" />
		</div>

		<!-- Technology as a Binding Force Section -->
		<div id="technology-as-a-binding-force" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { technologyAsABindingForceIsInView = event.detail.inView; }}>
			<ProjectAbout aboutItem={subconsciousMediaAbout4} aboutImages={$preloadedImagesStore[5]} route="" colorVariant={EColorVariant.BLACK} />
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