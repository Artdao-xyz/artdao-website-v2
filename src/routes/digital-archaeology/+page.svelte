<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { digitalArchaeologyNavItems } from '../../data/Projects/DigitalArchaeology/NavItems';
	import {
		nostalgiaAbout,
		nostalgiaAboutImages,
		pinkyBlueAbout,
		pinkyBlueAboutImages,
		sabatoAbout,
		sabatoAboutImages,
		stipinAbout,
		stipinAboutImages,
		estelleAbout,
		estelleAboutImages,
		cydrAbout,
		cydrAboutImages,
		constraintsAbout,
		constraintsAboutImages
	} from '../../data/Projects/DigitalArchaeology/ProjectAbout';
	import { digitalArchaeologyIntro } from '../../data/Projects/DigitalArchaeology/ProjectIntro';
	import { pinkyBlueVideo, sabatoVideo, stipinVideo } from '../../data/Projects/DigitalArchaeology/ProjectVideo';
	import { DigitalArchaeologyArtworkGrid, digitalArchaeologyArtworkGridMobileLeft, digitalArchaeologyArtworkGridMobileRight } from '../../data/Projects/DigitalArchaeology/ProjectArtworkGrid';
	import { DigitalArchaeologyPolaroids } from '../../data/Projects/DigitalArchaeology/ProjectPolaroids';
	import { digitalArchaeologyChatInterview, digitalArchaeologyChatInterview2 } from '../../data/Projects/DigitalArchaeology/ProjectChatInterview';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import preloadImages from '../../utils/preloadImages';
	import { digitalArchaeologyNavStoreItems } from './store';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { usePageMetadata } from '$lib/utils/metadata';
	
	// Set page metadata
	usePageMetadata({
		title: 'Digital Archaeology | Artdao',
		description: 'The return to retro digital aesthetics operates as a form of resistance—pushing back against the sleek refinement and visual excess of contemporary digital culture.',
		ogImage: 'https://artdao.xyz/media/digital-archaeology/main-cover.webp',
		canonical: 'https://artdao.xyz/digital-archaeology'
	});
	
	let introIsInView: boolean;
	let pinkyBlueIsInView: boolean;
	let sabatoIsInView: boolean;
	let stipinIsInView: boolean;
	let estelleIsInView: boolean;
	let cydrIsInView: boolean;
	let constraintsIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);
		
		if (introIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[0].route);
		}
		if (pinkyBlueIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[1].route);
		}
		if (sabatoIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[2].route);
		}
		if (stipinIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[3].route);
		}
		if (estelleIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[4].route);
		}
		if (cydrIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[5].route);
		}
		if (constraintsIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[6].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[digitalArchaeologyIntro.bgImage, digitalArchaeologyIntro.bgImageMobile],
			nostalgiaAboutImages,
			pinkyBlueAboutImages,
			sabatoAboutImages,
			stipinAboutImages,
			estelleAboutImages,
			cydrAboutImages,
			constraintsAboutImages,
			DigitalArchaeologyArtworkGrid.artworks.map((item) => item.image),
			DigitalArchaeologyPolaroids.map((item) => item.image)
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
		<div
			id="intro"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				introIsInView = inView;
			}}
		>
		<ProjectIntro
			project={digitalArchaeologyIntro}
			textColor="white"
			bgImage={$preloadedImagesStore[0][0]}
			bgImageMobile={$preloadedImagesStore[0][1]}
		/>
			<ProjectAbout
			aboutItem={nostalgiaAbout}
			aboutImages={$preloadedImagesStore[1]}
			route=""
			colorVariant={EColorVariant.BLACK}
			/>
			<ChatInterview data={digitalArchaeologyChatInterview} />

		</div>

		<!-- PinkyBlu Section -->
		<div
			id="pinkyblue"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				pinkyBlueIsInView = inView;
			}}
		>

			<ProjectAbout
				aboutItem={pinkyBlueAbout}
				aboutImages={$preloadedImagesStore[2]}
				route=""
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>

			<ProjectVideo videoProjects={pinkyBlueVideo} />
		</div>

		<!-- Sabato Video Section -->
		<div
			id="sabato"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				sabatoIsInView = inView;
			}}
		>
			<ProjectAbout
			aboutItem={sabatoAbout}
			aboutImages={$preloadedImagesStore[3]}
			route=""
			colorVariant={EColorVariant.BLACK}
		/>

			<ProjectVideo videoProjects={sabatoVideo} />
		</div>

		<!-- Stipin Section -->
		<div
			id="stipin"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				stipinIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={stipinAbout}
				aboutImages={$preloadedImagesStore[4]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>

			<ProjectVideo videoProjects={stipinVideo} />

			<ChatInterview data={digitalArchaeologyChatInterview2} />

		</div>

		<!-- Estelle Section -->
		<div
			id="estelle"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				estelleIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={estelleAbout}
				aboutImages={$preloadedImagesStore[5]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>

			<div class="hidden sm:block">
			<ProjectArtworkGrid galleryImages={DigitalArchaeologyArtworkGrid.artworks} />
			</div>

			<div class="block sm:hidden sm:snap-start">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={digitalArchaeologyArtworkGridMobileLeft}
					imagesRight={digitalArchaeologyArtworkGridMobileRight}
				/>
			</div>

		</div>

		<!-- CYDR Section -->
		<div
			id="cydr"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				cydrIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={cydrAbout}
				aboutImages={$preloadedImagesStore[6]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>

			<ProjectPolaroids images={DigitalArchaeologyPolaroids} />

		</div>

		<!-- Constraints as Tools of Liberation Section -->
		<div
			id="constraints"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				constraintsIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={constraintsAbout}
				aboutImages={$preloadedImagesStore[7]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<HomeIcon />
		<Footer project={EProjects.DIGITAL_ARCHAEOLOGY} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 