<script lang="ts">
	import AudioFile from '$lib/elements/AudioFile/AudioFile.svelte';
	import type { IAudioItem } from '$lib/elements/AudioFile/interfaces';
	import AudioFilePreview from '$lib/elements/AudioFilePreview/AudioFilePreview.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../../constants/enums';
	import { playingIndex } from './store';

	export let audioItems: IAudioItem[];
	export let title: string;
	export let route = '';
	let index = 0;

	const handleOnClick = (i: number) => {
		index = i;
		playingIndex.set(index);
	};

	const handleNextTrack = (i: number) => {
		index = i + 1;
	};

	const handlePreviousTrack = (i: number) => {
		index = i - 1;
	};
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<div class="h-full pt-[3%] flex flex-col flex-1 gap-10" id={route}>
		<div>
			<h1
				class="px-[1%] text-color-black text-[4rem] bigScreen:text-[5rem] font-bold leading-[5rem] tracking-[0.065rem] uppercase font-neue w-full text-center"
			>
				&gt; {title} &lt;
			</h1>
		</div>
		<div class="flex justify-between items-center mx-auto gap-[5rem] h-full">
			<AudioFilePreview {audioItems} {handlePreviousTrack} {handleNextTrack} {index} />
			<div class="flex flex-col gap-[5rem] justify-center">
				{#each audioItems as audioItem, i}
					<AudioFile {audioItem} on:click={() => handleOnClick(i)} {index} {audioItems} />
				{/each}
			</div>
		</div>
	</div>
</SectionContainer>
