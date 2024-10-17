<script lang="ts">
	import nextIcon from '$lib/assets/images/next-icon.png';
	import playIcon from '$lib/assets/images/play-icon.png';
	import previousIcon from '$lib/assets/images/previous-icon.png';
	import { onMount } from 'svelte';
	import type { IAudioItem } from '../AudioFile/interfaces';
	let size: number;

	let videoPlayer: HTMLVideoElement;
	let isPaused = true;

	const playVideo = () => {
		isPaused = false;
		videoPlayer.play();
	};

	const pauseVideo = () => {
		isPaused = true;
		videoPlayer.pause();
	};

	onMount(() => {
		videoPlayer.addEventListener('pause', () => {
			isPaused = true;
		});

		videoPlayer.addEventListener('play', () => {
			isPaused = false;
		});
	});

	export let audioItems: IAudioItem[];
	export let handleNextTrack: any;
	export let handlePreviousTrack: any;
	export let index: number;

	$: isLastTrack = index === audioItems.length - 1;
</script>

<svelte:window bind:innerWidth={size} />
<div
	class="sm:w-full w-[21.875rem] mx-auto laptopS:mx-0 h-[37.5rem] laptopS:h-full flex flex-col gap-[0.625rem] justify-between p-5 rounded-20 border border-color-black gray-gradient shadow-audioShadow"
>
	<video
		style={size > 1100 ? 'height: calc(100% - 2.375rem)' : ''}
		src={audioItems[index].songFile}
		controls
		bind:this={videoPlayer}
		preload="metadata"
		class={size > 1100 ? 'w-auto' : 'h-full'}
	>
		<track kind="captions" />
	</video>

	<div class="flex justify-between h-[2.375rem] w-full items-center relative">
		<p class="font-clash text-[1.25rem] leading-[4.375rem] text-color-black font-semibold">
			{audioItems[index].songName}
		</p>
		<div
			class="flex flex-row absolute bottom-[-0.1875rem] right-0 items-center justify-center gap-[0.625rem]"
		>
			<button
				on:click={() => handlePreviousTrack(index)}
				class="{index === 0
					? 'pointer-events-none bg-color-disabled'
					: ''} w-[2.375rem] h-[2.375rem] rounded-[6.25rem] flex flex-row items-center justify-center border border-color-black hover:scale-105"
			>
				<img src={previousIcon} alt="previous" class="h-[16px] {index === 0 ? 'invert' : ''}" />
			</button>
			<button
				on:click={isPaused ? playVideo : pauseVideo}
				class="w-[2.375rem] h-[2.375rem] rounded-[6.25rem] flex flex-row items-center justify-center border hover:scale-105 border-color-black"
			>
				<img src={playIcon} alt="play/pause" class="w-[13px] h-[13px] ml-[0.13rem]" />
			</button>
			<button
				on:click={() => handleNextTrack(index)}
				class="{isLastTrack
					? 'pointer-events-none bg-color-disabled'
					: ''} w-[2.375rem] h-[2.375rem] rounded-[6.25rem] flex flex-row items-center justify-center border hover:scale-105 border-color-black"
			>
				<img src={nextIcon} alt="next" class="h-[16px] {isLastTrack ? 'invert' : ''}" />
			</button>
		</div>
	</div>
</div>

<!-- style="height: calc(100% - 2.375rem)" -->

<!-- laptopM:h-[87%] macBook:h-full laptopL:h-[90%] bigScreen:h-full -->

<style>
	video::-webkit-media-controls-play-button {
		display: none;
	}
</style>
