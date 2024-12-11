<script lang="ts">
	import buttonIcon from '$lib/assets/images/button-icon.webp';
	import HomeMobileMenu from '$lib/components/HomeMobileMenu/HomeMobileMenu.svelte';
	import Loading from '$lib/components/Loading/Loading.svelte';
	import City from '$lib/elements/City/City.svelte';
	import CityMobile from '$lib/elements/CityMobile/CityMobile.svelte';
	import EventData from '$lib/elements/EventData/EventData.svelte';
	import EventDataMobile from '$lib/elements/EventDataMobile/EventDataMobile.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { onMount } from 'svelte';
	import { EColorVariant } from '../../constants/enums';
	import { mapData, type IMapEvent, type IMapLocation } from '../../data/Map/MapData';
	import { preloadedEvents, preloadedMap } from '../store';

	let eventToShow: IMapEvent | undefined = undefined;
	let width: number;
	let mapLocationToShow: IMapLocation | undefined;

	$: index = 0;
	$: imageToShow = eventToShow?.images[index];

	$: isNextButtonDisabled = Boolean(eventToShow && eventToShow.images.length - 1 === index);

	$: isPrevButtonDisabled = index === 0;

	const handleNextButton = () => {
		if (Boolean(eventToShow && eventToShow.images.length > index + 1)) {
			index += 1;
		}
	};

	const handlePrevButton = () => {
		if (index !== 0) {
			index -= 1;
		}
	};

	let images: string[][];
	let events: string[][];

	onMount(() => {
		$preloadedMap.then((array) => (images = array));
		$preloadedEvents.then((array) => (events = array));
	});
</script>

<svelte:window bind:innerWidth={width} />

<HomeMobileMenu section="drop" />

{#if !images}
	<Loading />
{:else}
	<div
		class="h-[100dvh] flex justify-center items-center relative w-full {width > 768
			? 'pt-[3rem]'
			: 'p-0'} sm:pt-0"
	>
		<div
			class="w-100dvw rounded-[6.25rem] h-[1rem] sm:flex flex-row items-center z-50 absolute top-[2.88%] left-[0%] mx-[1.625rem] gap-2.5 hidden"
		>
			<a href={'/'}>
				<div
					class="rounded-[100px] nav-gradient-unselected w-[24px] h-[24px] flex flex-row items-center justify-center"
				>
					<img src={buttonIcon} alt="Go to home" class="rotate-180 w-[10px]" />
				</div>
			</a>
		</div>
		{#if width > 768}
			{#if !eventToShow}
				<SectionContainer colorVariant={EColorVariant.BLACK} hasPadding={false}>
					<img src={images[0][0]} alt="map" class="w-full h-full object-cover" />
					<City mapLocation={mapData[0]} top="27" left="44.5" dotOnLeft={false} bind:eventToShow />
					<City mapLocation={mapData[1]} top="34.5" left="49" bind:eventToShow />
					<City mapLocation={mapData[2]} top="40" left="24" bind:eventToShow />
					<City mapLocation={mapData[3]} top="56.5" left="30.2" bind:eventToShow />
					<City mapLocation={mapData[4]} top="67" left="36" bind:eventToShow />
					<City mapLocation={mapData[5]} top="73" left="34" showOnTop bind:eventToShow />
				</SectionContainer>
			{:else if !events}
				<Loading />
			{:else}
				<EventData
					bind:eventToShow
					{imageToShow}
					{handleNextButton}
					{handlePrevButton}
					{isNextButtonDisabled}
					{isPrevButtonDisabled}
					isCenter={eventToShow.isCenter}
				/>
			{/if}
		{:else if !mapLocationToShow}
			<div
				class="flex flex-col gap-[15px] w-full bg-color-gray py-[4.5rem] px-[20px] h-fit self-start"
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
				class="flex flex-col items-center justify-between gap-[15px] w-full bg-color-gray py-[4.5rem] px-[20px] h-full self-start"
			>
				<CityMobile
					mapLocation={mapLocationToShow}
					bind:eventToShow
					bind:mapLocationToShow
					isSelected
				/>

				<button
					on:click={() => (mapLocationToShow = undefined)}
					class="w-full h-[47px] py-[14px] px-[24px] sm:max-w-[400px] font-robotoMono text-[16px] leading-[1rem] tracking-[0.156px] rounded-[0.9375rem] gray-gradient sm:mx-auto"
					>Go Back</button
				>
			</div>
		{:else}
			<div
				class="flex flex-col items-center gap-[15px] w-full bg-color-gray py-[4.5rem] px-[20px] h-fit self-start"
			>
				<EventDataMobile bind:eventToShow />
			</div>
		{/if}
	</div>

	<HomeIcon />
{/if}
