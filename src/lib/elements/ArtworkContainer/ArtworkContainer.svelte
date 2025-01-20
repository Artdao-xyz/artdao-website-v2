<script lang="ts">
	import type { IGalleryImage } from './interfaces';

	export let galleryImage: IGalleryImage;
	export let showDetails = false;
	const { image, name, description } = galleryImage;
</script>

<div
	class="h-full w-auto p-5 bg-color-white rounded-30 border border-color-black flex flex-col flex-shrink-0 justify-between"
>
	<img src={image} alt="Gallery" class="w-auto {showDetails ? 'h-[85%]' : 'h-full'} object-cover" />
	{#if showDetails}
		<div
			class="max-h-[20%] flex flex-col text-color-black font-robotoMono text-[10px] font-semibold leading-4"
		>
			<p>{name}</p>
			<p>{description}</p>
		</div>
	{/if}
</div>
