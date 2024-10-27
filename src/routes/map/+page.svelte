<script lang="ts">
	import mapBg from '$lib/assets/images/map-background.png';
	import City from '$lib/elements/City/City.svelte';
	import CityMobile from '$lib/elements/CityMobile/CityMobile.svelte';
	import EventData from '$lib/elements/EventData/EventData.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../constants/enums';
	import { mapData, type IMapEvent } from '../../data/Map/MapData';

	let eventToShow: IMapEvent | undefined = undefined;
	let width: number;
	let cityToShow: string | undefined;
</script>

<svelte:window bind:innerWidth={width} />
<SectionContainer colorVariant={EColorVariant.BLACK}>
	<div class="h-full flex justify-center items-center relative w-full">
		{#if width > 768}
			{#if !eventToShow}
				<img src={mapBg} alt="map" class="h-full" />
				<City mapLocation={mapData[0]} top="27" left="44.5" dotOnLeft={false} bind:eventToShow />
				<City mapLocation={mapData[1]} top="34.5" left="49" bind:eventToShow />
				<City mapLocation={mapData[2]} top="40" left="24" bind:eventToShow />
				<City mapLocation={mapData[3]} top="56.5" left="30.2" bind:eventToShow />
				<City mapLocation={mapData[4]} top="67" left="36" bind:eventToShow />
				<City mapLocation={mapData[5]} top="73" left="34" showOnTop bind:eventToShow />
			{:else}
				<EventData bind:eventToShow />
			{/if}
		{:else if !eventToShow}
			<div
				class="w-full h-full py-[42px] px-[25px] flex flex-col gap-[15px] items-center justify-center bg-color-gray rounded-20"
			>
				<CityMobile mapLocation={mapData[0]} bind:eventToShow />
				<CityMobile mapLocation={mapData[1]} bind:eventToShow />
				<CityMobile mapLocation={mapData[2]} bind:eventToShow />
				<CityMobile mapLocation={mapData[3]} bind:eventToShow />
				<CityMobile mapLocation={mapData[4]} bind:eventToShow />
				<CityMobile mapLocation={mapData[5]} bind:eventToShow />
			</div>
		{:else}
			<div>EVENT TO SHOW</div>
		{/if}
	</div>
</SectionContainer>
