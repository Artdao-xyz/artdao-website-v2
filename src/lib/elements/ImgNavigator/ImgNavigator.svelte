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
<div class="{navigatorWidth} {height > 660 && height < 1000 ? '' : 'mb-[10rem]'} h-full {width < 500 ? 'flex flex-col' : ''} relative">
	<!-- Mobile: Info arriba -->
	{#if width < 500 && aboutDropdownItems}
		<div class="mb-4 w-full">
			<div class="flex flex-col gap-2.5 w-full rounded-20 {!isImageWhiteBg ? 'gray-gradient' : 'gray-gradient-2'} p-5">
				{#if aboutDropdownItems[index].artist}
					<div class="flex flex-col items-start gap-[0.3125rem]">
						<h1 class="font-clash text-[0.875rem] leading-[0.875rem] tracking-[1px] capitalize self-start font-medium text-color-white">
							{aboutDropdownItems[index].name}
						</h1>
						<h1 class="font-robotoMono text-[12px] leading-[1rem] tracking-[0.0625rem] capitalize self-start text-color-white">
							{aboutDropdownItems[index].artist ?? ''}
						</h1>
					</div>
				{:else}
					<h1 class="font-clash text-[0.875rem] leading-[0.875rem] tracking-[1.6px] capitalize self-start text-color-white">
						{aboutDropdownItems[index].name}
					</h1>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Imagen -->
	<div class="w-full {!isSmall ? 'flex justify-center items-center' : ''} {width < 500 ? 'flex-1' : 'h-full'}">
		<img
			src={images[index]}
			alt="Big view"
			class="laptopM:h-full {variant === ESizeVariant.SMALL
				? 'w-full object-cover h-full object-top'
				: 'rounded-20 max-h-[80%] sm:h-full sm:max-h-full object-top'} {isImageWhiteBg
				? 'bg-color-white'
				: ''} object-contain"
		/>
	</div>

	<!-- Mobile: Botones debajo -->
	{#if width < 500}
		<div class="flex flex-row gap-[0.625rem] mt-4 justify-center overflow-x-auto scroll-panel">
			{#each images as image, i}
				<button
					class="w-[2.5rem] h-[2.5rem] laptopM:w-[5.375rem] laptopM:h-[5.375rem] hover:scale-105 flex-shrink-0"
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
		<!-- Desktop: Botones en posición absoluta -->
		<div
			class="{isSmall
				? 'left-[20px]'
				: 'left-0'} flex flex-row gap-[0.625rem] sm:gap-[1.375rem] laptopM:left-10
				 absolute bottom-[4rem]"
		>
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

		<!-- Desktop: Info en posición absoluta -->
		{#if aboutDropdownItems}
			<AboutDropdown aboutDropdown={aboutDropdownItems[index]} isWhite={isImageWhiteBg} />
		{/if}
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
