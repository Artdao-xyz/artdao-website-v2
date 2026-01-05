<script lang="ts">
	import type { IMapEvent, IMapLocation } from '../../../data/Map/MapData';

	export let mapLocation: IMapLocation | undefined;
	export let eventToShow: IMapEvent | undefined;
	export let mapLocationToShow: IMapLocation | undefined;
	export let isSelected = false;

	const handleOnClick = (event: IMapEvent, clickEvent: MouseEvent) => {
		// Prevenir propagación del evento para evitar que se mueva el mapa
		clickEvent.preventDefault();
		clickEvent.stopPropagation();
		
		eventToShow = event;
	};

	const handleMobileLocationClick = (mapLocation: IMapLocation, event: MouseEvent) => {
		// Prevenir propagación del evento para evitar que se mueva el mapa
		event.preventDefault();
		event.stopPropagation();
		
		// Si hay un evento mostrado, cerrarlo
		if (eventToShow) {
			eventToShow = undefined;
			// Si el evento pertenece a la ciudad clickeada, también deseleccionar la ciudad
			if (mapLocationToShow === mapLocation) {
				mapLocationToShow = undefined;
			}
			return;
		}
		
		if (mapLocationToShow === mapLocation) {
			// Si es la misma ciudad, deseleccionar
			mapLocationToShow = undefined;
		} else {
			// Si es una ciudad diferente, seleccionar
			mapLocationToShow = mapLocation;
		}
	};

	// Sincronizar isSelected con mapLocationToShow
	$: isSelected = mapLocationToShow === mapLocation;
</script>

{#if mapLocation}
	<div class="flex flex-col gap-[15px] justify-center items-center h-fit w-full">
		<button
			on:click={(event) => handleMobileLocationClick(mapLocation, event)}
			class="relative flex flex-row items-center justify-center w-full h-10 px-4 py-[5px] {isSelected ? 'bg-[#101010]' : 'bg-[#f7f5f2]'} rounded-[100px] outline outline-1 outline-black"
		>
			<p
				class="w-full {isSelected ? 'text-[#f7f5f2]' : 'text-[#101010]'} font-normal font-robotoMono leading-none tracking-wide capitalize flex items-center justify-center"
			>
				{mapLocation.location}
			</p>

			<div class="hidden sm:block w-[0.75rem] h-[0.75rem] {isSelected ? 'bg-[#f7f5f2]' : 'bg-[#101010]'} rounded-[100px]" />
		</button>

		{#if isSelected}
			<div class="flex flex-col justify-center items-center gap-[20px] w-full bg-[#101010] rounded-[20px] outline outline-1 outline-[#f7f5f2] py-[20px] px-[20px] transition-all duration-300 ease-in-out">
				{#each mapLocation.events as event}
					<button
						on:click={(clickEvent) => handleOnClick(event, clickEvent)}
						class="group w-full h-10 px-4 py-[5px] bg-[#101010] hover:bg-[#f7f5f2] rounded-[100px] outline outline-1 outline-[#f7f5f2] hover:outline-[#101010] flex justify-center items-center transition-all duration-200"
					>
						<p
							class="text-[#f7f5f2] font-normal font-robotoMono leading-none tracking-wide group-hover:text-[#101010]"
						>
							{event.title}
						</p>
					</button>
				{/each}
			</div>
		{/if}
	</div>
{/if}
