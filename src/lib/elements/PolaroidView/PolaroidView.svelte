<script lang="ts">
	import { ESizesVariant } from '../../../constants/enums';
	import type { IPolaroidImage } from '../Polaroids/interface';

	export let image: IPolaroidImage;
	export let viewSize: ESizesVariant;

	$: sizeClass =
		viewSize === ESizesVariant.LARGE
			? 'w-[85%] max-w-[85%] laptopM:max-w-[75%] macBook:max-w-[85%] laptopL:max-w-[70%] bigScreen:max-w-[85%]'
			: viewSize === ESizesVariant.MEDIUM
				? 'w-[54.5%]'
				: 'w-[27.25%]';
</script>

<div class="w-[65%] flex justify-center pl-[3%] h-full">
	<div
		class="{sizeClass} h-full bg-color-white p-5 flex flex-col gap-2.5 rounded-20 border border-color-black"
	>
		<img src={image.image} alt="Polaroid Gallery Item" class="object-cover h-full" />
	</div>
</div>
