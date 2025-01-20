<script lang="ts">
	import Loading from '$lib/components/Loading/Loading.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EProjects } from '../../constants/enums';
	import { inConversationNavItems } from '../../data/Projects/InConversation/NavItems';
	import { inConversationDropdownItems } from '../../data/Projects/InConversation/ProjectAboutDropdown';
	import { inConversationProjectIntro } from '../../data/Projects/InConversation/ProjectIntro';
	import { inConversationVideo } from '../../data/Projects/InConversation/ProjectVideo';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { getProjectRefs } from '../../utils/projectsRefs/getProjectRefs';
	import { inConversationNavStoreItems } from './store';

	let size: number;
	let introIsInView: boolean;
	let interviewIsInView: boolean;
	let exhibitionIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

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
	};

	const preloadedImages = preloadImages([
		[inConversationProjectIntro.bgImage, inConversationProjectIntro.bgImageMobile],
		inConversationDropdownItems.map((item) => item.image)
	]);

	let refs = getProjectRefs(EProjects.IN_CONVERSATION);

	console.log('Refs', refs);
</script>

<svelte:window bind:innerWidth={size} />

{#await preloadedImages}
	<Loading />
{:then images}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
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
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
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

		<HomeIcon />
		<Footer project={EProjects.IN_CONVERSATION} />
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
