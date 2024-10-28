<script lang="ts">
	import mapBg from '$lib/assets/images/map-background.png';
	import HomeMobileMenu from '$lib/components/HomeMobileMenu/HomeMobileMenu.svelte';
	import City from '$lib/elements/City/City.svelte';
	import CityMobile from '$lib/elements/CityMobile/CityMobile.svelte';
	import EventData from '$lib/elements/EventData/EventData.svelte';
	import EventDataMobile from '$lib/elements/EventDataMobile/EventDataMobile.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../constants/enums';
	import { mapData, type IMapEvent, type IMapLocation } from '../../data/Map/MapData';

	let eventToShow: IMapEvent | undefined = undefined;
	let width: number;
	let mapLocationToShow: IMapLocation | undefined;

	$: console.log('event to show', eventToShow);
</script>

<svelte:window bind:innerWidth={width} />

<HomeMobileMenu toggle="white" section="drop" />
<SectionContainer colorVariant={EColorVariant.BLACK}>
	<div class="h-full flex justify-center items-center relative w-full pt-[3rem] sm:pt-0">
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
		{:else if !mapLocationToShow}
			<div
				class="flex flex-col gap-[15px] w-full bg-color-gray rounded-20 py-[45px] px-[20px] mobileBg"
			>
				<CityMobile mapLocation={mapData[0]} bind:eventToShow bind:mapLocationToShow />
				<CityMobile mapLocation={mapData[1]} bind:eventToShow bind:mapLocationToShow />
				<CityMobile mapLocation={mapData[2]} bind:eventToShow bind:mapLocationToShow />
				<CityMobile mapLocation={mapData[3]} bind:eventToShow bind:mapLocationToShow />
				<CityMobile mapLocation={mapData[4]} bind:eventToShow bind:mapLocationToShow />
				<CityMobile mapLocation={mapData[5]} bind:eventToShow bind:mapLocationToShow />
			</div>
		{:else if !eventToShow}
			<div
				class="flex flex-col justify-between gap-[15px] w-full bg-color-gray rounded-20 py-[45px] px-[20px] mobileBg h-full"
			>
				<CityMobile
					mapLocation={mapLocationToShow}
					bind:eventToShow
					bind:mapLocationToShow
					isSelected
				/>

				<button
					on:click={() => (mapLocationToShow = undefined)}
					class="w-full h-[47px] py-[14px] px-[24px] sm:max-w-[400px] font-robotoMono text-[16px] leading-[1rem] tracking-[0.156px] rounded-[100px] gray-gradient sm:mx-auto"
					>Go Back</button
				>
			</div>
		{:else}
			<div
				class="flex flex-col justify-between gap-[15px] w-full bg-color-gray rounded-20 py-[45px] px-[20px] mobileBg h-full"
			>
				<EventDataMobile bind:eventToShow />
			</div>
		{/if}
	</div>
</SectionContainer>

<style>
	.mobileBg {
		border: 2px solid rgba(255, 255, 255, 0.76);
	}
</style>
