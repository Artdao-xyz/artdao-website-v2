<script lang="ts">
	import inaInterviewBgImage from '$lib/assets/images/projects/inherentInstability/Background_Img.webp';
	import Loading from '$lib/components/Loading/Loading.svelte';
	import PolaroidsMobile from '$lib/components/PolaroidsMobile/PolaroidsMobile.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';
	import { inview } from 'svelte-inview';
	import { inherentInstabilityNavItems } from '../../../data/Projects/InherentInstability/NavItems';
	import {
		elbiAbout,
		elbiAboutImages,
		inaVareAbout,
		inaVareAboutImages,
		nicoAbout,
		nicoAboutImages
	} from '../../../data/Projects/InherentInstability/ProjectAbout';
	import { inherentQuestions } from '../../../data/Projects/InherentInstability/ProjectInterview';
	import { inherentInstabilityProjectIntro } from '../../../data/Projects/InherentInstability/ProjectIntro';
	import {
		inaVarePolaroidsImages,
		nicoPolaroidsImages
	} from '../../../data/Projects/InherentInstability/ProjectPolaroids';
	import {
		elbiVideo,
		inaVideo,
		nicoVideo
	} from '../../../data/Projects/InherentInstability/ProjectVideo';
	import { INVIEW_OPTIONS, updateNavBar } from '../../../utils/nav/updateNavBar';
	import preloadImages from '../../../utils/preloadImages';
	import { inherentInstabilityNavStoreItems } from './store';

	let size: number;

	let introIsInView: boolean;
	let inaIsInView: boolean;
	let elbiIsInView: boolean;
	let nicoIsInView: boolean;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(
				inherentInstabilityNavStoreItems,
				inherentInstabilityNavItems,
				inherentInstabilityNavItems[0].route
			);
		}

		if (inaIsInView) {
			updateNavBar(
				inherentInstabilityNavStoreItems,
				inherentInstabilityNavItems,
				inherentInstabilityNavItems[1].route
			);
		}

		if (elbiIsInView) {
			updateNavBar(
				inherentInstabilityNavStoreItems,
				inherentInstabilityNavItems,
				inherentInstabilityNavItems[2].route
			);
		}

		if (nicoIsInView) {
			updateNavBar(
				inherentInstabilityNavStoreItems,
				inherentInstabilityNavItems,
				inherentInstabilityNavItems[3].route
			);
		}
	};

	const preloadedImages = preloadImages([
		[inherentInstabilityProjectIntro.bgImage, inherentInstabilityProjectIntro.bgImageMobile],
		[inaInterviewBgImage],
		inaVareAboutImages,
		inaVarePolaroidsImages.map((item) => item.image),
		elbiAboutImages,
		nicoAboutImages,
		nicoPolaroidsImages.map((item) => item.image)
	]);
</script>

<svelte:window bind:innerWidth={size} />

{#await preloadedImages}
	<Loading />
{:then images}
	<div
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden sm:snap-y sm:snap-mandatory sm:h-screen"
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
			<ProjectIntro
				project={inherentInstabilityProjectIntro}
				textColor="white"
				isContain
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>

			<ProjectInterview bgImage={images[1][0]} filteredQuestions={inherentQuestions} />
		</div>

		<div
			id="ina"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				inaIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				inaIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				inaIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={inaVareAbout} aboutImages={images[2]} route="" />

			<ProjectVideo videoProjects={inaVideo} />

			{#if size > 1100}
				<ProjectPolaroids
					images={inaVarePolaroidsImages}
					polaroidsTypes={[
						EPolaroidType.RECTANGLE,
						EPolaroidType.VERTICAL,
						EPolaroidType.RECTANGLE,
						EPolaroidType.VERTICAL
					]}
					route="ina-end"
				/>
			{:else}
				<PolaroidsMobile polaroidImages={inaVarePolaroidsImages} route="ina-end" />
			{/if}
		</div>

		<div
			id="elbi"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				elbiIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				elbiIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				elbiIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={elbiAbout} aboutImages={images[4]} route="" />

			<ProjectVideo videoProjects={elbiVideo} route="elbi-end" />
		</div>

		<div
			id="nico"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				nicoIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				nicoIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				nicoIsInView = inView;
			}}
		>
			<ProjectAbout aboutItem={nicoAbout} aboutImages={images[5]} route="" />

			<ProjectVideo videoProjects={nicoVideo} />

			{#if size > 1100}
				<ProjectPolaroids
					images={nicoPolaroidsImages}
					polaroidsTypes={[
						EPolaroidType.VERTICAL,
						EPolaroidType.VERTICAL,
						EPolaroidType.SQUARE,
						EPolaroidType.RECTANGLE
					]}
				/>
			{:else}
				<PolaroidsMobile polaroidImages={nicoPolaroidsImages} route="" />
			{/if}
		</div>

		<HomeIcon />
		<Footer />
	</div>
{/await}
