<script lang="ts">
	import linkIcon from '$lib/assets/images/about-dropdown-link-icon.png';
	import dottedLine from '$lib/assets/images/dotted-line-about-dropdown.png';
	import infoCircle from '$lib/assets/images/Ellipse 30.png';
	import { slide } from 'svelte/transition';
	import { type IAboutDropdown } from './interfaces';

	export let aboutDropdown: IAboutDropdown;

	let visible: boolean = false;

	const toggleVisibility = () => {
		visible = !visible;
	};
</script>

<button on:click={toggleVisibility} class="absolute z-40 top-0 mt-[2.5%]">
	<div
		class="flex flex-col gap-2.5 w-[20rem] rounded-20 gray-gradient p-5 absolute z-40 top-0 mt-[2.5%]"
	>
		<div class="flex flex-col items-start gap-[0.3125rem]">
			<div class="flex flex-row justify-between w-full">
				<h1 class="font-clash text-[12px] leading-[0.875rem] capitalize self-start">
					{aboutDropdown.name}
				</h1>

				<div class="flex flex-row gap-1 items-center">
					<p class="font-robotoMono text-[0.5rem] leading-[1rem] tracking-[0.05rem]">INFO</p>
					<img src={infoCircle} alt="info" class="w-[0.5rem] h-[0.5rem]" />
				</div>
			</div>

			{#if aboutDropdown.artist}
				<h1
					class="font-robotoMono text-[0.625rem] leading-[1rem] tracking-[0.0625rem] capitalize self-start"
				>
					{aboutDropdown.artist}
				</h1>
			{/if}
		</div>

		{#if visible}
			<div class="flex flex-col gap-2.5" transition:slide={{ axis: 'y', duration: 600 }}>
				<img src={dottedLine} alt="Dotted Line" />

				{#if aboutDropdown.date}
					<div class="flex flex-row justify-between w-full">
						<p
							class="font-robotoMono text-[0.625rem] leading-[1.125rem] tracking-[0.0625rem] capitalize self-start"
						>
							Date
						</p>

						<p
							class="font-robotoMono text-[0.625rem] leading-[1.125rem] tracking-[0.0625rem] capitalize self-start"
						>
							{aboutDropdown.date}
						</p>
					</div>

					<img src={dottedLine} alt="Dotted Line" />
				{/if}

				{#if aboutDropdown.location}
					<div class="flex flex-row justify-between w-full">
						<p
							class="font-robotoMono text-[0.625rem] leading-[1.125rem] tracking-[0.0625rem] capitalize self-start"
						>
							Location
						</p>

						<p
							class="font-robotoMono text-[0.625rem] leading-[1.125rem] tracking-[0.0625rem] capitalize self-start"
						>
							{aboutDropdown.location}
						</p>
					</div>

					<img src={dottedLine} alt="Dotted Line" />
				{/if}

				<div class="flex items-center justify-between font-light text-sm h-[1.125rem]">
					<p class="font-robotoMono text-[0.625rem] leading-[1.125rem] tracking-[0.0625rem]">
						Link
					</p>
					<a href={aboutDropdown.link} target="_blank" rel="noopener noreferrer"
						><img src={linkIcon} alt="Link" class="w-[1.25rem]" /></a
					>
				</div>

				<img src={dottedLine} alt="Dotted Line" />

				<div
					class="flex flex-col gap-[0.5rem] justify-start items-start font-robotoMono font-light text-[0.625rem] leading-[1.125rem] tracking-[0.0625rem] max-h-[25.5rem] {!visible
						? 'overflow-y-auto'
						: ''}"
				>
					<p class="font-robotoMono">About</p>
					<p class="text-left font-robotoMono">{aboutDropdown.about}</p>
				</div>
			</div>
		{/if}
	</div>
</button>
