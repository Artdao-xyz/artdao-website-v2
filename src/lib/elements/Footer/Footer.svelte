<script lang="ts">
	// @ts-nocheck

	import footerLogo from '$lib/assets/images/artdao-logo.webp';
	import { inview } from 'svelte-inview';
	import { onDestroy } from 'svelte';
	import { EProjects } from '../../../constants/enums';
	import { projectsDetails } from '../../../data/Projects/projects';
	import { getProjectRefs } from '../../../utils/projectsRefs/getProjectRefs';
	import TextScramble from '../../../utils/strings/textScramble';
	import HomeNewsletter from '../HomeNewsletter/HomeNewsletter.svelte';
	import { isFooterVisible } from './store';

	export let project: EProjects;
	let refs = getProjectRefs(project);

	let subheader: any;
	let width;

	const content = [
		'artists helping artists',
		'artists driven drops on fuel',
		'immersive art experiences',
		'between art and branding'
	];

	let isVisible = false;
	let textScrambleInstance = null;

	// Computed properties for project data
	$: projectsData = refs.map(ref => {
		const project = projectsDetails.find((project) => project.name === ref);
		return {
			ref,
			project,
			projectUrl: project?.url,
			projectImage: width > 768 ? project?.image : project?.mobileImage,
			projectHover: project?.hover,
			projectName: project?.nameToShow
		};
	});

	$: if (subheader && isVisible) {
		// Limpiar instancia anterior si existe
		if (textScrambleInstance) {
			textScrambleInstance.destroy();
		}
		textScrambleInstance = new TextScramble(subheader, content[0]);
		isVisible = false;
	}
	
	// Cleanup al desmontar el componente
	onDestroy(() => {
		if (textScrambleInstance) {
			textScrambleInstance.destroy();
		}
	});
</script>

<svelte:window bind:innerWidth={width} />
<footer
	use:inview={{ rootMargin: '-50%', unobserveOnEnter: false }}
	on:inview_enter={() => {
		isFooterVisible.set(true);
		isVisible = true;
	}}
	on:inview_leave={() => {
		isFooterVisible.set(false);
		isVisible = false;
	}}
	class="snap-end w-full {width < 768
		? 'h-auto'
		: 'h-fit'} md:h-screen bg-color-black flex flex-col justify-between py-[1.25rem] px-[2.5rem] !z-50"
>
	<div
		class="font-clash text-color-white text-[24px] md:text-[2.5rem] leading-[2.8125rem] mx-auto mt-[2rem] md:mt-[4rem]"
	>
		Discover more
	</div>

	<div class="w-full md:w-[27.5625rem] mx-auto mt-[15px] mb-[44.75px]">
		<HomeNewsletter design="classic" />
	</div>

	<div
		class="h-full flex {width > 768
			? 'flex-row mt-[-166px]'
			: 'flex-col mt-[-1rem]'} items-center justify-center gap-[1.1875rem] md:gap-[2.5rem]"
	>
	{#each projectsData as projectData}
		<!-- <button class="relative group w-[280px] lg:w-[14.1875rem] lg:h-[14.1875rem]"> -->
			<a class="relative group w-full lg:w-[14.1875rem] lg:h-[14.1875rem]" href={projectData.projectUrl} data-sveltekit-reload>
				<img
					src={projectData.projectImage}
					alt="project"
					class="w-full h-full rounded-[0.9783rem] {width > 768
						? 'group-hover:rounded-[7.5rem]'
						: 'h-[100px]'} transition-all duration-300 object-cover"
				/>

				{#if width > 768}
					<img
						src={projectData.projectHover}
						alt="project"
						class="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[7.5rem]"
					/>
				{/if}

				<!-- {#if width < 768}
					<div class="w-full h-[1.6143rem] rounded-[3.9373rem] gray-gradient mt-[0.7087rem]">
						<p
							class="capitalize font-clash text-[0.875rem] leading-[1.5rem] text-left pl-[1.1875rem]"
						>
							{projectData.projectName}
						</p>
					</div>
				{/if} -->
			</a>
		<!-- </button> -->
	{/each}
	</div>

	<div
		class="{width < 768
			? 'mt-[3.25rem]'
			: 'w-full'} text-color-white flex flex-row justify-between relative font-robotoMono leading-snug tracking-tight font-normal text-[0.875rem] mb-[18px] w-full gap-2.5"
	>
		<div class="w-full">
			{#if width < 768}
				<img src={footerLogo} alt="Footer Logo" class="absolute left-1/2 -translate-x-1/2 w-[79px] h-[18px] mb-[0.5456rem]" />
			{/if}
<!-- 
			<p class="truncate capitalize" bind:this={subheader}>
				{content}
			</p>

			<p>© 2024</p> -->
		</div>
		{#if width > 768}
			<div class="pb-4">
				<img
					src={footerLogo}
					alt="Footer Logo"
					class="w-[100px] absolute left-[50%] ml-[-1.4375rem] hoverTransition"
				/>
			</div>
		{/if}
	</div>
</footer>
