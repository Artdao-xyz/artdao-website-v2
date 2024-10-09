<script>
	import nicoInterviewBgImage from '$lib/assets/images/projects/inherentInstability/241857826_6552809161428142_9057190300881452001_n_1.png';
	import inaInterviewBgImage from '$lib/assets/images/projects/inherentInstability/Background_Img.png';
	import elbiInterviewBgImage from '$lib/assets/images/projects/inherentInstability/studio1_1.png';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';
	import { EColorVariant, ESizesVariant } from '../../../constants/enums';
	import { inherentInstabilityNavItems } from '../../../data/Projects/InherentInstability/NavItems';
	import {
		elbiAbout,
		elbiAboutImages,
		inaVareAbout,
		inaVareAboutImages,
		nicoAbout,
		nicoAboutImages
	} from '../../../data/Projects/InherentInstability/ProjectAbout';
	import {
		elbiQuestions,
		inaVareQuestions,
		nicoQuestions
	} from '../../../data/Projects/InherentInstability/ProjectInterview';
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

<div
	on:scroll={handleScroll}
	class="mx-auto mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory overflow-y-auto h-screen"
>
	<ProjectIntro project={inherentInstabilityProjectIntro} textColor="white" />

	<ProjectAbout
		aboutItem={inaVareAbout}
		aboutImages={inaVareAboutImages}
		route={inherentInstabilityNavItems[1].route}
		colorVariant={EColorVariant.LIGHT}
	/>

	<ProjectInterview bgImage={inaInterviewBgImage} questions={inaVareQuestions} />

	<ProjectVideo videoProjects={[inaVideo]} />

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

	<ProjectAbout
		aboutItem={elbiAbout}
		aboutImages={elbiAboutImages}
		route={inherentInstabilityNavItems[2].route}
	/>

	<ProjectInterview bgImage={elbiInterviewBgImage} questions={elbiQuestions} />

	<ProjectVideo videoProjects={[elbiVideo]} size={ESizesVariant.MEDIUM} route="elbi-end" />

	<ProjectAbout
		aboutItem={nicoAbout}
		aboutImages={nicoAboutImages}
		route={inherentInstabilityNavItems[3].route}
	/>

	<ProjectInterview bgImage={nicoInterviewBgImage} questions={nicoQuestions} />

	<ProjectVideo videoProjects={[nicoVideo]} size={ESizesVariant.SMALL} />

	<ProjectPolaroids
		images={nicoPolaroidsImages}
		polaroidsTypes={[
			EPolaroidType.VERTICAL,
			EPolaroidType.VERTICAL,
			EPolaroidType.SQUARE,
			EPolaroidType.RECTANGLE
		]}
	/>

	<HomeIcon />
</div>
