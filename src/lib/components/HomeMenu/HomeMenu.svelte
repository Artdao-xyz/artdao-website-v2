<script lang="ts">
	import artDaoLogo from '$lib/assets/images/artdao-logo.png';
	import discordIcon from '$lib/assets/images/discord-icon.png';
	import hammer from '$lib/assets/images/hammer-min.png';
	import instagramIcon from '$lib/assets/images/instagram-icon.png';
	import mapLogo from '$lib/assets/images/map.png';
	import xIcon from '$lib/assets/images/x-icon.png';
	import HomeLogo from '$lib/elements/HomeLogo/HomeLogo.svelte';
	import HomeMap from '$lib/elements/HomeMap/HomeMap.svelte';
	import HomeNewsletter from '$lib/elements/HomeNewsletter/HomeNewsletter.svelte';
	import HomeSocial from '$lib/elements/HomeSocial/HomeSocial.svelte';
	import HomeTop from '$lib/elements/HomeTop/HomeTop.svelte';
	import { slide } from 'svelte/transition';
	import { homeParagraphs } from '../../../data/HomeTop';

	let visible: boolean = false;

	const toggleVisibility = () => {
		visible = !visible;
	};

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />
<div class="flex flex-col gap-2">
	<!-- <a href="/drops" class="hidden sm:block">
		<img src={blackToggle} alt="Go to Drops" class="w-[5.9063rem] cursor-pointer mb-[-0.5rem]" />
	</a> -->

	<!-- <HomeMobileMenu section="home" /> -->

	<div class="sm:flex flex-col gap-2 hidden">
		<HomeLogo logo={artDaoLogo} />
		<HomeTop {homeParagraphs} />
		<div class="flex flex-row sm:flex-col gap-2">
			<!-- <HomeDrop dropNumber={'000'} dropName={'psipsikoko'} dropLogo={hammer} /> -->
			<HomeMap title={'bridging the global & hyperlocal'} logo={mapLogo} />
		</div>
		<HomeNewsletter />
		<div class="flex gap-[2.375rem] h-full w-full">
			<HomeSocial icon={discordIcon} />
			<HomeSocial icon={instagramIcon} />
			<HomeSocial icon={xIcon} />
		</div>
		<!-- <div class="w-full h-full">
			<img src={homeHammer} alt="artdao" class="object-cover" />
		</div> -->
	</div>

	<div class="flex flex-col sm:hidden">
		<div class="flex flex-col gap-2 w-full pt-5">
			<div class="flex flex-col gap-2 {!visible ? 'mb-[-8px]' : ''}">
				<button class="gray-gradient rounded-20 py-2.5 px-5" on:click={toggleVisibility}>
					<img src={artDaoLogo} alt="ArtDao Logo" class="w-[7.5389rem] h-[1.8125rem] mx-auto" />

					{#if visible}
						<div
							transition:slide={{ axis: 'y', duration: 900 }}
							class="flex flex-col w-full gap-[1rem] justify-center items-center mt-[1rem]"
						>
							<img src={hammer} alt="hammer logo" class="w-[100px] self-center ml-[1rem]" />

							<div class="flex flex-col items-start">
								<h1
									class="text-[20px] font-clash font-medium leading-[20px] tracking-[0.234px] text-left"
								>
									Artists Helping Artists
								</h1>
								<p
									class="text-[16px] font-clash font-medium leading-[22.4px] tracking-[0.28px] uppercase w-full"
								>
									© 2024
								</p>
							</div>
						</div>
					{/if}
				</button>
				<div>
					{#if visible}
						<div transition:slide={{ axis: 'y', duration: 900 }} class="flex flex-col gap-2">
							<!-- <HomeDrop dropNumber={'000'} dropName={'psipsikoko'} dropLogo={hammer} /> -->
							<HomeLogo logo={artDaoLogo} />
							<HomeTop {homeParagraphs} />
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
