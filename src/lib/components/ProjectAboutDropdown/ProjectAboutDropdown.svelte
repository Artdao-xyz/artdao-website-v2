<script lang="ts">
	import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';
	import ImgNavigator from '$lib/elements/ImgNavigator/ImgNavigator.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant, ESizeVariant } from '../../../constants/enums';
	export let images: string[];
	export let aboutDropdownItems: IAboutDropdown[];
	export let route: string;
	export let isContain = false;
</script>

<SectionContainer colorVariant={EColorVariant.BLACK}>
	<div id={route} class="w-full h-full">
		<ImgNavigator {images} variant={ESizeVariant.BIG} {isContain} {aboutDropdownItems} />
	</div>
</SectionContainer>
