<script lang="ts">
	import mapBg from '$lib/assets/images/map-background.webp';
	import HomeMobileMenu from '$lib/components/HomeMobileMenu/HomeMobileMenu.svelte';
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';
	import City from '$lib/elements/City/City.svelte';
	import CityMobile from '$lib/elements/CityMobile/CityMobile.svelte';
	import EventData from '$lib/elements/EventData/EventData.svelte';
	import EventDataMobile from '$lib/elements/EventDataMobile/EventDataMobile.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { mapData, type IMapEvent, type IMapLocation } from '../../data/Map/MapData';
	import preloadImages from '../../utils/preloadImages';
	import { fly } from 'svelte/transition';
	let eventToShow: IMapEvent | undefined = undefined;
	let width: number;
	let mapLocationToShow: IMapLocation | undefined;

	$: index = 0;
	$: imageToShow = eventToShow?.images[index];

</script>

<svelte:window bind:innerWidth={width} />

<HomeMobileMenu section="drop" />

{#await preloadImages([[mapBg]])}
	<LoadingV2 />
{:then images}
	<div
		transition:fly={{ duration: 300 }}
		class="h-full flex justify-center items-center relative w-full"
	>

		{#if width > 768}
			{#if !eventToShow}
				<SectionContainer hasPadding={false}>
					<img src={images[0][0]} alt="map" class="w-full h-full object-contain" />
					<City mapLocation={mapData[0]} top="27" left="44.5" dotOnLeft={false} bind:eventToShow />
					<City mapLocation={mapData[1]} top="34.5" left="49" bind:eventToShow />
					<!-- <City mapLocation={mapData[2]} top="40" left="24" bind:eventToShow /> -->
					<City mapLocation={mapData[3]} top="56.5" left="30.2" bind:eventToShow />
					<City mapLocation={mapData[4]} top="67" left="36" bind:eventToShow />
					<City mapLocation={mapData[5]} top="73" left="34" bind:eventToShow />
				</SectionContainer>
			{:else}
	
					<EventData
						bind:eventToShow
						{imageToShow}
						isCenter={eventToShow.isCenter}
					/>
			{/if}
		{:else if !eventToShow}
			<div
				class="flex flex-col justify-start items-center gap-[15px] w-full py-[4.5rem] px-[20px] h-full self-start relative"
			>
				<!-- Map background for mobile -->
				
				<CityMobile mapLocation={mapData[0]} bind:eventToShow bind:mapLocationToShow />
				<CityMobile mapLocation={mapData[1]} bind:eventToShow bind:mapLocationToShow />
				<!-- <CityMobile mapLocation={mapData[2]} bind:eventToShow bind:mapLocationToShow /> -->
				<CityMobile mapLocation={mapData[3]} bind:eventToShow bind:mapLocationToShow />
				<CityMobile mapLocation={mapData[4]} bind:eventToShow bind:mapLocationToShow />
				<CityMobile mapLocation={mapData[5]} bind:eventToShow bind:mapLocationToShow />
			</div>
		{:else}
			<div
				class="flex flex-col justify-center items-center gap-[15px] w-full py-[4.5rem] px-[20px] h-full self-start relative"
			>
				<!-- Map background for mobile -->
				
				<EventDataMobile bind:eventToShow />
			</div>
		{/if}
	</div>
{/await}

