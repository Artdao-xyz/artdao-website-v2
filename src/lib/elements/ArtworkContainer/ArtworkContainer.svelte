<script lang="ts">
	import type { IGalleryImage } from './interfaces';

	export let galleryImage: IGalleryImage;
	const { image, name, artist } = galleryImage;
</script>

<div
	class="h-full w-auto p-[1.0625rem] bg-color-white rounded-30 border border-color-black flex-shrink-0 flex flex-col gap-5"
>
	<img src={image} alt="Gallery" class="h-full" />
</div>
