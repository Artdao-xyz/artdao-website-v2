<script lang="ts">
	import type { IGalleryImage } from './interfaces';

	export let galleryImage: IGalleryImage;
	export let showDetails = false;
	const { image, name, description } = galleryImage;
</script>

<div
	class="h-full w-auto p-5 bg-color-white rounded-30 border border-color-black flex flex-col flex-shrink-0 flex-grow-0 justify-between"
>
	<img src={image} alt="Gallery" class={showDetails ? 'h-[83%]' : 'h-full'} />
	{#if showDetails}
		<div
			class="flex flex-col text-color-black font-robotoMono text-[0.625rem] bigScreen:text-[1rem] font-semibold leading-4 bigScreen:leading-6"
		>
			<p>{name}</p>
			<p>{description}</p>
		</div>
	{/if}
</div>
