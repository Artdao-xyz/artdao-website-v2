<script lang="ts">
	import ArtworkContainer from '$lib/elements/ArtworkContainer/ArtworkContainer.svelte';
	import type { IGalleryImage } from '$lib/elements/ArtworkContainer/interfaces';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../../constants/enums';

	export let galleryImages: IGalleryImage[];
	export let isSingleRow = false;
	let imagesTopLength = Math.round(galleryImages.length / 2);
	let imagesTop = galleryImages.slice(0, imagesTopLength);
	let imagesBottom = galleryImages.slice(imagesTopLength, galleryImages.length);
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<div
		class="gallery h-full pb-[2.3125rem] pt-[7.9375rem] overflow-x-scroll flex flex-col gap-[4rem] overflow-y-hidden mr-5"
	>
		{#if !isSingleRow}
			<div class="h-[45%] flex items-center gap-[4rem] px-5">
				{#each imagesTop as imageTop}
					<ArtworkContainer galleryImage={imageTop} />
				{/each}
			</div>
			<div class="h-[45%] flex items-center gap-[4rem] px-5">
				{#each imagesBottom as imageBottom}
					<ArtworkContainer galleryImage={imageBottom} />
				{/each}
			</div>
		{:else}
			<div class="h-[95%] flex items-center gap-[4rem] px-5">
				{#each galleryImages as image}
					<ArtworkContainer galleryImage={image} />
				{/each}
			</div>
		{/if}
	</div>
</SectionContainer>
