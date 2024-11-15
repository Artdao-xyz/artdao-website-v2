<script lang="ts">
	import { ESizeVariant } from '../../../constants/enums';
	import AboutDropdown from '../AboutDropdown/AboutDropdown.svelte';
	import type { IAboutDropdown } from '../AboutDropdown/interfaces';

	export let images: string[];
	export let variant: ESizeVariant;
	export let aboutDropdownItems: IAboutDropdown[] | undefined = undefined;
	export let isImageWhiteBg = false;

	let index: number = 0;

	const handleOnClick = (i: number) => {
		index = i;
	};

	const isSmall = variant === ESizeVariant.SMALL;
	const navigatorWidth = isSmall ? 'w-full sm:w-1/2' : 'w-full h-full pt-0 sm:pt-[2.4375rem]';
	let width: number;
	let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<div class="{navigatorWidth} {height > 660 && height < 1000 ? '' : 'mb-[10rem]'} h-full relative">
	<div class="w-full h-full {!isSmall ? 'flex justify-center items-center' : ''}">
		<img
			src={images[index]}
			alt="Big view"
			class="laptopM:h-full {variant === ESizeVariant.SMALL
				? 'w-full object-cover h-full '
				: 'rounded-20 max-h-[80%] sm:h-full sm:max-h-full'} {isImageWhiteBg
				? 'bg-color-white'
				: ''} object-contain"
		/>
	</div>

	<div
		class="{isSmall
			? 'left-[20px]'
			: 'left-0'} flex flex-row gap-[0.625rem] sm:gap-[1.375rem] laptopM:left-10
			 absolute {width < 500 ? 'scroll-panel' : ''} bottom-[4rem]"
	>
		{#if width < 500}
			<div class="w-fit flex flex-row flex-nowrap gap-[0.625rem]">
				{#each images as image, i}
					<button
						class="w-[2.5rem] h-[2.5rem] laptopM:w-[5.375rem] laptopM:h-[5.375rem] hover:scale-105"
						on:click={() => handleOnClick(i)}
					>
						<img
							src={image}
							alt="Small view"
							class="w-full h-full object-cover rounded-[6.25rem] shadow"
						/>
					</button>
				{/each}
			</div>
		{:else}
			{#each images as image, i}
				<button
					class="w-[2.5rem] h-[2.5rem] laptopM:w-[5.375rem] laptopM:h-[5.375rem] hover:scale-105"
					on:click={() => handleOnClick(i)}
				>
					<img
						src={image}
						alt="Small view"
						class="w-full h-full object-cover rounded-[6.25rem] shadow"
					/>
				</button>
			{/each}
		{/if}
	</div>

	{#if aboutDropdownItems}
		<AboutDropdown bind:aboutDropdown={aboutDropdownItems[index]} />
	{/if}
</div>

<style>
	.scroll-panel {
		width: 100%;
		overflow: auto;
		outline: none;
		overflow-y: hidden;
		-ms-overflow-style: scroll;
		scrollbar-width: none;
		/* touch-action: none; */
		/* user-select: none; */
		overflow-x: scroll;
	}

	.scroll-panel::-webkit-scrollbar {
		display: none;
	}
</style>
