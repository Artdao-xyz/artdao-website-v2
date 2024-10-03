<script lang="ts">
	import About from '$lib/elements/About/About.svelte';
	import type { IAboutItem } from '$lib/elements/AboutCard/interfaces';
	import ImgNavigator from '$lib/elements/ImgNavigator/ImgNavigator.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant, ESizeVariant } from '../../../constants/enums';

	export let aboutItem: IAboutItem;
	export let aboutImage: string | undefined = undefined;
	export let aboutImages: string[] | undefined = undefined;
	export let route: string;
</script>

<SectionContainer colorVariant={EColorVariant.BLACK} hasPadding={false}>
	<div class="flex justify-center w-full h-full" id={route}>
		{#if aboutImage}
			<img src={aboutImage} alt="About Section" class="w-1/2 h-100dvh object-cover" />
		{/if}
		{#if aboutImages}
			<ImgNavigator images={aboutImages} variant={ESizeVariant.SMALL} />
		{/if}
		<div class="w-1/2 h-full flex items-center justify-center">
			<About {aboutItem} />
		</div>
	</div>
</SectionContainer>
