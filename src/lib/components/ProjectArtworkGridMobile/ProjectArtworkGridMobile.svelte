<script lang="ts">
	import type { IGalleryImage } from '$lib/elements/ArtworkContainer/interfaces';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../../constants/enums';

	export let galleryImages: IGalleryImage[];
	export let showDetails = false;
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<div
		class="scroll-panel overflow-x-auto sm:hidden flex flex-row gap-5 overflow-y-hidden justify-center items-center h-full pt-[2rem]"
	>
		{#each galleryImages as galleryImage}
			<div
				class="overflow-x-auto h-fit w-full p-5 bg-color-white rounded-30 border border-color-black flex flex-col flex-shrink-0 flex-grow-0 gap-2.5 basis-[100%]"
			>
				<img src={galleryImage.image} alt="Gallery" class="h-auto w-full" />
				{#if showDetails}
					<div
						class="flex flex-col text-color-black font-robotoMono text-[0.625rem] font-semibold leading-4"
					>
						<p>{galleryImage.name}</p>
						<p>{galleryImage.description}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</SectionContainer>

<style>
	.scroll-panel {
		width: 100%;
		overflow: auto;
		outline: none;
		overflow-y: hidden;
		-ms-overflow-style: scroll;
		scrollbar-width: none;
		touch-action: none;
		user-select: none;
	}

	.scroll-panel::-webkit-scrollbar {
		display: none;
	}
</style>
