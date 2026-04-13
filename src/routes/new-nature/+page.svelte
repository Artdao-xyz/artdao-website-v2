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
	import { newNatureNavItems } from '../../data/Projects/NewNature/NavItems';
	import {
		newNatureEssayAbout,
		newNatureEssayAboutImage,
		newNatureMarkDorfAbout,
		newNatureMarkDorfAboutImage,
		newNatureNaturalTechnologiesAbout,
		newNatureNaturalTechnologiesAboutImage,
		newNatureSaraLudyAbout,
		newNatureSaraLudyAboutImage
	} from '../../data/Projects/NewNature/ProjectAbout';
	import { newNatureGrid1Images, newNatureGrid2Images } from '../../data/Projects/NewNature/ProjectAboutDropdown';
	import { newNatureChatInterview } from '../../data/Projects/NewNature/ProjectChatInterview';
	import { newNatureIntro } from '../../data/Projects/NewNature/ProjectIntro';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { newNatureNavStoreItems } from './store';

	usePageMetadata({
		title: 'New Nature | Artdao',
		description: newNatureIntro.description[0] || 'Technology, perception, and the shifting boundary between culture and nature.',
		ogImage: `https://artdao.xyz${newNatureIntro.bgImage}`,
		canonical: 'https://artdao.xyz/new-nature'
	});

	let introIsInView: boolean;
	let markDorfIsInView: boolean;
	let saraLudyIsInView: boolean;
	let naturalTechnologiesIsInView: boolean;

	let containerRef: HTMLElement;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		/* `newNatureNavItems` has 4 entries (0 intro … 3 natural-technologies). Later branches win on overlap. */
		if (introIsInView) {
			updateNavBar(newNatureNavStoreItems, newNatureNavItems, newNatureNavItems[0].route);
		}
		if (markDorfIsInView) {
			updateNavBar(newNatureNavStoreItems, newNatureNavItems, newNatureNavItems[1].route);
		}
		if (saraLudyIsInView) {
			updateNavBar(newNatureNavStoreItems, newNatureNavItems, newNatureNavItems[2].route);
		}
		if (naturalTechnologiesIsInView) {
			updateNavBar(newNatureNavStoreItems, newNatureNavItems, newNatureNavItems[3].route);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[newNatureIntro.bgImage, newNatureIntro.bgImageMobile],
			[newNatureMarkDorfAboutImage],
			[newNatureEssayAboutImage],
			newNatureGrid1Images,
			[newNatureSaraLudyAboutImage],
			newNatureGrid2Images,
			[newNatureChatInterview.background],
			[newNatureNaturalTechnologiesAboutImage]
		]);

		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	$: if ($metaballReady) {
		loadImages();
	}

	$: chatInterviewData = {
		...newNatureChatInterview,
		background: $preloadedImagesStore ? $preloadedImagesStore[6][0] : newNatureChatInterview.background
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
				project={newNatureIntro}
				textColor="white"
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
				backgroundPosition="center"
			/>
		</div>

		<div
			id="mark-dorf"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				markDorfIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={newNatureMarkDorfAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route="mark-dorf-inner"
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectAbout
				aboutItem={newNatureEssayAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="new-nature-text"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[3]}
				route="new-nature-works"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="sara-ludy"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				saraLudyIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={newNatureSaraLudyAbout}
				aboutImage={$preloadedImagesStore[4][0]}
				route="sara-ludy-text"
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[5]}
				route="sara-ludy-works"
				colorVariant={EColorVariant.BLACK}
			/>

			<ChatInterview data={chatInterviewData} />
		</div>

		<div
			id="natural-technologies"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				naturalTechnologiesIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={newNatureNaturalTechnologiesAbout}
				aboutImage={$preloadedImagesStore[7][0]}
				route="natural-technologies-text"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<HomeIcon />
		<Footer project={EProjects.NEW_NATURE} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
