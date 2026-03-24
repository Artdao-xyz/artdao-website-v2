<script lang="ts">
	import Quote from '$lib/elements/Quote/Quote.svelte';
	import type { IQuoteItem } from './interfaces';
	import ImgNavigator from '$lib/elements/ImgNavigator/ImgNavigator.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { EColorVariant, ESizeVariant } from '../../../constants/enums';

	export let quoteItem: IQuoteItem;
	export let aboutImage: string | undefined = undefined;
	export let aboutImages: string[] | undefined = undefined;
	export let route: string;
	export let isImageLeft = true;
	export let colorVariant: EColorVariant | string = EColorVariant.BLACK;
	export let isImageContain = false;
	export let artistFeatureLabel = 'Artist Feature';
	export let conversationLabel = 'In conversation with Alice Scope';
</script>

<div class="hidden sm:block">
	<SectionContainer {colorVariant} hasPadding={false}>
		<div
			class="flex justify-start sm:justify-center w-full sm:h-full flex-col sm:flex-row"
			id={route}
		>
			{#if !isImageLeft}
				<div class="w-full sm:w-1/2 h-screen sm:h-full flex items-center justify-center">
					<Quote {quoteItem} {colorVariant} {artistFeatureLabel} {conversationLabel} />
				</div>
			{/if}
			{#if aboutImage}
				<img
					src={aboutImage}
					alt="Quote section"
					class="w-full sm:w-1/2 h-100dvh {isImageContain ? 'object-contain' : 'object-cover'}"
				/>
			{/if}
			{#if aboutImages}
				<ImgNavigator images={aboutImages} variant={ESizeVariant.SMALL} />
			{/if}
			{#if isImageLeft}
				<div class="w-full sm:w-1/2 h-screen sm:h-full flex items-center justify-center">
					<Quote {quoteItem} {colorVariant} {artistFeatureLabel} {conversationLabel} />
				</div>
			{/if}
		</div>
	</SectionContainer>
</div>
<div class="block sm:hidden" id={route}>
	{#if isImageLeft}
		<SectionContainer {colorVariant} hasPadding={false} isOverflow={false}>
			<div class="w-full min-h-dvh flex items-center justify-center py-6">
				<Quote {quoteItem} {colorVariant} {artistFeatureLabel} {conversationLabel} />
			</div>
		</SectionContainer>
		<SectionContainer {colorVariant} hasPadding={false}>
			{#if aboutImage}
				<div class="w-full min-h-dvh flex items-center justify-center p-4">
					<img
						src={aboutImage}
						alt="Quote section"
						class="w-full sm:w-1/2 {isImageContain ? 'object-contain' : 'object-cover'}"
					/>
				</div>
			{/if}
			{#if aboutImages}
				<div class="min-h-dvh flex items-center justify-center p-4">
					<ImgNavigator images={aboutImages} variant={ESizeVariant.SMALL} />
				</div>
			{/if}
		</SectionContainer>
	{:else}
		<SectionContainer {colorVariant} hasPadding={false}>
			{#if aboutImage}
				<div class="w-full min-h-dvh flex items-center justify-center p-4">
					<img
						src={aboutImage}
						alt="Quote section"
						class="w-full sm:w-1/2 {isImageContain ? 'object-contain' : 'object-cover'}"
					/>
				</div>
			{/if}
			{#if aboutImages}
				<div class="min-h-dvh flex items-center justify-center p-4">
					<ImgNavigator images={aboutImages} variant={ESizeVariant.SMALL} />
				</div>
			{/if}
		</SectionContainer>
		<SectionContainer {colorVariant} hasPadding={false} isOverflow={false}>
			<div class="w-full min-h-dvh flex items-center justify-center py-6">
				<Quote {quoteItem} {colorVariant} {artistFeatureLabel} {conversationLabel} />
			</div>
		</SectionContainer>
	{/if}
</div>
