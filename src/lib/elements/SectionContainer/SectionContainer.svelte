<script lang="ts">
	import { page } from '$app/stores';
	import { EColorVariant } from '../../../constants/enums';
	
	export let bgImage: string | undefined = undefined;
	export let hasPadding = true;
	export let isOverflow = true;
	export let isCover = false;
	export let colorVariant: EColorVariant | string = EColorVariant.BLACK;

	$: isMapRoute = $page.route.id === '/map';
	$: backgroundColor = (colorVariant === EColorVariant.LIGHT || colorVariant === 'light') 
		? '#F7F5F2' 
		: (typeof colorVariant === 'string' && colorVariant.startsWith('#'))
			? colorVariant
			: '#000000';
	$: shouldShowDots = isMapRoute && (colorVariant === EColorVariant.LIGHT || colorVariant === 'light');
</script>

<div
	class="!snap-start shrink-0 w-full {isCover ? 'bg-cover' : ''} h-full lg:h-screen {bgImage ? 'bg-center bg-no-repeat' : ''} {hasPadding ? 'p-global-padding' : ''}"
	style="background-color: {backgroundColor}; {shouldShowDots ? 'background-repeat: repeat; background-image: url(\'/media/home/home-dot.svg\');' : ''} {bgImage ? `background-image: url(${bgImage})${shouldShowDots ? ', url(\'/media/home/home-dot.svg\')' : ''};` : ''}"
>
	<slot />
</div>
