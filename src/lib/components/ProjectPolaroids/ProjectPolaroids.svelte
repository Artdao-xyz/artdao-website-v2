<script lang="ts">
	import type { IPolaroidImage } from '$lib/elements/Polaroids/interface';
	import Polaroids from '$lib/elements/Polaroids/Polaroids.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant } from '../../../constants/enums';
	import { truncateString } from '../../../utils/strings/strings.helper';
	import { selectedPolaroidsItem } from './store';

	export let images: IPolaroidImage[];

	let selectedItem: number;

	selectedPolaroidsItem.subscribe((item) => {
		selectedItem = item;
	});
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT}>
	<div class="w-full h-full flex flex-col items-center justify-start gap-[10%] pt-[10%]">
		<h1
			class="px-[5%] text-color-black text-[5rem] font-semibold leading-[5rem] tracking-[0.065rem] uppercase font-neue w-full text-center lg:h-[10rem] 2xl:h-[5rem]"
		>
			&gt;
			{truncateString(images[selectedItem].name, 22)}
			&lt;
		</h1>
		<Polaroids {images} />
	</div>
</SectionContainer>
