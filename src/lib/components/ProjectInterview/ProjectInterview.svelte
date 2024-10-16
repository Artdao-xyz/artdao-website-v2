<script lang="ts">
	import type { IQuestion } from '$lib/elements/InterviewCard/interfaces';
	import InterviewCard from '$lib/elements/InterviewCard/InterviewCard.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import InterviewMobile from '../InterviewMobile/InterviewMobile.svelte';
	export let bgImage: string;
	export let questions: IQuestion[];
	export let route = '';
</script>

<SectionContainer {bgImage}>
	<div class="flex flex-row justify-center items-center h-full w-full" id={route}>
		<InterviewCard {questions} />

		<InterviewMobile {questions} />
	</div>
</SectionContainer>
