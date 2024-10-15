<script lang="ts">
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IProject } from './interfaces';
	export let project: IProject;
	export let textColor: 'black' | 'white' = 'black';
	export let isContain = false;
	const { name, description, image, bgImage } = project;
</script>

<SectionContainer hasPadding={false}>
	<div
		class="w-full h-full flex flex-row pt-[2rem] sm:pt-[5%] gap-28 {bgImage
			? `${isContain ? 'sm:bg-contain' : 'sm:bg-cover'} bg-fit bg-no-repeat bg-bottom h-screen sm:h-full bg-color-black`
			: ''} {textColor === 'black' ? 'bg-color-white' : 'bg-color-black'} pr-global-padding"
		id="intro"
		style={bgImage ? `background-image: url(${bgImage});` : ''}
	>
		<div
			class="flex flex-col h-full w-full sm:w-[42%] sm:max-w-[40rem] bigScreen:max-w-[45rem] xlScreen:max-w-[55rem] {textColor ===
			'black'
				? 'text-color-black'
				: 'text-color-white'} pl-global-padding gap-5 bigScreen:gap-10"
		>
			<h1
				class="font-neue text-[4.6875rem] sm:text-[6rem] macBook:text-[7.5rem] laptopL:text-[6rem] bigScreen:text-[7.5rem] xlScreen:text-[10rem] font-semibold leading-[80px] sm:leading-[8.125rem] tracking-[0.0975rem] uppercase"
			>
				{name}
			</h1>
			<div
				class="flex flex-col gap-10 font-clash text-sm macBook:text-base laptopL:text-sm bigScreen:text-base xlScreen:text-2xl font-semibold leading-[1.5625rem]"
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
