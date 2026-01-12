<script lang="ts">
	import HomeV2 from '$lib/components/HomeV2/HomeV2.svelte';
	import { usePageMetadata } from '$lib/utils/metadata';

	// Set page metadata for home page
	usePageMetadata({
		title: 'Artdao',
		description: 'Artists helping artists',
		canonical: 'https://artdao.xyz'
	});
</script>


<div class="h-full">
	<HomeV2/>
</div>

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

	.bg-dot {
		background: #F7F5F2 url("/media/home/home-dot.svg") repeat;
		background-size: 10px 10px;
	}
</style>