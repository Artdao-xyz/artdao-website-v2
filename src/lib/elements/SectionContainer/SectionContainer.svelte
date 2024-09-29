<script lang="ts">
	import { EColorVariant } from '../../../constants/enums';

	export let colorVariant: EColorVariant | undefined = undefined;
	export let bgImage: string | undefined = undefined;
</script>

<section
	class="section w-full h-full-desktop-height {bgImage
		? 'bg-cover bg-center h-full'
		: colorVariant === EColorVariant.LIGHT
			? 'bg-color-white'
			: colorVariant === EColorVariant.BLACK
				? 'bg-color-black'
				: 'bg-color-gray-background'}"
	style="background-image: url({bgImage});"
>
	<slot />
</section>
