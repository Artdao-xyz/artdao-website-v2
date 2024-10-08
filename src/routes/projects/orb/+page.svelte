<script>
	import bgImage from '$lib/assets/images/projects/orb/240326_caroco_035_1.png';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { orbNavItems } from '../../../data/Projects/Orb/NavItems';
	import {
		carocoAbout,
		carocoAboutImages,
		hivemindAbout,
		hivemindAboutImages,
		magmaAbout,
		magmaAboutImages,
		seedAbout,
		seedAboutImages
	} from '../../../data/Projects/Orb/ProjectAbout';
	import {
		daoDropdownItems,
		vernisaggeDropdownItems
	} from '../../../data/Projects/Orb/ProjectAboutDropdown';
	import { orbQuestions } from '../../../data/Projects/Orb/ProjectInterview';
	import { orbProject } from '../../../data/Projects/Orb/ProjectIntro';
	import { orbVideo, orbVideoTwo } from '../../../data/Projects/Orb/ProjectVideo';
	import { orbNavStoreItems } from './store';

	// @ts-ignore
	const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
		const { top, left, bottom, right } = el.getBoundingClientRect();
		const { innerHeight, innerWidth } = window;
		return partiallyVisible
			? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
					((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
			: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
	};

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const curators = document.getElementById('curators');
		const artworks = document.getElementById('artworks');
		const vernisagge = document.getElementById('vernisagge');

		if (elementIsVisibleInViewport(intro)) {
			orbNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: true
				},
				{
					text: 'Curators & DAOs',
					route: 'curators',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(curators)) {
			orbNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Curators & DAOs',
					route: 'curators',
					selected: true
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(artworks)) {
			orbNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Curators & DAOs',
					route: 'curators',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: true
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(vernisagge)) {
			orbNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Curators & DAOs',
					route: 'curators',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
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
	<ProjectIntro project={orbProject} />

	<ProjectInterview questions={orbQuestions} {bgImage} />

	<ProjectAbout
		aboutImages={magmaAboutImages}
		aboutItem={magmaAbout}
		route={orbNavItems[1].route}
	/>

	<ProjectAbout aboutImages={seedAboutImages} aboutItem={seedAbout} route="#" isImageLeft={false} />

	<ProjectAbout aboutImages={hivemindAboutImages} aboutItem={hivemindAbout} route="#" />

	<ProjectAboutDropdown
		aboutDropdownItems={daoDropdownItems}
		images={daoDropdownItems.map((item) => item.image)}
		route={orbNavItems[2].route}
	/>

	<ProjectVideo videoProjects={[orbVideo]} />

	<ProjectAbout aboutImages={carocoAboutImages} aboutItem={carocoAbout} route="#" />

	<ProjectVideo videoProjects={[orbVideoTwo]} />

	<ProjectAboutDropdown
		aboutDropdownItems={vernisaggeDropdownItems}
		images={vernisaggeDropdownItems.map((item) => item.image)}
		route={orbNavItems[3].route}
	/>

	<HomeIcon />
</div>
