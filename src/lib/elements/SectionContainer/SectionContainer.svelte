<script lang="ts">
	import { page } from '$app/stores';
	
	export let bgImage: string | undefined = undefined;
	export let hasPadding = true;
	export let isOverflow = true;
	export let isCover = false;
	
	$: isMapRoute = $page.url.pathname === '/map';
</script>

<div
	class="!snap-start shrink-0 w-full {isCover ? 'bg-cover' : ''} {isOverflow
		? 'h-screen'
		: ''} sm:h-full-desktop px-10"
>
	<slot />
</div>
