<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { queeringTheWeb3NavItems } from '../../data/Projects/QueeringTheWeb3/NavItems';
	import {
		queeringTheWeb3About1,
		queeringTheWeb3About1Images,
		queeringTheWeb3About2,
		queeringTheWeb3About2Images,
		queeringTheWeb3About3,
		queeringTheWeb3About3Images
	} from '../../data/Projects/QueeringTheWeb3/ProjectAbout';
	import { queeringTheWeb3Intro } from '../../data/Projects/QueeringTheWeb3/ProjectIntro';
	import { 
		QueeringTheWeb3ArtworkGrid,
		queeringTheWeb3ArtworkGridMobileLeft,
		queeringTheWeb3ArtworkGridMobileRight
	} from '../../data/Projects/QueeringTheWeb3/ProjectArtworkGrid';
	import { 
		QueeringTheWeb3ArtworkGrid2,
		queeringTheWeb3ArtworkGrid2MobileLeft,
		queeringTheWeb3ArtworkGrid2MobileRight
	} from '../../data/Projects/QueeringTheWeb3/ProjectArtworkGrid2';
	import { queeringTheWeb3ChatInterview } from '../../data/Projects/QueeringTheWeb3/ProjectChatInterview';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import preloadImages from '../../utils/preloadImages';
	import { queeringTheWeb3NavStoreItems } from './store';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { usePageMetadata } from '$lib/utils/metadata';

	// Set page metadata
	usePageMetadata({
		title: 'Queering the Web3 | Artdao',
		description: queeringTheWeb3Intro.description[0] || 'Exploring queerness in Web3 and digital spaces.',
		ogImage: `https://artdao.xyz${queeringTheWeb3Intro.bgImage}`,
		canonical: 'https://artdao.xyz/queering-the-web3'
	});

	let size: number;
	let introIsInView: boolean;
	let about1IsInView: boolean;
	let artworkGridIsInView: boolean;
	let about2IsInView: boolean;
	let artworkGrid2IsInView: boolean;
	let about3IsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);
		
		if (introIsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[0].route);
		}
		if (about1IsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[1].route);
		}
		if (about2IsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[2].route);
		}
		if (about3IsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[3].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[queeringTheWeb3Intro.bgImage, queeringTheWeb3Intro.bgImageMobile],
			queeringTheWeb3About1Images,
			queeringTheWeb3About2Images,
			queeringTheWeb3About3Images,
			QueeringTheWeb3ArtworkGrid.artworks.map((item) => item.image),
			QueeringTheWeb3ArtworkGrid2.artworks.map((item) => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}
</script>

<svelte:window bind:innerWidth={size} />

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		transition:fly={{ duration: 1000, delay: 750, y: 30, easing: cubicInOut }}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<!-- Intro Section -->
		<div
			id="intro"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				introIsInView = inView;
			}}
		>
			<ProjectIntro
				project={queeringTheWeb3Intro}
				textColor="white"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>

		<!-- About 1 Section -->
		<div
			id="about1"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				about1IsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={queeringTheWeb3About1}
				aboutImages={$preloadedImagesStore[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Interview Section -->
		<div
		id="interview"
	>
			<ChatInterview data={queeringTheWeb3ChatInterview} />
		</div>
				
		<!-- About 2 Section -->
		<div
                id="about2"
                use:inview={INVIEW_OPTIONS}
                on:inview_change={(event) => {
                        const { inView } = event.detail;
                        about2IsInView = inView;
                }}
        >
                <ProjectAbout
                        aboutItem={queeringTheWeb3About2}
                        aboutImages={$preloadedImagesStore[2]}
                        route=""
                        colorVariant={EColorVariant.BLACK}
                />
                </div>

		<!-- Artwork Grid Section -->
		<div
			id="artwork-grid"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artworkGridIsInView = inView;
			}}
		>
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={QueeringTheWeb3ArtworkGrid.artworks} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={queeringTheWeb3ArtworkGridMobileLeft}
					imagesRight={queeringTheWeb3ArtworkGridMobileRight}
				/>
			</div>
		</div>

		<!-- About 3 Section -->
		<div
		id="about3"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			about3IsInView = inView;
		}}
	>
			<ProjectAbout
				aboutItem={queeringTheWeb3About3}
				aboutImages={$preloadedImagesStore[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Artwork Grid 2 Section -->
		<div
                id="artwork-grid-2"
                use:inview={INVIEW_OPTIONS}
                on:inview_change={(event) => {
                        const { inView } = event.detail;
                        artworkGrid2IsInView = inView;
                }}
        >
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={QueeringTheWeb3ArtworkGrid2.artworks} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={queeringTheWeb3ArtworkGrid2MobileLeft}
					imagesRight={queeringTheWeb3ArtworkGrid2MobileRight}
				/>
			</div>
                </div>

		<HomeIcon />
		<Footer project={EProjects.QUEERING_THE_WEB3} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 