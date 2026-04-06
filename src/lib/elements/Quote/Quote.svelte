<script lang="ts">
	import { EColorVariant } from '../../../constants/enums';
	import type { IQuoteItem } from '$lib/components/QuoteComponent/interfaces';

	export let quoteItem: IQuoteItem;
	export let colorVariant: EColorVariant | string;
	export let showTitle = true;
	export let artistFeatureLabel = 'Artist Feature';
	export let conversationLabel = 'In conversation with Alice Scope';

	const { title, text, quote, segments } = quoteItem;

	$: showHeading = quoteItem.showSectionTitle ?? showTitle;
	$: showFeatureLines = quoteItem.showArtistFeature ?? true;

	$: isBlack = colorVariant === EColorVariant.BLACK;
	$: isCustomColor = typeof colorVariant === 'string' && colorVariant.startsWith('#');
	$: isLightGray = colorVariant === '#EAEAEA';
	$: backgroundColor = isBlack
		? 'bg-color-black'
		: isCustomColor
			? ''
			: 'bg-color-white';
	$: backgroundColorStyle = isCustomColor ? `background-color: ${colorVariant};` : '';
	$: titleClasses = isLightGray
		? 'px-2.5 py-[5px] bg-[#2600ff] inline-flex justify-start items-center gap-2.5 text-[#EAEAEA] font-semibold tracking-[0.065rem] uppercase font-neue text-base'
		: 'w-full mb-0 font-semibold leading-[55px] tracking-[0.065rem] uppercase font-neue text-[40px] sm:text-[3.125rem]';

	$: useSegments = Boolean(segments?.length);

	$: quoteRule = isBlack ? 'border-white/30' : 'border-black/20';
	$: quoteInk = isBlack ? 'text-white' : 'text-black';
	$: quoteMark = isBlack ? 'text-white/45' : 'text-black/40';
	$: bodyInk = isBlack ? 'text-white/90' : 'text-black/90';
</script>

<div
	class="flex flex-col justify-center items-start sm:items-center gap-5 {isBlack
		? 'text-color-white'
		: 'text-color-black'} {backgroundColor} w-full max-w-2xl mx-[2rem] sm:max-h-[82%] pt-2 sm:pt-0 pb-2 sm:pb-0"
	style={backgroundColorStyle}
>
	{#if showHeading || showFeatureLines}
		<div class="flex flex-col w-full gap-1.5 sm:gap-2">
			{#if showHeading}
				<div class="flex items-center gap-2.5 justify-start w-full">
					{#if isLightGray}
						<svg class="inline-block" width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15 9.09326L-8.56449e-07 18.1865L-6.14903e-08 -5.42404e-06L15 9.09326Z" fill="#2600FF" />
						</svg>
					{/if}
					<h2 class={titleClasses}>
						{title}
					</h2>
				</div>
			{/if}
			{#if showFeatureLines}
				<div class="self-stretch w-full max-w-[520px] relative">
					<div
						class="text-left justify-start text-[10px] font-bold font-robotoMono leading-4 tracking-wide {isBlack
							? 'text-white'
							: 'text-black'}"
					>
						{artistFeatureLabel}<br />
						{conversationLabel}
					</div>
				</div>
			{/if}
		</div>
	{/if}
	<div class="w-full sm:h-full overflow-y-visible sm:overflow-y-auto pr-[0.4375rem] flex flex-col gap-0">
		{#if useSegments}
			<div class="flex flex-col gap-7 sm:gap-9 w-full max-w-[36rem]">
				{#each segments ?? [] as seg, i (i)}
					{#if seg.type === 'quote'}
						<blockquote
							class="m-0 pl-4 sm:pl-5 border-l-2 {quoteRule} font-clash text-[1.0625rem] sm:text-[1.1875rem] font-medium italic leading-[1.45] sm:leading-[1.5] {quoteInk}"
						>
							<span class={quoteMark}>“</span>{seg.text}<span class={quoteMark}>”</span>
						</blockquote>
					{:else}
						<p
							class="m-0 font-clash text-base sm:text-[1.0625rem] font-normal leading-[1.5rem] sm:leading-[1.625rem] {bodyInk}"
						>
							{seg.text}
						</p>
					{/if}
				{/each}
			</div>
		{:else}
			<p class="font-clash leading-[1.5rem] sm:leading-[1.5625rem] text-base">
				<svelte:component this={text} />
			</p>
			{#if quote}
				<blockquote
					class="mt-6 sm:mt-8 border-l-2 pl-4 font-clash text-[1.0625rem] sm:text-[1.1875rem] italic leading-snug {isBlack
						? 'border-white/40 text-white/95'
						: 'border-black/25 text-black/90'}"
				>
					{quote}
				</blockquote>
			{/if}
		{/if}
	</div>
</div>
