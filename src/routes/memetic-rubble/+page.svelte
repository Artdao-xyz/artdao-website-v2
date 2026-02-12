<script lang="ts">
	import PolaroidsMobile from '$lib/components/PolaroidsMobile/PolaroidsMobile.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { memeticRubbleNavItems } from '../../data/Projects/MemeticRubble/NavItems';
	import { memeticRubbleAbout1, memeticRubbleAbout1Images, memeticRubbleAbout2, memeticRubbleAbout2Images, memeticRubbleAbout3, memeticRubbleAbout3Images } from '../../data/Projects/MemeticRubble/ProjectAbout';
	import { memeticRubbleArtworkGrid1, memeticRubbleArtworkGrid1Mobile, memeticRubbleArtworkGrid2, memeticRubbleArtworkGrid2Mobile } from '../../data/Projects/MemeticRubble/ProjectArtworkGrid';
	import type { IGalleryImageMobile } from '$lib/elements/ArtworkContainer/interfaces';
	import { memeticRubbleChatInterview } from '../../data/Projects/MemeticRubble/ProjectChatInterview';
	import { memeticRubbleIntro } from '../../data/Projects/MemeticRubble/ProjectIntro';
	import { memeticRubblePolaroids } from '../../data/Projects/MemeticRubble/ProjectPolaroids';
	import { psipsikokoVideos } from '../../data/Projects/MemeticRubble/ProjectVideo';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';

	// Set page metadata
	usePageMetadata({
		title: 'Memetic Rubble | Artdao',
		description: memeticRubbleIntro.description[0] || 'Exploring memes as core building blocks of digital culture.',
		ogImage: `https://artdao.xyz${memeticRubbleIntro.bgImage}`,
		canonical: 'https://artdao.xyz/memetic-rubble'
	});
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { memeticRubbleNavStoreItems } from './store';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	
	let size: number;
	let introIsInView: boolean;
	let lowArtVsInternetIsInView: boolean;
	let femzorIsInView: boolean;
	let julianBrangoldIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[0].route);
		}
		if (femzorIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[1].route);
		}
		if (julianBrangoldIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[2].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[memeticRubbleIntro.bgImage, memeticRubbleIntro.bgImageMobile],
			memeticRubbleAbout1Images,
			memeticRubblePolaroids.map(item => item.image),
			memeticRubbleAbout2Images,
			memeticRubbleArtworkGrid1.map(item => item.image),
			memeticRubbleAbout3Images,
			memeticRubbleArtworkGrid2.map(item => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}

	// Split mobile arrays into left/right halves for the grid
	const splitMobileGrid = (arr: IGalleryImageMobile[]) => {
		const half = Math.ceil(arr.length / 2);
		return [arr.slice(0, half), arr.slice(half)];
	};

	// Convert desktop images to mobile format and split them
	const convertAndSplitGrid = (desktopArray: any[]) => {
		const mobileArray = desktopArray.map(item => ({
			src: item.image,
			name: item.name,
			description: item.description,
			alt: item.name || 'Artwork'
		}));
		return splitMobileGrid(mobileArray);
	};

	const [memeticRubbleArtworkGrid1MobileLeft, memeticRubbleArtworkGrid1MobileRight] = convertAndSplitGrid(memeticRubbleArtworkGrid1);
	const [memeticRubbleArtworkGrid2MobileLeft, memeticRubbleArtworkGrid2MobileRight] = convertAndSplitGrid(memeticRubbleArtworkGrid2);
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
			id="about"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				introIsInView = inView;
			}}
		>
			<ProjectIntro
				project={memeticRubbleIntro}
				textColor="black"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>

			{#if size > 1100}
			<ProjectPolaroids
				images={memeticRubblePolaroids}
				polaroidsTypes={[EPolaroidType.SQUARE, EPolaroidType.RECTANGLE, EPolaroidType.VERTICAL, EPolaroidType.SQUARE]}
				viewImageFit="contain"
				route=""
			/>
			{:else}
				<PolaroidsMobile polaroidImages={memeticRubblePolaroids} route="" />
			{/if}

			<ProjectAbout
			aboutItem={memeticRubbleAbout1}
			aboutImages={$preloadedImagesStore[1]}
			route=""
			colorVariant={EColorVariant.BLACK}
		/>
			<ChatInterview data={memeticRubbleChatInterview} />
		</div>

		<!-- Chat Interview Section -->
		<div
			id="femzor"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				femzorIsInView = inView;
			}}
		>

			<ProjectAbout
			aboutItem={memeticRubbleAbout2}
			aboutImages={$preloadedImagesStore[3]}
			route=""
			colorVariant={EColorVariant.BLACK}
		/>

		<div class="hidden sm:block">
			<ProjectArtworkGrid
				galleryImages={memeticRubbleArtworkGrid1}
				showDetails={false}
			/>
			</div>
			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={memeticRubbleArtworkGrid1MobileLeft}
					imagesRight={memeticRubbleArtworkGrid1MobileRight}
				/>
			</div>
		</div>

		<!-- Julian Brangold Section -->
		<div
			id="julian-brangold"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				julianBrangoldIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={memeticRubbleAbout3}
				aboutImages={$preloadedImagesStore[5]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>

			<div class="hidden sm:block">
				<ProjectArtworkGrid
					galleryImages={memeticRubbleArtworkGrid2}
					showDetails={false}
				/>
				</div>
				<div class="block sm:hidden sm:snap-start">
					<ProjectArtworkGridMobile
						isOverflow={false}
						imagesLeft={memeticRubbleArtworkGrid2MobileLeft}
						imagesRight={memeticRubbleArtworkGrid2MobileRight}
					/>
				</div>

				<ProjectVideo videoProjects={psipsikokoVideos} route="psipsikoko-videos" />

		</div>

	<HomeIcon />
	<Footer project={EProjects.MEMETIC_RUBBLE} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 