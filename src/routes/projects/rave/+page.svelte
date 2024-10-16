<script>
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectAudioFiles from '$lib/components/ProjectAudioFiles/ProjectAudioFiles.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { raveNavItems } from '../../../data/Projects/Rave/NavItems';
	import {
		performanceDropdownItems,
		raveAboutDropdopwnItems,
		raveAboutDropdopwnItemsTwo
	} from '../../../data/Projects/Rave/ProjectAboutDropdown';
	import { raveAudioFiles } from '../../../data/Projects/Rave/ProjectAudioFiles';
	import { raveProject } from '../../../data/Projects/Rave/ProjectIntro';
	import {
		afterPartyVideo,
		blessingForSaleVideo,
		frequencyVideo,
		fwvnVideo,
		petroVideo
	} from '../../../data/Projects/Rave/ProjectVideo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { raveNavStoreItems } from './store';

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const artists = document.getElementById('artists');
		const artistsEnd = document.getElementById('artists-end');
		const event = document.getElementById('event');
		const eventEnd = document.getElementById('event-end');

		if (elementIsVisibleInViewport(intro)) {
			raveNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: true
				},
				{
					text: 'Artists & Artworks',
					route: 'artists',
					selected: false
				},
				{
					text: 'Event & After Party',
					route: 'event',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(artists) || elementIsVisibleInViewport(artistsEnd)) {
			raveNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Artists & Artworks',
					route: 'artists',
					selected: true
				},
				{
					text: 'Event & After Party',
					route: 'event',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(event) || elementIsVisibleInViewport(eventEnd)) {
			raveNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Artists & Artworks',
					route: 'artists',
					selected: false
				},
				{
					text: 'Event & After Party',
					route: 'event',
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
	<ProjectIntro project={raveProject} />

	<ProjectAboutDropdown
		images={raveAboutDropdopwnItems.map((image) => image.image)}
		aboutDropdownItems={raveAboutDropdopwnItems}
		route={raveNavItems[1].route}
	/>

	<ProjectVideo videoProjects={[blessingForSaleVideo, fwvnVideo, frequencyVideo]} />

	<ProjectAudioFiles
		audioItems={raveAudioFiles}
		title="cybernetic collaboration between Clauthewitch and NICØ"
		route="artists-end"
	/>

	<ProjectAboutDropdown
		images={performanceDropdownItems.map((item) => item.image)}
		aboutDropdownItems={performanceDropdownItems}
		route={raveNavItems[2].route}
	/>

	<ProjectVideo videoProjects={[afterPartyVideo, petroVideo]} />

	<ProjectAboutDropdown
		images={raveAboutDropdopwnItemsTwo.map((item) => item.image)}
		aboutDropdownItems={raveAboutDropdopwnItemsTwo}
		route=""
	/>

	<HomeIcon />
	<Footer />
</div>
