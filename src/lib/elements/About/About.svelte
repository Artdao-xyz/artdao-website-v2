<script lang="ts">
	import type { IAboutItem } from '../AboutCard/interfaces';

	export let aboutItem: IAboutItem;
	const { title, subtitle, text } = aboutItem;
</script>

<div
	class="pl-10 pr-[3.875rem] pt-[10%] flex flex-col gap-5 h-full mt-[1rem] text-color-white w-full max-w-[50rem] pb-10"
>
	<div
		class="h-9 px-5 border border-color-white justify-start items-center rounded-40 flex flex-row w-full"
	>
		<p class="font-robotoMono text-[0.75rem] leading-[1.375rem] tracking-[0.075rem] capitalize">
			{subtitle}
		</p>
	</div>
	<h2
		class="w-full h-[4.9375rem] font-semibold leading-[5rem] tracking-[0.065rem] uppercase font-neue text-[5rem]"
	>
		{title}
	</h2>
	<div class="w-full h-full overflow-y-auto pr-10">
		<p class="font-clash font-medium leading-[1.5625rem] text-base">
			{text}
		</p>
	</div>
</div>
