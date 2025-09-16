<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { intertwinedNavItems } from '../../data/Projects/Intertwined/NavItems';
	import {
		artBlocksAbout,
		artBlocksAboutImages,
		cryptoargAbout,
		cryptoargAboutImages,
		curationAbout,
		curationAboutImages,
		mocaAbout,
		mocaAboutImages
	} from '../../data/Projects/Intertwined/ProjectAbout';
	import {
		artBlocksDropdownItems,
		artdaoDropdownItems,
		cryptoargDropdownItems,
		intertwinedVernisaggeDropdownItems
	} from '../../data/Projects/Intertwined/ProjectAboutDropdown';
	import { intertwinedProjectIntro } from '../../data/Projects/Intertwined/ProjectIntro';
	import {
		artdaoVideo,
		cryptoVideo,
		intertwinedLastVideo,
		introVideo
	} from '../../data/Projects/Intertwined/ProjectVideo';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
	import preloadImages from '../../utils/preloadImages';
	import { getProjectRefs } from '../../utils/projectsRefs/getProjectRefs';
	import { intertwinedNavStoreItems } from './store';

	let introIsInView: boolean;
	let artdaoIsInView: boolean;
	let cryptoIsInView: boolean;
	let artBlocksIsInView: boolean;
	let mocaIsInView: boolean;
	let vernisaggeIsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (introIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[0].route);
		}

		if (artdaoIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[1].route);
		}

		if (cryptoIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[2].route);
		}

		if (artBlocksIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[3].route);
		}

		if (mocaIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[4].route);
		}

		if (vernisaggeIsInView) {
			updateNavBar(intertwinedNavStoreItems, intertwinedNavItems, intertwinedNavItems[5].route);
		}
	};

	// Función para cargar las imágenes cuando el Metaball esté listo
	const loadImages = async () => {
		const images = await preloadImages([
			[intertwinedProjectIntro.bgImage, intertwinedProjectIntro.bgImageMobile],
			curationAboutImages,
			artdaoDropdownItems.map((item) => item.image),
			cryptoargAboutImages,
			cryptoargDropdownItems.map((item) => item.image),
			artBlocksAboutImages,
			artBlocksDropdownItems.map((item) => item.image),
			mocaAboutImages,
			intertwinedVernisaggeDropdownItems.map((item) => item.image)
		]);
		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	// Cargar imágenes cuando el Metaball esté listo
	$: if ($metaballReady) {
		loadImages();
	}

	let refs = getProjectRefs(EProjects.INTERTWINED);
</script>

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
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
				project={intertwinedProjectIntro}
				textColor="black"
				isCenterImage
				bgImage={$preloadedImagesStore[0][0]}
				bgImageMobile={$preloadedImagesStore[0][1]}
			/>

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
				aboutImages={$preloadedImagesStore[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>

			<ProjectAboutDropdown images={$preloadedImagesStore[2]} aboutDropdownItems={artdaoDropdownItems} route="" />

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
				aboutImages={$preloadedImagesStore[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>

			<ProjectAboutDropdown
				images={$preloadedImagesStore[4]}
				aboutDropdownItems={cryptoargDropdownItems}
				route=""
			/>

			<ProjectVideo videoProjects={cryptoVideo} route="crypto-end" />
		</div>

		<div
			id="artBlocks"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artBlocksIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				artBlocksIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				artBlocksIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={artBlocksAbout}
				aboutImages={$preloadedImagesStore[5]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>

			<ProjectAboutDropdown
				images={$preloadedImagesStore[6]}
				aboutDropdownItems={artBlocksDropdownItems}
				route="artBlocks-end"
			/>
		</div>

		<div
			id="moca"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				mocaIsInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView } = event.detail;
				mocaIsInView = inView;
			}}
			on:inview_leave={(event) => {
				const { inView } = event.detail;
				mocaIsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={mocaAbout}
				aboutImages={$preloadedImagesStore[7]}
				route="moca-end"
				colorVariant={EColorVariant.BLACK}
			/>
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
				images={$preloadedImagesStore[8]}
				aboutDropdownItems={intertwinedVernisaggeDropdownItems}
				route=""
			/>

			<ProjectVideo videoProjects={intertwinedLastVideo} route="vernisagge-end" />
		</div>

		<HomeIcon />
		<Footer project={EProjects.INTERTWINED} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>
