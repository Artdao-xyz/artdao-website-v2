<script lang="ts">
	import nextIcon from '$lib/assets/images/next-icon-black.png';
	import nextDisabled from '$lib/assets/images/next-icon-gray.png';
	import pauseIconBlack from '$lib/assets/images/pause-icon-black.svg';
	import playIcon from '$lib/assets/images/play-icon-black.png';
	import previousIcon from '$lib/assets/images/previous-icon-black.png';
	import previousDisabled from '$lib/assets/images/previuos-icon-gray.png';
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
	let height: number;
</script>

<svelte:window bind:innerWidth={size} bind:innerHeight={height} />
<div
	class="sm:w-full w-[21.875rem] mx-auto laptopM:mx-0 {height > 800
		? 'h-[37.5rem]'
		: 'h-full'} laptopM:h-full flex flex-col gap-[0.625rem] justify-between p-5 rounded-20 border border-color-black gray-gradient"
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
		<p
			class="font-clash text-[1.25rem] leading-[4.375rem] text-color-black font-semibold capitalize"
		>
			{audioItems[index].songName}
		</p>
		<div class="flex flex-row absolute bottom-0 right-0 items-center justify-center gap-[0.625rem]">
			<button
				on:click={() => handlePreviousTrack(index)}
				class="{index === 0
					? 'pointer-events-none bg-[#D9D9D9] border-color-gray-secondary'
					: ''} w-[2.375rem] h-[2.375rem] rounded-[6.25rem] flex flex-row py-[12px] pl-[10px] pr-[12px] border border-color-black hover:scale-105"
			>
				<img
					src={index === 0 ? previousDisabled : previousIcon}
					alt="previous"
					class="h-full w-full"
				/>
			</button>
			<button
				on:click={isPaused ? playVideo : pauseVideo}
				class="w-[2.375rem] h-[2.375rem] rounded-[6.25rem] flex flex-row {isPaused
					? ''
					: 'pr-[13px]'} p-[12px] border hover:scale-105 border-color-black"
			>
				<img src={isPaused ? playIcon : pauseIconBlack} alt="play/pause" class="h-full w-full" />
			</button>
			<button
				on:click={() => handleNextTrack(index)}
				class="{isLastTrack
					? 'pointer-events-none bg-[#D9D9D9] border-color-gray-secondary'
					: ''} w-[2.375rem] h-[2.375rem] rounded-[6.25rem] flex flex-row py-[12px] pr-[10px] pl-[12px] border hover:scale-105 border-color-black"
			>
				<img src={isLastTrack ? nextDisabled : nextIcon} alt="next" class="h-full w-full" />
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
