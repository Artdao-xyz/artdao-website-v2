<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { artificeNavItems } from '../../../data/Projects/Artifice/NavItems';
	import {
		furnitureAbout,
		furnitureAboutImages,
		kokoAbout,
		kokoAboutImahges,
		panelsAbout,
		panelsAboutImages
	} from '../../../data/Projects/Artifice/ProjectAbout';
	import {
		psipsikokoDropdownItems,
		vernisaggeDropdownItems
	} from '../../../data/Projects/Artifice/ProjectAboutDropdown';
	import { artificeProjectIntro } from '../../../data/Projects/Artifice/ProjectIntro';
	import { afterEventVideo, furnitureVideo } from '../../../data/Projects/Artifice/ProjectVideo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../../utils/nav/updateNavBar';
	import { artificeNavStoreItems } from './store';

	let size: number;

	let introIsInView: boolean;
	let kokoIsInView: boolean;
	let furnitureIsInView: boolean;
	let panelsIsInView: boolean;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(artificeNavStoreItems, artificeNavItems, artificeNavItems[0].route);
		}

		if (kokoIsInView) {
			updateNavBar(artificeNavStoreItems, artificeNavItems, artificeNavItems[1].route);
		}

		if (furnitureIsInView) {
			updateNavBar(artificeNavStoreItems, artificeNavItems, artificeNavItems[2].route);
		}

		if (panelsIsInView) {
			updateNavBar(artificeNavStoreItems, artificeNavItems, artificeNavItems[3].route);
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
		<ProjectIntro project={artificeProjectIntro} isCenterImage />

		<ProjectVideo videoProjects={furnitureVideo} route="" />
	</div>

	<div
		id="koko"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			kokoIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			kokoIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			kokoIsInView = inView;
		}}
	>
		<ProjectAbout aboutItem={kokoAbout} aboutImages={kokoAboutImahges} route="" isImageLeft />
	</div>

	<div
		id="furniture"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			furnitureIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			furnitureIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			furnitureIsInView = inView;
		}}
	>
		<ProjectAbout aboutItem={furnitureAbout} aboutImages={furnitureAboutImages} route="" />

		<ProjectAboutDropdown
			images={psipsikokoDropdownItems.map((item) => item.image)}
			aboutDropdownItems={psipsikokoDropdownItems}
			route="furniture-end"
		/>
	</div>

	<div
		id="panels"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			panelsIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			panelsIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			panelsIsInView = inView;
		}}
	>
		<ProjectAbout aboutItem={panelsAbout} aboutImages={panelsAboutImages} route="" />

		<ProjectAboutDropdown
			images={vernisaggeDropdownItems.map((item) => item.image)}
			aboutDropdownItems={vernisaggeDropdownItems}
			route=""
		/>

		<ProjectVideo videoProjects={afterEventVideo} route="" />
	</div>

	<HomeIcon />
	<Footer />
</div>
