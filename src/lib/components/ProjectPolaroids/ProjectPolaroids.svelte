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
	<div id={route} class="w-full h-full flex flex-col items-center gap-20">
		<div class="w-full flex items-center pt-[5rem]">
			<h1
				class="text-color-black text-[3rem] macBook:text-[3.5rem] bigScreen:text-[4rem] font-semibold leading-[5rem] tracking-[0.065rem] uppercase font-neue w-full text-center"
			>
				&gt; {images[selectedItem].quote} &lt;
			</h1>
		</div>
		<Polaroids {images} {polaroidsTypes} {viewImageFit} />
	</div>
</SectionContainer>
