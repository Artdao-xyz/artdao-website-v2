<script lang="ts">
	import Home from '$lib/components/Home/Home.svelte';
	import { homeImages } from '../data/HomeImgLayout';
	import preloadImages, { isExiting } from '../utils/preloadImages';
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';

	const preloadedImages = preloadImages([
		homeImages.map((project) => project.imageUrl),
	]);
</script>

{#await preloadedImages}
	<!-- <LoadingV2 /> -->
	<LoadingV2/>
{:then images}
	<div class="h-svh w-full">
		<Home/>
	</div>
{/await}

<style>
	:global(html) {
		scroll-snap-type: y mandatory;
		overscroll-behavior-y: none;
		min-height: 100%;
	}

	:global(body) {
		overflow-y: auto;
		overscroll-behavior-y: none;
		min-height: 100%;
	}
</style>