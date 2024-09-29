<script lang="ts">
	import AboutDropdown from '$lib/elements/AboutDropdown/AboutDropdown.svelte';
	import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';
	import ImgNavigator from '$lib/elements/ImgNavigator/ImgNavigator.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { onDestroy } from 'svelte';
	import { EColorVariant, ESizeVariant } from '../../../constants/enums';
	import { selectedAboutItem } from './store';
	export let images: string[];
	export let aboutDropdownItems: IAboutDropdown[];
	export let route: string;
	export let isContain = false;
	$: dropdownItem = aboutDropdownItems[aboutItemIndex];

	let aboutItemIndex: number;

	const unsubscribe = selectedAboutItem.subscribe((value: number) => {
		aboutItemIndex = value;
	});

	onDestroy(unsubscribe);
</script>

<SectionContainer colorVariant={EColorVariant.BLACK}>
	<div id={route} class="w-full h-full">
		<AboutDropdown bind:aboutDropdown={dropdownItem} />
		<ImgNavigator {images} variant={ESizeVariant.BIG} {isContain} />
	</div>
</SectionContainer>
