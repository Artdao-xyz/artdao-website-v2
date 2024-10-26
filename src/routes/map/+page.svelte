<script>
	import mapBg from '$lib/assets/images/map-background.png';
	import City from '$lib/elements/City/City.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../constants/enums';
	import { mapData } from '../../data/Map/MapData';
</script>

<SectionContainer colorVariant={EColorVariant.BLACK}>
	<div class="h-full flex justify-center items-center relative w-full">
		<img src={mapBg} alt="map" class="h-full" />
		<City mapLocation={mapData[0]} top="27" left="44.5" dotOnLeft={false} />
		<City mapLocation={mapData[1]} top="34.5" left="49" />
		<City mapLocation={mapData[2]} top="40" left="24" />
		<City mapLocation={mapData[3]} top="56.5" left="30.2" />
		<City mapLocation={mapData[4]} top="67" left="36" />
		<City mapLocation={mapData[5]} top="73" left="34" showOnTop />
	</div>
</SectionContainer>
