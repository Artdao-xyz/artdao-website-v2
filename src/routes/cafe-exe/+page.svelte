<script lang="ts">
	import CafeExeAbout from '$lib/components/CafeExeAbout/CafeExeAbout.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { cafeExeNavItems } from '../../data/Projects/CafeExe/NavItems';
	import {
		aliceBucknellDropdownItems,
		frenetikVoidDropdownItems,
		kevinPeterHeDropdownItems,
		kimLaughtonDropdownItems,
		theoTriantafyllidisDropdownItems,
		wendiYanDropdownItems,
		yuehaoJiangDropdownItems
	} from '../../data/Projects/CafeExe/ProjectAboutDropdown';
	import { cafeExeAbout } from '../../data/Projects/CafeExe/ProjectAbout';
	import {
		aliceBucknellAbout,
		aliceBucknellAboutImage,
		frenetikVoidAbout,
		frenetikVoidAboutImage,
		kevinPeterHeAbout,
		kevinPeterHeAboutImage,
		kimLaughtonAbout,
		kimLaughtonAboutImage,
		theoTriantafyllidisAbout,
		theoTriantafyllidisAboutImage,
		wendiYanAbout,
		wendiYanAboutImage,
		yuehaoJiangAbout,
		yuehaoJiangAboutImage
	} from '../../data/Projects/CafeExe/ProjectArtistAbout';
	import { cafeExeChatInterview } from '../../data/Projects/CafeExe/ProjectChatInterview';
	import { cafeExeIntro } from '../../data/Projects/CafeExe/ProjectIntro';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { cafeExeNavStoreItems } from './store';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let introIsInView: boolean;
	let earthEngineIsInView: boolean;
	let serenoDeMiMenteIsInView: boolean;
	let passageIsInView: boolean;
	let defectiveHolidayIsInView: boolean;
	let feralMetaverseIsInView: boolean;
	let innerCarbonClassicIsInView: boolean;
	let spiderlilyIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(cafeExeNavStoreItems, cafeExeNavItems, cafeExeNavItems[0].route);
		}
		if (earthEngineIsInView) {
			updateNavBar(cafeExeNavStoreItems, cafeExeNavItems, cafeExeNavItems[0].route);
		}
		if (serenoDeMiMenteIsInView) {
			updateNavBar(cafeExeNavStoreItems, cafeExeNavItems, cafeExeNavItems[1].route);
		}
		if (passageIsInView) {
			updateNavBar(cafeExeNavStoreItems, cafeExeNavItems, cafeExeNavItems[2].route);
		}
		if (defectiveHolidayIsInView) {
			updateNavBar(cafeExeNavStoreItems, cafeExeNavItems, cafeExeNavItems[3].route);
		}
		if (feralMetaverseIsInView) {
			updateNavBar(cafeExeNavStoreItems, cafeExeNavItems, cafeExeNavItems[4].route);
		}
		if (innerCarbonClassicIsInView) {
			updateNavBar(cafeExeNavStoreItems, cafeExeNavItems, cafeExeNavItems[5].route);
		}
		if (spiderlilyIsInView) {
			updateNavBar(cafeExeNavStoreItems, cafeExeNavItems, cafeExeNavItems[6].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[cafeExeIntro.bgImage],
			[cafeExeChatInterview.background],
			[aliceBucknellAboutImage],
			aliceBucknellDropdownItems.map(item => item.image),
			[frenetikVoidAboutImage],
			frenetikVoidDropdownItems.map(item => item.image),
			[kevinPeterHeAboutImage],
			kevinPeterHeDropdownItems.map(item => item.image),
			[kimLaughtonAboutImage],
			kimLaughtonDropdownItems.map(item => item.image),
			[theoTriantafyllidisAboutImage],
			theoTriantafyllidisDropdownItems.map(item => item.image),
			[wendiYanAboutImage],
			wendiYanDropdownItems.map(item => item.image),
			[yuehaoJiangAboutImage],
			yuehaoJiangDropdownItems.map(item => item.image)
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
			<ProjectAbout
				aboutItem={cafeExeAbout}
				aboutImage={$preloadedImagesStore[0][0]}
				route="intro"
				isImageContain={true}
				isImageLeft={true}
				colorVariant="#D9D9D9"
			/>
			<ChatInterview data={cafeExeChatInterview} />
		</div>

		<!-- Earth Engine - Alice Bucknell -->
		<div
			id="earth-engine"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				earthEngineIsInView = inView;
			}}
		>
			<CafeExeAbout
				aboutItem={aliceBucknellAbout}
				aboutImage={$preloadedImagesStore[2][0]}
				route="alice-bucknell"
				isImageLeft={true}
				colorVariant="#EEEEEE"
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={aliceBucknellDropdownItems}
				images={$preloadedImagesStore[3]}
				route="earth-engine"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Sereno de mi Mente - Frenetik Void -->
		<div
			id="sereno-de-mi-mente"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				serenoDeMiMenteIsInView = inView;
			}}
		>
			<CafeExeAbout
				aboutItem={frenetikVoidAbout}
				aboutImage={$preloadedImagesStore[4][0]}
				route="frenetik-void"
				isImageLeft={false}
				colorVariant="#EEEEEE"
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={frenetikVoidDropdownItems}
				images={$preloadedImagesStore[5]}
				route="sereno-de-mi-mente"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Passage - Kevin Peter He -->
		<div
			id="passage"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				passageIsInView = inView;
			}}
		>
			<CafeExeAbout
				aboutItem={kevinPeterHeAbout}
				aboutImage={$preloadedImagesStore[6][0]}
				route="kevin-peter-he"
				isImageLeft={true}
				colorVariant="#EEEEEE"
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={kevinPeterHeDropdownItems}
				images={$preloadedImagesStore[7]}
				route="passage"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Defective Holiday - Kim Laughton -->
		<div
			id="defective-holiday"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				defectiveHolidayIsInView = inView;
			}}
		>
			<CafeExeAbout
				aboutItem={kimLaughtonAbout}
				aboutImage={$preloadedImagesStore[8][0]}
				route="kim-laughton"
				isImageLeft={false}
				colorVariant="#EEEEEE"
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={kimLaughtonDropdownItems}
				images={$preloadedImagesStore[9]}
				route="defective-holiday"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Feral Metaverse - Theo Triantafyllidis -->
		<div
			id="feral-metaverse"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				feralMetaverseIsInView = inView;
			}}
		>
			<CafeExeAbout
				aboutItem={theoTriantafyllidisAbout}
				aboutImage={$preloadedImagesStore[10][0]}
				route="theo-triantafyllidis"
				isImageLeft={true}
				colorVariant="#EEEEEE"
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={theoTriantafyllidisDropdownItems}
				images={$preloadedImagesStore[11]}
				route="feral-metaverse"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- The Inner Carbon Classic - Wendi Yan -->
		<div
			id="inner-carbon-classic"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				innerCarbonClassicIsInView = inView;
			}}
		>
			<CafeExeAbout
				aboutItem={wendiYanAbout}
				aboutImage={$preloadedImagesStore[12][0]}
				route="wendi-yan"
				isImageLeft={false}
				colorVariant="#EEEEEE"
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={wendiYanDropdownItems}
				images={$preloadedImagesStore[13]}
				route="inner-carbon-classic"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<!-- Spiderlily - Yuehao Jiang -->
		<div
			id="spiderlily"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				spiderlilyIsInView = inView;
			}}
		>
			<CafeExeAbout
				aboutItem={yuehaoJiangAbout}
				aboutImage={$preloadedImagesStore[14][0]}
				route="yuehao-jiang"
				isImageLeft={true}
				colorVariant="#EEEEEE"
			/>
			<ProjectAboutDropdown
				aboutDropdownItems={yuehaoJiangDropdownItems}
				images={$preloadedImagesStore[15]}
				route="spiderlily"
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

		<HomeIcon />
		<!-- <Footer project={EProjects.CAFE_EXE} /> -->
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

