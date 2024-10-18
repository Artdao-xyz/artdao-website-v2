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

	onMount(() => {
		videoPlayer.addEventListener('pause', () => {
			isPaused = true;
		});

		videoPlayer.addEventListener('play', () => {
			isPaused = false;
		});
	});
</script>

<div class="video-player w-full h-full relative flex flex-row items-center justify-center">
	<video
		src={videoUrl}
		class="w-full h-full object-cover"
		controls
		bind:this={videoPlayer}
		preload="metadata"
	>
		<track kind="captions" />
	</video>

	<div
		class="{isPaused
			? 'opacity-1'
			: 'opacity-0'} flex flex-row absolute w-[11.8125rem] h-[11.8125rem] bottom-[25%] sm:bottom-[40%] items-center justify-center"
	>
		<button
			on:click={playVideo}
			class="hidden w-[11.8125rem] h-[11.8125rem] rounded-[6.25rem] bg-color-play-button sm:flex flex-row items-center justify-center hover:scale-105"
		>
			<p class="font-neue text-[1.25rem] font-bold leading-[1.5rem]">
				{isPaused ? 'PLAY' : 'PAUSE'}
			</p>
		</button>
	</div>
</div>
