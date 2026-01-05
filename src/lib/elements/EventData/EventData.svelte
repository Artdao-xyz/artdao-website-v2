<script lang="ts">

	import { scale } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import type { IMapEvent } from '../../../data/Map/MapData';
	import { mapData } from '../../../data/Map/MapData';
	export let imageToShow: string | undefined;
	export let isCenter = false;

	export let eventToShow: IMapEvent | undefined;

	let height: number;
	let index = 0;
	let modalContainer: HTMLDivElement;

	// Get other events from the same city
	$: otherEvents = eventToShow ? 
		mapData
			.find(location => location.events.some(event => event.title === eventToShow?.title))?.events || []
		: [];

	// Update imageToShow based on local index
	$: imageToShow = eventToShow?.images[index];

	const handleEventClick = (event: IMapEvent) => {
		eventToShow = event;
		index = 0; // Reset to first image when switching events
	};

	// Handle click outside modal to close it
	const handleClickOutside = (event: MouseEvent) => {
		// Only close if clicking on the background (not on the modal content)
		if (event.target === modalContainer) {
			eventToShow = undefined;
		}
	};
</script>

<svelte:window bind:innerHeight={height} />
{#if eventToShow}
	<div
		bind:this={modalContainer}
		class="w-full h-full flex flex-col gap-5 items-center justify-center"
		style="background: #F7F5F2 url('/media/home/home-dot.svg') repeat;"
		on:click={handleClickOutside}
		transition:fly={{ duration: 300 }}
		on:keydown={(e) => {
			if (e.key === 'Escape') {
				eventToShow = undefined;
			} else if (e.key === 'Enter' || e.key === ' ') {
				handleClickOutside(e);
			}
		}}
		tabindex="0"
		role="button"
	>
		<div
			class="h-[70vh] w-full max-w-2xl rounded-20 bg-[#101010] py-[26px] px-[20px] text-color-white gap-[20px] flex flex-col"
			in:scale
		>
			<div class="flex flex-col outline outline-1 outline-white/20 rounded-10 py-4 px-8">
				<div class="flex-row flex items-center justify-between gap-[10px]">
					<h1
						class="w-[500px] rounded-[100px] h-[44px] my-auto text-[20px] font-medium font-neue leading-[44px]"
					>
						{eventToShow.title}
					</h1>

					<button
					on:click={() => (eventToShow = undefined)}
					on:click|stopPropagation
					class="h-auto hover:opacity-70"
					><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.120292 0.895504L0.895504 0.120292C1.05589 -0.0400972 1.30984 -0.0400972 1.45687 0.120292L5.49332 4.15674L9.54313 0.120292C9.69016 -0.0400972 9.94411 -0.0400972 10.0911 0.120292L10.8797 0.895504C11.0401 1.05589 11.0401 1.30984 10.8797 1.45687L6.84326 5.49332L10.8797 9.54313C11.0401 9.69016 11.0401 9.94411 10.8797 10.0911L10.0911 10.8797C9.94411 11.0401 9.69016 11.0401 9.54313 10.8797L5.49332 6.84326L1.45687 10.8797C1.30984 11.0401 1.05589 11.0401 0.895504 10.8797L0.120292 10.0911C-0.0400972 9.94411 -0.0400972 9.69016 0.120292 9.54313L4.15674 5.49332L0.120292 1.45687C-0.0400972 1.30984 -0.0400972 1.05589 0.120292 0.895504Z" fill="white"/>
						</svg>
					</button>
				</div>
				
				<div class="flex items-center justify-between gap-2.5 font-robotoMono text-xs font-bold leading-none tracking-widest">
					<p class="w-1/2 flex items-center py-2 justify-center bg-[#989898]/20 h-full rounded-20">{eventToShow.location}</p>
					<p class="w-1/2 flex items-center py-2 justify-center bg-[#989898]/20 h-full rounded-20">{eventToShow.date}</p>

				</div>
			</div>

			<div class="w-full flex-1 min-h-0 overflow-hidden flex items-center justify-center relative">
				<div class="w-full" style="max-width: min(100%, calc(16 * (90vh - 200px) / 9));">
					<img
						src={imageToShow}
						alt="event"
						class="w-full object-cover {isCenter ? 'object-center' : 'object-top'}"
					/>
					{#if eventToShow.images.length > 1}
						<div class="absolute bottom-2 left-2 flex gap-2">
							{#each eventToShow.images as image, i}
								<button
									on:click={() => index = i}
									on:click|stopPropagation
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

			{#if eventToShow.watchMore}
				<a data-sveltekit-reload class="px-5 flex items-center justify-center py-2.5 bg-[#989898]/20 hover:bg-[#989898]/40 w-full font-robotoMono text-xs leading-none tracking-wide rounded-[40px] outline outline-1 outline-white/20" href={eventToShow.watchMore}>View more</a>
				
			{/if}
		</div>

		{#if otherEvents.length > 0}		
				<div class="flex gap-2">
					{#each otherEvents as event}
						<button
							on:click={() => handleEventClick(event)}
							class="w-40 h-6 px-4 py-[5px] {event.title === eventToShow.title ? 'bg-[#101010]' : 'bg-[#f7f5f2]'} hover:bg-[#101010] rounded-[100px] outline outline-1 outline-black flex justify-center items-center group"
						>
							<p class="{event.title === eventToShow.title ? 'text-[#f7f5f2]' : 'text-[#101010]'} text-xs font-normal font-robotoMono leading-none tracking-wide group-hover:text-[#f7f5f2]">
								{event.title}
							</p>
						</button>
					{/each}
				</div>
			
		{/if}
	</div>
{/if}
