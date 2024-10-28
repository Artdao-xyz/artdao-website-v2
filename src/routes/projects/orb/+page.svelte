<script>
	import bgImage from '$lib/assets/images/projects/orb/240326_caroco_035_1.png';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
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
	import { artworksVideo, orbVideo } from '../../../data/Projects/Orb/ProjectVideo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { orbNavStoreItems } from './store';

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const curators = document.getElementById('curators');
		const curatorsEnd = document.getElementById('curators-end');
		const vernisagge = document.getElementById('vernisagge');
		const vernisaggeEnd = document.getElementById('vernisagge-end');
		const daos = document.getElementById('daos');
		const daosEnd = document.getElementById('daos-end');
		const artworks = document.getElementById('artworks');
		const artworksEnd = document.getElementById('artworks-end');

		if (elementIsVisibleInViewport(intro)) {
			orbNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: true
				},
				{
					text: 'Curators',
					route: 'curators',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				},
				{
					text: 'DAOs',
					route: 'curators',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(curators) || elementIsVisibleInViewport(curatorsEnd, true)) {
			orbNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Curators',
					route: 'curators',
					selected: true
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				},
				{
					text: 'DAOs',
					route: 'curators',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(vernisagge) || elementIsVisibleInViewport(vernisaggeEnd)) {
			orbNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Curators',
					route: 'curators',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: true
				},
				{
					text: 'DAOs',
					route: 'curators',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(daos) || elementIsVisibleInViewport(daosEnd, true)) {
			orbNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Curators',
					route: 'curators',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				},
				{
					text: 'DAOs',
					route: 'curators',
					selected: true
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(artworks) || elementIsVisibleInViewport(artworksEnd)) {
			orbNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Curators',
					route: 'curators',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				},
				{
					text: 'DAOs',
					route: 'curators',
					selected: false
				},
				{
					text: 'Artworks',
					route: 'artworks',
					selected: true
				}
			]);
		}
	};
</script>

<div
	on:scroll={handleScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden sm:snap-y sm:snap-mandatory overflow-y-auto sm:h-screen"
>
	<ProjectIntro project={orbProject} textColor="white" />

	<ProjectInterview filteredQuestions={orbQuestions} {bgImage} route="curators" />

	<ProjectAbout aboutImages={carocoAboutImages} aboutItem={carocoAbout} route="curators-end" />

	<ProjectAboutDropdown
		aboutDropdownItems={vernisaggeDropdownItems}
		images={vernisaggeDropdownItems.map((item) => item.image)}
		route="vernisagge"
	/>

	<ProjectVideo videoProjects={[orbVideo]} route="vernisagge-end" />

	<ProjectAbout aboutImages={magmaAboutImages} aboutItem={magmaAbout} route="daos" />

	<ProjectAbout aboutImages={seedAboutImages} aboutItem={seedAbout} route="" isImageLeft={false} />

	<div id="daos-end">
		<ProjectAbout aboutImages={hivemindAboutImages} aboutItem={hivemindAbout} route="" />
	</div>

	<ProjectAboutDropdown
		aboutDropdownItems={daoDropdownItems}
		images={daoDropdownItems.map((item) => item.image)}
		route="artworks"
	/>

	<ProjectVideo videoProjects={artworksVideo} route="artworks-end" />

	<HomeIcon />
	<Footer />
</div>
