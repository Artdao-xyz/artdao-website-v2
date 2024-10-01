<script lang="ts">
	import nextIcon from '$lib/assets/images/next-icon.png';
	import playIcon from '$lib/assets/images/play-icon.png';
	import previousIcon from '$lib/assets/images/previous-icon.png';
	import { onMount } from 'svelte';
	import type { IAudioItem } from '../AudioFile/interfaces';

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

	// const handleMouseOver = () => {
	// 	isMouseOver = true;
	// };

	// const handleMouseOut = () => {
	// 	isMouseOver = false;
	// };

	// const handlePlayMouseOver = () => {
	// 	isPlayMouseOver = true;
	// };

	// const handlePlayMouseOut = () => {
	// 	isPlayMouseOver = false;
	// };

	onMount(() => {
		videoPlayer.addEventListener('pause', () => {
			isPaused = true;
		});

		videoPlayer.addEventListener('play', () => {
			isPaused = false;
		});
	});

	export let audioItem: IAudioItem;
</script>

<div
	class="w-full h-[90%] flex flex-col gap-[10px] p-5 rounded-20 border border-color-black gray-gradient shadow-audioShadow"
>
	<video
		src={audioItem.songFile}
		class="w-full h-full object-cover"
		controls
		bind:this={videoPlayer}
		preload="metadata"
	>
		<track kind="captions" />
	</video>

	<div class="flex justify-between h-[2.375rem] w-full items-center relative">
		<p class="font-clash text-[1.25rem] leading-[4.375rem] text-color-black font-semibold">
			{audioItem.songName}
		</p>
		<div
			class="flex flex-row absolute bottom-[-0.1875rem] right-0 items-center justify-center gap-[0.625rem]"
		>
			<button
				on:click={isPaused ? playVideo : pauseVideo}
				class="w-[2.375rem] h-[2.375rem] rounded-[6.25rem] flex flex-row items-center justify-center border border-color-black hover:scale-105"
			>
				<img src={previousIcon} alt="previous" class="h-[16px]" />
			</button>
			<button
				on:click={isPaused ? playVideo : pauseVideo}
				class="w-[2.375rem] h-[2.375rem] rounded-[6.25rem] flex flex-row items-center justify-center border hover:scale-105 border-color-black"
			>
				<img src={playIcon} alt="play/pause" class="w-[13px] h-[13px] ml-[0.13rem]" />
			</button>
			<button
				on:click={isPaused ? playVideo : pauseVideo}
				class="w-[2.375rem] h-[2.375rem] rounded-[6.25rem] flex flex-row items-center justify-center border hover:scale-105 border-color-black"
			>
				<img src={nextIcon} alt="next" class="h-[16px]" />
			</button>
		</div>
	</div>
</div>

<style>
	video::-webkit-media-controls-play-button {
		display: none;
	}
</style>
