<script lang="ts">
	import AboutDropdown from '$lib/elements/AboutDropdown/AboutDropdown.svelte';
	import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';
	import ImgNavigator from '$lib/elements/ImgNavigator/ImgNavigator.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { onDestroy } from 'svelte';
	import { ESizeVariant } from '../../../constants/enums';
	import { selectedAboutItem } from './store';
	export let images: string[];
	export let aboutDropdownItems: IAboutDropdown[];
	export let route: string;

	let aboutItemIndex: number;

	const unsubscribe = selectedAboutItem.subscribe((value: number) => {
		aboutItemIndex = value;
	});

	onDestroy(unsubscribe);
</script>

<SectionContainer>
	<div id={route} class="w-full h-full">
		<AboutDropdown bind:aboutDropdown={aboutDropdownItems[aboutItemIndex]} />
		<ImgNavigator {images} variant={ESizeVariant.BIG} />
	</div>
</SectionContainer>
