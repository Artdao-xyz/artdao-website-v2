<script lang="ts">
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
			aliceBucknellDropdownItems.map(item => item.image),
			frenetikVoidDropdownItems.map(item => item.image),
			kevinPeterHeDropdownItems.map(item => item.image),
			kimLaughtonDropdownItems.map(item => item.image),
			theoTriantafyllidisDropdownItems.map(item => item.image),
			wendiYanDropdownItems.map(item => item.image),
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
			<ProjectAboutDropdown
				aboutDropdownItems={aliceBucknellDropdownItems}
				images={$preloadedImagesStore[2]}
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
			<ProjectAboutDropdown
				aboutDropdownItems={frenetikVoidDropdownItems}
				images={$preloadedImagesStore[3]}
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
			<ProjectAboutDropdown
				aboutDropdownItems={kevinPeterHeDropdownItems}
				images={$preloadedImagesStore[4]}
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
			<ProjectAboutDropdown
				aboutDropdownItems={kimLaughtonDropdownItems}
				images={$preloadedImagesStore[5]}
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
			<ProjectAboutDropdown
				aboutDropdownItems={theoTriantafyllidisDropdownItems}
				images={$preloadedImagesStore[6]}
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
			<ProjectAboutDropdown
				aboutDropdownItems={wendiYanDropdownItems}
				images={$preloadedImagesStore[7]}
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
			<ProjectAboutDropdown
				aboutDropdownItems={yuehaoJiangDropdownItems}
				images={$preloadedImagesStore[8]}
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

