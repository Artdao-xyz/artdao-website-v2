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
			class="relative flex flex-row {!isSelected
				? 'gray-gradient'
				: 'dark-gradient'} items-center justify-center rounded-[0.9375rem] py-[15px] pl-[17px] pr-[40px] w-full h-[5.4375rem] {!isSelected
				? 'unselected'
				: 'selected'}"
		>
			<p
				class="w-full h-full text-color-white font-robotoMono text-[18px] pl-[20px] font-medium tracking-[0.234px] capitalize flex items-center justify-center"
			>
				{mapLocation.location}
			</p>

			<div class="w-[0.75rem] h-[0.75rem] bg-color-white rounded-[100px]" />
		</button>

		{#if isSelected}
			<div class="flex flex-col justify-center items-center gap-[15px] w-full">
				{#each mapLocation.events as event}
					<button
						on:click={() => handleOnClick(event)}
						class="flex flex-rowitems-center justify-center rounded-[0.9375rem] w-full h-[47px] gray-gradient"
					>
						<p
							class="font-neue text-[20px] tracking-[0.0163rem] font-medium uppercase flex justify-center items-center leading-[47px]"
						>
							{event.title}
						</p>
					</button>
				{/each}
			</div>
		{/if}
	</div>
{/if}
