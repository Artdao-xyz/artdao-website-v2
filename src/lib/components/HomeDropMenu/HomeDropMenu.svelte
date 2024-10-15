<script lang="ts">
	import dottedLine from '$lib/assets/images/dotted-line-drop.png';
	import infoCircle from '$lib/assets/images/Ellipse 30.png';
	import infoCircleWhite from '$lib/assets/images/Ellipse-white.png';
	import whiteToggle from '$lib/assets/images/white-toggle.png';

	import HomeDropMenuDetails from '$lib/elements/HomeDropMenuDetails/HomeDropMenuDetails.svelte';
	import { slide } from 'svelte/transition';
	import HomeMobileMenu from '../HomeMobileMenu/HomeMobileMenu.svelte';

	export let dropNumber: string;
	export let dropName: string;
	export let dropLogo: string;
	export let dropDate: string[];
	export let texts: string[];
	export let names: string[];
	export let bgImage: string;

	let visible: boolean = false;

	const toggleVisibility = () => {
		visible = !visible;
	};

	let isTransitionEnd = false;
</script>

<div
	style={`background-image: url("${bgImage}"); background-size: cover; background-position: center;`}
	class="w-full h-[100dvh] p-2 relative"
>
	<HomeMobileMenu toggle="white" section="drop" />

	<a href="/" class="hidden sm:block">
		<img src={whiteToggle} alt="Go to Drops" class="w-[5.9063rem] cursor-pointer mb-[-0.5rem]" />
	</a>

	<button on:click={toggleVisibility}>
		<div
			class="dropMenu font-robotoMono tracking-[0.0625rem] text-[0.8rem] sm:text-[0.625rem] flex flex-col items-start gap-2.5 sm:w-[20rem] gray-gradient rounded-20 px-[1.25rem] pt-[0.9375rem] pb-[1.25rem] backdrop-filter backdrop-blur-[2.5rem] absolute top-[4rem]"
		>
			<div class="flex flex-row justify-between w-full items-end">
				<HomeDropMenuDetails {dropNumber} {dropName} {dropLogo} {dropDate} />

				<div class="flex flex-row gap-1 items-center">
					<p class="font-robotoMono text-[10px] leading-[1rem] tracking-[0.05rem]">INFO</p>
					<img
						src={!visible ? infoCircle : infoCircleWhite}
						alt="info"
						class="w-[0.5rem] h-[0.5rem]"
					/>
				</div>
			</div>

			{#if visible}
				<div
					class="flex flex-col gap-2.5 items-start"
					transition:slide={{ axis: 'y', duration: 600 }}
					on:introend={() => (isTransitionEnd = true)}
					on:outrostart={() => (isTransitionEnd = false)}
				>
					<img src={dottedLine} alt="Dotted Line" class="w-full" />

					<p class="leading-[1.125rem]">COMING SOON</p>

					<img src={dottedLine} alt="Dotted Line" class="w-full" />

					<p class="leading-[1.125rem]">Artists</p>

					<div class="flex flex-col justify-start gap-[0.5625rem] px-[1.3125rem] pb-[0.25rem]">
						{#each names as name, i}
							<p class="h-[1.125rem] font-medium leading-[1.75rem] flex flex-row">
								{name}
							</p>
							{#if i !== names.length - 1}
								<img src={dottedLine} alt="Dotted Line" />
							{/if}
						{/each}
					</div>

					<img src={dottedLine} alt="Dotted Line" class="w-full" />

					<p class="leading-[1.125rem]">About</p>

					<div class="w-full text-left">
						{#each texts as text}
							<p class="leading-[1.25rem] font-medium">{text}</p>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</button>
</div>

<style>
	@media (max-width: 639px) {
		.dropMenu {
			width: calc(100% - 16px);
		}
	}

	@media (min-width: 640px) {
		.dropMenu {
			width: 20rem;
		}
	}
</style>
