<script lang="ts">
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';
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
	import { subconsciousMediaChatInterview } from '../../data/Projects/SubconsciousMedia/ProjectChatInterview';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { subconsciousMediaNavStoreItems } from './store';

	let introIsInView: boolean;
	let digitalSynchronicityIsInView: boolean;
	let digitalSynchronicityGalleryIsInView: boolean;
	let vidalHerreraIsInView: boolean;
	let chatInterviewIsInView: boolean;
	let artistGalleryIsInView: boolean;
	let gregorioNashIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[0].route);
		}
		if (digitalSynchronicityIsInView) {
			updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[1].route);
		}
		if (digitalSynchronicityGalleryIsInView) {
			updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[2].route);
		}
		if (vidalHerreraIsInView) {
			updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[3].route);
		}
		if (chatInterviewIsInView) {
			updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[4].route);
		}
		if (artistGalleryIsInView) {
			updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[5].route);
		}
		if (gregorioNashIsInView) {
			updateNavBar(subconsciousMediaNavStoreItems, subconsciousMediaNavItems, subconsciousMediaNavItems[6].route);
		}
	};

	const preloadedImages = preloadImages([
		[subconsciousMediaIntro.bgImage, subconsciousMediaIntro.bgImageMobile],
		subconsciousMediaAbout1Images,
		subconsciousMediaDropdown1.map((item) => item.image),
		subconsciousMediaAbout2Images,
		subconsciousMediaDropdown2.map((item) => item.image),
		subconsciousMediaAbout3Images
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
				project={subconsciousMediaIntro}
				textColor="black"
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
		</div>

		<!-- Digital Synchronicity Section -->
		<div
			id="digital-synchronicity"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				digitalSynchronicityIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={subconsciousMediaAbout1}
				aboutImages={images[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Vidal Herrera Section -->
		<div
			id="vidal-herrera"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				vidalHerreraIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={subconsciousMediaAbout2}
				aboutImages={images[3]}
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
			<ChatInterview data={subconsciousMediaChatInterview} />
		</div>

		<!-- Digital Synchronicity Gallery Section -->
		<div
			id="digital-synchronicity-gallery"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				digitalSynchronicityGalleryIsInView = inView;
			}}
		>
			<ProjectAboutDropdown
				images={images[2]}
				aboutDropdownItems={subconsciousMediaDropdown1}
				route=""
			/>
		</div>

		<!-- Gregorio Nash Section -->
		<div
			id="gregorio-nash"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				gregorioNashIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={subconsciousMediaAbout3}
				aboutImages={images[5]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Artist Gallery Section -->
		<div
			id="artist-gallery"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artistGalleryIsInView = inView;
			}}
		>
			<ProjectAboutDropdown
				images={images[4]}
				aboutDropdownItems={subconsciousMediaDropdown2}
				route=""
			/>
		</div>
		<Footer project={EProjects.SUBCONSCIOUS_MEDIA} />
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 