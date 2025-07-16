<script lang="ts">
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { EColorVariant, EProjects } from '../../constants/enums';
	import { queeringTheWeb3NavItems } from '../../data/Projects/QueeringTheWeb3/NavItems';
	import {
		queeringTheWeb3About1,
		queeringTheWeb3About1Images,
		queeringTheWeb3About2,
		queeringTheWeb3About2Images,
		queeringTheWeb3About3,
		queeringTheWeb3About3Images
	} from '../../data/Projects/QueeringTheWeb3/ProjectAbout';
	import { queeringTheWeb3Intro } from '../../data/Projects/QueeringTheWeb3/ProjectIntro';
	import { QueeringTheWeb3ArtworkGrid } from '../../data/Projects/QueeringTheWeb3/ProjectArtworkGrid';
	import { QueeringTheWeb3ArtworkGrid2 } from '../../data/Projects/QueeringTheWeb3/ProjectArtworkGrid2';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import preloadImages from '../../utils/preloadImages';
	import { queeringTheWeb3NavStoreItems } from './store';

	let introIsInView: boolean;
	let about1IsInView: boolean;
	let artworkGridIsInView: boolean;
	let about2IsInView: boolean;
	let artworkGrid2IsInView: boolean;
	let about3IsInView: boolean;

	let containerRef: any;

	const handleOnScroll = () => {
		if (introIsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[0].route);
		}
		if (about1IsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[1].route);
		}
		if (artworkGridIsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[2].route);
		}
		if (about2IsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[3].route);
		}
		if (artworkGrid2IsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[4].route);
		}
		if (about3IsInView) {
			updateNavBar(queeringTheWeb3NavStoreItems, queeringTheWeb3NavItems, queeringTheWeb3NavItems[5].route);
		}
	};

	const preloadedImages = preloadImages([
		[queeringTheWeb3Intro.bgImage, queeringTheWeb3Intro.bgImageMobile],
		queeringTheWeb3About1Images,
		queeringTheWeb3About2Images,
		queeringTheWeb3About3Images,
		QueeringTheWeb3ArtworkGrid.artworks.map((item) => item.image),
		QueeringTheWeb3ArtworkGrid2.artworks.map((item) => item.image)
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
		<!-- Intro Section -->
		<div
			id="intro"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				introIsInView = inView;
			}}
		>
			<ProjectIntro
				project={queeringTheWeb3Intro}
				textColor="white"
				bgImage={images[0][0]}
				bgImageMobile={images[0][1]}
			/>
		</div>

		<!-- About 1 Section -->
		<div
			id="about1"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				about1IsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={queeringTheWeb3About1}
				aboutImages={images[1]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

                		<!-- About 2 Section -->
		<div
                id="about2"
                use:inview={INVIEW_OPTIONS}
                on:inview_change={(event) => {
                        const { inView } = event.detail;
                        about2IsInView = inView;
                }}
        >
                <ProjectAbout
                        aboutItem={queeringTheWeb3About2}
                        aboutImages={images[2]}
                        route=""
                        colorVariant={EColorVariant.BLACK}
                />
                </div>

		<!-- Artwork Grid Section -->
		<div
			id="artwork-grid"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				artworkGridIsInView = inView;
			}}
		>
			<ProjectArtworkGrid galleryImages={QueeringTheWeb3ArtworkGrid.artworks} />
		</div>

		<!-- About 3 Section -->
		<div
			id="about3"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => {
				const { inView } = event.detail;
				about3IsInView = inView;
			}}
		>
			<ProjectAbout
				aboutItem={queeringTheWeb3About3}
				aboutImages={images[3]}
				route=""
				colorVariant={EColorVariant.BLACK}
			/>
		</div>

                		<!-- Artwork Grid 2 Section -->
		<div
                id="artwork-grid-2"
                use:inview={INVIEW_OPTIONS}
                on:inview_change={(event) => {
                        const { inView } = event.detail;
                        artworkGrid2IsInView = inView;
                }}
        >
                <ProjectArtworkGrid galleryImages={QueeringTheWeb3ArtworkGrid2.artworks} />
                </div>

		<HomeIcon />
		<Footer project={EProjects.QUEERING_THE_WEB3} />
	</div>
{/await}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style> 