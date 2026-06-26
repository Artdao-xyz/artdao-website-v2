<script lang="ts">
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { alienAlphabetsNavItems } from '../../data/Projects/AlienAlphabets/NavItems';
	import {
		alienAlphabetsEdgeOfTheArchiveAbout,
		alienAlphabetsEdgeOfTheArchiveImage,
		alienAlphabetsAliceBucknellAbout,
		alienAlphabetsAliceBucknellAboutImage,
		alienAlphabetsKyleMcDonaldAbout,
		alienAlphabetsKyleMcDonaldAboutImage
	} from '../../data/Projects/AlienAlphabets/ProjectAbout';
	import {
		alienAlphabetsAliceBucknellGridImages,
		alienAlphabetsKyleMcDonaldGridImages
	} from '../../data/Projects/AlienAlphabets/ProjectAboutDropdown';
	import { alienAlphabetsChatInterview } from '../../data/Projects/AlienAlphabets/ProjectChatInterview';
	import { alienAlphabetsIntro } from '../../data/Projects/AlienAlphabets/ProjectIntro';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { alienAlphabetsNavStoreItems } from './store';

	usePageMetadata({
		title: 'Alien Alphabets | Artdao',
		description:
			alienAlphabetsIntro.description[0] ||
			'Communication systems built for beings that don\'t exist yet. Grammars that resist translation by design.',
		ogImage: `https://artdao.xyz${alienAlphabetsIntro.bgImage}`,
		canonical: 'https://artdao.xyz/alien-alphabets'
	});

	let introIsInView: boolean;
	let edgeOfTheArchiveIsInView: boolean;
	let aliceBucknellIsInView: boolean;
	let kyleMcDonaldIsInView: boolean;

	let containerRef: HTMLElement;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(alienAlphabetsNavStoreItems, alienAlphabetsNavItems, alienAlphabetsNavItems[0].route);
		}
		if (edgeOfTheArchiveIsInView) {
			updateNavBar(alienAlphabetsNavStoreItems, alienAlphabetsNavItems, alienAlphabetsNavItems[1].route);
		}
		if (aliceBucknellIsInView) {
			updateNavBar(alienAlphabetsNavStoreItems, alienAlphabetsNavItems, alienAlphabetsNavItems[2].route);
		}
		if (kyleMcDonaldIsInView) {
			updateNavBar(alienAlphabetsNavStoreItems, alienAlphabetsNavItems, alienAlphabetsNavItems[3].route);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[alienAlphabetsIntro.bgImage, alienAlphabetsIntro.bgImageMobile],
			[alienAlphabetsEdgeOfTheArchiveImage],
			[alienAlphabetsAliceBucknellAboutImage],
			alienAlphabetsAliceBucknellGridImages,
			[alienAlphabetsKyleMcDonaldAboutImage],
			alienAlphabetsKyleMcDonaldGridImages,
			[alienAlphabetsChatInterview.background]
		]);

		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	$: if ($metaballReady) {
		loadImages();
	}

	$: chatInterviewData = {
		...alienAlphabetsChatInterview,
		background: $preloadedImagesStore ? $preloadedImagesStore[6][0] : alienAlphabetsChatInterview.background
	};
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
				project={alienAlphabetsIntro}
				textColor="white"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
				backgroundPosition="center"
			/>
		</div>

		<div
			id="edge-of-the-archive"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				edgeOfTheArchiveIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={alienAlphabetsEdgeOfTheArchiveAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route="edge-of-the-archive-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={true}
			/>
		</div>

		<div
			id="alice-bucknell"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				aliceBucknellIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={alienAlphabetsAliceBucknellAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="alice-bucknell-text"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[3]}
				route="alice-bucknell-works"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="kyle-mcdonald"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				kyleMcDonaldIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={alienAlphabetsKyleMcDonaldAbout}
				aboutImage={$preloadedImagesStore[4][0]}
				route="kyle-mcdonald-text"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={true}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[5]}
				route="kyle-mcdonald-works"
				colorVariant={EColorVariant.BLACK}
			/>

			<ChatInterview data={chatInterviewData} />
		</div>

		<HomeIcon />
		<Footer project={EProjects.ALIEN_ALPHABETS} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
