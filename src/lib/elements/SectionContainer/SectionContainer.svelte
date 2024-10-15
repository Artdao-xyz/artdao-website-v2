<script lang="ts">
	import { EColorVariant } from '../../../constants/enums';

	export let colorVariant: EColorVariant | undefined = undefined;
	export let bgImage: string | undefined = undefined;
	export let hasPadding = true;
</script>

<section
	class="snap-start shrink-0 w-full h-screen sm:h-full-desktop-height {bgImage
		? 'bg-cover bg-center'
		: colorVariant === EColorVariant.LIGHT
			? 'bg-color-white'
			: colorVariant === EColorVariant.BLACK
				? 'bg-color-black'
				: 'bg-color-gray-background'} {hasPadding ? 'p-global-padding' : ''}"
	style="background-image: url({bgImage});"
>
	<slot />
</section>
