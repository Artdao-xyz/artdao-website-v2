<script lang="ts">
	import type { IPolaroidImage } from '../Polaroids/interface';

	export let viewImageFit: 'contain' | 'cover';
	export let image: IPolaroidImage;
</script>

<div class=" bg-color-white p-5 flex flex-col gap-2.5 rounded-20 border border-color-black mx-auto">
	<img
		src={image.image}
		alt="Polaroid Gallery Item"
		class="{viewImageFit === 'contain' ? 'object-contain' : 'object-cover'} h-full"
	/>
</div>
