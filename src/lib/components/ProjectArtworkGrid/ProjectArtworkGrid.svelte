<script lang="ts">
	import buttonIcon from '$lib/assets/images/button-icon-dark.png';
	import ArtworkContainer from '$lib/elements/ArtworkContainer/ArtworkContainer.svelte';
	import type { IGalleryImage } from '$lib/elements/ArtworkContainer/interfaces';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../../constants/enums';

	export let galleryImages: IGalleryImage[];
	export let showDetails = false;
	let imagesTopLength = Math.round(galleryImages.length / 2);
	let imagesTop = galleryImages.slice(0, imagesTopLength);
	let imagesBottom = galleryImages.slice(imagesTopLength, galleryImages.length);

	let prevButton;
	let nextButton;
	let container: HTMLDivElement;

	const sideScroll = (
		element: HTMLElement | null,
		direction: string,
		speed: number | undefined,
		distance: number,
		step: number
	) => {
		let scrollAmount = 0;
		var slideTimer = setInterval(() => {
			if (direction == 'left') {
				element!.scrollLeft -= step;
			} else {
				element!.scrollLeft += step;
			}
			scrollAmount += step;
			if (scrollAmount >= distance) {
				window.clearInterval(slideTimer);
			}
		}, speed);
	};

	const pointerScroll = () => {
		const dragStart = (ev: any) => container.setPointerCapture(ev.pointerId);
		const dragEnd = (ev: any) => container.releasePointerCapture(ev.pointerId);
		const drag = (ev: any) =>
			container.hasPointerCapture(ev.pointerId) && (container.scrollLeft -= ev.movementX * 100);

		container.addEventListener('pointerdown', dragStart);
		container.addEventListener('pointerup', dragEnd);
		container.addEventListener('pointermove', drag);
	};
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		bind:this={container}
		on:click={pointerScroll}
		class="scroll-panel cursor-grabbing h-full !overflow-x-scroll flex flex-col gap-5 overflow-y-hidden justify-center flex-grow"
	>
		<div class="h-full flex items-center gap-5 max-h-[45%] flex-grow">
			{#each imagesTop as imageTop}
				<ArtworkContainer galleryImage={imageTop} {showDetails} />
			{/each}
		</div>
		<div class="h-full flex items-center gap-5 max-h-[45%] flex-grow">
			{#each imagesBottom as imageBottom}
				<ArtworkContainer galleryImage={imageBottom} {showDetails} />
			{/each}
		</div>
	</div>
	<div class="flex flex-row gap-10 mt-[-1.5rem]">
		<button
			class="text-color-black"
			bind:this={prevButton}
			on:click={() => sideScroll(container, 'left', 200, 10, 700)}
			><img src={buttonIcon} alt="left" class="h-[1rem] rotate-180" /></button
		>
		<button
			class="text-color-black"
			bind:this={nextButton}
			on:click={() => sideScroll(container, 'right', 200, 10, 700)}
			><img src={buttonIcon} alt="right" class="h-[1rem]" /></button
		>
	</div>
</SectionContainer>

<!-- max-h-[22rem] macBook:max-h-[25rem] laptopL:max-h-[20rem] bigScreen:max-h-[41.5%] -->

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
