<script lang="ts">
	import ecoInterviewBg from '$lib/assets/images/projects/ecologiesOfCode/ecologies-interview-bg.png';
	import hyperInterview from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/interview/artwork-press.png';
	import okytomoInterview from '$lib/assets/images/projects/ecologiesOfCode/okytomo/interview/okytomoInterview.png';
	import PolaroidsMobile from '$lib/components/PolaroidsMobile/PolaroidsMobile.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectArtworkGridMobile from '$lib/components/ProjectArtworkGridMobile/ProjectArtworkGridMobile.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';
	import { ecologiesNavItems } from '../../../data/Projects/EcologiesOfCode/NavItems';
	import {
		hypereikonAbout,
		hypereikonAboutImages,
		joaquinaAbout,
		joaquinaAboutImages,
		okytomoAbout,
		okytomoAboutImages
	} from '../../../data/Projects/EcologiesOfCode/ProjectAbout';
	import {
		ecologiesArtworkImages,
		ecologiesGallery1,
		ecologiesGallery2
	} from '../../../data/Projects/EcologiesOfCode/ProjectArtworkGallery';
	import {
		hypereikonQuestions,
		joaquinaQuestions,
		okyQuestions
	} from '../../../data/Projects/EcologiesOfCode/ProjectInterview';
	import { ecologiesOfCodeProject } from '../../../data/Projects/EcologiesOfCode/ProjectIntro';
	import {
		ecologiesPolaroidImages,
		ecologiesPolaroidImagesTwo
	} from '../../../data/Projects/EcologiesOfCode/ProjectPolaroids';
	import {
		ecologiesVideoProjectOne,
		okyVideos
	} from '../../../data/Projects/EcologiesOfCode/ProjectVIdeo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { ecologiesNavStoreItems } from './store';

	let size: number;

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const joaquina = document.getElementById('joaquina');
		const joaquinaEnd = document.getElementById('joaquina-end');
		const oki = document.getElementById('oki');
		const okiEnd = document.getElementById('oki-end');
		const hypereikon = document.getElementById('hypereikon');

		if (elementIsVisibleInViewport(intro)) {
			ecologiesNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: true
				},
				{
					text: 'Joaquina',
					route: 'joaquina',
					selected: false
				},
				{
					text: 'Okytomo',
					route: 'oki',
					selected: false
				},
				{
					text: 'Hypereikon',
					route: 'hypereikon',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(joaquina, true) || elementIsVisibleInViewport(joaquinaEnd)) {
			ecologiesNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Joaquina',
					route: 'joaquina',
					selected: true
				},
				{
					text: 'Okytomo',
					route: 'oki',
					selected: false
				},
				{
					text: 'Hypereikon',
					route: 'hypereikon',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(oki, true) || elementIsVisibleInViewport(okiEnd)) {
			ecologiesNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Joaquina',
					route: 'joaquina',
					selected: false
				},
				{
					text: 'Okytomo',
					route: 'oki',
					selected: true
				},
				{
					text: 'Hypereikon',
					route: 'hypereikon',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(hypereikon, true)) {
			ecologiesNavStoreItems.update((obj) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Joaquina',
					route: 'joaquina',
					selected: false
				},
				{
					text: 'Okytomo',
					route: 'oki',
					selected: false
				},
				{
					text: 'Hypereikon',
					route: 'hypereikon',
					selected: true
				}
			]);
		}
	};
</script>

<svelte:window bind:innerWidth={size} />
<div
	on:scroll={handleScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory overflow-y-auto h-screen"
>
	<ProjectIntro project={ecologiesOfCodeProject} textColor="white" />

	<div id={ecologiesNavItems[1].route}>
		<ProjectAbout aboutItem={joaquinaAbout} aboutImages={joaquinaAboutImages} route="" />
	</div>

	<ProjectInterview bgImage={ecoInterviewBg} questions={joaquinaQuestions} />

	<ProjectVideo videoProjects={[ecologiesVideoProjectOne]} />

	{#if size > 768}
		<ProjectPolaroids
			images={ecologiesPolaroidImages}
			route="joaquina-end"
			polaroidsTypes={[
				EPolaroidType.RECTANGLE,
				EPolaroidType.VERTICAL,
				EPolaroidType.RECTANGLE,
				EPolaroidType.RECTANGLE
			]}
		/>
	{:else}
		<PolaroidsMobile polaroidImages={ecologiesPolaroidImages} route="joaquina-end" />
	{/if}

	<div id={ecologiesNavItems[2].route}>
		<ProjectAbout aboutItem={okytomoAbout} aboutImages={okytomoAboutImages} route="" />
	</div>

	<ProjectInterview bgImage={okytomoInterview} questions={okyQuestions} />

	<ProjectVideo videoProjects={okyVideos} />

	{#if size > 768}
		<ProjectPolaroids
			images={ecologiesPolaroidImagesTwo}
			route="oki-end"
			polaroidsTypes={[
				EPolaroidType.RECTANGLE,
				EPolaroidType.VERTICAL,
				EPolaroidType.RECTANGLE,
				EPolaroidType.RECTANGLE
			]}
			viewImageFit="cover"
		/>
	{:else}
		<PolaroidsMobile polaroidImages={ecologiesPolaroidImagesTwo} route="oki-end" />
	{/if}

	<div id={ecologiesNavItems[3].route}>
		<ProjectAbout aboutItem={hypereikonAbout} aboutImages={hypereikonAboutImages} route="" />
	</div>

	<ProjectInterview bgImage={hyperInterview} questions={hypereikonQuestions} />

	<div class="hidden sm:block">
		<ProjectArtworkGrid galleryImages={ecologiesArtworkImages} showDetails />
	</div>

	<div class="block sm:hidden snap-start">
		<ProjectArtworkGridMobile
			isOverflow={false}
			imagesLeft={ecologiesGallery1}
			imagesRight={ecologiesGallery2}
		/>
	</div>

	<HomeIcon />
	<Footer />
</div>
