<script lang="ts">
	import artDaoLogo from '$lib/assets/images/artdao-logo.png';
	import blackToggle from '$lib/assets/images/black-toggle.png';
	import discordIcon from '$lib/assets/images/discord-icon.png';
	import hammer from '$lib/assets/images/drops/psipsikoko-hammer.png';
	import instagramIcon from '$lib/assets/images/instagram-icon.png';
	import mapLogo from '$lib/assets/images/map.png';
	import xIcon from '$lib/assets/images/x-icon.png';
	import HomeDrop from '$lib/elements/HomeDrop/HomeDrop.svelte';
	import HomeMap from '$lib/elements/HomeMap/HomeMap.svelte';
	import HomeNewsletter from '$lib/elements/HomeNewsletter/HomeNewsletter.svelte';
	import HomeSocial from '$lib/elements/HomeSocial/HomeSocial.svelte';
	import HomeTop from '$lib/elements/HomeTop/HomeTop.svelte';
	import { slide } from 'svelte/transition';
	import { homeParagraphs } from '../../../data/HomeTop';
	import HomeMobileMenu from '../HomeMobileMenu/HomeMobileMenu.svelte';

	let visible: boolean = false;

	const toggleVisibility = () => {
		visible = !visible;
	};
</script>

<div class="flex flex-col gap-2 h-100dvh max-h-[59rem]">
	<a href="/drops" class="hidden sm:block">
		<img src={blackToggle} alt="Go to Drops" class="w-[5.9063rem] cursor-pointer mb-[-0.5rem]" />
	</a>

	<HomeMobileMenu />

	<div class="sm:flex flex-col gap-2 hidden">
		<HomeTop logo={artDaoLogo} {homeParagraphs} />
		<div class="flex flex-row sm:flex-col gap-2">
			<HomeDrop dropNumber={'000'} dropName={'psipsikoko'} dropLogo={hammer} />
			<HomeMap title={'bridging the global & hyperlocal'} logo={mapLogo} />
		</div>
		<HomeNewsletter route="" />
		<div class="flex gap-[2.375rem] h-full w-full">
			<HomeSocial icon={discordIcon} />
			<HomeSocial icon={instagramIcon} />
			<HomeSocial icon={xIcon} />
		</div>
	</div>

	<button class="flex flex-col sm:hidden" on:click={toggleVisibility}>
		<div class="flex flex-col gap-2 w-full p-5">
			<div class="bg-color-dark rounded-20 p-5">
				<img src={artDaoLogo} alt="ArtDao Logo" class="w-[13.5625rem] h-[3.0931rem]" />
			</div>

			{#if visible}
				<div transition:slide={{ axis: 'y', duration: 900 }} class="flex flex-col gap-2">
					<div
						class="flex flex-col text-left bg-color-dark rounded-20 justify-start gap-4 text-sm font-medium font-clash leading-5 text-color-white py-[1.875rem] px-5"
					>
						{#each homeParagraphs as homeParagraph}
							<p>{homeParagraph}</p>
						{/each}
					</div>
					<div class="flex flex-row gap-2 text-left">
						<HomeDrop dropNumber={'000'} dropName={'psipsikoko'} dropLogo={hammer} />
						<HomeMap title={'bridging the global & hyperlocal'} logo={mapLogo} />
					</div>
					<HomeNewsletter route="" />
					<div class="flex gap-[2.375rem] h-full w-full">
						<HomeSocial icon={discordIcon} />
						<HomeSocial icon={instagramIcon} />
						<HomeSocial icon={xIcon} />
					</div>
				</div>
			{/if}
		</div>
	</button>
</div>
