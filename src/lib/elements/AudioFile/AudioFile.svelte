<script lang="ts">
	import type { IAudioItem } from './interfaces';

	export let audioItem: IAudioItem;
</script>

<button
	on:click
	class="w-[26.375rem] h-[7.5rem] bg-color-white rounded-[5rem] border-[0.05rem] border-color-black p-3 flex items-center justify-start gap-8 hover:scale-105"
>
	<div class="w-[6.0625rem] h-[6.0625rem] rounded-[6.25rem]">
		<img src={audioItem.artistImage} alt="artist" class="object-cover rounded-[6.25rem] h-[6rem]" />
	</div>
	<div class="flex flex-col gap-[0.25rem] text-color-black">
		<p class="font-neue text-[1.25rem] font-semibold">{audioItem.songName}</p>
		<div class="font-robotoMono flex gap-2 text-[10px] font-semibold">
			<p class="uppercase">{audioItem.artist}</p>
			<p>.</p>
			<p class="uppercase">{audioItem.songYear}</p>
		</div>
	</div>
</button>
