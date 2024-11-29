<script lang="ts">
	// @ts-nocheck

	import footerLogo from '$lib/assets/images/artdao-logo.webp';
	import { inview } from 'svelte-inview';
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

	$: if (subheader) {
		new TextScramble(subheader, content[0]);
	}

	$: console.log('refs[0]', refs[0]);

	$: console.log(
		'Object.keys',
		Object.keys(projectsDetails).find((key) => projectsDetails[key] === 'DigitalMatter')
	);
</script>

<svelte:window bind:innerWidth={width} />
<footer
	use:inview={{ rootMargin: '-50%', unobserveOnEnter: false }}
	on:inview_enter={() => {
		isFooterVisible.set(true);
	}}
	on:inview_leave={() => {
		isFooterVisible.set(false);
	}}
	class="snap-end w-full h-fit md:h-screen bg-color-black flex flex-col justify-between py-[1.25rem] px-[2.5rem] !z-50"
>
	<div class="font-clash text-[1.125rem] md:text-[2.5rem] leading-[2.8125rem] mx-auto mt-[4rem]">
		Discover more
	</div>

	<div class="w-[18.5rem] md:w-[27.5625rem] mx-auto mt-[15px] mb-[44.75px]">
		<HomeNewsletter isFooter />
	</div>

	<div
		class="h-full flex {width > 768
			? 'flex-row mt-[10.625rem] '
			: 'flex-col items-center'}  justify-center gap-[1.1875rem] md:gap-[2.5rem]"
	>
		{#each refs as ref}
			<button class="relative group w-[10.1676rem] md:w-[14.1875rem] md:h-[14.1875rem]">
				<a href={projectsDetails.find((project) => project.name === ref)?.url}>
					<img
						src={projectsDetails.find((project) => project.name === ref)?.image}
						alt="project"
						class="w-full h-full rounded-[0.9783rem] {width > 768
							? 'group-hover:rounded-[7.5rem]'
							: 'h-[6.9459rem]'} transition-all duration-300 object-cover"
					/>

					{#if width > 768}
						<img
							src={projectsDetails.find((project) => project.name === ref)?.hover}
							alt="project"
							class="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[7.5rem]"
						/>
					{/if}

					{#if width < 768}
						<div class="w-full h-[1.6143rem] rounded-[3.9373rem] gray-gradient mt-[0.7087rem]">
							<p
								class="capitalize font-clash text-[0.875rem] leading-[1.5rem] text-left pl-[1.1875rem]"
							>
								{projectsDetails.find((project) => project.name === ref)?.nameToShow}
							</p>
						</div>
					{/if}
				</a>
			</button>
		{/each}
	</div>

	<div
		class=" {width < 768
			? 'h-full mt-[3.25rem]'
			: ''} flex flex-row justify-between relative font-robotoMono leading-snug tracking-tight font-normal text-[0.875rem] mb-[18px] w-full gap-2.5"
	>
		<div>
			{#if width < 768}
				<img src={footerLogo} alt="Footer Logo" class="w-[79px] h-[18px] mb-[0.5456rem]" />
			{/if}
			<p class="truncate capitalize" bind:this={subheader}>{content}</p>
			<p>© 2024</p>
		</div>
		{#if width > 768}
			<img
				src={footerLogo}
				alt="Footer Logo"
				class="w-[100px] h-[23px] absolute left-[50%] ml-[-1.4375rem] hoverTransition"
			/>
		{/if}
	</div>
</footer>
