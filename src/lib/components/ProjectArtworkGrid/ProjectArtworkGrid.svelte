<script lang="ts">
	import ArtworkContainer from '$lib/elements/ArtworkContainer/ArtworkContainer.svelte';
	import type { IGalleryImage } from '$lib/elements/ArtworkContainer/interfaces';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../../constants/enums';

	export let galleryImages: IGalleryImage[];
	export let showDetails = false;
	let imagesTopLength = Math.round(galleryImages.length / 2);
	let imagesTop = galleryImages.slice(0, imagesTopLength);
	let imagesBottom = galleryImages.slice(imagesTopLength, galleryImages.length);
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<div
		class="h-full overflow-x-scroll flex flex-col gap-5 bigScreen:gap-[4.5%] overflow-y-hidden justify-center pt-[3rem]"
	>
		<div
			class="flex items-center gap-5 max-h-[19rem] macBook:max-h-[23rem] laptopL:max-h-[18rem] bigScreen:max-h-[41.5%]"
		>
			{#each imagesTop as imageTop}
				<ArtworkContainer galleryImage={imageTop} {showDetails} />
			{/each}
		</div>
		<div
			class="flex items-center gap-5 max-h-[19rem] macBook:max-h-[23rem] laptopL:max-h-[18rem] bigScreen:max-h-[41.5%]"
		>
			{#each imagesBottom as imageBottom}
				<ArtworkContainer galleryImage={imageBottom} {showDetails} />
			{/each}
		</div>
	</div>
</SectionContainer>
