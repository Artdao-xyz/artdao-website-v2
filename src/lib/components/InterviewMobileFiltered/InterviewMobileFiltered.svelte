<script lang="ts">
	import iconOpened from '$lib/assets/images/minus-icon.png';
	import iconClosed from '$lib/assets/images/plus-icon.png';
	import { slide } from 'svelte/transition';
	import type {
		IFilteredQuestions,
		IFilteredResponse
	} from '../../../data/Projects/EcologiesOfCode/ProjectInterview';
	export let questions: IFilteredQuestions[];

	let indexQuestion: number = 0;
	let indexArtist: number = 0;
	$: responses = questions[indexQuestion].responses;
	$: selectedResponse = responses.find((response) => response.selected === true);
	questions[indexQuestion].selected = true;
	questions[indexQuestion].responses[indexArtist].selected = true;

	const handleOnClickQuestion = (i: number) => {
		indexQuestion = i;
		questions.forEach((question) => (question.selected = false));
		questions[i].selected = true;
		questions[i].responses[indexArtist].selected = true;
	};

	const handleOnClickArtist = (i: number) => {
		indexArtist = i;
		questions[indexQuestion].responses.forEach((response) => (response.selected = false));
		questions[indexQuestion].responses[indexArtist].selected = true;
	};

	let visible: boolean = false;

	let index = 0;

	const toggleVisibility = (i: number) => {
		visible = !visible;
		responseToShow = questions[i].responses[0];
		index = i;
	};

	let responseToShow: IFilteredResponse;
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
				<div transition:slide={{ axis: 'y', duration: 1000 }}>
					<div class="flex flex-row gap-2 w-full justify-start pb-[1rem] px-[1rem]">
						{#each responses as response, i}
							<button
								class="h-[1.8125rem] py-2.5 px-5 gradient-dark rounded-20 {indexArtist === i
									? 'gray-gradient text-color-black'
									: 'dark-gradient text-color-white'} text-[0.75rem] font-medium leading-[1.5625rem] font-clash flex items-center"
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
							{#each selectedResponse.response as response}
								{#if response}
									<p
										class="text-[1.125rem] font-clash font-medium leading-[1.5rem] px-[1.4375rem] pb-[1rem] text-color-black"
									>
										{response}
									</p>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
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
