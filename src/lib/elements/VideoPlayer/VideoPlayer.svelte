<script lang="ts">
	export let videoUrl: string;
	export let onVideoLoad: any = undefined;
	let videoPlayer: HTMLVideoElement;
	let imgElement: HTMLImageElement;
	let width: number;
	let height: number;

	// Detect if the URL is a GIF or image based on final extension
	$: getFileExtension = (url: string) => {
		const lastDotIndex = url.lastIndexOf('.');
		if (lastDotIndex === -1) return '';
		return url.substring(lastDotIndex + 1).toLowerCase();
	};

	$: fileExtension = getFileExtension(videoUrl);
	$: isGif = fileExtension === 'gif';
	$: isImage = ['jpg', 'jpeg', 'png', 'webp'].includes(fileExtension);
	$: isVideo = !isGif && !isImage;

	const handleVideoLoad = () => {
		if (videoPlayer && isVideo && onVideoLoad) {
			const aspectRatio = videoPlayer.videoWidth / videoPlayer.videoHeight;
			onVideoLoad(aspectRatio);
		}
	};

	const handleImageLoad = () => {
		if (imgElement && (isGif || isImage) && onVideoLoad) {
			const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
			onVideoLoad(aspectRatio);
		}
	};
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<div
	class="video-player w-full h-full relative flex flex-row items-center justify-center xlScreen:h-[630px] overflow-hidden"
>
	{#if isGif || isImage}
		<!-- For GIFs and images, use img tag -->
		<img
			bind:this={imgElement}
			src={videoUrl}
			class="w-full h-full object-cover"
			alt="Media content"
			on:load={handleImageLoad}
		/>
	{:else}
		<!-- For videos, use video tag -->
		<video
			src={videoUrl}
			class="w-full h-full object-cover"
			controls
			bind:this={videoPlayer}
			preload="metadata"
			playsinline
			muted
			loop
			on:loadedmetadata={handleVideoLoad}
		>
			<track kind="captions" />
		</video>
	{/if}
</div>
