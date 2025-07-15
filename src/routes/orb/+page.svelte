<script lang="ts">
	import bgImage from '$lib/assets/images/projects/orb/240326_caroco_035_1.webp';
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectAudioFiles from '$lib/components/ProjectAudioFiles/ProjectAudioFiles.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EProjects } from '../../constants/enums';
	import { orbNavItems } from '../../data/Projects/Orb/NavItems';
	import {
		carocoAbout,
		carocoAboutImages,
		hivemindAbout,
		hivemindAboutImages,
		magmaAbout,
		magmaAboutImages,
		seedAbout,
		seedAboutImages
	} from '../../data/Projects/Orb/ProjectAbout';
	import {
		daoDropdownItems,
		orbArtworksDropdownItems,
		vernisaggeDropdownItems
	} from '../../data/Projects/Orb/ProjectAboutDropdown';
	import { orbAudioFiles } from '../../data/Projects/Orb/ProjectAudioFiles';
	import { orbQuestions } from '../../data/Projects/Orb/ProjectInterview';
	import { orbProject } from '../../data/Projects/Orb/ProjectIntro';
	import { artworksVideo, orbVideo } from '../../data/Projects/Orb/ProjectVideo';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { orbNavStoreItems } from './store';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	
	let introIsInView: boolean;
	let curatorsIsInView: boolean;
	let vernisaggeIsInView: boolean;
	let daosIsInView: boolean;
	let artworksIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

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

	const preloadedImages = preloadImages([
		[orbProject.bgImage, orbProject.bgImageMobile],
		[bgImage],
		carocoAboutImages,
		vernisaggeDropdownItems.map((item) => item.image),
		magmaAboutImages,
		hivemindAboutImages,
		daoDropdownItems.map((item) => item.image),
		orbArtworksDropdownItems.map((item) => item.image)
	]);
</script>

{#await preloadedImages}
	<LoadingV2 />
{:then images}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>

		<div
			id="chat"
		>
			<ChatInterview />
		</div>
				
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
			<ProjectIntro
				project={orbProject}
				textColor="white"
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
		</div>

		<div
			id="curators"
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
			<ProjectInterview filteredQuestions={orbQuestions} bgImage={images[1][0]} route="" />

			<ProjectAbout aboutImages={images[2]} aboutItem={carocoAbout} route="curators-end" />
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
				aboutDropdownItems={orbArtworksDropdownItems}
				images={images[7]}
				route=""
			/>

			<ProjectAboutDropdown
				aboutDropdownItems={vernisaggeDropdownItems}
				images={images[3]}
				route=""
			/>

			<ProjectVideo videoProjects={[orbVideo]} route="vernisagge-end" />
		</div>

		<div
			id="daos"
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
			<ProjectAbout aboutImages={images[4]} aboutItem={magmaAbout} route="" />

			<ProjectAbout
				aboutImages={seedAboutImages}
				aboutItem={seedAbout}
				route=""
				isImageLeft={false}
			/>

			<div>
				<ProjectAbout aboutImages={images[5]} aboutItem={hivemindAbout} route="daos-end" />
			</div>
		</div>

		<div
			id="artworks"
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
			<ProjectAboutDropdown aboutDropdownItems={daoDropdownItems} images={images[6]} route="" />

			<ProjectVideo videoProjects={artworksVideo} route="" />

			<ProjectAudioFiles audioItems={orbAudioFiles} route="artworks-end" />
		</div>

		<HomeIcon />
		<Footer project={EProjects.ORB} />
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
