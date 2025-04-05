<script lang="ts">
	import type { IPolaroidImage } from '../Polaroids/interface';

	export let viewImageFit: 'contain' | 'cover';
	export let image: IPolaroidImage;
</script>

<div class="bg-color-white p-5 flex flex-col gap-2.5 rounded-20 border border-color-black w-fit max-w-full h-fit max-h-full">
	<div class="relative overflow-hidden flex items-center justify-center">
		<img
			src={image.image}
			alt="Polaroid Gallery Item"
			style="max-width: min(800px, 100%); max-height: min(600px, 100%);"
			class="{viewImageFit === 'contain' ? 'object-contain' : 'object-cover'} w-full h-full"
		/>
	</div>
</div>
