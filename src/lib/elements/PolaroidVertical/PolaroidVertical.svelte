<script lang="ts">
	import type { IPolaroidImage } from '../Polaroids/interface';
	import { EPolaroidPosition } from './interface';

	export let isSelected = false;
	export let polaroid: IPolaroidImage;
	export let polaroidPosition: EPolaroidPosition;

	const positionClass =
		polaroidPosition === EPolaroidPosition.TOP_LEFT
			? 'top-[20%] left-[15%] rotate-[-15deg]'
			: polaroidPosition === EPolaroidPosition.TOP_RIGHT
				? 'top-[20%] right-6 rotate-[15deg]'
				: polaroidPosition === EPolaroidPosition.BOTTOM_LEFT
					? 'top-[53%] right-[1%] rotate-[15deg]'
					: 'top-[35%] left-[3%] rotate-[-15deg]';

	const isOnlyImage = !polaroid.name && !polaroid.date;
</script>

<button
	on:click
	class="{isSelected
		? 'z-40'
		: 'z-0'} h-[60%] w-[45%] laptopM:w-[40%] laptopL:w-[35%] laptopL:h-[60%] bigScreen:h-[60%] bigScreen:w-[40%] bg-color-white p-5 flex flex-col gap-2.5 rounded-20
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
</button>
