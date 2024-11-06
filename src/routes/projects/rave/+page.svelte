<script lang="ts">
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectAudioFiles from '$lib/components/ProjectAudioFiles/ProjectAudioFiles.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
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
	import { INVIEW_OPTIONS, updateNavBar } from '../../../utils/nav/updateNavBar';
	import { raveNavStoreItems } from './store';

	let introIsInView: boolean;
	let artistsIsInView: boolean;
	let eventIsInView: boolean;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(raveNavStoreItems, raveNavItems, raveNavItems[0].route);
		}

		if (artistsIsInView) {
			updateNavBar(raveNavStoreItems, raveNavItems, raveNavItems[1].route);
		}

		if (eventIsInView) {
			updateNavBar(raveNavStoreItems, raveNavItems, raveNavItems[2].route);
		}
	};
</script>

<div
	on:scroll={handleOnScroll}
	on:touchmove={handleOnScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden sm:snap-y sm:snap-mandatory overflow-y-auto sm:h-screen"
>
	<div
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
		<ProjectIntro project={raveProject} isCenterImage />
	</div>

	<div
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			artistsIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			artistsIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			artistsIsInView = inView;
		}}
	>
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
	</div>

	<div
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			eventIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			eventIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			eventIsInView = inView;
		}}
	>
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
	</div>

	<HomeIcon />
	<Footer />
</div>
