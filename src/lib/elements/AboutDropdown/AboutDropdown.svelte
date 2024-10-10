<script lang="ts">
	import linkIcon from '$lib/assets/images/about-dropdown-link-icon.png';
	import dottedLine from '$lib/assets/images/dotted-line-about-dropdown.png';
	import infoCircle from '$lib/assets/images/Ellipse 30.png';
	import infoCircleWhite from '$lib/assets/images/Ellipse-white.png';
	import { slide } from 'svelte/transition';
	import { type IAboutDropdown } from './interfaces';

	export let aboutDropdown: IAboutDropdown;

	let visible: boolean = false;

	const toggleVisibility = () => {
		visible = !visible;
	};

	let isTransitionEnd = false;
</script>

<button on:click={toggleVisibility} class="absolute z-40 top-0 mt-[2.5%]">
	<div
		class="flex flex-col gap-2.5 w-[20rem] rounded-20 gray-gradient p-5 absolute z-40 top-0 mt-[2.5%]"
	>
		<div class="flex flex-col items-start gap-[0.3125rem]">
			<h1
				class="font-clash text-[0.875rem] leading-[0.875rem] tracking-[1.6px] capitalize self-start"
			>
				{aboutDropdown.name}
			</h1>

			{#if aboutDropdown.artist}
				<div class="flex flex-row justify-between w-full">
					<h1
						class="font-robotoMono text-[12px] leading-[1rem] tracking-[0.0625rem] capitalize self-start"
					>
						{aboutDropdown.artist}
					</h1>

					<div class="flex flex-row gap-1 items-center">
						<p class="font-robotoMono text-[10px] leading-[1rem] tracking-[0.05rem]">INFO</p>
						<img
							src={!visible ? infoCircle : infoCircleWhite}
							alt="info"
							class="w-[0.5rem] h-[0.5rem]"
						/>
					</div>
				</div>
			{/if}
		</div>

		{#if visible}
			<div
				class="flex flex-col gap-2.5"
				transition:slide={{ axis: 'y', duration: 600 }}
				on:introend={() => (isTransitionEnd = true)}
				on:outrostart={() => (isTransitionEnd = false)}
			>
				<img src={dottedLine} alt="Dotted Line" />

				{#if aboutDropdown.date}
					<div class="flex flex-row justify-between w-full">
						<p
							class="font-robotoMono text-[12px] leading-[1.125rem] tracking-[0.0625rem] capitalize self-start"
						>
							Date
						</p>

						<p
							class="font-robotoMono text-[12px] leading-[1.125rem] tracking-[0.0625rem] capitalize self-start"
						>
							{aboutDropdown.date}
						</p>
					</div>

					<img src={dottedLine} alt="Dotted Line" />
				{/if}

				{#if aboutDropdown.location}
					<div class="flex flex-row justify-between w-full">
						<p
							class="font-robotoMono text-[12px] leading-[1.125rem] tracking-[0.0625rem] capitalize self-start"
						>
							Location
						</p>

						<p
							class="font-robotoMono text-[12px] leading-[1.125rem] tracking-[0.0625rem] capitalize self-start"
						>
							{aboutDropdown.location}
						</p>
					</div>

					<img src={dottedLine} alt="Dotted Line" />
				{/if}

				{#if aboutDropdown.link}
					<div class="flex items-center justify-between font-light text-sm h-[1.125rem]">
						<p class="font-robotoMono text-[12px] leading-[1.125rem] tracking-[0.0625rem]">Link</p>
						<a href={aboutDropdown.link} target="_blank" rel="noopener noreferrer"
							><img src={linkIcon} alt="Link" class="w-[1.25rem]" /></a
						>
					</div>

					<img src={dottedLine} alt="Dotted Line" />
				{/if}

				{#if aboutDropdown.about}
					<div
						class="flex flex-col gap-[0.5rem] justify-start items-start font-robotoMono font-light text-[12px] leading-[1.125rem] tracking-[0.0625rem] max-h-[25.5rem] {visible &&
						isTransitionEnd
							? 'overflow-y-auto'
							: ''}"
					>
						<p class="font-robotoMono">About</p>
						<p class="text-left font-robotoMono">{aboutDropdown.about}</p>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</button>
