<script lang="ts">
	import iconClosed from '$lib/assets/images/question-icon-closed.png';
	import iconOpened from '$lib/assets/images/question-icon-open.png';
	import type { IQuestion, IResponse } from '$lib/elements/InterviewCard/interfaces';
	import { slide } from 'svelte/transition';

	let visible: boolean = false;

	let index = 0;

	const toggleVisibility = (i: number) => {
		visible = !visible;
		responseToShow = questions[i].response[0];
		index = i;
	};

	export let questions: IQuestion[];

	let responseToShow: IResponse;

	$: console.log('questions', questions);
</script>

<div class="flex flex-col gap-[1.3125rem]">
	{#each questions as question, i}
		<div class="flex flex-col card rounded-20">
			<div
				class="min-h-[5.1875rem] w-full flex flex-row justify-between py-[1rem] px-[1.4375rem] items-center"
			>
				<p
					class="w-full h-fit text-color-black text-[1.125rem] font-semibold font-clash capitalize"
				>
					{question.question}
				</p>

				<button class="w-[1rem] h-full" on:click={() => toggleVisibility(i)}>
					<img src={visible && index === i ? iconOpened : iconClosed} alt="Show Answer" />
				</button>
			</div>

			{#if visible && index === i}
				<p
					class="text-[1.125rem] font-clash font-medium leading-[1.5rem] px-[1.4375rem] pb-[1rem] text-color-black"
					transition:slide={{ axis: 'y', duration: 600 }}
				>
					{responseToShow.text}
				</p>
			{/if}
		</div>
	{/each}
</div>

<style>
	.card {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(50px);
	}
</style>
