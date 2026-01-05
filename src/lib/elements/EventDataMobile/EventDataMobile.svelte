<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { IMapEvent } from '../../../data/Map/MapData';
	import { INVIEW_OPTIONS } from '../../../utils/nav/updateNavBar';

	export let eventToShow: IMapEvent | undefined;

	let imagesToShow = eventToShow?.images.map((image) => false) ?? [false];
	let index = 0;

</script>

{#if eventToShow}
	<div class="w-full flex flex-col gap-[15px] items-center z-10">
		<!-- City name at the top -->
		<button 
			on:click={() => (eventToShow = undefined)}
			class="w-full h-10 px-4 py-[5px] bg-[#101010] rounded-[100px] outline outline-1 outline-black flex items-center justify-center hover:bg-[#2a2a2a] transition-colors duration-200 cursor-pointer"
		>
			<p class="text-[#f7f5f2] text-lg font-normal font-robotoMono leading-none tracking-wide capitalize">
				{eventToShow.city}
			</p>
		</button>

		<!-- Event name -->
		<button 
			on:click={() => (eventToShow = undefined)}
			class="w-full h-10 px-4 py-[5px] bg-[#101010] rounded-[100px] outline outline-1 outline-black flex items-center justify-center hover:bg-[#2a2a2a] transition-colors duration-200 cursor-pointer"
		>
			<p class="text-[#f7f5f2] text-lg font-normal font-robotoMono leading-none tracking-wide">
				{eventToShow.title}
			</p>
		</button>

		<!-- Event card -->
		<div class="w-full rounded-20 bg-[#101010] py-[20px] px-[16px] text-color-white gap-[20px] flex flex-col">
			<!-- Header with location and date -->
			<div class="flex flex-col items-start gap-2.5 font-robotoMono text-sm font-bold leading-none tracking-widest">
				<p class="py-3 text-center bg-[#989898]/20 h-full rounded-20 px-4 w-full">{eventToShow.location}</p>
				<p class="py-3 text-center bg-[#989898]/20 h-full rounded-20 px-4 w-full">{eventToShow.date}</p>
			</div>

			<!-- Main image display -->
			<div class="w-full flex-1 min-h-0 overflow-hidden flex flex-col items-center justify-center">
				<div class="w-full" style="max-width: min(100%, calc(16 * (60vh - 200px) / 9));">
					<img
						src={eventToShow.images[index]}
						alt="event"
						class="w-full object-cover object-top"
						style="aspect-ratio: 16/9;"
					/>
				</div>
				{#if eventToShow.images.length > 1}
					<div class="flex gap-2 justify-center mt-4">
						{#each eventToShow.images as image, i}
							<button
								on:click={() => index = i}
								class="w-16 h-16 rounded-[100px] overflow-hidden border-2 {index === i ? 'border-white' : 'border-white/0'} hover:border-white/80 transition-colors"
							>
								<img
									src={image}
									alt="event preview"
									class="w-full h-full object-cover"
								/>
							</button>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<!-- Watch More button (outside the card) -->
		{#if eventToShow.watchMore}
			<button
				class="w-full h-10 px-4 py-[5px] bg-[#101010] rounded-[100px] outline outline-1 outline-black flex items-center justify-center hover:bg-[#2a2a2a] transition-colors duration-200"
			>
				<a href={eventToShow.watchMore} class="text-[#f7f5f2] text-lg font-normal font-robotoMono leading-none tracking-wide">
					View more
				</a>
			</button>
		{/if}

		<!-- Go Back button -->
		<button
			on:click={() => (eventToShow = undefined)}
			class="w-full h-10 px-4 py-[5px] bg-[#f7f5f2] rounded-[100px] outline outline-1 outline-black flex items-center justify-center hover:bg-[#e0e0e0] transition-colors duration-200"
		>
			<p class="text-[#101010] text-lg font-normal font-robotoMono leading-none tracking-wide">
				Go Back
			</p>
		</button>
	</div>
{/if}

