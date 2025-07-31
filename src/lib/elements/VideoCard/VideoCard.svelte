<script lang="ts">
	import buttonIcon from '$lib/assets/images/video-arrow.svg';
	import VideoPlayer from '../VideoPlayer/VideoPlayer.svelte';
	import type { IVideoProject } from './interfaces';

	export let videoProject: IVideoProject;
	export let isNextButtonDisabled: boolean;
	export let isPrevButtonDisabled: boolean;
	export let handlePrevButton: () => void;
	export let handleNextButton: () => void;
	export let showButtons: boolean = true;
	export let videoProjects: IVideoProject[];

	$: videoCardWidth =
		videoProject.size === 'rectangle'
			? 'w-full h-[330px] w-[330px] laptopM:!h-[682px] md:!h-[500px] md:!w-[700px] laptopM:!w-[1332px] lg:!w-[900px] lg:!h-[600px]'
			: videoProject.size === 'square'
				? 'w-full h-[330px] w-[330px] sm:w-[600px] sm:h-[600px] max-h-[420px] sm:h-[800px] sm:max-h-[600px] bigScreen:w-[650px] bigScreen:max-h-[650px] xlScreen:max-h-[800px] xlScreen:w-[800px]'
				: videoProject.size === 'vertical' && height < 1000
					? 'sm:w-[400px] sm:!h-[682px] !h-[420px] w-[250px]'
					: 'w-full sm:max-h-[650px] sm:max-w-[450px] xlScreen:max-h-[800px]';

	$: videoProjectIndex = videoProjects.findIndex((item) => item.name === videoProject.name);

	// Helper function to detect if URL is GIF or image based on final extension
	const isGifOrImage = (url: string) => {
		const lastDotIndex = url.lastIndexOf('.');
		if (lastDotIndex === -1) return false;
		const extension = url.substring(lastDotIndex + 1).toLowerCase();
		return extension === 'gif' || ['jpg', 'jpeg', 'png', 'webp'].includes(extension);
	};

	let height: number;
	let width: number;
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
<div class="flex flex-col h-full justify-between">
	<div
		class=" {videoCardWidth} {height < 1000 && videoProject.size === 'square'
			? 'sm:w-[500px] sm:h-[500px] w-[300px] h-[350px]'
			: ''} {height < 1000 && videoProject.size === 'rectangle'
			? 'sm:!max-w-[80dvw] !max-w-[350px] !h-[350px] sm:!h-[500px]'
			: ''} overflow-hidden video-gradient px-[0.9375rem] my-auto pb-[0.9375rem] sm:!p-[15px] rounded-20 flex flex-col h-full mx-auto gap-0 sm:gap-[0.9375rem]"
	>
		<div
			class="h-fit w-full sm:bg-color-dark rounded-20 py-3 sm:p-[1.25rem] flex items-center justify-between"
		>
			<div class="flex flex-col gap-[0.3125rem] justify-center items-start w-full">
				<p class="font-clash text-[1.25rem] font-medium sm:text-[1.25rem] leading-[1.5625rem]">
					{videoProject.name}
				</p>
				<div
					class="font-robotoMono flex flex-row gap-5 text-[1rem] laptopM:text-[0.75rem] text-color-gray-secondary leading-[1rem] tracking-[0.075rem]"
				>
					{#if videoProject.artist}
						<p>{videoProject.artist}</p>
					{/if}
					{#if videoProject.year}
						{#if videoProject.artist}
							<p>.</p>
						{/if}
						<p>{videoProject.year}</p>
					{/if}
				</div>
			</div>
		</div>
		<div class="h-[83%] w-full overflow-hidden">
			<VideoPlayer videoUrl={videoProject.videoUrl} />
		</div>
	</div>

	{#if showButtons}
		<div
			class="flex flex-row gap-[0.9375rem] w-full justify-center h-[4.375rem] items-center sm:mt-[2.25rem] {height <
			1000
				? 'sm:!mb-[1.5rem] sm:!mt-[1.5rem] mb-[2rem] mt-0'
				: 'sm:mb-[2.5rem]'}"
		>
			<!-- <button
				on:click={handlePrevButton}
				class="{isPrevButtonDisabled
					? 'nav-gradient-unselected'
					: 'hover:scale-105'} group w-[2.125rem] h-[2.125rem] sm:w-[3.125rem] sm:h-[3.125rem] rounded-[6.25rem] border dark-gradient flex items-center justify-center"
			>
				<img src={buttonIcon} alt="Button" class="w-[8px] invert group-hover:scale-105" />
			</button> -->

			<div class="hidden sm:flex flex-row h-full items-center">
				{#each videoProjects as video, i (video.name)}
					{#if isGifOrImage(video.videoUrl)}
						<!-- For GIFs and images, use img tag -->
						<img
							on:click={() => {
								videoProject = video;
							}}
							src={video.videoUrl}
							class="cursor-pointer {videoProject.name === videoProjects[i].name
								? 'h-[5.3125rem] w-[5.3125rem]'
								: 'h-[3.4375rem] w-[3.4375rem]'} rounded-[3.0523rem] object-cover {i !== 0
								? 'ml-[-1.125rem]'
								: ''} transition-all duration-300 shadow-xl"
							style={`z-index: ${videoProjects.length - i};`}
							alt={video.name}
						/>
					{:else}
						<!-- For videos, use video tag -->
						<!-- svelte-ignore a11y-media-has-caption -->
						<video
							on:click={() => {
								videoProject = video;
							}}
							preload="metadata"
							class="cursor-pointer {videoProject.name === videoProjects[i].name
								? 'h-[5.3125rem] w-[5.3125rem]'
								: 'h-[3.4375rem] w-[3.4375rem]'} rounded-[3.0523rem] object-cover {i !== 0
								? 'ml-[-1.125rem]'
								: ''} transition-all duration-300 shadow-xl"
							style={`z-index: ${videoProjects.length - i};`}
						>
							<source src={video.videoUrl} type="video/mp4" />
						</video>
					{/if}
				{/each}
			</div>

			<div class="flex sm:hidden flex-row h-full items-center w-[5rem] justify-center">
				{#each videoProjects as video, i}
					{#if isGifOrImage(video.videoUrl)}
						<!-- For GIFs and images, use img tag -->
						<img
							src={video.videoUrl}
							class="{videoProject.name === videoProjects[i].name
								? 'h-[50px] w-[50px]'
								: 'h-[35px] w-[35px]'} rounded-[3.0523rem] object-cover {i === videoProjectIndex + 1
								? 'ml-[-1.125rem]'
								: ''} {video.name === videoProject.name || i === videoProjectIndex + 1
								? 'visible'
								: 'hidden'} transition-all duration-300 shadow-xl"
							style={`z-index: ${videoProjects.length - i};`}
							alt={video.name}
						/>
					{:else}
						<!-- For videos, use video tag -->
						<!-- svelte-ignore a11y-media-has-caption -->
						<video
							preload="metadata"
							class="{videoProject.name === videoProjects[i].name
								? 'h-[50px] w-[50px]'
								: 'h-[35px] w-[35px]'} rounded-[3.0523rem] object-cover {i === videoProjectIndex + 1
								? 'ml-[-1.125rem]'
								: ''} {video.name === videoProject.name || i === videoProjectIndex + 1
								? 'visible'
								: 'hidden'} transition-all duration-300 shadow-xl"
							style={`z-index: ${videoProjects.length - i};`}
						>
							<source src={video.videoUrl} type="video/mp4" />
						</video>
					{/if}
				{/each}
			</div>

			<!-- <button
				on:click={handleNextButton}
				class="{isNextButtonDisabled
					? 'nav-gradient-unselected'
					: 'hover:scale-105'} group w-[2.125rem] h-[2.125rem] sm:w-[3.125rem] sm:h-[3.125rem] rounded-[6.25rem] border dark-gradient flex items-center justify-center"
			>
				<img
					src={buttonIcon}
					alt="Button"
					class="rotate-180 w-[8px] invert group-hover:scale-105"
				/>
			</button> -->
		</div>
	{/if}
</div>
