<script lang="ts">
	export let logo: string;
	export let homeParagraphs: string[];

	let m = { x: 0, y: 0 };

	function handleMousemove(event: any) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	$: x = m.x;
	$: y = m.y;

	let width: number;
	let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<button
	style={`background: radial-gradient(at ${(m.x * 1000) / width}% ${(m.y * 1000) / height}%, #A6A6A6, #313431)`}
	on:mousemove={handleMousemove}
	class="flex flex-col gap-[1.875rem] w-full py-[1.875rem] px-5 sm:px-10 rounded-20 h-full sm:h-fit"
>
	<img src={logo} alt="ArtDao Logo" class="w-[13.5625rem] h-[3.0931rem]" />
	<div
		class="flex flex-col justify-start gap-4 text-sm font-medium font-clash leading-5 text-color-white overflow-y-auto"
	>
		{#each homeParagraphs as homeParagraph}
			<p>{homeParagraph}</p>
		{/each}
	</div>
</button>
