<script lang="ts">
	import closeButton from '$lib/assets/images/close-button-min.webp';
	import mapBg from '$lib/assets/images/map-background.webp';
	import buttonIcon from '$lib/assets/images/video-arrow.svg';
	import { scale } from 'svelte/transition';
	import type { IMapEvent } from '../../../data/Map/MapData';
	export let isNextButtonDisabled: boolean;
	export let isPrevButtonDisabled: boolean;
	export let handlePrevButton: () => void;
	export let handleNextButton: () => void;
	export let imageToShow: string | undefined;
	export let isCenter = false;

	export let eventToShow: IMapEvent | undefined;

	let height: number;
</script>

<svelte:window bind:innerHeight={height} />
{#if eventToShow}
	<div
		style={`background-image: url("${mapBg}"); background-size: cover; background-position: center;`}
		class="w-full h-full flex flex-row items-center justify-center"
	>
		<div
			class="h-fit max-h-[90vh] w-full max-w-[1000px] rounded-20 bg-color-dark bg-opacity-90 py-[26px] px-[20px] text-color-black gap-[20px] flex flex-col"
			in:scale
		>
			<div class="flex-row flex items-center gap-[10px] flex-none">
				<div
					class="sm:flex flex-row gap-[0.5rem] hidden mr-[0.5rem] bg-color-gray rounded-20 p-[6px]"
				>
					<button
						on:click={handlePrevButton}
						class="{isPrevButtonDisabled
							? 'hidden'
							: 'hover:scale-105'} group w-[2rem] h-[2rem] rounded-[6.25rem] border border-color-black flex items-center justify-center"
					>
						<img src={buttonIcon} alt="Button" class="w-[10px] group-hover:scale-105" />
					</button>

					<button
						on:click={handleNextButton}
						class="{isNextButtonDisabled
							? 'hidden'
							: 'hover:scale-105'} group w-[2rem] h-[2rem] rounded-[6.25rem] border border-color-black flex items-center justify-center"
					>
						<img src={buttonIcon} alt="Button" class="rotate-180 w-[10px] group-hover:scale-105" />
					</button>
				</div>

				<div
					class="w-full gray-gradient rounded-[100px] h-[44px] flex flex-row items-center justify-between"
				>
					<h1
						class="w-[500px] gray-gradient uppercase rounded-[100px] h-[44px] my-auto text-[20px] font-medium font-neue leading-[44px] pl-[22px]"
					>
						{eventToShow.title}
					</h1>
					<p
						class="pr-[22px] font-robotoMono text-[12px] font-medium capitalize tracking-[0.156px]"
					>
						{eventToShow.city}
					</p>
				</div>
				<button
					on:click={() => (eventToShow = undefined)}
					class="h-auto w-[44px] hover:opacity-70"
					><img src={closeButton} alt="close" class="h-full aspect-square w-full" /></button
				>
			</div>

			<div class="w-full flex-1 min-h-0 overflow-hidden flex items-center justify-center">
				<div class="w-full" style="max-width: min(100%, calc(16 * (90vh - 200px) / 9));">
					<img
						src={imageToShow}
						alt="event"
						class="w-full object-cover {isCenter ? 'object-center' : 'object-top'}"
						style="aspect-ratio: 16/9;"
					/>
				</div>
			</div>

			<div
				class="w-full py-[20px] px-[20px] bg-color-gray flex flex-row justify-between items-center rounded-20 flex-none"
			>
				<div class="flex flex-col items-start gap-[10px]">
					<p class="text-[25px] capitalize font-neue font-semibold leading-[30px]">
						{eventToShow.subtitle}
					</p>
					<div class="flex flex-col h-[31px]">
						<p class="font-robotoMono text-[12px] leading-[1rem] tracking-[0.156px]">
							{eventToShow.date}
						</p>
						<p class="font-robotoMono text-[12px] leading-[1rem] tracking-[0.156px] font-medium">
							{eventToShow.location}
						</p>
					</div>
				</div>
				{#if eventToShow.watchMore}
					<button
						class="px-[20px] py-[12px] rounded-[100px] dark-gradient w-[151px] h-[47px] leading-[16px] text-[12px] font-robotoMono text-color-white"
						><a href={eventToShow.watchMore}>Watch more</a></button
					>
				{/if}
			</div>
		</div>
	</div>
{/if}
