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
	import { contactZonesNavItems } from '../../data/Projects/ContactZones/NavItems';
	import {
		contactZonesAntigoniAbout,
		contactZonesAntigoniAboutImage,
		contactZonesDanielleAbout,
		contactZonesDanielleAboutImage,
		contactZonesHapticTacticsAbout,
		contactZonesHapticTacticsImage,
		contactZonesTheoAbout,
		contactZonesTheoAboutImage
	} from '../../data/Projects/ContactZones/ProjectAbout';
	import {
		contactZonesAntigoniGridImages,
		contactZonesDanielleGridImages,
		contactZonesTheoGridImages
	} from '../../data/Projects/ContactZones/ProjectAboutDropdown';
	import {
		contactZonesChatInterview,
		contactZonesChatInterviewBackground
	} from '../../data/Projects/ContactZones/ProjectChatInterview';
	import { contactZonesIntro } from '../../data/Projects/ContactZones/ProjectIntro';
	import { usePageMetadata } from '$lib/utils/metadata';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { contactZonesNavStoreItems } from './store';

	usePageMetadata({
		title: 'Contact Zones | Artdao',
		description:
			contactZonesIntro.description[0] ||
			'Installations and environments where game logic, touch, and participation meet—in contact zones between digital and physical space.',
		ogImage: `https://artdao.xyz${contactZonesIntro.bgImage}`,
		canonical: 'https://artdao.xyz/contact-zones'
	});

	let introIsInView: boolean;
	let hapticIsInView: boolean;
	let danielleSectionIsInView: boolean;
	let antigoniSectionIsInView: boolean;
	let theoSectionIsInView: boolean;
	let qaIsInView: boolean;

	let containerRef: HTMLElement;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(contactZonesNavStoreItems, contactZonesNavItems, 'intro');
		}
		if (hapticIsInView) {
			updateNavBar(
				contactZonesNavStoreItems,
				contactZonesNavItems,
				contactZonesNavItems[0].route
			);
		}
		if (danielleSectionIsInView) {
			updateNavBar(
				contactZonesNavStoreItems,
				contactZonesNavItems,
				contactZonesNavItems[1].route
			);
		}
		if (antigoniSectionIsInView) {
			updateNavBar(
				contactZonesNavStoreItems,
				contactZonesNavItems,
				contactZonesNavItems[2].route
			);
		}
		if (theoSectionIsInView) {
			updateNavBar(
				contactZonesNavStoreItems,
				contactZonesNavItems,
				contactZonesNavItems[3].route
			);
		}
		if (qaIsInView) {
			updateNavBar(
				contactZonesNavStoreItems,
				contactZonesNavItems,
				contactZonesNavItems[4].route
			);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[contactZonesIntro.bgImage, contactZonesIntro.bgImageMobile],
			[contactZonesHapticTacticsImage],
			[contactZonesDanielleAboutImage],
			contactZonesDanielleGridImages,
			[contactZonesAntigoniAboutImage],
			contactZonesAntigoniGridImages,
			[contactZonesTheoAboutImage],
			contactZonesTheoGridImages,
			[contactZonesChatInterviewBackground]
		]);

		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	$: if ($metaballReady) {
		loadImages();
	}

	$: chatInterviewData = {
		...contactZonesChatInterview,
		background: $preloadedImagesStore
			? $preloadedImagesStore[8][0]
			: contactZonesChatInterview.background
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
				project={contactZonesIntro}
				textColor="white"
				forceHeroBackgroundCover={true}
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
				backgroundPosition="center"
			/>
		</div>

		<div
			id="haptic-tactics"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				hapticIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={contactZonesHapticTacticsAbout}
				aboutImage={$preloadedImagesStore[1][0]}
				route="haptic-tactics-inner"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="danielle-brathwaite-shirley"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				danielleSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={contactZonesDanielleAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="danielle-brathwaite-shirley-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[3]}
				route="danielle-brathwaite-shirley-works"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="antigoni-tsagkaropoulou"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				antigoniSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={contactZonesAntigoniAbout}
				aboutImage={$preloadedImagesStore[4][0]}
				route="antigoni-tsagkaropoulou-inner"
				colorVariant={EColorVariant.BLACK}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[5]}
				route="antigoni-tsagkaropoulou-works"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="theo-triantafyllidis"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				theoSectionIsInView = event.detail.inView;
			}}
		>
			<ProjectAbout
				aboutItem={contactZonesTheoAbout}
				aboutImage={$preloadedImagesStore[6][0]}
				route="theo-triantafyllidis-inner"
				colorVariant={EColorVariant.BLACK}
				isImageLeft={false}
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={undefined}
				images={$preloadedImagesStore[7]}
				route="theo-triantafyllidis-works"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<div
			id="qa"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				qaIsInView = event.detail.inView;
			}}
		>
			<ChatInterview data={chatInterviewData} />
		</div>

		<HomeIcon />
		<Footer project={EProjects.CONTACT_ZONES} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
