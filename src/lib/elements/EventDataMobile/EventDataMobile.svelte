<script lang="ts">
	import type { IMapEvent } from '../../../data/Map/MapData';

	export let eventToShow: IMapEvent | undefined;
</script>

{#if eventToShow}
	<div class="flex flex-col gap-[10px] items-center">
		<button
			class="relative flex flex-row dark-gradient items-center justify-center rounded-40 py-[15px] px-[17px] w-full h-[5.4375rem] sm:max-w-[400px] selected"
		>
			<p
				class="w-full h-full text-color-white font-robotoMono text-[18px] font-medium tracking-[0.234px] uppercase flex items-center justify-center"
			>
				{eventToShow.city}
			</p>

			<div class="w-[0.75rem] h-[0.75rem] bg-color-white rounded-[100px]" />
		</button>

		<button
			class="flex flex-rowitems-center justify-center rounded-40 w-full h-[47px] gray-gradient sm:max-w-[400px]"
		>
			<p
				class="font-neue text-[20px] tracking-[0.0163rem] font-semibold uppercase flex justify-center items-center leading-[47px]"
			>
				{eventToShow.title}
			</p>
		</button>

		<img
			src={eventToShow.image}
			alt="event"
			class="h-[163px] sm:h-[326px] w-full object-cover object-top rounded-20"
		/>

		<div class="flex flex-col items-start gap-[10px] dark-gradient rounded-20 p-[24px] w-full">
			<p class="text-[18px] uppercase font-neue font-semibold leading-[30px]">
				{eventToShow.subtitle}
			</p>
			<div class="flex flex-col h-[31px]">
				<p class="font-robotoMono text-[14px] leading-[1rem] tracking-[0.156px]">
					{eventToShow.date}
				</p>
				<p class="font-robotoMono text-[14px] leading-[1rem] tracking-[0.156px]">
					{eventToShow.location}
				</p>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-[15px]">
		{#if eventToShow.watchMore}
			<button
				class="sm:max-w-[400px] sm:mx-auto px-[20px] py-[12px] rounded-[100px] gray-gradient w-full h-[47px] leading-[16px] text-[16px] font-robotoMono text-color-white"
				><a href={eventToShow.watchMore}>Watch more</a></button
			>
		{/if}

		<button
			on:click={() => (eventToShow = undefined)}
			class="sm:max-w-[400px] sm:mx-auto w-full py-[14px] px-[24px] font-robotoMono text-[16px] leading-[1rem] tracking-[0.156px] rounded-[100px] gray-gradient"
			>Go Back</button
		>
	</div>
{/if}
