<script lang="ts">
	import { inview } from 'svelte-inview';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { usePageMetadata } from '$lib/utils/metadata';

	import { weLikeBeingDataIntro } from '../../data/Projects/WeLikeBeingData/ProjectIntro';
	import {
		about1,
		about1Images,
		about2,
		about2Images,
		about3,
		about3Images
	} from '../../data/Projects/WeLikeBeingData/ProjectAbout';
	import { weLikeBeingDataDropdownImages } from '../../data/Projects/WeLikeBeingData/ProjectAboutDropdown';

	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { weLikeBeingDataNavStoreItems } from './store';
	import { weLikeBeingDataNavItems } from '../../data/Projects/WeLikeBeingData/NavItems';

	usePageMetadata({
		title: 'We like being data | Artdao',
		description:
			weLikeBeingDataIntro.description[0] ||
			'A studio visit with conceptual artist Mitchell F. Chan.',
		ogImage: `https://artdao.xyz${weLikeBeingDataIntro.bgImage}`,
		canonical: 'https://artdao.xyz/we-like-being-data'
	});

	let introIsInView: boolean;
	let about1IsInView: boolean;
	let about2IsInView: boolean;
	let about3IsInView: boolean;
	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (about1IsInView) {
			updateNavBar(
				weLikeBeingDataNavStoreItems,
				weLikeBeingDataNavItems,
				weLikeBeingDataNavItems[0].route
			);
		}
		if (about2IsInView) {
			updateNavBar(
				weLikeBeingDataNavStoreItems,
				weLikeBeingDataNavItems,
				weLikeBeingDataNavItems[1].route
			);
		}
		if (about3IsInView) {
			updateNavBar(
				weLikeBeingDataNavStoreItems,
				weLikeBeingDataNavItems,
				weLikeBeingDataNavItems[2].route
			);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[weLikeBeingDataIntro.bgImage, weLikeBeingDataIntro.bgImageMobile],
			about1Images,
			about2Images,
			about3Images,
			weLikeBeingDataDropdownImages
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
				project={weLikeBeingDataIntro}
				textColor="white"
				isCenterImage
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>

		<div
			id="about1"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				about1IsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={about1}
				aboutImages={$preloadedImagesStore[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="about2"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				about2IsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={about2}
				aboutImages={$preloadedImagesStore[2]}
				route=""
				isImageLeft={false}
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="about3"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				about3IsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={about3}
				aboutImages={$preloadedImagesStore[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div id="artwork-dropdown">
			<ProjectAboutDropdown
				images={$preloadedImagesStore[4]}
				aboutDropdownItems={undefined}
				route=""
			/>
		</div>

		<HomeIcon />
		<Footer project={EProjects.WE_LIKE_BEING_DATA} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
