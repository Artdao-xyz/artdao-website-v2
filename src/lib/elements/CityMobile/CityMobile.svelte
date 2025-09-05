<script lang="ts">
	import type { IMapEvent, IMapLocation } from '../../../data/Map/MapData';

	export let mapLocation: IMapLocation | undefined;
	export let eventToShow: IMapEvent | undefined;
	export let mapLocationToShow: IMapLocation | undefined;
	export let isSelected = false;

	const toggleSelected = () => {
		isSelected = !isSelected;
	};

	const handleOnClick = (event: IMapEvent) => {
		eventToShow = event;
	};

	const handleMobileLocationClick = (mapLocation: IMapLocation) => {
		mapLocationToShow = mapLocation;
	};
</script>

{#if mapLocation}
	<div class="flex flex-col gap-[15px] justify-center items-center h-fit w-full">
		<button
			on:click={() => {
				toggleSelected;
				handleMobileLocationClick(mapLocation);
			}}
			class="relative flex flex-row items-center justify-center w-40 h-6 px-4 py-[5px] {isSelected ? 'bg-[#101010]' : 'bg-[#f7f5f2]'} rounded-[100px] outline outline-1 outline-black"
		>
			<p
				class="w-full {isSelected ? 'text-[#f7f5f2]' : 'text-[#101010]'} text-xs font-normal font-robotoMono leading-none tracking-wide capitalize flex items-center justify-center"
			>
				{mapLocation.location}
			</p>

			<div class="w-[0.75rem] h-[0.75rem] {isSelected ? 'bg-[#f7f5f2]' : 'bg-[#101010]'} rounded-[100px]" />
		</button>

		{#if isSelected}
			<div class="flex flex-col justify-center items-center gap-[20px] w-40 bg-[#101010] rounded-[20px] outline outline-1 outline-[#f7f5f2] py-[20px] px-[20px]">
				{#each mapLocation.events as event}
					<button
						on:click={() => handleOnClick(event)}
						class="group w-full h-6 px-4 py-[5px] bg-[#101010] hover:bg-[#f7f5f2] rounded-[100px] outline outline-1 outline-[#f7f5f2] hover:outline-[#101010] flex justify-center items-center"
					>
						<p
							class="text-[#f7f5f2] text-xs font-normal font-robotoMono leading-none tracking-wide group-hover:text-[#101010]"
						>
							{event.title}
						</p>
					</button>
				{/each}
			</div>
		{/if}
	</div>
{/if}
