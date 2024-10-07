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
	const navigatorWidth = isSmall ? 'w-1/2' : 'w-full w-auto pt-[2.4375rem]';
</script>

<div class="{navigatorWidth} h-full relative">
	<div class="w-full h-full {!isSmall ? 'flex justify-center' : ''}">
		<img
			src={images[index]}
			alt="Big view"
			class="h-full {variant === ESizeVariant.SMALL
				? 'w-full object-cover'
				: 'rounded-20 '} {isImageWhiteBg ? 'bg-color-white' : ''}"
		/>
	</div>

	<div class="flex flex-row gap-[1.375rem] absolute left-10 bottom-10">
		{#each images as image, i}
			<button class="w-[5.375rem] h-[5.375rem] hover:scale-105" on:click={() => handleOnClick(i)}>
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
