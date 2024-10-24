<script>
	import mapBg from '$lib/assets/images/map-background.png';
	import City from '$lib/elements/City/City.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../constants/enums';
</script>

<SectionContainer colorVariant={EColorVariant.BLACK}>
	<div class="h-full flex justify-center items-center relative w-full">
		<img src={mapBg} alt="map" class="h-full" />
		<City cityName="lisbon" top="27" left="44.5" dotOnLeft={false} />
		<City cityName="paris" top="34.5" left="49" />
		<City cityName="denver" top="40" left="24" />
		<City cityName="bogota" top="56.5" left="30.2" />
		<City cityName="são paulo" top="67" left="36" />
		<City cityName="buenos aires" top="73" left="34" />
	</div>
</SectionContainer>
