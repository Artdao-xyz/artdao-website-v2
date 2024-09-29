<script lang="ts">
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IVideoProject } from '$lib/elements/VideoCard/interfaces';
	import VideoCard from '$lib/elements/VideoCard/VideoCard.svelte';
	import { EColorVariant, ESizesVariant } from '../../../constants/enums';

	export let videoProject: IVideoProject;
	export let size: ESizesVariant = ESizesVariant.LARGE;
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<div class="flex items-center justify-center w-full h-full">
		<VideoCard {videoProject} {size} />
	</div>
</SectionContainer>
