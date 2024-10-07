<script lang="ts">
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IVideoProject } from '$lib/elements/VideoCard/interfaces';
	import VideoCard from '$lib/elements/VideoCard/VideoCard.svelte';
	import { EColorVariant, ESizesVariant } from '../../../constants/enums';

	export let videoProjects: IVideoProject[];
	export let size: ESizesVariant = ESizesVariant.LARGE;
	$: index = 0;
	$: videoProject = videoProjects[index];

	let hideButton = false;

	const handleNextVideo = () => {
		if (videoProjects.length > index + 1) {
			index += 1;

			if (videoProjects.length - 1 === index) {
				hideButton = true;
			}
		}
	};
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT} hasPadding>
	<div class="flex items-center justify-center w-full h-full pt-[2.4375rem]">
		<VideoCard {videoProject} {size} on:click={handleNextVideo} {hideButton} />
	</div>
</SectionContainer>
