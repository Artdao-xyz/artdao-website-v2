<script lang="ts">
	import { EColorVariant } from '../../../constants/enums';
	import type { IAboutItem } from '../AboutCard/interfaces';

	export let aboutItem: IAboutItem;
	export let colorVariant;
	const { title, subtitle, text } = aboutItem;
</script>

<div
	class="flex flex-col justify-start items-start sm:items-center sm:justify-center gap-5 {colorVariant ===
	EColorVariant.BLACK
		? 'text-color-white'
		: 'text-color-black'} {colorVariant === EColorVariant.BLACK
		? 'bg-color-black'
		: 'bg-color-white'} w-full max-w-[31.9375rem] mx-[2rem] min-h-screen sm:max-h-[82%] pt-[4rem] sm:pt-0 pb-[4rem] sm:pb-0"
>
	<!-- <div
		class="h-9 px-5 border {colorVariant === EColorVariant.BLACK
			? 'border-color-white'
			: 'border-color-black'} justify-start items-center rounded-40 flex flex-row w-full"
	>
		<p
			class="font-robotoMono text-[0.75rem] sm:text-[0.625rem] leading-[1.375rem] tracking-[0.075rem] capitalize"
		>
			{subtitle}
		</p>
	</div> -->
	<h2
		class="w-full sm:mb-[20px] mb-0 font-semibold leading-[55px] tracking-[0.065rem] uppercase font-neue text-[40px] sm:text-[3.125rem]"
	>
		{title}
	</h2>
	<div class="w-full h-full overflow-y-visible sm:overflow-y-auto pr-[0.4375rem]">
		<p
			class="font-clash leading-[1.5rem] sm:leading-[1.5625rem] text-[1.125rem] sm:text-base"
		>
			<svelte:component this={text}></svelte:component>
		</p>
	</div>
</div>
