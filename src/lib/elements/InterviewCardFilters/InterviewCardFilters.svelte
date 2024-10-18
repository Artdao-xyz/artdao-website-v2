<script lang="ts">
	import type { IQuestionFilter } from './interfaces';

	export let questions: IQuestionFilter[];
	let indexQuestion: number = 0;
	let indexArtist: number = 0;
	$: responses = questions[indexQuestion].responses;
	$: percentage = 100 / questions.length;
	$: selectedResponse = responses.find((response) => response.selected === true);
	questions[indexQuestion].selected = true;
	questions[indexQuestion].responses[indexArtist].selected = true;

	const handleOnClickQuestion = (i: number) => {
		indexQuestion = i;
		questions.forEach((question) => (question.selected = false));
		questions[i].selected = true;
	};

	const handleOnClickArtist = (i: number) => {
		indexArtist = i;
		questions[indexQuestion].responses.forEach((response) => (response.selected = false));
		questions[indexQuestion].responses[indexArtist].selected = true;
	};
</script>

<div
	class="hidden cardBlur w-card-width-full-bg laptopM:w-[34rem] macBook:w-card-width-full-bg laptopL:w-[34rem] bigScreen:w-card-width-full-bg h-card-height rounded-40 p-10 laptopM:flex flex-col gap-5 bg-color-interview-card text-color-black mx-auto max-w-[40rem] max-h-[50rem] mt-[4%]"
>
	<div
		class="h-[3.4375rem] px-10 py-[0.375rem] border border-black items-center rounded-40 flex flex-row w-full justify-between"
	>
		<p class="font-robotoMono text-xs leading-[1.375rem] tracking-[0.075rem] font-semibold">
			Interview
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
		class="w-full font-semibold leading-[3.4375rem] font-clash text-[3rem] overflow-y-auto flex-shrink-0"
	>
		{questions[indexQuestion].question[0].toUpperCase() +
			questions[indexQuestion].question.slice(1)}
	</h2>

	<div class="flex flex-row gap-2.5">
		{#each responses as response, i}
			<button
				class="w-[57px] h-[29px] text-color-white py-2.5 px-5 gradient-dark"
				on:click={() => handleOnClickArtist(i)}
			>
				{response.artist}
			</button>
		{/each}
	</div>

	{#if selectedResponse}
		<div
			class="w-full flex flex-col gap-5 font-clash leading-[1.5625rem] overflow-y-auto mb-[2rem]"
		>
			<p class="font-clash font-semibold leading-[1.5625rem] text-base">
				{selectedResponse.text}
			</p>
		</div>
	{/if}

	<div class="flex flex-row gap-[0.3125rem] h-[1.875rem] absolute bottom-9 right-11">
		{#each questions as question, i}
			<button
				on:click={() => handleOnClickQuestion(i)}
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
