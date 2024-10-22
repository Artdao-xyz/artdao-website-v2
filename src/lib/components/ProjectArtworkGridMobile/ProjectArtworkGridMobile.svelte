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

	$: imageToShow = {
		alt: '',
		src: '',
		name: '',
		description: ''
	};

	const handleOnClick = (item: IGalleryImageMobile) => {
		imageToShow = item;
	};
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT} {isOverflow}>
	<button
		class="flex flex-row justify-center h-full pt-[2rem] gallery"
		on:click={() => (showModal = true)}
	>
		<Gallery class="grid-cols-2 gap-2">
			<Gallery items={imagesLeft} let:item class="h-fit">
				<button on:click={() => handleOnClick(item)} class="h-fit">
					<img src={item.src} alt={item.alt} class="rounded-20" />
				</button>
			</Gallery>
			<Gallery items={imagesRight} let:item class="h-fit">
				<button on:click={() => handleOnClick(item)} class="h-fit">
					<img src={item.src} alt={item.alt} class="rounded-20" />
				</button>
			</Gallery>
		</Gallery>
		<Modal bind:open={showModal} outsideclose autoclose class="h-full !bg-transparent">
			<div
				class="h-full bg-color-white w-auto p-5 rounded-30 border border-color-black flex flex-col flex-shrink-0 flex-grow-0"
			>
				<img
					src={imageToShow.src}
					alt="Gallery"
					class={imageToShow.name || imageToShow.description ? 'h-[83%]' : 'h-full'}
				/>
				{#if imageToShow.name || imageToShow.description}
					<div class="flex flex-col text-color-black font-robotoMono text-[1rem] items-start">
						{#if imageToShow.name}
							<p class="text-left">{imageToShow.name}</p>
						{/if}
						{#if imageToShow.description}
							<p class="text-left">{imageToShow.description}</p>
						{/if}
					</div>
				{/if}
			</div>
		</Modal>
	</button>
</SectionContainer>
