<script lang="ts">
	import artDaoLogo from '$lib/assets/images/artdao-logo.webp';
	import discordIcon from '$lib/assets/images/discord-icon.webp';
	import hammer from '$lib/assets/images/hammer-min.webp';
	import instagramIcon from '$lib/assets/images/instagram-icon.webp';
	import mapLogo from '$lib/assets/images/map.webp';
	import menuIcon from '$lib/assets/images/mobile-hamburguer.svg';
	import xIcon from '$lib/assets/images/x-icon.webp';
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

	let isAboutVisible: boolean = false;

	const toggleAboutOnClick = () => {
		isAboutVisible = !isAboutVisible;
	};

	const handleMenuIcon = () => {
		if (!isAboutVisible) {
			toggleVisibility();
			return;
		}

		toggleAboutOnClick();
		setTimeout(toggleVisibility, 100);
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
		<div class="flex flex-col gap-2 w-full">
			<div class="flex flex-col gap-2">
				<button class="">
					<div class="flex-row flex justify-between items-center py-2.5 px-5">
						<img src={artDaoLogo} alt="ArtDao Logo" class="w-[7.5389rem] h-[1.8125rem]" />

						<button on:click={handleMenuIcon}>
							<div
								class="rounded-[100px] {!visible
									? 'nav-gradient-selected'
									: 'nav-gradient-unselected'} w-[49px] h-[49px] flex flex-row items-center justify-center border border-color-dark"
							>
								<img src={menuIcon} alt="menu" class="" />
							</div>
						</button>
					</div>
				</button>
				<div>
					{#if visible}
						<div transition:slide={{ axis: 'y', duration: 900 }} class="flex flex-col gap-2">
							<!-- <HomeDrop dropNumber={'000'} dropName={'psipsikoko'} dropLogo={hammer} /> -->
							<div
								class="flex flex-col w-full gap-[1rem] py-[20px] justify-center items-center mt-[1rem] gray-gradient rounded-20"
							>
								<img src={hammer} alt="hammer logo" class="w-[100px] self-center ml-[1rem]" />

								<div class="flex flex-col items-center justify-center">
									<h1
										class="text-[20px] font-clash font-medium leading-[20px] tracking-[0.234px] text-left"
									>
										Artists Helping Artists
									</h1>
									<p
										class="text-[16px] font-clash font-medium leading-[22.4px] tracking-[0.28px] uppercase mx-auto"
									>
										© 2024
									</p>
								</div>
							</div>
							<button
								on:click={toggleAboutOnClick}
								class="w-full min-h-[3.875rem] sm:h-[2.625rem] gray-gradient rounded-20 px-5 flex items-center justify-center"
							>
								<div>
									<p
										class="font-clash leading-[1.375rem] tracking-[0.0375rem] text-[20px] font-medium h-fit py-5"
									>
										About

										{#if isAboutVisible}
											<div
												transition:slide={{ axis: 'y', duration: 500 }}
												class="flex flex-col justify-start text-left gap-4 text-[1rem] font-medium font-clash leading-5 text-color-white pt-2.5"
											>
												{#each homeParagraphs as homeParagraph}
													<p>{homeParagraph}</p>
												{/each}
											</div>
										{/if}
									</p>
								</div>
							</button>

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
