<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { chaosAgentsNavItems } from '../../data/Projects/ChaosAgents/NavItems';
	import {
		chaosAgentsAbout1,
		chaosAgentsAbout1Images,
		chaosAgentsAbout2,
		chaosAgentsAbout2Images,
		chaosAgentsAbout3,
		chaosAgentsAbout3Images
	} from '../../data/Projects/ChaosAgents/ProjectAbout';
	import { chaosAgentsIntro } from '../../data/Projects/ChaosAgents/ProjectIntro';
	import { roccoGalloVideo, perfectLoopVideo } from '../../data/Projects/ChaosAgents/ProjectVideo';
	import { chaosAgentsChatInterview } from '../../data/Projects/ChaosAgents/ProjectChatInterview';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import preloadImages from '../../utils/preloadImages';
	import { chaosAgentsNavStoreItems } from './store';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let introIsInView: boolean;
	let about1IsInView: boolean;
	let about2IsInView: boolean;
	let interviewIsInView: boolean;
	let about3IsInView: boolean;
	let videoIsInView: boolean;
	let perfectLoopVideoIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);
		
		if (introIsInView) {
			updateNavBar(chaosAgentsNavStoreItems, chaosAgentsNavItems, chaosAgentsNavItems[0].route);
		}
		if (about1IsInView) {
			updateNavBar(chaosAgentsNavStoreItems, chaosAgentsNavItems, chaosAgentsNavItems[1].route);
		}
		if (about2IsInView) {
			updateNavBar(chaosAgentsNavStoreItems, chaosAgentsNavItems, chaosAgentsNavItems[2].route);
		}
		if (about3IsInView) {
			updateNavBar(chaosAgentsNavStoreItems, chaosAgentsNavItems, chaosAgentsNavItems[3].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[chaosAgentsIntro.bgImage, chaosAgentsIntro.bgImageMobile],
			chaosAgentsAbout1Images,
			chaosAgentsAbout2Images,
			chaosAgentsAbout3Images
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
				project={chaosAgentsIntro}
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
				aboutItem={chaosAgentsAbout1}
				aboutImages={$preloadedImagesStore[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Interview Section -->
		<div
		id="interview"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			interviewIsInView = inView;
		}}
	>
		<ChatInterview data={chaosAgentsChatInterview} />
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
				aboutItem={chaosAgentsAbout2}
				aboutImages={$preloadedImagesStore[2]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Video Section -->
		<div
		id="video"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			videoIsInView = inView;
		}}
	>
		<ProjectVideo videoProjects={roccoGalloVideo} />
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
				aboutItem={chaosAgentsAbout3}
				aboutImages={$preloadedImagesStore[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

				<!-- Perfect Loop Video Section -->
		<div
			id="perfect-loop-video"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				perfectLoopVideoIsInView = inView;
			}}
		>
			<ProjectVideo videoProjects={perfectLoopVideo} />
		</div>

		<HomeIcon />
		<Footer project={EProjects.CHAOS_AGENTS} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 