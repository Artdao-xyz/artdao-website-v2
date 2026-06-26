<script lang="ts">
	import { inview } from 'svelte-inview';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import QuoteComponent from '$lib/components/QuoteComponent/QuoteComponent.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { usePageMetadata } from '$lib/utils/metadata';

	import { noneOfTheseGirlsExistIntro } from '../../data/Projects/NoneOfTheseGirlsExist/ProjectIntro';
	import { quoteMayaManSections, quoteMayaManImages } from '../../data/Projects/NoneOfTheseGirlsExist/ProjectAbout';

	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { noneOfTheseGirlsExistNavStoreItems } from './store';
	import { noneOfTheseGirlsExistNavItems } from '../../data/Projects/NoneOfTheseGirlsExist/NavItems';

	usePageMetadata({
		title: 'None of These Girls Exist | Artdao',
		description:
			noneOfTheseGirlsExistIntro.description[0] ||
			'Maya Man on Star Quest, the algorithm, and the coach inside her.',
		ogImage: `https://artdao.xyz${noneOfTheseGirlsExistIntro.bgImage}`,
		canonical: 'https://artdao.xyz/none-of-these-girls-exist'
	});

	let introIsInView: boolean;
	let quoteMayaManIsInView: boolean;
	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (quoteMayaManIsInView) {
			updateNavBar(
				noneOfTheseGirlsExistNavStoreItems,
				noneOfTheseGirlsExistNavItems,
				noneOfTheseGirlsExistNavItems[0].route
			);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[noneOfTheseGirlsExistIntro.bgImage, noneOfTheseGirlsExistIntro.bgImageMobile],
			quoteMayaManImages
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
				project={noneOfTheseGirlsExistIntro}
				textColor="white"
				isCenterImage
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>
		</div>

		<div
			id="quote-maya-man"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				quoteMayaManIsInView = event.detail.inView;
			}}
		>
			{#each quoteMayaManSections as quoteItem, i (i)}
				<QuoteComponent
					{quoteItem}
					aboutImage={$preloadedImagesStore[1][i]}
					route={`quote-maya-man-${i}`}
					colorVariant={EColorVariant.BLACK}
					isImageLeft={i % 2 === 0}
				/>
			{/each}
		</div>

		<HomeIcon />
		<Footer project={EProjects.NONE_OF_THESE_GIRLS_EXIST} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
