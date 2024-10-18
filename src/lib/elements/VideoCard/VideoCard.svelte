<script lang="ts">
	import buttonIcon from '$lib/assets/images/button-icon.png';
	import VideoPlayer from '../VideoPlayer/VideoPlayer.svelte';
	import type { IVideoProject } from './interfaces';

	export let videoProject: IVideoProject;
	export let isNextButtonDisabled: boolean;
	export let isPrevButtonDisabled: boolean;
	export let handlePrevButton: () => void;
	export let handleNextButton: () => void;
	export let showButtons: boolean = true;

	$: videoCardWidth =
		videoProject.size === 'rectangle'
			? 'w-full bigScreen:max-w-[85%] laptopL:max-w-[80%] macBook:w-[80rem] macBook:max-w-full bigScreen:!h-[90%] h-[370px] sm:h-[40rem] sm:w-[45rem]'
			: videoProject.size === 'square'
				? 'w-full sm:w-[700px] h-[450px] sm:h-[800px] '
				: 'h-[630px] sm:h-full w-full max-w-[350px] sm:max-w-full';
</script>

<div
	class="{videoCardWidth} black-gradient p-[0.9375rem] sm:p-[1.875rem] rounded-20 gap-[1.25rem] flex flex-col h-full mx-auto"
>
	<div
		class="h-[20%] sm:[15%] w-full sm:bg-color-dark rounded-20 p-[1.25rem] flex items-center justify-between"
	>
		<div class="flex flex-col gap-[0.3125rem] justify-center items-start">
			<p class="font-clash text-[1.25rem] leading-[1.5625rem]">
				{videoProject.name}
			</p>
			<div
				class="font-robotoMono flex flex-row gap-5 text-[1rem] laptopM:text-[0.75rem] text-color-gray-secondary leading-[1rem] tracking-[0.075rem]"
			>
				<p>{videoProject.artist}</p>
				{#if videoProject.year}
					<p>.</p>
					<p>{videoProject.year}</p>
				{/if}
			</div>
		</div>

		{#if showButtons}
			<div class="sm:flex flex-row gap-[0.9375rem] hidden">
				<button
					on:click={handlePrevButton}
					class="{isPrevButtonDisabled
						? 'cursor-not-allowed'
						: 'hover:scale-105'} w-[3.125rem] h-[3.125rem] rounded-[6.25rem] border border-color-white flex items-center justify-center"
				>
					<img src={buttonIcon} alt="Button" class="rotate-180" />
				</button>

				<button
					on:click={handleNextButton}
					class="{isNextButtonDisabled
						? 'cursor-not-allowed'
						: 'hover:scale-105'} w-[3.125rem] h-[3.125rem] rounded-[6.25rem] border border-color-white flex items-center justify-center"
				>
					<img src={buttonIcon} alt="Button" />
				</button>
			</div>
		{/if}
	</div>
	<div class="h-[83%] w-full">
		<VideoPlayer videoUrl={videoProject.videoUrl} />
	</div>
</div>
