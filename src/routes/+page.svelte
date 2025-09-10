<script lang="ts">
	import HomeV2 from '$lib/components/HomeV2/HomeV2.svelte';
</script>


<HomeV2/>

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