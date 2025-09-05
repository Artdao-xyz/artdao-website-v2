<script lang="ts">
	export let bgImage: string | undefined = undefined;
	export let hasPadding = true;
	export let isOverflow = true;
	export let isCover = false;
</script>

<div
	class="!snap-start shrink-0 w-full {isCover ? 'bg-cover' : ''} {isOverflow
		? 'h-screen'
		: ''} sm:h-full-desktop-height {bgImage ? 'bg-center bg-no-repeat' : ''} {hasPadding ? 'p-global-padding' : ''}"
	style={bgImage ? `background-image: url(${bgImage});` : 'background-color: #F7F5F2;'}
>
	<slot />
</div>
