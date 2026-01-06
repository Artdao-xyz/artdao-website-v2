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

	let currentAspectRatio: number = 16/9; // Default aspect ratio

	// Generate poster URL for video thumbnails
	const getPosterUrl = (videoUrl: string) => {
		return `${videoUrl}#t=0.1`;
	};

	const handleThumbnailLoad = (event: Event) => {
		// Pause the video immediately to show only first frame
		const video = event.target as HTMLVideoElement;
		if (video) {
			video.pause();
			video.currentTime = 0;
		}
	};

	$: videoCardWidth =
		videoProject.size === 'rectangle'
			? 'w-full h-[330px] w-[330px] laptopM:!h-[682px] md:!h-[500px] md:!w-[700px] laptopM:!w-[1332px] lg:!w-[900px] lg:!h-[600px]'
			: videoProject.size === 'square'
				? 'w-full h-[330px] w-[330px] sm:w-[600px] sm:h-[600px] max-h-[420px] sm:h-[800px] sm:max-h-[600px] bigScreen:w-[650px] bigScreen:max-h-[650px] xlScreen:max-h-[800px] xlScreen:w-[800px]'
				: videoProject.size === 'vertical' && height < 1000
					? 'sm:w-[400px] sm:!h-[682px] !h-[420px] w-[250px]'
					: 'w-full sm:max-h-[650px] sm:max-w-[450px] xlScreen:max-h-[800px]';

	let height: number;
	let width: number;

	// Helper function to detect if URL is GIF or image based on final extension
	const isGifOrImage = (url: string) => {
		const lastDotIndex = url.lastIndexOf('.');
		if (lastDotIndex === -1) return false;
		const extension = url.substring(lastDotIndex + 1).toLowerCase();
		return extension === 'gif' || ['jpg', 'jpeg', 'png', 'webp'].includes(extension);
	};

	const handleVideoLoad = (aspectRatio: number) => {
		currentAspectRatio = aspectRatio;
	};

	// Calculate dynamic classes based on aspect ratio
	$: getAspectClass = () => {
		if (currentAspectRatio > 1.5) {
			return 'aspect-video'; // Landscape
		} else if (currentAspectRatio < 0.8) {
			return 'aspect-[9/16]'; // Portrait
		} else {
			return 'aspect-square'; // Square
		}
	};

	$: videoProjectIndex = videoProjects.findIndex((item) => item.name === videoProject.name);

	const handleVideoLoad = (aspectRatio: number) => {
		currentAspectRatio = aspectRatio;
	};
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
<div class="flex flex-col h-full justify-between">
	<div
		class="max-h-[80vh] mx-auto {getAspectClass()} w-auto overflow-hidden video-gradient px-[0.9375rem] my-auto pb-[0.9375rem] sm:!p-[15px] rounded-20 flex flex-col gap-0 sm:gap-[0.9375rem]"
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
		<div class="w-full h-full rounded-20 overflow-hidden">
			<VideoPlayer videoUrl={videoProject.videoUrl} onVideoLoad={handleVideoLoad} />
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

		{#if width > 768}
		<div class="flex flex-row h-full items-center">
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
					<!-- For videos, use video tag with handleThumbnailLoad -->
					<!-- svelte-ignore a11y-media-has-caption -->
					<video
						on:click={() => {
							videoProject = video;
						}}
						on:loadedmetadata={handleThumbnailLoad}
						src={video.videoUrl}
						preload="metadata"
						poster=""
						muted
						playsinline
						class="cursor-pointer {videoProject.name === videoProjects[i].name
							? 'h-[5.3125rem] w-[5.3125rem]'
							: 'h-[3.4375rem] w-[3.4375rem]'} rounded-[3.0523rem] object-cover {i !== 0
							? 'ml-[-1.125rem]'
							: ''} transition-all duration-300 shadow-xl"
						style={`z-index: ${videoProjects.length - i};`}
					>
					</video>
				{/if}
			{/each}
		</div>
		{/if}

		{#if width <= 768}
		<div class="flex flex-row h-full items-center w-[5rem] justify-center">
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
					<!-- For videos, use video tag with handleThumbnailLoad -->
					<!-- svelte-ignore a11y-media-has-caption -->
					<video
						on:loadedmetadata={handleThumbnailLoad}
						src={video.videoUrl}
						preload="metadata"
						poster=""
						muted
						playsinline
						class="{videoProject.name === videoProjects[i].name
							? 'h-[50px] w-[50px]'
							: 'h-[35px] w-[35px]'} rounded-[3.0523rem] object-cover {i === videoProjectIndex + 1
							? 'ml-[-1.125rem]'
							: ''} {video.name === videoProject.name || i === videoProjectIndex + 1
							? 'visible'
							: 'hidden'} transition-all duration-300 shadow-xl"
						style={`z-index: ${videoProjects.length - i};`}
					>
					</video>
				{/if}
			{/each}
		</div>
		{/if}

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
