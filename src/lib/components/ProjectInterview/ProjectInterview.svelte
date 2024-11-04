<script lang="ts">
	import type { IQuestion } from '$lib/elements/InterviewCard/interfaces';
	import InterviewCard from '$lib/elements/InterviewCard/InterviewCard.svelte';
	import InterviewCardFilters from '$lib/elements/InterviewCardFilters/InterviewCardFilters.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IFilteredQuestions } from '../../../data/Projects/EcologiesOfCode/ProjectInterview';
	import InterviewMobile from '../InterviewMobile/InterviewMobile.svelte';
	import InterviewMobileFiltered from '../InterviewMobileFiltered/InterviewMobileFiltered.svelte';
	export let bgImage: string;
	export let questions: IQuestion[] | undefined = undefined;
	export let route = '';
	export let filteredQuestions: IFilteredQuestions[] | undefined = undefined;
	export let isCover = false;

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />
<SectionContainer {bgImage} isOverflow={width > 1100 ? true : false} {isCover}>
	<div
		class="flex flex-row justify-center laptopM:items-center h-full w-full pt-[2.5rem] laptopM:pt-0"
		id={route}
	>
		{#if !filteredQuestions && questions}
			<InterviewCard {questions} />

			<InterviewMobile {questions} />
		{/if}

		{#if filteredQuestions && !questions}
			<InterviewCardFilters questions={filteredQuestions} />

			<InterviewMobileFiltered questions={filteredQuestions} />
		{/if}
	</div>
</SectionContainer>
