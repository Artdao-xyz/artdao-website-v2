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
		: ''} sm:h-full-desktop-height {bgImage ? 'bg-center bg-no-repeat' : ''} {hasPadding ? 'p-global-padding' : ''} px-10"
	style="background-color: {isMapRoute ? '#F7F5F2' : '#000000'}; bg-repeat: repeat; background-image: {isMapRoute ? "url('/media/home/home-dot.svg')" : 'none'};"
>
	<slot />
</div>
