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
	<div
		class="h-full pt-[2.5rem] laptopM:pt-[3%] xlScreen:pt-[8%] flex flex-col sm:justify-center laptopM:justify-start laptopM:gap-10 xlScreen:gap-24"
		id={route}
	>
		<h1
			class="hidden laptopM:block px-[1%] text-color-black text-[3.5rem] xlScreen:text-[5rem] font-semibold leading-[5rem] tracking-[0.065rem] uppercase font-neue w-full text-center"
		>
			&gt; {title} &lt;
		</h1>
		<div
			class="flex flex-col laptopM:flex-row justify-between items-start mx-auto gap-[2rem] laptopM:gap-[5rem] laptopM:h-[70%]"
		>
			<AudioFilePreview {audioItems} {handlePreviousTrack} {handleNextTrack} {index} />
			<div class="flex flex-row sm:flex-col gap-[1rem] laptopM:gap-[5rem] justify-center my-auto">
				{#each audioItems as audioItem, i}
					<AudioFile {audioItem} on:click={() => handleOnClick(i)} {index} {audioItems} />
				{/each}
			</div>
		</div>
	</div>
</SectionContainer>
