<script lang="ts">
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import QuoteComponent from '$lib/components/QuoteComponent/QuoteComponent.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { offPlatformsNavItems } from '../../data/Projects/OffPlatforms/NavItems';
	import {
		offPlatformsConclusionAbout,
		offPlatformsConclusionImage,
		offPlatformsQuoteImages,
		offPlatformsQuoteSections
	} from '../../data/Projects/OffPlatforms/ProjectAbout';
	import { offPlatformsIntro } from '../../data/Projects/OffPlatforms/ProjectIntro';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { offPlatformsNavStoreItems } from './store';

	usePageMetadata({
		title: 'Off-Platforms | Artdao',
		description:
			offPlatformsIntro.description[0] ||
			'Lou Fauroux and Alice Bucknell on living inside god-mode infrastructures at the moment their promises start to unravel.',
		ogImage: `https://artdao.xyz${offPlatformsIntro.bgImage}`,
		canonical: 'https://artdao.xyz/off-platforms'
	});

	let introIsInView: boolean;
	let conversationIsInView: boolean;
	let aliceBucknellIsInView: boolean;
	let conclusionIsInView: boolean;

	let containerRef: HTMLElement;

	let quoteImageIndex = 0;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(offPlatformsNavStoreItems, offPlatformsNavItems, 'intro');
		}
		if (conversationIsInView) {
			updateNavBar(
				offPlatformsNavStoreItems,
				offPlatformsNavItems,
				offPlatformsNavItems[0].route
			);
		}
		if (aliceBucknellIsInView) {
			updateNavBar(
				offPlatformsNavStoreItems,
				offPlatformsNavItems,
				offPlatformsNavItems[1].route
			);
		}
		if (conclusionIsInView) {
			updateNavBar(
				offPlatformsNavStoreItems,
				offPlatformsNavItems,
				offPlatformsNavItems[2].route
			);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[offPlatformsIntro.bgImage, offPlatformsIntro.bgImageMobile],
			offPlatformsQuoteImages,
			[offPlatformsConclusionImage]
		]);

		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

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
		<div
			id="intro"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				introIsInView = event.detail.inView;
			}}
		>
			<ProjectIntro
				project={offPlatformsIntro}
				textColor="white"
				backgroundPosition="top"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>

		<div id="conversation">
			{#each offPlatformsQuoteSections as section, i (i)}
				{@const imageIdx = section.image
					? offPlatformsQuoteImages.indexOf(section.image)
					: -1}
				<div
					id={i === 1 ? 'alice-bucknell' : undefined}
					use:inview={i === 0 || i === 1 ? INVIEW_OPTIONS : undefined}
					on:inview_change={i === 0
						? (event) => {
								conversationIsInView = event.detail.inView;
							}
						: i === 1
							? (event) => {
									aliceBucknellIsInView = event.detail.inView;
								}
							: undefined}
				>
					<QuoteComponent
						quoteItem={section.quoteItem}
						aboutImage={imageIdx >= 0 ? $preloadedImagesStore[1][imageIdx] : undefined}
						route={`quote-off-platforms-${i}`}
						colorVariant={EColorVariant.BLACK}
						isImageLeft={i % 2 === 0}
					/>
				</div>
			{/each}
		</div>

		<div
			id="conclusion"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				conclusionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={offPlatformsConclusionAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="conclusion-inner"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<HomeIcon />
		<Footer project={EProjects.OFF_PLATFORMS} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
