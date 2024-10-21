<script lang="ts">
	import iconOpened from '$lib/assets/images/minus-icon.png';
	import iconClosed from '$lib/assets/images/plus-icon.png';
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
</script>

<div class="flex flex-col gap-[1.3125rem] laptopM:hidden w-full min-h-screen">
	{#each questions as question, i}
		<div class="flex flex-col card rounded-20 w-full">
			<div class="w-full flex flex-row justify-between py-[1rem] px-[1.4375rem] items-center">
				<p
					class="w-full max-w-[15rem] sm:max-w-[35rem] h-fit text-color-black text-[1.125rem] font-semibold font-clash capitalize"
				>
					{question.question}
				</p>

				<button class="w-[1.5625rem] h-full" on:click={() => toggleVisibility(i)}>
					<img src={visible && index === i ? iconOpened : iconClosed} alt="Show Answer " />
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
