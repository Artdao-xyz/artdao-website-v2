<script lang="ts">
	import dottedLineLong from '$lib/assets/images/dotted-line-long.png';
	import type { IQuestion } from './interfaces';

	export let questions: IQuestion[];
	let index: number = 0;
	$: responses = questions[index].response;
	$: percentage = 100 / questions.length;
	questions[index].selected = true;

	const handleOnClick = (i: number) => {
		index = i;
		questions.forEach((question) => (question.selected = false));
		questions[i].selected = true;
	};
</script>

<div
	class="cardBlur w-card-width-full-bg laptopM:w-[34rem] macBook:w-card-width-full-bg laptopL:w-[34rem] bigScreen:w-card-width-full-bg h-card-height rounded-40 p-10 flex flex-col gap-5 bg-color-interview-card text-color-black mx-auto max-w-[40rem] max-h-[50rem] mt-[4%]"
>
	<div
		class="h-[3.4375rem] px-10 py-[0.375rem] border border-black items-center rounded-40 flex flex-row w-full justify-between"
	>
		<p class="font-robotoMono text-xs leading-[1.375rem] tracking-[0.075rem] font-semibold">
			[Question {index < 10 ? `0${index + 1}` : index + 1}]
		</p>
		<div class="w-[12.625rem] h-[0.125rem] bg-color-progress-bar-bg">
			<div class="flex flex-row">
				{#each questions as question}
					<div
						class={question.selected ? 'bg-color-black h-[0.125rem]' : ''}
						style="width: {percentage}%"
					/>
				{/each}
			</div>
		</div>
	</div>

	<h2
		class="w-full font-semibold leading-[65px] font-clash text-[3.4375rem] overflow-y-auto max-h-[60%]"
	>
		{questions[index].question[0].toUpperCase() + questions[index].question.slice(1)}
	</h2>

	<div class="w-full flex flex-col gap-5 font-clash leading-[1.5625rem] overflow-y-auto mb-[2rem]">
		{#each responses as response}
			{#if response.name}
				<p class="text-[1.25rem] capitalize">{response.name}</p>

				<img src={dottedLineLong} alt="Dotted Line" />
			{/if}

			<p class="font-clash font-semibold leading-[1.5625rem] text-base">
				{response.text}
			</p>
		{/each}
	</div>

	<div class="flex flex-row gap-[0.3125rem] h-[1.875rem] absolute bottom-9 right-11">
		{#each questions as question, i}
			<button
				on:click={() => handleOnClick(i)}
				class="w-[1.875rem] h-[1.875rem] rounded-[6.25rem] flex flex-row items-center justify-center border-color-black border {question.selected &&
					'bg-color-black text-color-white font-light'}"
			>
				<p
					class="font-robotoMono text-sm font-semibold leading-[1.375rem] tracking-[1.2px] p-[0.375rem] ml-[0.15rem]"
				>
					{i < 10 ? `0${i + 1}` : i + 1}
				</p>
			</button>
		{/each}
	</div>
</div>

<style>
	.cardBlur {
		backdrop-filter: blur(50px);
	}
</style>
