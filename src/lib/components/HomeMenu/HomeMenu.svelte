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

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />
<div class="flex flex-col gap-2">
	<a href="/drops" class="hidden sm:block">
		<img src={blackToggle} alt="Go to Drops" class="w-[5.9063rem] cursor-pointer mb-[-0.5rem]" />
	</a>

	<HomeMobileMenu section="home" />

	<div
		class="sm:flex flex-col gap-2 hidden {width >= 1280 && width < 1600
			? '!overflow-y-scroll'
			: ''}"
	>
		<HomeTop logo={artDaoLogo} {homeParagraphs} />
		<div class="flex flex-row sm:flex-col gap-2">
			<HomeDrop dropNumber={'000'} dropName={'psipsikoko'} dropLogo={hammer} />
			<HomeMap title={'bridging the global & hyperlocal'} logo={mapLogo} />
		</div>
		<HomeNewsletter />
		<div class="flex gap-[2.375rem] h-full w-full">
			<HomeSocial icon={discordIcon} />
			<HomeSocial icon={instagramIcon} />
			<HomeSocial icon={xIcon} />
		</div>
	</div>

	<div class="flex flex-col sm:hidden">
		<div class="flex flex-col gap-2 w-full py-5">
			<div class="flex flex-col gap-2">
				<button class="bg-color-dark rounded-20 py-2.5 px-5" on:click={toggleVisibility}>
					<img src={artDaoLogo} alt="ArtDao Logo" class="w-[7.5389rem] h-[1.8125rem] mx-auto" />

					{#if visible}
						<div
							transition:slide={{ axis: 'y', duration: 900 }}
							class="flex flex-col text-left bg-color-dark rounded-20 justify-start gap-4 text-[1.125rem] font-normal font-clash leading-5 text-color-white py-5 sm:py-[1.875rem] px-0 sm:px-5"
						>
							{#each homeParagraphs as homeParagraph}
								<p>{homeParagraph}</p>
							{/each}
						</div>
					{/if}
				</button>
				<div>
					{#if visible}
						<div transition:slide={{ axis: 'y', duration: 900 }} class="flex flex-col gap-2">
							<HomeDrop dropNumber={'000'} dropName={'psipsikoko'} dropLogo={hammer} />
							<HomeMap title={'bridging the global & hyperlocal'} logo={mapLogo} />
							<HomeNewsletter />
							<div class="flex gap-[2.375rem] h-full w-full">
								<HomeSocial icon={discordIcon} />
								<HomeSocial icon={instagramIcon} />
								<HomeSocial icon={xIcon} />
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
