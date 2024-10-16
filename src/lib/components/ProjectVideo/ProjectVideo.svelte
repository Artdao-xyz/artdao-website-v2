<script lang="ts">
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IVideoProject } from '$lib/elements/VideoCard/interfaces';
	import VideoCard from '$lib/elements/VideoCard/VideoCard.svelte';
	import { EColorVariant } from '../../../constants/enums';

	export let videoProjects: IVideoProject[];
	export let route = '';
	$: index = 0;
	$: videoProject = videoProjects[index];

	$: isNextButtonDisabled = videoProjects.length - 1 === index;

	$: isPrevButtonDisabled = index === 0;

	const handleNextButton = () => {
		if (videoProjects.length > index + 1) {
			index += 1;
		}
	};

	const handlePrevButton = () => {
		if (index !== 0) {
			index -= 1;
		}
	};
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT} hasPadding>
	<div class="flex items-center justify-center w-full h-full pt-[2.4375rem]" id={route}>
		<VideoCard
			{videoProject}
			{handleNextButton}
			{handlePrevButton}
			{isNextButtonDisabled}
			{isPrevButtonDisabled}
		/>
	</div>
</SectionContainer>
