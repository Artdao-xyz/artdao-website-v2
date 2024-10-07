<script lang="ts">
	import type { IPolaroidImage } from '../Polaroids/interface';

	export let image: IPolaroidImage;
</script>

<div class=" bg-color-white p-5 flex flex-col gap-2.5 rounded-20 border border-color-black mx-auto">
	<img src={image.image} alt="Polaroid Gallery Item" class="object-contain h-full" />
</div>
