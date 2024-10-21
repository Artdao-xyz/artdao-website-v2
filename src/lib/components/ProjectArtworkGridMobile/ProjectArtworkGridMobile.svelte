<script lang="ts">
	// @ts-nocheck

	import type { IGalleryImageMobile } from '$lib/elements/ArtworkContainer/interfaces';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { Gallery, Modal } from 'flowbite-svelte';
	import { EColorVariant } from '../../../constants/enums';

	let showModal = false;
	export let isOverflow = true;
	export let imagesLeft: IGalleryImageMobile[];
	export let imagesRight: IGalleryImageMobile[];

	$: imageToShow = '';

	const handleOnClick = (src) => {
		imageToShow = src;
	};
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT} {isOverflow}>
	<button class="flex flex-row justify-center h-full pt-[2rem]" on:click={() => (showModal = true)}>
		<Gallery class="grid-cols-2 gap-2">
			<Gallery items={imagesLeft} let:item class="h-fit">
				<button on:click={() => handleOnClick(item.src)} class="h-fit">
					<img src={item.src} alt={item.alt} class="rounded-20" />
				</button>
			</Gallery>
			<Gallery items={imagesRight} let:item class="h-fit">
				<button on:click={() => handleOnClick(item.src)} class="h-fit">
					<img src={item.src} alt={item.alt} class="rounded-20" />
				</button>
			</Gallery>
		</Gallery>
		<Modal bind:open={showModal} autoclose outsideclose class="h-full">
			<img src={imageToShow} alt={''} class="w-full h-full" />
		</Modal>
	</button>
</SectionContainer>
