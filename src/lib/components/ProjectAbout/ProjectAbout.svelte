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
	export let isImageLeft = true;
	export let colorVariant: EColorVariant = EColorVariant.BLACK;
</script>

<div class="hidden sm:block">
	<SectionContainer {colorVariant} hasPadding={false}>
		<div
			class="flex justify-start sm:justify-center w-full sm:h-full flex-col sm:flex-row"
			id={route}
		>
			{#if !isImageLeft}
				<div class="w-full sm:w-1/2 h-screen sm:h-full flex items-center justify-center">
					<About {aboutItem} {colorVariant} />
				</div>
			{/if}
			{#if aboutImage}
				<img src={aboutImage} alt="About Section" class="w-full sm:w-1/2 h-100dvh object-cover" />
			{/if}
			{#if aboutImages}
				<ImgNavigator images={aboutImages} variant={ESizeVariant.SMALL} />
			{/if}
			{#if isImageLeft}
				<div class="w-full sm:w-1/2 h-screen sm:h-full flex items-center justify-center">
					<About {aboutItem} {colorVariant} />
				</div>
			{/if}
		</div>
	</SectionContainer>
</div>
<div class="block sm:hidden" id={route}>
	<SectionContainer {colorVariant} hasPadding={false}>
		<div class="w-full h-screen flex items-center justify-center">
			<About {aboutItem} {colorVariant} />
		</div>
	</SectionContainer>
	<SectionContainer {colorVariant} hasPadding={false}>
		{#if aboutImage}
			<img src={aboutImage} alt="About Section" class="w-full sm:w-1/2 h-100dvh object-cover" />
		{/if}
		{#if aboutImages}
			<ImgNavigator images={aboutImages} variant={ESizeVariant.SMALL} />
		{/if}
	</SectionContainer>
</div>
