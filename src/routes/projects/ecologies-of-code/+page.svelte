<script lang="ts">
	import ecoInterviewBg from '$lib/assets/images/projects/ecologiesOfCode/ecologies-interview-bg.png';
	import hyperInterview from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/interview/artwork-press.png';
	import okytomoInterview from '$lib/assets/images/projects/ecologiesOfCode/okytomo/interview/okytomoInterview.png';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
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
	import { ecologiesArtworkImages } from '../../../data/Projects/EcologiesOfCode/ProjectArtworkGallery';
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
					text: 'Oki',
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

		if (elementIsVisibleInViewport(joaquina) || elementIsVisibleInViewport(joaquinaEnd)) {
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
					text: 'Oki',
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

		if (elementIsVisibleInViewport(oki) || elementIsVisibleInViewport(okiEnd)) {
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
					text: 'Oki',
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

		if (elementIsVisibleInViewport(hypereikon)) {
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
					text: 'Oki',
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

<div
	on:scroll={handleScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory overflow-y-auto h-screen"
>
	<ProjectIntro project={ecologiesOfCodeProject} textColor="white" />

	<ProjectAbout
		aboutItem={joaquinaAbout}
		aboutImages={joaquinaAboutImages}
		route={ecologiesNavItems[1].route}
	/>

	<ProjectInterview bgImage={ecoInterviewBg} questions={joaquinaQuestions} />

	<ProjectVideo videoProjects={[ecologiesVideoProjectOne]} />

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

	<ProjectAbout
		aboutItem={okytomoAbout}
		aboutImages={okytomoAboutImages}
		route={ecologiesNavItems[2].route}
	/>

	<ProjectInterview bgImage={okytomoInterview} questions={okyQuestions} />

	<ProjectVideo videoProjects={okyVideos} />

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

	<ProjectAbout
		aboutItem={hypereikonAbout}
		aboutImages={hypereikonAboutImages}
		route={ecologiesNavItems[3].route}
	/>

	<ProjectInterview bgImage={hyperInterview} questions={hypereikonQuestions} />

	<ProjectArtworkGrid galleryImages={ecologiesArtworkImages} />

	<HomeIcon />
	<Footer />
</div>
