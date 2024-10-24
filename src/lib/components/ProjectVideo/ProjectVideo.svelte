<script lang="ts">
	import buttonIcon from '$lib/assets/images/video-arrow.svg';
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
	<div class="flex flex-col sm:flex-row items-center w-full h-full pt-[2rem]" id={route}>
		<div class="h-full flex items-center justify-center sm:w-full">
			<VideoCard
				{videoProject}
				{handleNextButton}
				{handlePrevButton}
				{isNextButtonDisabled}
				{isPrevButtonDisabled}
				showButtons={videoProjects.length > 1}
			/>
		</div>

		{#if videoProjects.length > 1}
			<div class="flex flex-row gap-[0.9375rem] sm:hidden justify-start w-full">
				<button
					on:click={handlePrevButton}
					class="{isPrevButtonDisabled
						? 'cursor-not-allowed'
						: 'hover:scale-105'} w-[3.125rem] h-[3.125rem] rounded-[6.25rem] border hover:bg-color-dark bg-color-white border-color-dark flex items-center justify-center"
				>
					<img src={buttonIcon} alt="Button" class="w-[15px]" />
				</button>

				<button
					on:click={handleNextButton}
					class="{isNextButtonDisabled
						? 'cursor-not-allowed'
						: 'hover:scale-105'} w-[3.125rem] h-[3.125rem] rounded-[6.25rem] border hover:bg-color-dark bg-color-white border-color-dark flex items-center justify-center"
				>
					<img src={buttonIcon} alt="Button" class="rotate-180 w-[15px]" />
				</button>
			</div>
		{/if}
	</div>
</SectionContainer>
