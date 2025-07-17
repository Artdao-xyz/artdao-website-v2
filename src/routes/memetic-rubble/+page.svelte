<script lang="ts">
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
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
	import { memeticRubbleArtworkGrid1, memeticRubbleArtworkGrid2 } from '../../data/Projects/MemeticRubble/ProjectArtworkGrid';
	import { memeticRubbleChatInterview } from '../../data/Projects/MemeticRubble/ProjectChatInterview';
	import { memeticRubbleIntro } from '../../data/Projects/MemeticRubble/ProjectIntro';
	import { memeticRubblePolaroids } from '../../data/Projects/MemeticRubble/ProjectPolaroids';
	import { memeticRubbleVideos } from '../../data/Projects/MemeticRubble/ProjectVideo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { memeticRubbleNavStoreItems } from './store';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';

	let introIsInView: boolean;
	let lowArtVsInternetIsInView: boolean;
	let polaroidsIsInView: boolean;
	let femzorIsInView: boolean;
	let artworkGallery1IsInView: boolean;
	let julianBrangoldIsInView: boolean;
	let chatInterviewIsInView: boolean;
	let artworkGallery2IsInView: boolean;
	let videosIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[0].route);
		}
		if (lowArtVsInternetIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[1].route);
		}
		if (polaroidsIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[2].route);
		}
		if (femzorIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[3].route);
		}
		if (artworkGallery1IsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[4].route);
		}
		if (julianBrangoldIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[5].route);
		}
		if (chatInterviewIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[6].route);
		}
		if (artworkGallery2IsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[7].route);
		}
		if (videosIsInView) {
			updateNavBar(memeticRubbleNavStoreItems, memeticRubbleNavItems, memeticRubbleNavItems[8].route);
		}
	};

	const preloadedImages = preloadImages([
		[memeticRubbleIntro.bgImage, memeticRubbleIntro.bgImageMobile],
		memeticRubbleAbout1Images,
		memeticRubblePolaroids.map((item) => item.image),
		memeticRubbleAbout2Images,
		memeticRubbleArtworkGrid1.map((item) => item.image),
		memeticRubbleAbout3Images,
		memeticRubbleArtworkGrid2.map((item) => item.image)
	]);
</script>

{#await preloadedImages}
	<LoadingV2 />
{:then images}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
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
				project={memeticRubbleIntro}
				textColor="black"
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
		</div>

		<!-- low ART VERSUS INTERNET highs Section -->
		<div
			id="low-art-vs-internet"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				lowArtVsInternetIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={memeticRubbleAbout1}
				aboutImages={images[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Polaroids Section -->
		<div
			id="polaroids"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				polaroidsIsInView = inView;
			}}
		>
			<ProjectPolaroids
				images={memeticRubblePolaroids}
				polaroidsTypes={[EPolaroidType.SQUARE, EPolaroidType.RECTANGLE, EPolaroidType.VERTICAL, EPolaroidType.SQUARE]}
				viewImageFit="contain"
				route=""
			/>
		</div>

		<!-- Femzor Section -->
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
				aboutImages={images[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Artwork Gallery 1 Section -->
		<div
			id="artwork-gallery-1"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artworkGallery1IsInView = inView;
			}}
		>
			<ProjectArtworkGrid
				galleryImages={memeticRubbleArtworkGrid1}
				showDetails={false}
			/>
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
				aboutImages={images[5]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Chat Interview Section -->
		<div
			id="chat-interview"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				chatInterviewIsInView = inView;
			}}
		>
			<ChatInterview data={memeticRubbleChatInterview} />
		</div>

		<!-- Artwork Gallery 2 Section -->
		<div
			id="artwork-gallery-2"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artworkGallery2IsInView = inView;
			}}
		>
			<ProjectArtworkGrid
				galleryImages={memeticRubbleArtworkGrid2}
				showDetails={false}
			/>
		</div>

		<!-- Videos Section -->
		<div
			id="videos"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				videosIsInView = inView;
			}}
		>
			<ProjectVideo
				videoProjects={memeticRubbleVideos}
				route=""
			/>
			<HomeIcon />
			<Footer project={EProjects.MEMETIC_RUBBLE} />
		</div>
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 