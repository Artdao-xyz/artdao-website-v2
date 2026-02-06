<script lang="ts">
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IProject } from './interfaces';
	export let project: IProject;
	export let textColor: 'black' | 'white' = 'black';
	export let isContain = false;
	export let isCenterImage = false;
	export let isWiderTitle = false;
	export let bgImage: string = '';
	export let bgImageMobile: string = '';
	export let backgroundPosition: 'top' | 'center' | 'bottom' | undefined = undefined;
	const { name, description, image } = project;

	let width: number;
	let height: number;

	$: effectiveBackgroundPosition = backgroundPosition ?? (isCenterImage ? 'center' : 'bottom');
	$: backgroundPositionClass = `bg-${effectiveBackgroundPosition}`;
	$: backgroundPositionStyle = `background-position: ${effectiveBackgroundPosition};`;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<SectionContainer hasPadding={false} isOverflow={true} bgImage={bgImage}>
	<div
		class="w-full min-h-dvh lg:h-screen flex flex-row pt-[4.5rem] gap-28 {bgImage
			? `${isContain && width > 1100 ? 'sm:bg-cover' : 'bg-cover'} bg-fit bg-no-repeat bg-color-black`
			: ''} {textColor === 'black'
			? 'bg-color-white'
			: 'bg-color-black'} pr-global-padding {backgroundPositionClass}"
		id="intro"
		style={width > 1100
			? `background-image: url(${bgImage || ''}); ${backgroundPositionStyle}`
			: ``}
	>
	<div
		class="flex flex-col h-full w-full {textColor === 'black'
			? 'text-color-black'
			: 'text-color-white'} pl-global-padding gap-5 bigScreen:gap-10 p-4"
	>
		<h1
			class="font-neue text-[2.5rem] sm:text-[4.375rem] macBook:text-[6.25rem] xlScreen:text-[10rem] xlScreen:leading-[10rem] font-semibold leading-[3rem] sm:leading-[5rem] laptopM:leading-[6.5625rem] tracking-[0.0975rem] uppercase"
		>
			{@html name}
		</h1>
			<div
				class="w-full sm:w-[36.25rem] flex flex-col gap-5 font-clash text-base macBook:text-base laptopL:text-sm bigScreen:text-base xlScreen:text-2xl leading-[1.5625rem]"
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
