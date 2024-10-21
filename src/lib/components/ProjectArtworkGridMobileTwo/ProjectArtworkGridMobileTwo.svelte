<script>
	// @ts-nocheck

	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { Gallery, Modal } from 'flowbite-svelte';
	import { EColorVariant } from '../../../constants/enums';
	import {
		ecologiesGallery1,
		ecologiesGallery2
	} from '../../../data/Projects/EcologiesOfCode/ProjectArtworkGallery';

	let showModal = false;

	$: imageToShow = '';

	const handleOnClick = (src) => {
		imageToShow = src;
	};
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<button
		class="flex flex-row items-center justify-center h-full"
		on:click={() => (showModal = true)}
	>
		<Gallery class="grid-cols-2 gap-2">
			<Gallery items={ecologiesGallery1} let:item>
				<button on:click={() => handleOnClick(item.src)}>
					<img src={item.src} alt={item.alt} />
				</button>
			</Gallery>
			<Gallery items={ecologiesGallery2} let:item>
				<button on:click={() => handleOnClick(item.src)}>
					<img src={item.src} alt={item.alt} />
				</button>
			</Gallery>
		</Gallery>
		<Modal bind:open={showModal} autoclose outsideclose class="h-full">
			<img src={imageToShow} alt={''} class="w-full h-full" />
		</Modal>
	</button>
</SectionContainer>
