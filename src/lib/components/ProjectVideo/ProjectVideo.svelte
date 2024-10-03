<script lang="ts">
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IVideoProject } from '$lib/elements/VideoCard/interfaces';
	import VideoCard from '$lib/elements/VideoCard/VideoCard.svelte';
	import { EColorVariant, ESizesVariant } from '../../../constants/enums';

	export let videoProject: IVideoProject;
	export let size: ESizesVariant = ESizesVariant.LARGE;
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT} hasPadding>
	<div class="flex items-center justify-center w-full h-full pt-[2.4375rem]">
		<VideoCard {videoProject} {size} />
	</div>
</SectionContainer>
