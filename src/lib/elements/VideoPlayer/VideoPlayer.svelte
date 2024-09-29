<script lang="ts">
	import { onMount } from 'svelte';

	export let videoUrl: string;
	let videoPlayer: HTMLVideoElement;
	let isPaused = true;
	let isMouseOver = false;
	let isPlayMouseOver = false;

	const playVideo = () => {
		isPaused = false;
		videoPlayer.play();
	};

	const pauseVideo = () => {
		isPaused = true;
		videoPlayer.pause();
	};

	const handleMouseOver = () => {
		isMouseOver = true;
	};

	const handleMouseOut = () => {
		isMouseOver = false;
	};

	const handlePlayMouseOver = () => {
		isPlayMouseOver = true;
	};

	const handlePlayMouseOut = () => {
		isPlayMouseOver = false;
	};

	onMount(() => {
		videoPlayer.addEventListener('pause', () => {
			isPaused = true;
		});

		videoPlayer.addEventListener('play', () => {
			isPaused = false;
		});
	});
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="video-player w-full h-full relative flex flex-row items-center justify-center">
	<video
		src={videoUrl}
		class="w-full h-full object-cover"
		controls
		bind:this={videoPlayer}
		on:mouseover={handleMouseOver}
		on:mouseout={handleMouseOut}
		preload="metadata"
	>
		<track kind="captions" />
	</video>

	<div
		class="{!isPaused && !isMouseOver && !isPlayMouseOver
			? 'opacity-0'
			: !isPaused
				? 'opacity-1'
				: isPlayMouseOver
					? 'opacity-1'
					: ''} flex flex-row absolute w-[11.8125rem] h-[11.8125rem] bottom-[40%] items-center justify-center"
	>
		<button
			on:mouseover={handlePlayMouseOver}
			on:mouseout={handlePlayMouseOut}
			on:click={isPaused ? playVideo : pauseVideo}
			class="w-[11.8125rem] h-[11.8125rem] rounded-[6.25rem] bg-color-play-button flex flex-row items-center justify-center hover:scale-105"
		>
			<p class="font-neue text-[1.25rem] font-bold leading-[1.5rem]">
				{isPaused ? 'PLAY' : 'PAUSE'}
			</p>
		</button>
	</div>
</div>

<style>
	video::-webkit-media-controls-play-button {
		display: none;
	}
</style>
