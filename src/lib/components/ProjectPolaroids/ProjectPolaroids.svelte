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
		class="hidden sm:w-full h-screen sm:h-full sm:flex flex-col items-center gap-5 sm:gap-10 overflow-x-auto sm:overflow-x-hidden"
	>
		<div class="w-[65%] flex items-end sm:h-[25%]">
			<h1
				class="text-color-black text-[32px] sm:text-[3rem] macBook:text-[50px] xlScreen:text-[4rem] font-semibold sm:leading-[3.4375rem] tracking-[0.065rem] font-neue w-full text-center"
			>
				“{images[selectedItem].quote}”
			</h1>
		</div>
		<Polaroids {images} {polaroidsTypes} {viewImageFit} />
	</div>
</SectionContainer>
