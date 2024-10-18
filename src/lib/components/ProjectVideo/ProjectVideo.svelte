<script lang="ts">
	import buttonIconDark from '$lib/assets/images/button-icon-dark.png';
	import buttonIcon from '$lib/assets/images/button-icon.png';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IVideoProject } from '$lib/elements/VideoCard/interfaces';
	import VideoCard from '$lib/elements/VideoCard/VideoCard.svelte';
	import { EColorVariant } from '../../../constants/enums';

	export let videoProjects: IVideoProject[];
	export let route = '';
	$: index = 0;
	$: videoProject = videoProjects[index];

	$: isNextButtonDisabled = videoProjects.length - 1 === index;

	$: isPrevButtonDisabled = index === 0;

	const handleNextButton = () => {
		if (videoProjects.length > index + 1) {
			index += 1;
		}
	};

	const handlePrevButton = () => {
		if (index !== 0) {
			index -= 1;
		}
	};

	let arrowLeft = buttonIconDark;
	let arrowRight = buttonIconDark;

	const setLeftArrow = () => {
		arrowLeft = buttonIcon;
	};

	const setLeftArrowDark = () => {
		arrowLeft = buttonIconDark;
	};

	const setRightArrow = () => {
		arrowRight = buttonIcon;
	};

	const setRightArrowDark = () => {
		arrowRight = buttonIconDark;
	};
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT} hasPadding>
	<div
		class="flex flex-col sm:flex-row items-center justify-center w-full h-full pt-[2.4375rem]"
		id={route}
	>
		<div class=" h-full flex items-center">
			<VideoCard
				{videoProject}
				{handleNextButton}
				{handlePrevButton}
				{isNextButtonDisabled}
				{isPrevButtonDisabled}
			/>
		</div>

		<div class="flex flex-row gap-[0.9375rem] sm:hidden pb-[3rem] justify-start w-full">
			<button
				on:click={handlePrevButton}
				on:mouseenter={setLeftArrow}
				on:mouseleave={setLeftArrowDark}
				class="{isPrevButtonDisabled
					? 'cursor-not-allowed'
					: 'hover:scale-105'} w-[3.125rem] h-[3.125rem] rounded-[6.25rem] border hover:bg-color-dark bg-color-white border-color-dark flex items-center justify-center"
			>
				<img src={arrowLeft} alt="Button" class="rotate-180" />
			</button>

			<button
				on:click={handleNextButton}
				on:mouseenter={setRightArrow}
				on:mouseleave={setRightArrowDark}
				class="{isNextButtonDisabled
					? 'cursor-not-allowed'
					: 'hover:scale-105'} w-[3.125rem] h-[3.125rem] rounded-[6.25rem] border hover:bg-color-dark bg-color-white border-color-dark flex items-center justify-center"
			>
				<img src={arrowRight} alt="Button" />
			</button>
		</div>
	</div>
</SectionContainer>
