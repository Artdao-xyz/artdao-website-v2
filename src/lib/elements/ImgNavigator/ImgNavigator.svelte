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
			: 'left-0'} flex flex-col-reverse gap-[0.625rem] laptopM:flex-row sm:gap-[1.375rem] laptopM:left-10 laptopM:bottom-10
			 absolute {height > 700 ? 'bottom-20' : 'bottom-[1.25rem]'} "
	>
		{#each images as image, i}
			{#if height > 700}
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
			{:else if height < 700}
				{#if i < 9}
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
				{/if}
			{/if}
		{/each}
	</div>

	{#if aboutDropdownItems}
		<AboutDropdown bind:aboutDropdown={aboutDropdownItems[index]} />
	{/if}
</div>
