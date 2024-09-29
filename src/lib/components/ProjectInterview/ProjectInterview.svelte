<script lang="ts">
	import type { IQuestion } from '$lib/elements/InterviewCard/interfaces';
	import InterviewCard from '$lib/elements/InterviewCard/InterviewCard.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	export let bgImage: string;
	export let questions: IQuestion[];
</script>

<SectionContainer {bgImage}>
	<div class="flex flex-row justify-center items-center h-full w-full">
		<InterviewCard {questions} />
	</div>
</SectionContainer>
