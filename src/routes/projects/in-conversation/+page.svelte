<script lang="ts">
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { inConversationNavItems } from '../../../data/Projects/InConversation/NavItems';
	import { inConversationDropdownItems } from '../../../data/Projects/InConversation/ProjectAboutDropdown';
	import { inConversationProjectIntro } from '../../../data/Projects/InConversation/ProjectIntro';
	import { inConversationVideo } from '../../../data/Projects/InConversation/ProjectVideo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../../utils/nav/updateNavBar';
	import { inConversationNavStoreItems } from './store';

	let size: number;
	let introIsInView: boolean;
	let interviewIsInView: boolean;
	let exhibitionIsInView: boolean;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(
				inConversationNavStoreItems,
				inConversationNavItems,
				inConversationNavItems[0].route
			);
		}

		if (interviewIsInView) {
			updateNavBar(
				inConversationNavStoreItems,
				inConversationNavItems,
				inConversationNavItems[1].route
			);
		}

		if (exhibitionIsInView) {
			updateNavBar(
				inConversationNavStoreItems,
				inConversationNavItems,
				inConversationNavItems[2].route
			);
		}
	};
</script>

<svelte:window bind:innerWidth={size} />
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
		<ProjectIntro
			project={inConversationProjectIntro}
			textColor="white"
			isCenterImage
			isWiderTitle
		/>
	</div>

	<div
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			interviewIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			interviewIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			interviewIsInView = inView;
		}}
	>
		<ProjectVideo videoProjects={inConversationVideo} route="interview" />
	</div>

	<div
		use:inview={INVIEW_OPTIONS}
		on:inview_change={(event) => {
			const { inView } = event.detail;
			exhibitionIsInView = inView;
		}}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			exhibitionIsInView = inView;
		}}
		on:inview_leave={(event) => {
			const { inView } = event.detail;
			exhibitionIsInView = inView;
		}}
	>
		<ProjectAboutDropdown
			images={inConversationDropdownItems.map((item) => item.image)}
			aboutDropdownItems={inConversationDropdownItems}
			route="exhibition"
		/>
	</div>

	<HomeIcon />
	<Footer />
</div>
