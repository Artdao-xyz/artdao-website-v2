<script lang="ts">
	import mapBg from '$lib/assets/images/map-background.png';
	import HomeMobileMenu from '$lib/components/HomeMobileMenu/HomeMobileMenu.svelte';
	import City from '$lib/elements/City/City.svelte';
	import CityMobile from '$lib/elements/CityMobile/CityMobile.svelte';
	import EventData from '$lib/elements/EventData/EventData.svelte';
	import EventDataMobile from '$lib/elements/EventDataMobile/EventDataMobile.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../constants/enums';
	import { mapData, type IMapEvent, type IMapLocation } from '../../data/Map/MapData';

	let eventToShow: IMapEvent | undefined = undefined;
	let width: number;
	let mapLocationToShow: IMapLocation | undefined;
</script>

<svelte:window bind:innerWidth={width} />

<HomeMobileMenu toggle="white" section="drop" />

<div class="h-[100dvh] flex justify-center items-center relative w-full pt-[3rem] sm:pt-0">
	{#if width > 768}
		{#if !eventToShow}
			<SectionContainer colorVariant={EColorVariant.BLACK}>
				<img src={mapBg} alt="map" class="h-full mx-auto" />
				<City mapLocation={mapData[0]} top="27" left="44.5" dotOnLeft={false} bind:eventToShow />
				<City mapLocation={mapData[1]} top="34.5" left="49" bind:eventToShow />
				<City mapLocation={mapData[2]} top="40" left="24" bind:eventToShow />
				<City mapLocation={mapData[3]} top="56.5" left="30.2" bind:eventToShow />
				<City mapLocation={mapData[4]} top="67" left="36" bind:eventToShow />
				<City mapLocation={mapData[5]} top="73" left="34" showOnTop bind:eventToShow />
			</SectionContainer>
		{:else}
			<EventData bind:eventToShow />
		{/if}
	{:else if !mapLocationToShow}
		<div
			class="flex flex-col gap-[10px] w-full bg-color-gray rounded-20 py-[45px] px-[20px] mobileBg h-full justify-center my-3 mx-[10px]"
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
			class="flex flex-col justify-between gap-[10px] w-full bg-color-gray rounded-20 py-[45px] px-[20px] mobileBg h-full my-3 mx-[10px] min-h-[556px]"
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
			class="flex flex-col justify-between gap-[10px] w-full bg-color-gray rounded-20 py-[45px] px-[20px] mobileBg h-full my-3 mx-[10px]"
		>
			<EventDataMobile bind:eventToShow />
		</div>
	{/if}
</div>

<HomeIcon />

<style>
	.mobileBg {
		border: 2px solid rgba(255, 255, 255, 0.76);
	}
</style>
