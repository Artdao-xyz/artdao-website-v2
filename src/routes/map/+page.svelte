<script lang="ts">
	import mapBg from '$lib/assets/images/map-background.png';
	import City from '$lib/elements/City/City.svelte';
	import EventData from '$lib/elements/EventData/EventData.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../constants/enums';
	import { mapData, type IMapEvent } from '../../data/Map/MapData';

	let eventToShow: IMapEvent | undefined = undefined;
</script>

<SectionContainer colorVariant={EColorVariant.BLACK}>
	<div class="h-full flex justify-center items-center relative w-full">
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
	</div>
</SectionContainer>
