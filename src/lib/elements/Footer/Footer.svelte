<script lang="ts">
	// @ts-nocheck

	import footerLogo from '$lib/assets/images/artdao-logo.webp';
	import { inview } from 'svelte-inview';
	import { EProjects } from '../../../constants/enums';
	import { projectsDetails } from '../../../data/Projects/projects';
	import { getProjectRefs } from '../../../utils/projectsRefs/getProjectRefs';
	import TextScramble from '../../../utils/strings/textScramble';
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
	class="snap-end w-full h-screen bg-color-black flex flex-col justify-between py-[1.25rem] px-[2.5rem] !z-50"
>
	<div class="font-clash text-[2.5rem] leading-[2.8125rem] mx-auto mt-[4rem]">Discover more</div>

	<div class="h-full flex flex-row items-center justify-center gap-[2.5rem]">
		{#each refs as ref}
			<button class="relative group">
				<a href={projectsDetails.find((project) => project.name === ref)?.url}>
					<img
						src={projectsDetails.find((project) => project.name === ref)?.image}
						alt="project"
						class="w-[14.1875rem] h-[14.1875rem] rounded-[0.9783rem] group-hover:rounded-[7.5rem] transition-all duration-300"
					/>
					<img
						src={projectsDetails.find((project) => project.name === ref)?.hover}
						alt="project"
						class="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[7.5rem]"
					/>
				</a>
			</button>
		{/each}
	</div>

	<div
		class="flex flex-row justify-between relative font-robotoMono leading-snug tracking-tight font-normal text-[0.875rem] mb-[18px] w-full gap-2.5"
	>
		<div>
			<p class="truncate capitalize" bind:this={subheader}>{content}</p>
			<p>© 2024</p>
		</div>
		<img
			src={footerLogo}
			alt="Footer Logo"
			class="w-[100px] h-[23px] absolute left-[50%] ml-[-1.4375rem] hoverTransition"
		/>
	</div>
</footer>
