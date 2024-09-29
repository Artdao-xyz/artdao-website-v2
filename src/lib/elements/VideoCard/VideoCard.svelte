<script lang="ts">
	import buttonIcon from '$lib/assets/images/button-icon.png';
	import { ESizesVariant } from '../../../constants/enums';
	import VideoPlayer from '../VideoPlayer/VideoPlayer.svelte';
	import type { IVideoProject } from './interfaces';

	export let videoProject: IVideoProject;
	export let size: ESizesVariant = ESizesVariant.LARGE;
	const { name, artist, year, videoUrl } = videoProject;

	const videoCardWidth =
		size === ESizesVariant.LARGE
			? 'w-[81.25%]'
			: size === ESizesVariant.MEDIUM
				? 'w-[59%]'
				: 'w-[34.72%]';
</script>

<div
	class="{videoCardWidth} h-[78.22%] black-gradient p-[1.875rem] rounded-20 gap-[1.25rem] flex flex-col mt-[5%]"
>
	<div
		class="h-[15%] w-full bg-color-dark rounded-20 p-[1.25rem] flex items-center justify-between"
	>
		<div class="flex flex-col gap-[0.3125rem] justify-center">
			<p class="font-clash text-[1.25rem] leading-[1.5625rem]">{name}</p>
			<div
				class="font-robotoMono flex flex-row gap-5 text-[0.75rem] text-color-gray-secondary leading-[1.375rem] tracking-[0.075rem]"
			>
				<p>{artist}</p>
				<p>.</p>
				<p>{year}</p>
			</div>
		</div>

		<button
			class="w-[3.125rem] h-[3.125rem] rounded-[6.25rem] border border-color-white flex items-center justify-center hover:scale-105"
		>
			<img src={buttonIcon} alt="Button" /></button
		>
	</div>
	<div class="h-[83%] w-full">
		<VideoPlayer {videoUrl} />
	</div>
</div>
