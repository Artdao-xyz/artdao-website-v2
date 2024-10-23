<script lang="ts">
	import { EColorVariant } from '../../../constants/enums';

	export let colorVariant: EColorVariant | undefined = undefined;
	export let bgImage: string | undefined = undefined;
	export let hasPadding = true;
	export let isOverflow = true;
</script>

<div
	class="sm:snap-start shrink-0 w-full {isOverflow
		? 'h-screen'
		: ''} sm:h-full-desktop-height {bgImage && !colorVariant
		? 'bg-cover bg-center mb-[-0.7rem]'
		: colorVariant === EColorVariant.LIGHT
			? 'bg-color-white'
			: colorVariant === EColorVariant.BLACK
				? 'bg-color-black'
				: 'bg-color-gray-background'} {hasPadding ? 'p-global-padding' : ''}"
	style="background-image: url({bgImage});"
>
	<slot />
</div>
