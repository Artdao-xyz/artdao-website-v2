<script lang="ts">
	export let cityName: string;
	export let dotOnLeft = true;
	export let top: string;
	export let left: string;
	import menuLine from '$lib/assets/images/map-menu-line.png';
	import buttonIcon from '$lib/assets/images/video-arrow.svg';

	let isSelected = false;

	const toggleSelected = () => {
		isSelected = !isSelected;
	};
</script>

<button
	on:click={toggleSelected}
	style="position: fixed; left: {left}%; top: {top}%;"
	class="relative flex flex-row items-center justify-center rounded-40 py-[13px] px-[17px] w-[143px] h-[2.9375rem] {!isSelected
		? 'unselected'
		: 'selected'}"
>
	{#if dotOnLeft}
		<div class="w-[0.75rem] h-[0.75rem] bg-color-white rounded-[100px]" />
	{/if}
	<p
		class="w-[90px] h-[21px] text-color-white font-robotoMono text-[12px] font-medium tracking-[0.156px] uppercase"
	>
		{cityName}
	</p>
	{#if !dotOnLeft}
		<div class="w-[0.75rem] h-[0.75rem] bg-color-white rounded-[100px]" />
	{/if}

	{#if isSelected}
		<div
			class="w-[32.3125rem] h-fit menu py-[30px] px-[19px] rounded-20 bottom-[-400%] left-[0%] absolute flex flex-col justify-center items-center gap-[5px]"
		>
			<img src={menuLine} alt="line" class="w-[449px]" />
			<button
				class="group w-full h-[2.9375rem] hover:bg-color-dark rounded-[100px] flex justify-between items-center pl-[15px] pr-[8px]"
			>
				<p class="font-neue text-[20px] tracking-[0.0163rem] font-semibold">NON PLACES</p>
				<button
					class="w-[30px] h-[30px] rounded-[6.25rem] border-color-black border group-hover:border-color-white flex items-center justify-center"
				>
					<img src={buttonIcon} alt="Button" class="rotate-180 w-[10px] group-hover:invert" />
				</button>
			</button>
			<img src={menuLine} alt="line" class="w-[449px]" />
			<button
				class="group w-full h-[2.9375rem] hover:bg-color-dark rounded-[100px] flex justify-between items-center pl-[15px] pr-[8px]"
			>
				<p class="font-neue text-[20px] tracking-[0.0163rem] font-semibold">NFT PARIS</p>
				<button
					class="w-[30px] h-[30px] rounded-[6.25rem] border-color-black border group-hover:border-color-white flex items-center justify-center"
				>
					<img src={buttonIcon} alt="Button" class="rotate-180 w-[10px] group-hover:invert" />
				</button>
			</button>
			<img src={menuLine} alt="line" class="w-[449px]" />
		</div>
	{/if}
</button>

<style>
	.unselected {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(2px);
	}

	.selected {
		background: linear-gradient(95deg, rgba(0, 0, 0, 0.64) 6.17%, rgba(0, 0, 0, 0.8) 92.59%);
	}

	.menu {
		background: linear-gradient(
			108deg,
			rgba(255, 255, 255, 0.6) 9.86%,
			rgba(255, 255, 255, 0.6) 89.79%
		);
		backdrop-filter: blur(2px);
	}
</style>
