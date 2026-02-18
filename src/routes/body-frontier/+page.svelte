<script lang="ts">
import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
import Footer from '$lib/elements/Footer/Footer.svelte';
import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
import { inview } from 'svelte-inview';
import { EColorVariant, EProjects } from '../../constants/enums';
import { bodyFrontierNavItems } from '../../data/Projects/BodyFrontier/NavItems';
import { bodyFrontierIntro } from '../../data/Projects/BodyFrontier/ProjectIntro';
import { bodyFrontierAbout1, bodyFrontierAbout2, bodyFrontierAbout3, bodyFrontierAbout4, bodyFrontierAbout5, bodyFrontierAbout6 } from '../../data/Projects/BodyFrontier/ProjectAbout';
import { bodyFrontierDropdownItems, bodyFrontierDropdownImages } from '../../data/Projects/BodyFrontier/ProjectDropdown';
import { bodyFrontierChatInterview1, bodyFrontierChatInterview2 } from '../../data/Projects/BodyFrontier/ProjectChatInterview';
import { metaballReady, imagesLoaded, preloadedImages as preloadedImagesStore } from '$lib/stores/metaballPreloader';
import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
import preloadImages from '../../utils/preloadImages';
import { bodyFrontierNavStoreItems } from './store';
import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
import { vixyVideos, cymoonvVideos, brendyVideos } from '../../data/Projects/BodyFrontier/ProjectVideo';
import { fly } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';
import { usePageMetadata } from '$lib/utils/metadata';

// Set page metadata
usePageMetadata({
	title: 'Body Frontier | Artdao',
	description: bodyFrontierIntro.description[0] || 'Exploring the boundaries between physical and digital bodies.',
	ogImage: `https://artdao.xyz${bodyFrontierIntro.bgImage}`,
	canonical: 'https://artdao.xyz/body-frontier'
});

let aboutIsInView: boolean;
let ai3dIsInView: boolean;
let fashionIsInView: boolean;

let containerRef: any;

const handleOnScroll = () => {
	getMetaballProgress(containerRef);
	
	if (aboutIsInView) updateNavBar(bodyFrontierNavStoreItems, bodyFrontierNavItems, bodyFrontierNavItems[0].route);
	if (ai3dIsInView) updateNavBar(bodyFrontierNavStoreItems, bodyFrontierNavItems, bodyFrontierNavItems[1].route);
	if (fashionIsInView) updateNavBar(bodyFrontierNavStoreItems, bodyFrontierNavItems, bodyFrontierNavItems[2].route);
};

// Función para cargar las imágenes cuando el Metaball esté listo
const loadImages = async () => {
	const images = await preloadImages([
		[bodyFrontierIntro.bgImage, bodyFrontierIntro.bgImageMobile],
		bodyFrontierAbout1.images,
		bodyFrontierAbout2.images,
		bodyFrontierAbout3.images,
		bodyFrontierAbout4.images,
		bodyFrontierAbout5.images,
		bodyFrontierAbout6.images,
		bodyFrontierDropdownImages
	]);
	preloadedImagesStore.set(images);
	imagesLoaded.set(true);
};

// Cargar imágenes cuando el Metaball esté listo
$: if ($metaballReady) {
	loadImages();
}
</script>

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		transition:fly={{ duration: 1000, delay: 750, y: 30, easing: cubicInOut }}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<!-- About Section (intro) -->
		<div id="intro" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { aboutIsInView = event.detail.inView; }}>
			<ProjectIntro project={bodyFrontierIntro} textColor="black" bgImage={$preloadedImagesStore[0][0]} bgImageMobile={$preloadedImagesStore[0][1]} />
		</div>

		<!-- AI and 3D Section (about 1 hasta segundo video) -->
		<div id="ai-3d" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { ai3dIsInView = event.detail.inView; }}>
			<div id="about-1"><ProjectAbout aboutItem={bodyFrontierAbout1} aboutImages={$preloadedImagesStore[1]} route="" colorVariant={EColorVariant.BLACK} /></div>
			<div id="interview-1"><ChatInterview data={bodyFrontierChatInterview1} /></div>
			<div id="about-2"><ProjectAbout aboutItem={bodyFrontierAbout2} aboutImages={$preloadedImagesStore[2]} route="" colorVariant={EColorVariant.BLACK} /></div>
			<ProjectVideo videoProjects={vixyVideos} route="vixy-videos" />
			<div id="about-3"><ProjectAbout aboutItem={bodyFrontierAbout3} aboutImages={$preloadedImagesStore[3]} route="" colorVariant={EColorVariant.BLACK} /></div>
			<ProjectVideo videoProjects={cymoonvVideos} route="cymoonv-videos" />
		</div>

		<!-- Fashion Section (resto) -->
		<div id="fashion" use:inview={INVIEW_OPTIONS} on:inview_change={(event) => { fashionIsInView = event.detail.inView; }}>
			<div id="about-4"><ProjectAbout aboutItem={bodyFrontierAbout4} aboutImages={$preloadedImagesStore[4]} route="" colorVariant={EColorVariant.BLACK} /></div>
			<div id="interview-2"><ChatInterview data={bodyFrontierChatInterview2} /></div>
			<div id="about-5"><ProjectAbout aboutItem={bodyFrontierAbout5} aboutImages={$preloadedImagesStore[5]} route="" colorVariant={EColorVariant.BLACK} /></div>
			<div id="project-dropdown"><ProjectAboutDropdown images={$preloadedImagesStore[7]} aboutDropdownItems={bodyFrontierDropdownItems} route="" /></div>
			<div id="about-6"><ProjectAbout aboutItem={bodyFrontierAbout6} aboutImages={$preloadedImagesStore[6]} route="" colorVariant={EColorVariant.BLACK} /></div>
			<ProjectVideo videoProjects={brendyVideos} route="brendy-videos" />
		</div>

		<HomeIcon />
		<Footer project={EProjects.BODY_FRONTIER} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 