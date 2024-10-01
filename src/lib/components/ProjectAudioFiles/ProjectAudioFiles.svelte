<script lang="ts">
	import AudioFile from '$lib/elements/AudioFile/AudioFile.svelte';
	import type { IAudioItem } from '$lib/elements/AudioFile/interfaces';
	import AudioFilePreview from '$lib/elements/AudioFilePreview/AudioFilePreview.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../../constants/enums';

	export let audioItems: IAudioItem[];
	let index = 0;

	const handleOnClick = (i: number) => {
		index = i;
	};
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<div class="flex justify-between items-center mx-auto h-full gap-[5rem] p-5">
		<AudioFilePreview audioItem={audioItems[index]} />
		<div class="flex flex-col gap-[5rem] justify-center">
			{#each audioItems as audioItem, i}
				<AudioFile {audioItem} on:click={() => handleOnClick(i)} />
			{/each}
		</div>
	</div>
</SectionContainer>
