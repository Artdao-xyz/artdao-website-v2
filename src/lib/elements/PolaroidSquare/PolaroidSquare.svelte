<script lang="ts">
	import type { IPolaroidImage } from '../Polaroids/interface';
	import { EPolaroidPosition } from './interface';

	export let isSelected = false;
	export let polaroid: IPolaroidImage;
	export let polaroidPosition: EPolaroidPosition;

	const positionClass =
		polaroidPosition === EPolaroidPosition.TOP_LEFT
			? `top-[20%] left-[10%] laptopM:left-[15%] macBook:left-[10%] laptopL:left-[25%] bigScreen:left-[0%] rotate-[-15deg]`
			: polaroidPosition === EPolaroidPosition.TOP_RIGHT
				? 'top-[20%] right-[6%] rotate-[15deg]'
				: polaroidPosition === EPolaroidPosition.BOTTOM_LEFT
					? 'top-[38%] right-[6%] rotate-[15deg]'
					: 'top-[35%] left-[10%] laptopM:left-[15%] macBook:left-[10%] laptopL:left-[25%] bigScreen:left-[00%] rotate-[-15deg]';

	const isOnlyImage = !polaroid.name && !polaroid.date;

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />
<button
	on:click
	class="{isSelected
		? 'z-40'
		: 'z-0'} h-[50%] aspect-square bg-color-white p-5 flex flex-col gap-2.5 rounded-20
		absolute cursor-pointer hover:scale-[101%] border border-color-black {positionClass} {width > 1669
		? '!right-[25%]'
		: ''}"
>
	<img
		src={polaroid.image}
		alt="Polaroid Gallery Item"
		class="object-cover {!isOnlyImage
			? 'h-[65%] macBook:h-[70%] bigScreen:h-[80%]'
			: 'h-full'} w-full"
	/>

	{#if !isOnlyImage}
		<div
			class="flex flex-col gap-1 font-robotoMono text-[0.75rem] font-semibold leading-[1.375rem] tracking-[0.075rem] text-color-black"
		>
			<p class="text-ellipsis overflow-hidden whitespace-nowrap w-[160px] text-left">
				{polaroid.name}
			</p>
			<p class="text-left">{polaroid.date}</p>
		</div>
	{/if}
</button>

<!-- const positionClass =
		polaroidPosition === EPolaroidPosition.TOP_LEFT
			? 'top-[20%] left-[4%] rotate-[-15deg]'
			: polaroidPosition === EPolaroidPosition.TOP_RIGHT
				? 'top-[20%] right-6 rotate-[15deg]'
				: polaroidPosition === EPolaroidPosition.BOTTOM_LEFT
					? 'top-[53%] right-[1%] rotate-[15deg]'
					: 'top-[50%] left-[8%] rotate-[-15deg]';

	const isOnlyImage = !polaroid.name && !polaroid.date;
</script>

<button
	on:click
	class="{isSelected
		? 'z-40'
		: 'z-0'} h-[35%] bigScreen:h-[300px] aspect-square bg-color-white p-5 flex flex-col gap-2.5 rounded-20
		absolute cursor-pointer hover:scale-[101%] border border-color-black {positionClass}"
>
	<img
		src={polaroid.image}
		alt="Polaroid Gallery Item"
		class="object-cover {!isOnlyImage
			? 'h-[65%] macBook:h-[70%] bigScreen:h-[80%]'
			: 'h-full'} w-full"
	/>

	{#if !isOnlyImage}
		<div
			class="flex flex-col gap-1 font-robotoMono text-[0.75rem] font-semibold leading-[1.375rem] tracking-[0.075rem] text-color-black"
		>
			<p class="text-ellipsis overflow-hidden whitespace-nowrap w-[160px] text-left">
				{polaroid.name}
			</p>
			<p class="text-left">{polaroid.date}</p>
		</div>
	{/if}
</button> -->
