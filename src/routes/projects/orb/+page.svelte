<script lang="ts">
	import bgImage from '$lib/assets/images/projects/orb/240326_caroco_035_1.png';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectAudioFiles from '$lib/components/ProjectAudioFiles/ProjectAudioFiles.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
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
	import { orbAudioFiles } from '../../../data/Projects/Orb/ProjectAudioFiles';
	import { orbQuestions } from '../../../data/Projects/Orb/ProjectInterview';
	import { orbProject } from '../../../data/Projects/Orb/ProjectIntro';
	import { artworksVideo, orbVideo } from '../../../data/Projects/Orb/ProjectVideo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../../utils/nav/updateNavBar';
	import { orbNavStoreItems } from './store';

	let introIsInView: boolean;
	let curatorsIsInView: boolean;
	let vernisaggeIsInView: boolean;
	let daosIsInView: boolean;
	let artworksIsInView: boolean;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(orbNavStoreItems, orbNavItems, orbNavItems[0].route);
		}

		if (curatorsIsInView) {
			updateNavBar(orbNavStoreItems, orbNavItems, orbNavItems[1].route);
		}

		if (vernisaggeIsInView) {
			updateNavBar(orbNavStoreItems, orbNavItems, orbNavItems[2].route);
		}

		if (daosIsInView) {
			updateNavBar(orbNavStoreItems, orbNavItems, orbNavItems[3].route);
		}

		if (artworksIsInView) {
			updateNavBar(orbNavStoreItems, orbNavItems, orbNavItems[4].route);
		}
	};
</script>

<div
	on:scroll={handleOnScroll}
	on:touchmove={handleOnScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden sm:snap-y sm:snap-mandatory overflow-y-auto sm:min-h-screen"
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
		<ProjectIntro project={orbProject} textColor="white" />
	</div>

	<div
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			curatorsIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			curatorsIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			curatorsIsInView = inView;
		}}
	>
		<ProjectInterview filteredQuestions={orbQuestions} {bgImage} route="curators" />

		<ProjectAbout aboutImages={carocoAboutImages} aboutItem={carocoAbout} route="curators-end" />
	</div>

	<div
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			vernisaggeIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			vernisaggeIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			vernisaggeIsInView = inView;
		}}
	>
		<ProjectAboutDropdown
			aboutDropdownItems={vernisaggeDropdownItems}
			images={vernisaggeDropdownItems.map((item) => item.image)}
			route="vernisagge"
		/>

		<ProjectVideo videoProjects={[orbVideo]} route="vernisagge-end" />
	</div>

	<div
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			daosIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			daosIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			daosIsInView = inView;
		}}
	>
		<ProjectAbout aboutImages={magmaAboutImages} aboutItem={magmaAbout} route="daos" />

		<ProjectAbout
			aboutImages={seedAboutImages}
			aboutItem={seedAbout}
			route=""
			isImageLeft={false}
		/>

		<div id="daos-end">
			<ProjectAbout aboutImages={hivemindAboutImages} aboutItem={hivemindAbout} route="" />
		</div>
	</div>

	<div
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			artworksIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			artworksIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			artworksIsInView = inView;
		}}
	>
		<ProjectAboutDropdown
			aboutDropdownItems={daoDropdownItems}
			images={daoDropdownItems.map((item) => item.image)}
			route="artworks"
		/>

		<ProjectVideo videoProjects={artworksVideo} route="artworks-end" />

		<ProjectAudioFiles audioItems={orbAudioFiles} route="" />
	</div>

	<HomeIcon />
	<Footer />
</div>
