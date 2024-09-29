<script lang="ts">
	import dottedLine from '$lib/assets/images/dotted-line-black.png';
	import { EColorVariant, ESizeVariant } from '../../../constants/enums';
	import type { ITextCardItem } from './interfaces';

	export let textCardItem: ITextCardItem;
	export let sizeVariant: ESizeVariant;
	export let colorVariant: EColorVariant;
	const { projectName, projectType, title, subtitle, imageUrl, texts } = textCardItem;
</script>

<div
	class="{sizeVariant === ESizeVariant.BIG
		? 'w-card-big-width'
		: 'w-card-width'} h-card-height {colorVariant === EColorVariant.LIGHT
		? 'bg-color-white'
		: 'bg-color-dark'} {imageUrl
		? 'flex flex-row gap-5'
		: ''} p-10 rounded-30 border border-color-black text-color-black"
>
	<div
		class="w-[33.4375rem] gap-[0.9375rem] h-full {imageUrl ? 'flex flex-col' : 'columns-[535px]'}"
	>
		<div class="flex flex-col gap-[0.9375rem]">
			<h4 class="font-robotoMono text-base leading-[1.875rem] font-normal uppercase w-full">
				{projectType} | {projectName}
			</h4>
			<img src={dottedLine} alt="Dotted line" />
			<h1
				class="font-neue text-[5rem] font-semibold leading-[5rem] tracking-[0.065rem] uppercase w-full"
			>
				{title}
			</h1>
			<h2 class="font-clash text-[2.5rem] font-semibold leading-[4.375rem] w-full">
				{subtitle[0].toUpperCase() + subtitle.slice(1)}
			</h2>
		</div>
		{#if imageUrl}
			<img src={imageUrl} alt="" class="w-[33.4375rem] h-[29.25rem] object-cover" />
		{:else}
			<div
				class="{sizeVariant === ESizeVariant.BIG
					? 'w-[33.4375rem]'
					: 'w-[36.875rem]'} font-neue text-base leading-[25px] font-semibold flex flex-col gap-[0.9375rem]"
			>
				{#each texts as text}
					<p class="w-full">{text}</p>
				{/each}
			</div>
		{/if}
	</div>

	{#if imageUrl}
		<div
			class="w-[33.4375rem] font-neue text-base leading-[25px] font-semibold flex flex-col gap-[0.9375rem]"
		>
			{#each texts as text}
				<p>{text}</p>
			{/each}
		</div>
	{/if}
</div>
