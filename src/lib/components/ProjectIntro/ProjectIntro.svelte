<script lang="ts">
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IProject } from './interfaces';
	export let project: IProject;
	export let textColor: 'black' | 'white' = 'black';
	export let isContain = false;
	export let isCenterImage = false;
	export let isWiderTitle = false;
	const { name, description, image, bgImage, bgImageMobile } = project;

	let width: number;
	let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<SectionContainer hasPadding={false} isOverflow={false}>
	<div
		class="w-full {height > 850 && width < 1100
			? 'h-screen'
			: 'pb-[10rem]'} flex flex-row pt-[3.5rem] sm:pt-[4.5rem] gap-28 {bgImage
			? `${isContain && width > 1100 ? 'sm:bg-contain' : 'bg-cover'} bg-fit bg-no-repeat sm:h-full bg-color-black`
			: ''} {textColor === 'black'
			? 'bg-color-white'
			: 'bg-color-black'} pr-global-padding {isCenterImage ? 'bg-center' : 'bg-bottom'}"
		id="intro"
		style={width > 1100
			? `background-image: url(${bgImage});`
			: `background-image: url(${bgImageMobile});`}
	>
		<div
			class="flex flex-col h-full w-full sm:w-full sm:max-w-[40rem] {isWiderTitle
				? 'bigScreen:max-w-[67rem]'
				: 'bigScreen:max-w-[45rem]'} xlScreen:max-w-[55rem] {textColor === 'black'
				? 'text-color-black'
				: 'text-color-white'} pl-global-padding gap-5 bigScreen:gap-10"
		>
			<h1
				class="font-neue text-[2.5rem] sm:text-[4.375rem] macBook:text-[6.25rem] xlScreen:text-[10rem] xlScreen:leading-[10rem] font-semibold leading-[3.4375rem] sm:leading-[5rem] laptopM:leading-[6.5625rem] tracking-[0.0975rem] uppercase"
			>
				{name}
			</h1>
			<div
				class="w-full sm:w-[36.25rem] flex flex-col gap-10 font-clash text-base macBook:text-base laptopL:text-sm bigScreen:text-base xlScreen:text-2xl font-semibold leading-[1.5625rem]"
			>
				{#each description as text}
					<p>{text}</p>
				{/each}
			</div>
		</div>
		{#if image}
			<div class="flex items-center justify-center h-full w-[58%]">
				<img src={image} alt="Project Intro" class="h-[95%]" />
			</div>
		{/if}
	</div>
</SectionContainer>
