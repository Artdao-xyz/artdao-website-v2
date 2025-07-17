<script lang="ts">
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
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
		cydrAboutImages
	} from '../../data/Projects/DigitalArchaeology/ProjectAbout';
	import { digitalArchaeologyIntro } from '../../data/Projects/DigitalArchaeology/ProjectIntro';
	import { DigitalArchaeologyVideo } from '../../data/Projects/DigitalArchaeology/ProjectVideo';
	import { DigitalArchaeologyArtworkGrid } from '../../data/Projects/DigitalArchaeology/ProjectArtworkGrid';
	import { DigitalArchaeologyPolaroids } from '../../data/Projects/DigitalArchaeology/ProjectPolaroids';
	import { digitalArchaeologyChatInterview, digitalArchaeologyChatInterview2 } from '../../data/Projects/DigitalArchaeology/ProjectChatInterview';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { digitalArchaeologyNavStoreItems } from './store';

	let introIsInView: boolean;
	let nostalgiaIsInView: boolean;
	let pinkyBlueIsInView: boolean;
	let sabatoIsInView: boolean;
	let stipinIsInView: boolean;
	let chatInterviewIsInView: boolean;
	let estelleIsInView: boolean;
	let artworkGridIsInView: boolean;
	let cydrIsInView: boolean;
	let chatInterview2IsInView: boolean;
	let polaroidsIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[0].route);
		}
		if (nostalgiaIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[1].route);
		}
		if (pinkyBlueIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[2].route);
		}
		if (sabatoIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[3].route);
		}
		if (stipinIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[4].route);
		}
		if (chatInterviewIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[5].route);
		}
		if (estelleIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[6].route);
		}
		if (artworkGridIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[7].route);
		}
		if (cydrIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[8].route);
		}
		if (chatInterview2IsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[9].route);
		}
		if (polaroidsIsInView) {
			updateNavBar(digitalArchaeologyNavStoreItems, digitalArchaeologyNavItems, digitalArchaeologyNavItems[10].route);
		}
	};

	const preloadedImages = preloadImages([
		[digitalArchaeologyIntro.bgImage, digitalArchaeologyIntro.bgImageMobile],
		nostalgiaAboutImages,
		pinkyBlueAboutImages,
		sabatoAboutImages,
		stipinAboutImages,
		estelleAboutImages,
		cydrAboutImages,
		DigitalArchaeologyArtworkGrid.artworks.map((item) => item.image),
		DigitalArchaeologyPolaroids.map((item) => item.image)
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
				project={digitalArchaeologyIntro}
				textColor="white"
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
		</div>

		<!-- Nostalgia Section -->
		<div
			id="nostalgia"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				nostalgiaIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={nostalgiaAbout}
				aboutImages={images[1]}
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
			<ChatInterview data={digitalArchaeologyChatInterview} />
		</div>

		<!-- PinkyBlue Section -->
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
				aboutImages={images[2]}
				route=""
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
		</div>

		<!-- Sabato Section -->
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
				aboutImages={images[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
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
				aboutImages={images[4]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

			<!-- Chat Interview 2 Section -->
		<div
		id="chat-interview-2"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			chatInterview2IsInView = inView;
		}}
		>
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
				aboutImages={images[5]}
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
			<ProjectArtworkGrid galleryImages={DigitalArchaeologyArtworkGrid.artworks} />
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
				aboutImages={images[6]}
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
			<ProjectPolaroids images={DigitalArchaeologyPolaroids} />
		</div>

		<HomeIcon />
		<Footer project={EProjects.DIGITAL_ARCHAEOLOGY} />
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 