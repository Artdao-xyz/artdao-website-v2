<script lang="ts">
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inConversationDropdownItems } from '../../../data/Projects/InConversation/ProjectAboutDropdown';
	import { inConversationProjectIntro } from '../../../data/Projects/InConversation/ProjectIntro';
	import { inConversationVideo } from '../../../data/Projects/InConversation/ProjectVideo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { inConversationNavStoreItems } from './store';

	let size: number;

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const interview = document.getElementById('interview');
		const exhibition = document.getElementById('exhibition');

		if (elementIsVisibleInViewport(intro)) {
			inConversationNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: true
				},
				{
					text: 'Interview',
					route: 'interview',
					selected: false
				},
				{
					text: 'Exhibition',
					route: 'exhibition',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(interview)) {
			inConversationNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Interview',
					route: 'interview',
					selected: true
				},
				{
					text: 'Exhibition',
					route: 'exhibition',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(exhibition)) {
			inConversationNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'Interview',
					route: 'interview',
					selected: false
				},
				{
					text: 'Exhibition',
					route: 'exhibition',
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
	<ProjectIntro project={inConversationProjectIntro} textColor="white" isCenterImage isWiderTitle />

	<ProjectVideo videoProjects={inConversationVideo} route="interview" />

	<ProjectAboutDropdown
		images={inConversationDropdownItems.map((item) => item.image)}
		aboutDropdownItems={inConversationDropdownItems}
		route="exhibition"
	/>

	<HomeIcon />
	<Footer />
</div>
