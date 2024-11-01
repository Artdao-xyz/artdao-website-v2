<script lang="ts">
	import hammer from '$lib/assets/images/hammer-min.png';
	export let logo: string;

	let m = { x: 0, y: 0 };

	function handleMousemove(event: any) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	let width: number;
	let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<button
	style={`background: radial-gradient(at ${(m.x * 1000) / width}% ${(m.y * 1000) / height}%, #A6A6A6, #313431)`}
	on:mousemove={handleMousemove}
	class="flex flex-col gap-[16px] w-full {height > 900
		? 'py-[1.875rem]'
		: 'py-[1rem]'} px-5 sm:px-10 rounded-20 h-full sm:h-fit"
>
	{#if height > 900}
		<img src={logo} alt="ArtDao Logo" class="w-[163px] h-[37.17633px]" />
		<div class="flex flex-col items-start">
			<h1 class="text-[18px] font-clash font-medium leading-[20px] tracking-[0.234px] uppercase">
				ARTISTS HELPING ARTISTS
			</h1>
			<p class="text-[14px] font-clash font-medium leading-[22.4px] tracking-[0.28px] uppercase">
				© 2024
			</p>
		</div>
		<img src={hammer} alt="hammer logo" class="w-[200px] my-[0.5rem] self-center" />
	{/if}
	{#if height < 900}
		<div class="flex flex-row">
			<div class="flex flex-col w-full gap-[1rem]">
				<img src={logo} alt="ArtDao Logo" class="w-[163px] h-[37.17633px]" />
				<div class="flex flex-col items-start">
					<h1
						class="text-[18px] font-clash font-medium leading-[20px] tracking-[0.234px] uppercase w-[164px] text-left"
					>
						ARTISTS HELPING ARTISTS
					</h1>
					<p
						class="text-[14px] font-clash font-medium leading-[22.4px] tracking-[0.28px] uppercase"
					>
						© 2024
					</p>
				</div>
			</div>
			<img src={hammer} alt="hammer logo" class="w-[100px] self-center ml-[1rem]" />
		</div>
	{/if}
</button>
