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
</script>

<div class="{navigatorWidth} h-full relative">
	<div class="w-full h-full {!isSmall ? 'flex justify-center items-center' : ''}">
		<img
			src={images[index]}
			alt="Big view"
			class="h-fit laptopS:h-full {variant === ESizeVariant.SMALL
				? 'w-full object-cover h-full'
				: 'rounded-20 sm:h-full'} {isImageWhiteBg ? 'bg-color-white' : ''} object-contain"
		/>
	</div>

	<div
		class="flex {!isSmall
			? 'flex-col-reverse gap-[0.625rem] sm:flex-row sm:gap-[1.375rem] left-0 sm:left-10 sm:bottom-10'
			: 'flex-row gap-[1.375rem] left-5 sm:left-10 bottom-10'} absolute bottom-20"
	>
		{#each images as image, i}
			<button
				class="{!isSmall
					? 'w-[2.5rem] h-[2.5rem] sm:w-[5.375rem] sm:h-[5.375rem]'
					: 'w-[5.375rem] h-[5.375rem]'} hover:scale-105"
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

	{#if aboutDropdownItems}
		<AboutDropdown bind:aboutDropdown={aboutDropdownItems[index]} />
	{/if}
</div>
