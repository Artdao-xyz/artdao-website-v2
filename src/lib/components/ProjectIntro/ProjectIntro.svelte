<script lang="ts">
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import type { IProject } from './interfaces';
	export let project: IProject;
	const { name, description, image } = project;
</script>

<SectionContainer>
	<div class="w-full h-full flex flex-row px-[2.5625rem] pt-[5%] gap-28">
		<div class="flex flex-col h-full w-[42%] max-w-[35rem] text-color-black gap-5">
			<h1
				class="font-neue text-[7.5rem] font-semibold leading-[8.125rem] tracking-[0.0975rem] uppercase"
			>
				{name}
			</h1>
			<div class="flex flex-col gap-10 font-clash text-base font-semibold leading-[1.5625rem]">
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
