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
	<div class="flex flex-col gap-[10px] justify-center items-center h-full">
		<button
			on:click={() => {
				toggleSelected;
				handleMobileLocationClick(mapLocation);
			}}
			class="relative flex flex-row {!isSelected
				? 'gray-gradient'
				: 'dark-gradient'} items-center justify-center rounded-40 py-[15px] px-[17px] w-full h-[5.4375rem] sm:max-w-[400px] {!isSelected
				? 'unselected'
				: 'selected'}"
		>
			<p
				class="w-full h-full text-color-white font-robotoMono text-[18px] font-medium tracking-[0.234px] uppercase flex items-center justify-center"
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
						class="flex flex-rowitems-center justify-center rounded-40 w-full h-[47px] gray-gradient sm:max-w-[400px]"
					>
						<p
							class="font-neue text-[20px] tracking-[0.0163rem] font-semibold uppercase flex justify-center items-center leading-[47px]"
						>
							{event.title}
						</p>
					</button>
				{/each}
			</div>
		{/if}
	</div>
{/if}
