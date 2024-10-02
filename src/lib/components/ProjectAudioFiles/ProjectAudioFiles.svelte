<script lang="ts">
	import AudioFile from '$lib/elements/AudioFile/AudioFile.svelte';
	import type { IAudioItem } from '$lib/elements/AudioFile/interfaces';
	import AudioFilePreview from '$lib/elements/AudioFilePreview/AudioFilePreview.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../../constants/enums';
	import { playingIndex } from './store';

	export let audioItems: IAudioItem[];
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
	<div class="flex justify-between items-center mx-auto h-full gap-[5rem] p-5">
		<AudioFilePreview {audioItems} {handlePreviousTrack} {handleNextTrack} {index} />
		<div class="flex flex-col gap-[5rem] justify-center">
			{#each audioItems as audioItem, i}
				<AudioFile {audioItem} on:click={() => handleOnClick(i)} {index} {audioItems} />
			{/each}
		</div>
	</div>
</SectionContainer>
