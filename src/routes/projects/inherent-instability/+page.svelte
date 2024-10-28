<script lang="ts">
	import inaInterviewBgImage from '$lib/assets/images/projects/inherentInstability/Background_Img.png';
	import PolaroidsMobile from '$lib/components/PolaroidsMobile/PolaroidsMobile.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';
	import { EColorVariant } from '../../../constants/enums';
	import { inherentInstabilityNavItems } from '../../../data/Projects/InherentInstability/NavItems';
	import {
		elbiAbout,
		elbiAboutImages,
		inaVareAbout,
		inaVareAboutImages,
		nicoAbout,
		nicoAboutImages
	} from '../../../data/Projects/InherentInstability/ProjectAbout';
	import { inherentQuestions } from '../../../data/Projects/InherentInstability/ProjectInterview';
	import { inherentInstabilityProjectIntro } from '../../../data/Projects/InherentInstability/ProjectIntro';
	import {
		inaVarePolaroidsImages,
		nicoPolaroidsImages
	} from '../../../data/Projects/InherentInstability/ProjectPolaroids';
	import {
		elbiVideo,
		inaVideo,
		nicoVideo
	} from '../../../data/Projects/InherentInstability/ProjectVideo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { inherentInstabilityNavStoreItems } from './store';

	let size: number;

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const inaVare = document.getElementById('ina');
		const inaVareEnd = document.getElementById('ina-end');
		const elbi = document.getElementById('elbi');
		const elbiEnd = document.getElementById('elbi-end');
		const nico = document.getElementById('nico');

		if (elementIsVisibleInViewport(intro)) {
			inherentInstabilityNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: true
				},
				{
					text: 'Ina Vare',
					route: 'inaVare',
					selected: false
				},
				{
					text: 'Elbi',
					route: 'elbi',
					selected: false
				},
				{
					text: 'Nico',
					route: 'nico',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(inaVare) || elementIsVisibleInViewport(inaVareEnd)) {
			inherentInstabilityNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Ina Vare',
					route: 'inaVare',
					selected: true
				},
				{
					text: 'Elbi',
					route: 'elbi',
					selected: false
				},
				{
					text: 'Nico',
					route: 'nico',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(elbi) || elementIsVisibleInViewport(elbiEnd)) {
			inherentInstabilityNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Ina Vare',
					route: 'inaVare',
					selected: false
				},
				{
					text: 'Elbi',
					route: 'elbi',
					selected: true
				},
				{
					text: 'Nico',
					route: 'nico',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(nico)) {
			inherentInstabilityNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Ina Vare',
					route: 'inaVare',
					selected: false
				},
				{
					text: 'Elbi',
					route: 'elbi',
					selected: false
				},
				{
					text: 'Nico',
					route: 'nico',
					selected: true
				}
			]);
		}
	};
</script>

<svelte:window bind:innerWidth={size} />
<div
	on:scroll={handleScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden sm:snap-y sm:snap-mandatory overflow-y-auto sm:h-screen"
>
	<ProjectIntro project={inherentInstabilityProjectIntro} textColor="white" isContain />

	<ProjectInterview bgImage={inaInterviewBgImage} filteredQuestions={inherentQuestions} />

	<div id={inherentInstabilityNavItems[1].route}>
		<ProjectAbout
			aboutItem={inaVareAbout}
			aboutImages={inaVareAboutImages}
			route=""
			colorVariant={EColorVariant.LIGHT}
		/>
	</div>

	<ProjectVideo videoProjects={inaVideo} />

	{#if size > 1100}
		<ProjectPolaroids
			images={inaVarePolaroidsImages}
			polaroidsTypes={[
				EPolaroidType.RECTANGLE,
				EPolaroidType.VERTICAL,
				EPolaroidType.RECTANGLE,
				EPolaroidType.VERTICAL
			]}
			route="ina-end"
		/>
	{:else}
		<PolaroidsMobile polaroidImages={inaVarePolaroidsImages} route="ina-end" />
	{/if}

	<div id={inherentInstabilityNavItems[2].route}>
		<ProjectAbout aboutItem={elbiAbout} aboutImages={elbiAboutImages} route="" />
	</div>

	<ProjectVideo videoProjects={elbiVideo} route="elbi-end" />

	<div id={inherentInstabilityNavItems[3].route}>
		<ProjectAbout aboutItem={nicoAbout} aboutImages={nicoAboutImages} route="" />
	</div>

	<ProjectVideo videoProjects={nicoVideo} />

	{#if size > 1100}
		<ProjectPolaroids
			images={nicoPolaroidsImages}
			polaroidsTypes={[
				EPolaroidType.VERTICAL,
				EPolaroidType.VERTICAL,
				EPolaroidType.SQUARE,
				EPolaroidType.RECTANGLE
			]}
		/>
	{:else}
		<PolaroidsMobile polaroidImages={nicoPolaroidsImages} route="" />
	{/if}

	<HomeIcon />
	<Footer />
</div>
