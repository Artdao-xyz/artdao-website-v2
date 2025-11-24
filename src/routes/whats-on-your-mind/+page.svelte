<script lang="ts">
import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { EProjects } from '../../constants/enums';
	import { whatsOnYourMindNavItems } from '../../data/Projects/WhatsOnYourMind/NavItems';
	import { whatsOnYourMindIntro } from '../../data/Projects/WhatsOnYourMind/ProjectIntro';
	import {
		whatsOnYourMindPlatformsAbout,
		whatsOnYourMindPlatformsImages,
		whatsOnYourMindDanielAbout,
		whatsOnYourMindDanielImages,
		whatsOnYourMindH4wneeAbout,
		whatsOnYourMindH4wneeImages
	} from '../../data/Projects/WhatsOnYourMind/ProjectAbout';
import {
	whatsOnYourMindCarouselDaniel,
	whatsOnYourMindCarouselH4wnee
} from '../../data/Projects/WhatsOnYourMind/ProjectArtworkGrid';
import { whatsOnYourMindChatInterview } from '../../data/Projects/WhatsOnYourMind/ProjectChatInterview';
	import { whatsOnYourMindNavStoreItems } from './store';
	import preloadImages from '../../utils/preloadImages';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
import {
	metaballReady,
	preloadedImages as preloadedImagesStore,
	imagesLoaded
} from '$lib/stores/metaballPreloader';
import type { IGalleryImageMobile } from '$lib/elements/ArtworkContainer/interfaces';
	let platformsIsInView: boolean;
	let danielIsInView: boolean;
	let h4wneeIsInView: boolean;

	let containerRef: HTMLElement;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (platformsIsInView) {
			updateNavBar(whatsOnYourMindNavStoreItems, whatsOnYourMindNavItems, whatsOnYourMindNavItems[0].route);
		}

		if (danielIsInView) {
			updateNavBar(whatsOnYourMindNavStoreItems, whatsOnYourMindNavItems, whatsOnYourMindNavItems[1].route);
		}

		if (h4wneeIsInView) {
			updateNavBar(whatsOnYourMindNavStoreItems, whatsOnYourMindNavItems, whatsOnYourMindNavItems[2].route);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[whatsOnYourMindIntro.bgImage, whatsOnYourMindIntro.bgImageMobile],
			whatsOnYourMindPlatformsImages,
			whatsOnYourMindDanielImages,
			whatsOnYourMindH4wneeImages,
			whatsOnYourMindCarouselDaniel.map((item) => item.image),
			whatsOnYourMindCarouselH4wnee.map((item) => item.image),
			[whatsOnYourMindChatInterview.background]
		]);

		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	$: if ($metaballReady) {
		loadImages();
	}

	const splitMobileGrid = (arr: IGalleryImageMobile[]) => {
		const half = Math.ceil(arr.length / 2);
		return [arr.slice(0, half), arr.slice(half)];
	};

	const convertAndSplitGrid = (desktopArray: typeof whatsOnYourMindCarouselDaniel) => {
		const mobileArray = desktopArray.map((item) => ({
			src: item.image,
			name: item.name,
			description: item.description,
			alt: item.name || 'Artwork'
		}));
		return splitMobileGrid(mobileArray);
	};

	const [whatsOnYourMindCarouselDanielMobileLeft, whatsOnYourMindCarouselDanielMobileRight] =
		convertAndSplitGrid(whatsOnYourMindCarouselDaniel);
	const [whatsOnYourMindCarouselH4wneeMobileLeft, whatsOnYourMindCarouselH4wneeMobileRight] =
		convertAndSplitGrid(whatsOnYourMindCarouselH4wnee);
</script>

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		transition:fly={{ duration: 1000, delay: 750, y: 30, easing: cubicInOut }}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<div id="intro" use:inview={INVIEW_OPTIONS}>
			<ProjectIntro
				project={whatsOnYourMindIntro}
				textColor="black"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
				backgroundPosition="center"
			/>
		</div>

                <div
                        id="platforms"
                        use:inview={INVIEW_OPTIONS}
                        on:inview_change={(event) => (platformsIsInView = event.detail.inView)}
                >
                        <ProjectAbout
                                aboutItem={whatsOnYourMindPlatformsAbout}
                                aboutImages={$preloadedImagesStore[1]}
                                route="platforms"
                        />
                </div>

		<div id="chat-interview" use:inview={INVIEW_OPTIONS}>
			<ChatInterview data={whatsOnYourMindChatInterview} />
		</div>


		<div
			id="daniel"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => (danielIsInView = event.detail.inView)}
			on:inview_enter={(event) => (danielIsInView = event.detail.inView)}
			on:inview_leave={(event) => (danielIsInView = event.detail.inView)}
		>
			<ProjectAbout
				aboutItem={whatsOnYourMindDanielAbout}
				aboutImages={$preloadedImagesStore[2]}
				route="daniel"
				isImageLeft={false}
			/>
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={whatsOnYourMindCarouselDaniel} />
			</div>
			<div class="block sm:hidden">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={whatsOnYourMindCarouselDanielMobileLeft}
					imagesRight={whatsOnYourMindCarouselDanielMobileRight}
				/>
			</div>
		</div>

		<div
			id="h4wnee"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => (h4wneeIsInView = event.detail.inView)}
			on:inview_enter={(event) => (h4wneeIsInView = event.detail.inView)}
			on:inview_leave={(event) => (h4wneeIsInView = event.detail.inView)}
		>
			<ProjectAbout
				aboutItem={whatsOnYourMindH4wneeAbout}
				aboutImages={$preloadedImagesStore[3]}
				route="h4wnee"
			/>
			<div class="hidden sm:block">
				<ProjectArtworkGrid galleryImages={whatsOnYourMindCarouselH4wnee} />
			</div>
			<div class="block sm:hidden">
				<ProjectArtworkGridMobile
					isOverflow={false}
					imagesLeft={whatsOnYourMindCarouselH4wneeMobileLeft}
					imagesRight={whatsOnYourMindCarouselH4wneeMobileRight}
				/>
			</div>
		</div>

		<HomeIcon />
		<Footer project={EProjects.WHATS_ON_YOUR_MIND} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

