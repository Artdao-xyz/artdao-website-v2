<script lang="ts">
	import HomeMenu from '$lib/components/HomeMenu/HomeMenu.svelte';
	import Loading from '$lib/components/Loading/Loading.svelte';
	import Home from '$lib/components/Home/Home.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import HomeImgRectV from '$lib/elements/HomeImgRectV/HomeImgRectV.svelte';
	import HomeImgSquare from '$lib/elements/HomeImgSquare/HomeImgSquare.svelte';
	import { homeImages, homeImagesMobile } from '../data/HomeImgLayout';
	import preloadImages from '../utils/preloadImages';

	const preloadedImages = preloadImages([
		homeImages.map((project) => project.imageUrl),
		homeImages.map((project) => project.hover),
		homeImagesMobile.map((project) => project.hover)
	]);
</script>

{#await preloadedImages}
	<Loading />
{:then images}
	<div class="min-h-screen w-full">
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