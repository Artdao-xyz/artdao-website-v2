<script lang="ts">
	import type { IMapEvent } from '../../../data/Map/MapData';

	export let eventToShow: IMapEvent | undefined;
</script>

{#if eventToShow}
	<div
		class="h-fit w-full rounded-20 bg-color-gray py-[18px] px-[24px] text-color-black bigScreen:max-w-full xl:max-w-[900px]"
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
			</div>

			<img
				src={eventToShow.image}
				alt="event"
				class="h-auto xl:max-h-[300px] bigScreen:max-h-[516px] xlScreen:max-h-[900px] bigScreen:w-full object-cover object-top"
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
				<button
					class="px-[20px] py-[12px] rounded-[100px] dark-gradient w-[151px] h-[47px] leading-[16px] text-[12px] font-robotoMono text-color-white"
					>Watch more</button
				>
			</div>
		</div>
	</div>
{/if}
