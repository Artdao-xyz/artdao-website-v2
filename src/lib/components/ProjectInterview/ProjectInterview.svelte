<script lang="ts">
	import type { IQuestion } from '$lib/elements/InterviewCard/interfaces';
	import InterviewCard from '$lib/elements/InterviewCard/InterviewCard.svelte';
	import type { IQuestionFilter } from '$lib/elements/InterviewCardFilters/interfaces';
	import InterviewCardFilters from '$lib/elements/InterviewCardFilters/InterviewCardFilters.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import InterviewMobile from '../InterviewMobile/InterviewMobile.svelte';
	export let bgImage: string;
	export let questions: IQuestion[] | undefined;
	export let route = '';
	export let questionsFilter: IQuestionFilter[] | undefined = undefined;

	let size: number;
</script>

<svelte:window bind:innerWidth={size} />
<SectionContainer {bgImage} isOverflow={size > 1100 ? true : false}>
	<div
		class="flex flex-row justify-center laptopM:items-center h-full w-full overflow-y-scroll laptopM:overflow-y-hidden pt-[2.5rem] laptopM:pt-0"
		id={route}
	>
		{#if !questionsFilter && questions}
			<InterviewCard {questions} />

			<InterviewMobile {questions} />
		{/if}

		{#if questionsFilter && !questions}
			<InterviewCardFilters questions={questionsFilter} />
		{/if}
	</div>
</SectionContainer>
