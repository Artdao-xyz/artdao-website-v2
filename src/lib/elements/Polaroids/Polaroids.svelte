<script lang="ts">
	import { selectedPolaroidsItem } from '$lib/components/ProjectPolaroids/store';
	import PolaroidRectangle from '../PolaroidRectangle/PolaroidRectangle.svelte';
	import { EPolaroidPosition } from '../PolaroidSquare/interface';
	import PolaroidSquare from '../PolaroidSquare/PolaroidSquare.svelte';
	import PolaroidVertical from '../PolaroidVertical/PolaroidVertical.svelte';
	import PolaroidView from '../PolaroidView/PolaroidView.svelte';
	import { EPolaroidType, type IPolaroidImage } from './interface';

	export let images: IPolaroidImage[];
	export let polaroidsTypes: EPolaroidType[];
	export let viewImageFit: 'contain' | 'cover';

	let index: number = 0;

	const handleOnClick = (i: number) => {
		index = i;
		selectedPolaroidsItem.set(i);
	};
</script>

<div class="hidden flex-row sm:flex w-full h-[65%]">
	<div class="flex flex-row w-[64%]">
		<PolaroidView image={images[index]} {viewImageFit} />
	</div>

	<div class="w-[36%] h-full mx-auto">
		<div class="w-full h-full relative">
			{#if polaroidsTypes[0] === EPolaroidType.SQUARE}
				<PolaroidSquare
					polaroid={images[0]}
					polaroidPosition={EPolaroidPosition.TOP_LEFT}
					on:click={() => handleOnClick(0)}
					isSelected={index === 0}
				/>
			{:else if polaroidsTypes[0] === EPolaroidType.RECTANGLE}
				<PolaroidRectangle
					polaroid={images[0]}
					polaroidPosition={EPolaroidPosition.TOP_LEFT}
					on:click={() => handleOnClick(0)}
					isSelected={index === 0}
				/>
			{:else}
				<PolaroidVertical
					polaroid={images[0]}
					polaroidPosition={EPolaroidPosition.TOP_LEFT}
					on:click={() => handleOnClick(0)}
					isSelected={index === 0}
				/>
			{/if}

			{#if polaroidsTypes[1] === EPolaroidType.SQUARE}
				<PolaroidSquare
					polaroid={images[1]}
					polaroidPosition={EPolaroidPosition.TOP_RIGHT}
					on:click={() => handleOnClick(1)}
					isSelected={index === 1}
				/>
			{:else if polaroidsTypes[1] === EPolaroidType.RECTANGLE}
				<PolaroidRectangle
					polaroid={images[1]}
					polaroidPosition={EPolaroidPosition.TOP_RIGHT}
					on:click={() => handleOnClick(1)}
					isSelected={index === 1}
				/>
			{:else}
				<PolaroidVertical
					polaroid={images[1]}
					polaroidPosition={EPolaroidPosition.TOP_RIGHT}
					on:click={() => handleOnClick(1)}
					isSelected={index === 1}
				/>
			{/if}

			{#if polaroidsTypes[2] === EPolaroidType.SQUARE}
				<PolaroidSquare
					polaroid={images[2]}
					polaroidPosition={EPolaroidPosition.BOTTOM_LEFT}
					on:click={() => handleOnClick(2)}
					isSelected={index === 2}
				/>
			{:else if polaroidsTypes[2] === EPolaroidType.RECTANGLE}
				<PolaroidRectangle
					polaroid={images[2]}
					polaroidPosition={EPolaroidPosition.BOTTOM_LEFT}
					on:click={() => handleOnClick(2)}
					isSelected={index === 2}
				/>
			{:else}
				<PolaroidVertical
					polaroid={images[2]}
					polaroidPosition={EPolaroidPosition.BOTTOM_LEFT}
					on:click={() => handleOnClick(2)}
					isSelected={index === 2}
				/>
			{/if}

			{#if polaroidsTypes[3] === EPolaroidType.SQUARE}
				<PolaroidSquare
					polaroid={images[3]}
					polaroidPosition={EPolaroidPosition.BOTTOM_RIGHT}
					on:click={() => handleOnClick(3)}
					isSelected={index === 3}
				/>
			{:else if polaroidsTypes[3] === EPolaroidType.RECTANGLE}
				<PolaroidRectangle
					polaroid={images[3]}
					polaroidPosition={EPolaroidPosition.BOTTOM_RIGHT}
					on:click={() => handleOnClick(3)}
					isSelected={index === 3}
				/>
			{:else}
				<PolaroidVertical
					polaroid={images[3]}
					polaroidPosition={EPolaroidPosition.BOTTOM_RIGHT}
					on:click={() => handleOnClick(3)}
					isSelected={index === 3}
				/>
			{/if}
		</div>
	</div>
</div>
