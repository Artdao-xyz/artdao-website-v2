<script lang="ts">
	import mapBg from '$lib/assets/images/map-background.webp';
	import HomeMobileMenu from '$lib/components/HomeMobileMenu/HomeMobileMenu.svelte';
	import LoadingV2 from '$lib/components/LoadingV2/LoadingV2.svelte';
	import City from '$lib/elements/City/City.svelte';
	import CityMobile from '$lib/elements/CityMobile/CityMobile.svelte';
	import EventData from '$lib/elements/EventData/EventData.svelte';
	import EventDataMobile from '$lib/elements/EventDataMobile/EventDataMobile.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../constants/enums';
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
				<SectionContainer hasPadding={false} colorVariant="light">
					<div 
						class="w-full h-full relative "
						style="background-image: url('{images[0][0]}'); background-repeat: no-repeat; background-size: contain; background-position: center;"
					>
						{#each mapData as city, index}
							<City 
								mapLocation={city} 
								top={city.coordinates.top} 
								left={city.coordinates.left} 
								dotOnLeft={city.coordinates.dotOnLeft ?? true}
								showOnTop={city.coordinates.showOnTop ?? false}
								bind:eventToShow 
							/>
						{/each}
					</div>
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
				class="flex flex-col justify-start items-center gap-[15px] w-full py-[4.5rem] px-[20px] h-full self-start relative bg-cover sm:bg-contain"
				style="background-image: url('{images[0][0]}'); background-repeat: no-repeat; background-position: center;"
			>
				<!-- Map background for mobile -->
				
				{#each mapData as city}
					<CityMobile mapLocation={city} bind:eventToShow bind:mapLocationToShow />
				{/each}
			</div>
		{:else}
			<div
				class="flex flex-col justify-center items-center gap-[15px] w-full py-[4.5rem] px-[20px] h-full self-start relative"
			>
				<!-- Map background for mobile -->
				<img src={images[0][0]} alt="map" class="absolute inset-0 w-full h-full object-cover" />

				<EventDataMobile bind:eventToShow />
			</div>
		{/if}
	</div>
{/await}

