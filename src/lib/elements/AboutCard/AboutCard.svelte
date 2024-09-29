<script lang="ts">
	import type { IAboutItem } from './interfaces';

	export let aboutItem: IAboutItem;
	const { title, subtitle, text } = aboutItem;
</script>

<div
	class="w-card-width h-card-height laptopL:w-[34.375rem] laptopL:h-[37.5rem] bigScreen:w-card-width bigScreen:h-card-height bg-color-white rounded-40 p-10 flex flex-col gap-5 mx-auto max-w-[40rem] max-h-[50rem] mt-[1rem]"
>
	<div
		class="h-9 px-5 border border-color-black justify-start items-center rounded-40 flex flex-row w-full"
	>
		<p
			class="font-robotoMono text-[0.75rem] leading-[1.375rem] tracking-[0.075rem] capitalize text-color-black"
		>
			{subtitle}
		</p>
	</div>
	<h2
		class="w-full h-[4.9375rem] font-semibold leading-[5rem] tracking-[0.065rem] uppercase font-neue text-[5rem] text-color-black"
	>
		{title}
	</h2>
	<div class="w-full h-full overflow-y-auto pr-1">
		<p class="font-clash font-medium leading-[1.5625rem] text-base text-color-black">
			{text}
		</p>
	</div>
</div>
