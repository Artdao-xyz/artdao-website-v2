<script lang="ts">
	import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';
	import ImgNavigator from '$lib/elements/ImgNavigator/ImgNavigator.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant, ESizeVariant } from '../../../constants/enums';
	export let images: string[];
	export let aboutDropdownItems: IAboutDropdown[] | undefined;
	export let route: string;
	export let colorVariant: EColorVariant = EColorVariant.BLACK;
	export let isImageWhiteBg = false;
</script>

<SectionContainer {colorVariant}>
	<div id={route} class="relative w-full h-full">
		<ImgNavigator {images} variant={ESizeVariant.BIG} {aboutDropdownItems} {isImageWhiteBg} />
	</div>
</SectionContainer>
