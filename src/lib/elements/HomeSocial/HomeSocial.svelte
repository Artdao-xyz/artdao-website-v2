<script lang="ts">
	export let icon: string;

	let m = { x: 0, y: 0 };

	function handleMousemove(event: any) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	let width: number;
	let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<a
	style={`background: radial-gradient(at ${(m.x * 1000) / width}% ${(m.y * 1000) / height}%, #A6A6A6, #313431)`}
	on:mousemove={handleMousemove}
	href={''}
	class="flex flex-row items-center justify-center h-[3.875rem] sm:h-[2.625rem] gray-gradient rounded-[50px] text-color-white hover:bg-color-gray hover:text-color-black w-full"
>
	<img src={icon} alt="Social" class="h-[1.2094rem]" />
</a>
