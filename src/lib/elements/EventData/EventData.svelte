<script lang="ts">
	import buttonIcon from '$lib/assets/images/video-arrow.svg';
	import type { IMapEvent } from '../../../data/Map/MapData';
	export let isNextButtonDisabled: boolean;
	export let isPrevButtonDisabled: boolean;
	export let handlePrevButton: () => void;
	export let handleNextButton: () => void;
	export let imageToShow: string | undefined;

	export let eventToShow: IMapEvent | undefined;

	let height: number;
</script>

<svelte:window bind:innerHeight={height} />
{#if eventToShow}
	<div
		class="h-fit w-full rounded-20 bg-color-gray py-[18px] px-[24px] text-color-black sm:max-w-[90%]"
	>
		<div
			class="h-full w-full py-[26px] px-[20px] bg-color-dark rounded-20 gap-[20px] flex flex-col"
		>
			<div class="flex-row flex items-center gap-[10px]">
				<button
					on:click={() => (eventToShow = undefined)}
					class="w-[122px] py-[14px] px-[24px] font-robotoMono text-[12px] leading-[1rem] tracking-[0.156px] rounded-[100px] gray-gradient"
					>Go Back</button
				>
				<div
					class="w-full gray-gradient rounded-[100px] h-[44px] flex flex-row items-center justify-between"
				>
					<h1
						class="w-[500px] gray-gradient rounded-[100px] h-[44px] my-auto text-[20px] font-semibold font-neue leading-[44px] pl-[22px]"
					>
						{eventToShow.title}
					</h1>
					<p class="pr-[22px] font-robotoMono text-[12px] font-medium uppercase tracking-[0.156px]">
						{eventToShow.city}
					</p>
				</div>
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
			</div>

			<img
				src={imageToShow}
				alt="event"
				class="h-auto xl:max-h-[300px] bigScreen:max-h-[516px] xlScreen:max-h-[700px] bigScreen:w-full object-cover {height >
				950
					? 'object-top'
					: 'object-center'}"
			/>

			<div
				class="w-full py-[47px] px-[20px] bg-color-gray flex flex-row justify-between items-center h-[160px] rounded-20"
			>
				<div class="flex flex-col items-start gap-[10px]">
					<p class="text-[30px] uppercase font-neue font-semibold leading-[30px]">
						{eventToShow.subtitle}
					</p>
					<div class="flex flex-col h-[31px]">
						<p class="font-robotoMono text-[12px] leading-[1rem] tracking-[0.156px]">
							{eventToShow.date}
						</p>
						<p class="font-robotoMono text-[12px] leading-[1rem] tracking-[0.156px]">
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
