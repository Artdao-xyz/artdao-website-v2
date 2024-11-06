<script lang="ts">
	import type { IAudioItem } from './interfaces';

	export let audioItem: IAudioItem;
	export let audioItems: IAudioItem[];
	export let index: number;

	$: isSelected = audioItems[index] === audioItem;
</script>

<button
	on:click
	class="{isSelected
		? 'bg-gradient-to-r from-[#a0a0a0] to-[#4d4b4b]'
		: 'bg-color-white'} sm:w-[26.375rem] sm:h-[7.5rem] rounded-[5rem] border-[0.05rem] border-color-black p-3 flex items-center justify-start gap-8 hover:scale-105"
>
	<div class="w-[55px] h-[55px] sm:w-[6.0625rem] sm:h-[6.0625rem] rounded-[6.25rem]">
		<img
			src={audioItem.artistImage}
			alt="artist"
			class="object-cover rounded-[6.25rem] w-[3.4375rem] sm:w-full h-full laptopM:h-[6rem]"
		/>
	</div>
	<div class="hidden sm:flex flex-col gap-[0.25rem] text-color-black items-start">
		<p class="font-neue text-[1.25rem] font-semibold capitalize">{audioItem.songName}</p>
		<div class="font-robotoMono flex gap-2 text-[10px] font-medium capitalize">
			<p class="capitalize">{audioItem.artist}</p>
			<p>.</p>
			<p class="capitalize">{audioItem.songYear}</p>
		</div>
	</div>
</button>
