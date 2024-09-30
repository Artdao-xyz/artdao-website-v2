<script lang="ts">
	import { ESizeVariant } from '../../../constants/enums';
	import AboutDropdown from '../AboutDropdown/AboutDropdown.svelte';
	import type { IAboutDropdown } from '../AboutDropdown/interfaces';

	export let images: string[];
	export let variant: ESizeVariant;
	export let isContain = false;
	export let aboutDropdownItems: IAboutDropdown[] | undefined = undefined;
	let index: number = 0;

	const handleOnClick = (i: number) => {
		index = i;
	};

	const navigatorWidth = variant === ESizeVariant.SMALL ? 'w-1/2' : 'w-full';
</script>

<div class="{navigatorWidth} h-full relative">
	<img
		src={images[index]}
		alt="Big view"
		class="w-full h-full {!isContain ? 'object-cover' : 'object-contain'}"
	/>

	<div class="flex flex-row gap-[1.375rem] absolute left-10 bottom-10">
		{#each images as image, i}
			<button class="w-[6.375rem] h-[6.375rem] hover:scale-105" on:click={() => handleOnClick(i)}>
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
