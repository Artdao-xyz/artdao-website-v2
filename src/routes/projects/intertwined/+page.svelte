<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant } from '../../../constants/enums';
	import { intertwinedNavItems } from '../../../data/Projects/Intertwined/NavItems';
	import {
		cryptoargAbout,
		cryptoargAboutImages,
		curationAbout,
		curationAboutImages
	} from '../../../data/Projects/Intertwined/ProjectAbout';
	import {
		artdaoDropdownItems,
		cryptoargDropdownItems,
		intertwinedVernisaggeDropdownItems
	} from '../../../data/Projects/Intertwined/ProjectAboutDropdown';
	import { intertwinedProjectIntro } from '../../../data/Projects/Intertwined/ProjectIntro';
	import {
		artdaoVideo,
		cryptoVideo,
		introVideo
	} from '../../../data/Projects/Intertwined/ProjectVideo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../../utils/nav/updateNavBar';
	import { intertwinedNavStoreItems } from './store';

	let introIsInView: boolean;
	let artdaoIsInView: boolean;
	let cryptoIsInView: boolean;
	let vernisaggeIsInView: boolean;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[0].route);
		}

		if (artdaoIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[1].route);
		}

		if (cryptoIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[2].route);
		}

		if (vernisaggeIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[3].route);
		}
	};
</script>

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
		<ProjectIntro project={intertwinedProjectIntro} textColor="black" />

		<ProjectVideo videoProjects={introVideo} />
	</div>

	<div
		id="artdao"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			artdaoIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			artdaoIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			artdaoIsInView = inView;
		}}
	>
		<ProjectAbout
			aboutItem={curationAbout}
			aboutImages={curationAboutImages}
			route=""
			colorVariant={EColorVariant.BLACK}
		/>

		<ProjectAboutDropdown
			images={artdaoDropdownItems.map((item) => item.image)}
			aboutDropdownItems={artdaoDropdownItems}
			route=""
		/>

		<ProjectVideo videoProjects={artdaoVideo} route="artdao-end" />
	</div>

	<div
		id="crypto"
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			cryptoIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			cryptoIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			cryptoIsInView = inView;
		}}
	>
		<ProjectAbout
			aboutItem={cryptoargAbout}
			aboutImages={cryptoargAboutImages}
			route=""
			colorVariant={EColorVariant.BLACK}
		/>

		<ProjectAboutDropdown
			images={cryptoargDropdownItems.map((item) => item.image)}
			aboutDropdownItems={cryptoargDropdownItems}
			route=""
		/>

		<ProjectVideo videoProjects={cryptoVideo} route="crypto-end" />
	</div>

	<div
		id="vernisagge"
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
			images={intertwinedVernisaggeDropdownItems.map((item) => item.image)}
			aboutDropdownItems={intertwinedVernisaggeDropdownItems}
			route=""
		/>
	</div>

	<HomeIcon />
	<Footer />
</div>
