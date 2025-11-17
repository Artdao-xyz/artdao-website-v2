<script lang="ts">
	import { EColorVariant } from '../../../constants/enums';
	import type { IAboutItem } from '../AboutCard/interfaces';

export let aboutItem: IAboutItem;
export let colorVariant;
export let showTitle = true;
	const { title, subtitle, text } = aboutItem;
	
	$: isBlack = colorVariant === EColorVariant.BLACK;
	$: isCustomColor = typeof colorVariant === 'string' && colorVariant.startsWith('#');
	$: isLightGray = colorVariant === '#D9D9D9';
	$: backgroundColor = isBlack 
		? 'bg-color-black' 
		: isCustomColor 
			? '' 
			: 'bg-color-white';
	$: backgroundColorStyle = isCustomColor ? `background-color: ${colorVariant};` : '';
	$: titleClasses = isLightGray 
		? 'px-2.5 py-[5px] bg-[#2600ff] inline-flex justify-start items-center gap-2.5 text-[#D9D9D9] font-semibold tracking-[0.065rem] uppercase font-neue text-base'
		: 'w-full sm:mb-[20px] mb-0 font-semibold leading-[55px] tracking-[0.065rem] uppercase font-neue text-[40px] sm:text-[3.125rem]';
</script>

<div
	class="flex flex-col justify-start items-start sm:items-center sm:justify-center gap-5 {isBlack
		? 'text-color-white'
		: 'text-color-black'} {backgroundColor} w-full max-w-[31.9375rem] mx-[2rem] min-h-screen sm:max-h-[82%] pt-[4rem] sm:pt-0 pb-[4rem] sm:pb-0"
	style={backgroundColorStyle}
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
	{#if showTitle}
		<div class="flex items-center gap-2.5 justify-start w-full">
			{#if isLightGray}
				<svg class="inline-block" width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 9.09326L-8.56449e-07 18.1865L-6.14903e-08 -5.42404e-06L15 9.09326Z" fill="#2600FF"/>
				</svg>
			{/if}
			<h2 class={titleClasses}>
				{title}
			</h2>
		</div>
	{/if}
	<div class="w-full h-full overflow-y-visible sm:overflow-y-auto pr-[0.4375rem]">
		<p
			class="font-clash font-medium leading-[1.5rem] sm:leading-[1.5625rem] text-base"
		>
			<svelte:component this={text}></svelte:component>
		</p>
	</div>
</div>
