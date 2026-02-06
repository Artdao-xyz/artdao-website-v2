<script lang="ts">
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ChatInterview from '$lib/elements/ChatInterview/ChatInterview.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
import { EProjects } from '../../constants/enums';
	import { petNavItems } from '../../data/Projects/Pet/NavItems';
	import { petIntro } from '../../data/Projects/Pet/ProjectIntro';
import {
	petCompanionAbout,
	petCompanionAboutImages,
	petLaborAbout,
	petLaborAboutImages,
	petPoliticalEconomyAbout,
	petPoliticalEconomyAboutImages
} from '../../data/Projects/Pet/ProjectAbout';
import { petDropdownImages } from '../../data/Projects/Pet/ProjectAboutDropdown';
	import { petChatInterview } from '../../data/Projects/Pet/ProjectChatInterview';
	import { petNavStoreItems } from './store';
	import preloadImages from '../../utils/preloadImages';
	import { INVIEW_OPTIONS, updateNavBar } from '../../utils/nav/updateNavBar';
	import { getMetaballProgress } from '../../utils/metaball/getMetaballProgress';
	import {
		metaballReady,
		preloadedImages as preloadedImagesStore,
		imagesLoaded
	} from '$lib/stores/metaballPreloader';
	import { usePageMetadata } from '$lib/utils/metadata';

	// Set page metadata
	usePageMetadata({
		title: 'PET: Projected Emotional Technologies | Artdao',
		description: petIntro.description[0] || 'Exploring emotional outsourcing between humans and digital companions.',
		ogImage: `https://artdao.xyz${petIntro.bgImage}`,
		canonical: 'https://artdao.xyz/pet'
	});

	let laborIsInView: boolean;
	let companionIsInView: boolean;
	let economyIsInView: boolean;

	let containerRef: HTMLElement;

	const handleOnScroll = () => {
		getMetaballProgress(containerRef);

		if (laborIsInView) {
			updateNavBar(petNavStoreItems, petNavItems, petNavItems[0].route);
		}

		if (companionIsInView) {
			updateNavBar(petNavStoreItems, petNavItems, petNavItems[1].route);
		}

		if (economyIsInView) {
			updateNavBar(petNavStoreItems, petNavItems, petNavItems[2].route);
		}
	};

	const loadImages = async () => {
		const images = await preloadImages([
			[petIntro.bgImage, petIntro.bgImageMobile],
			petLaborAboutImages,
			petCompanionAboutImages,
			petPoliticalEconomyAboutImages,
			petDropdownImages,
			[petChatInterview.background]
		]);

		preloadedImagesStore.set(images);
		imagesLoaded.set(true);
	};

	$: if ($metaballReady) {
		loadImages();
	}

	$: chatInterviewData = {
		...petChatInterview,
		background: $preloadedImagesStore ? $preloadedImagesStore[5][0] : petChatInterview.background
	};
</script>

{#if $preloadedImagesStore}
	<div
		bind:this={containerRef}
		on:scroll={handleOnScroll}
		on:touchmove={handleOnScroll}
		transition:fly={{ duration: 1000, delay: 750, y: 30, easing: cubicInOut }}
		class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-proximity sm:snap-mandatory overflow-y-auto h-screen mobile-scroll"
	>
		<div id="intro" use:inview={INVIEW_OPTIONS}>
		<ProjectIntro
			project={petIntro}
			textColor="white"
			isWiderTitle
			bgImage={$preloadedImagesStore[0][0]}
			bgImageMobile={$preloadedImagesStore[0][1]}
			backgroundPosition="center"
		/>
		</div>

                <div
                        id="labor"
                        use:inview={INVIEW_OPTIONS}
                        on:inview_change={(event) => (laborIsInView = event.detail.inView)}
                        on:inview_enter={(event) => (laborIsInView = event.detail.inView)}
                        on:inview_leave={(event) => (laborIsInView = event.detail.inView)}
                >
                        <ProjectAbout
                                aboutItem={petLaborAbout}
                                aboutImages={$preloadedImagesStore[1]}
                                route="labor"
                        />
                </div>

		<div id="chat-interview" use:inview={INVIEW_OPTIONS}>
                        <ChatInterview data={chatInterviewData} />
                </div>

		<div
			id="companion"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => (companionIsInView = event.detail.inView)}
			on:inview_enter={(event) => (companionIsInView = event.detail.inView)}
			on:inview_leave={(event) => (companionIsInView = event.detail.inView)}
		>
			<ProjectAbout
				aboutItem={petCompanionAbout}
				aboutImages={$preloadedImagesStore[2]}
				route="companion"
			/>
		</div>

		<div id="archive" use:inview={INVIEW_OPTIONS}>
			<ProjectAboutDropdown
				images={$preloadedImagesStore[4]}
				route="archive"
			/>
		</div>

		<div
			id="economy"
			use:inview={INVIEW_OPTIONS}
			on:inview_change={(event) => (economyIsInView = event.detail.inView)}
			on:inview_enter={(event) => (economyIsInView = event.detail.inView)}
			on:inview_leave={(event) => (economyIsInView = event.detail.inView)}
		>
			<ProjectAbout
				aboutItem={petPoliticalEconomyAbout}
				aboutImages={$preloadedImagesStore[3]}
				route="economy"
			/>
		</div>

		<HomeIcon />
		<Footer project={EProjects.PET} />
	</div>
{/if}

<style>
	.mobile-scroll {
		-webkit-overflow-scrolling: touch;
		scroll-snap-coordinate: 0 0;
		scroll-snap-points-x: repeat(100%);
	}
</style>

