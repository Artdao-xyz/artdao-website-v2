<script lang="ts">
	import { EPolaroidType, type IPolaroidImage } from '$lib/elements/Polaroids/interface';
	import Polaroids from '$lib/elements/Polaroids/Polaroids.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../../constants/enums';
	import { selectedPolaroidsItem } from './store';

	export let viewImageFit: 'contain' | 'cover' = 'contain';
	export let route = '';
	export let images: IPolaroidImage[];
	export let polaroidsTypes: EPolaroidType[] = [
		EPolaroidType.SQUARE,
		EPolaroidType.SQUARE,
		EPolaroidType.SQUARE,
		EPolaroidType.SQUARE
	];

	let selectedItem: number;

	selectedPolaroidsItem.subscribe((item) => {
		selectedItem = item;
	});
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<div
		id={route}
		class="hidden sm:w-full h-screen sm:h-full sm:flex flex-col items-center overflow-x-auto sm:overflow-x-hidden pt-10"
	>
		<div class="w-full flex-none items-center sm:h-auto">
			<h1
				class="w-[65%] mx-auto text-color-black text-[32px] sm:text-[3rem] macBook:text-[50px] xlScreen:text-[4rem] font-semibold sm:leading-[3.4375rem] tracking-[0.065rem] font-neue text-center"
			>
				"{images[selectedItem].quote}"
			</h1>
		</div>
		<div class="flex-1 w-full overflow-hidden">
			<Polaroids {images} {polaroidsTypes} {viewImageFit} />
		</div>
	</div>
</SectionContainer>
