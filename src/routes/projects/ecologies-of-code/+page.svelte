<script lang="ts">
	import ecoInterviewBg from '$lib/assets/images/projects/ecologiesOfCode/ecologies-interview-bg.png';
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
	import { inview } from 'svelte-inview';
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
	import { ecologiesQuestions } from '../../../data/Projects/EcologiesOfCode/ProjectInterview';
	import { ecologiesOfCodeProject } from '../../../data/Projects/EcologiesOfCode/ProjectIntro';
	import {
		ecologiesPolaroidImages,
		ecologiesPolaroidImagesTwo
	} from '../../../data/Projects/EcologiesOfCode/ProjectPolaroids';
	import {
		ecologiesVideoProjectOne,
		okyVideos
	} from '../../../data/Projects/EcologiesOfCode/ProjectVIdeo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../../utils/nav/updateNavBar';
	import { ecologiesNavStoreItems } from './store';

	let size: number;

	let introIsInView: boolean;
	let joaquinaIsInView: boolean;
	let okiIsInView: boolean;
	let hyperIsInView: boolean;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(ecologiesNavStoreItems, ecologiesNavItems, ecologiesNavItems[0].route);
		}

		if (joaquinaIsInView) {
			updateNavBar(ecologiesNavStoreItems, ecologiesNavItems, ecologiesNavItems[1].route);
		}

		if (okiIsInView) {
			updateNavBar(ecologiesNavStoreItems, ecologiesNavItems, ecologiesNavItems[2].route);
		}

		if (hyperIsInView) {
			updateNavBar(ecologiesNavStoreItems, ecologiesNavItems, ecologiesNavItems[3].route);
		}
	};
</script>

<svelte:window bind:innerWidth={size} />
<div
	on:scroll={handleOnScroll}
	on:touchmove={handleOnScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden sm:snap-y sm:snap-mandatory overflow-y-auto sm:h-screen"
>
	<div
		id="intro"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			introIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			introIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			introIsInView = inView;
		}}
	>
		<ProjectIntro project={ecologiesOfCodeProject} textColor="white" />
	</div>

	<div
		id="joaquina"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			joaquinaIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			joaquinaIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			joaquinaIsInView = inView;
		}}
	>
		<ProjectAbout aboutItem={joaquinaAbout} aboutImages={joaquinaAboutImages} route="" />

		<ProjectInterview bgImage={ecoInterviewBg} filteredQuestions={ecologiesQuestions} isCover />

		<ProjectVideo videoProjects={[ecologiesVideoProjectOne]} />

		{#if size > 1100}
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
	</div>

	<div
		id="oki"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			okiIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			okiIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			okiIsInView = inView;
		}}
	>
		<ProjectAbout aboutItem={okytomoAbout} aboutImages={okytomoAboutImages} route="" />

		<ProjectVideo videoProjects={okyVideos} />

		{#if size > 1100}
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
	</div>

	<div
		id="hypereikon"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			hyperIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			hyperIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			hyperIsInView = inView;
		}}
	>
		<ProjectAbout aboutItem={hypereikonAbout} aboutImages={hypereikonAboutImages} route="" />

		<div class="hidden sm:block">
			<ProjectArtworkGrid galleryImages={ecologiesArtworkImages} />
		</div>

		<div class="block sm:hidden sm:snap-start">
			<ProjectArtworkGridMobile
				isOverflow={false}
				imagesLeft={ecologiesGallery1}
				imagesRight={ecologiesGallery2}
			/>
		</div>
	</div>

	<HomeIcon />
	<Footer />
</div>
