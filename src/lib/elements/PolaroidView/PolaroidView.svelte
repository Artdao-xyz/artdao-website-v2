<script lang="ts">
	import { ESizesVariant } from '../../../constants/enums';
	import type { IPolaroidImage } from '../Polaroids/interface';

	export let image: IPolaroidImage;
	export let viewSize: ESizesVariant;

	$: sizeClass =
		viewSize === ESizesVariant.LARGE
			? 'w-[85%] max-w-[85%] laptopM:max-w-[75%] macBook:max-w-[85%] laptopL:max-w-[70%] bigScreen:max-w-[85%]'
			: viewSize === ESizesVariant.MEDIUM
				? 'aspect-square'
				: 'w-[27.25%]';
</script>

<div
	class="{sizeClass} bg-color-white p-5 flex flex-col gap-2.5 rounded-20 border border-color-black mx-auto"
>
	<img src={image.image} alt="Polaroid Gallery Item" class="object-cover h-full" />
</div>
