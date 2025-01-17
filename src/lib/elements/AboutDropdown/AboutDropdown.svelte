<script lang="ts">
	import linkIcon from '$lib/assets/images/about-dropdown-link-icon.webp';
	import dottedLine from '$lib/assets/images/dotted-line-about-dropdown.webp';
	import infoCircle from '$lib/assets/images/Ellipse 30.webp';
	import infoCircleWhite from '$lib/assets/images/Ellipse-white.webp';
	import { slide } from 'svelte/transition';
	import { type IAboutDropdown } from './interfaces';

	export let aboutDropdown: IAboutDropdown;
	export let isWhite = false;

	let visible: boolean = false;

	const toggleVisibility = () => {
		visible = !visible;
	};

	let isTransitionEnd = false;

	const hasInfo =
		aboutDropdown.about ||
		aboutDropdown.date ||
		aboutDropdown.link ||
		aboutDropdown.location ||
		aboutDropdown.aboutArray;
</script>

<button
	on:click={toggleVisibility}
	class="absolute z-40 top-5 laptopM:top-0 mt-[2.5%] {!hasInfo ? 'cursor-default' : ''} w-full"
>
	<div
		class="flex flex-col gap-2.5 w-full sm:w-[20rem] rounded-20 {!isWhite
			? 'gray-gradient'
			: 'gray-gradient-2'} p-5 absolute z-40 top-0 mt-[2.5%]"
	>
		{#if aboutDropdown.artist}
			<div class="flex flex-col items-start gap-[0.3125rem]">
				<h1
					class="font-clash text-[0.875rem] leading-[0.875rem] tracking-[1px] capitalize self-start font-medium"
				>
					{aboutDropdown.name}
				</h1>

				<div class="flex flex-row justify-between w-full">
					<h1
						class="font-robotoMono text-[12px] leading-[1rem] tracking-[0.0625rem] capitalize self-start"
					>
						{aboutDropdown.artist ?? ''}
					</h1>

					{#if hasInfo}
						<div class="flex flex-row gap-1 items-center">
							<p class="font-robotoMono text-[10px] leading-[1rem] tracking-[0.05rem]">INFO</p>
							<img
								src={!visible ? infoCircle : infoCircleWhite}
								alt="info"
								class="w-[0.5rem] h-[0.5rem]"
							/>
						</div>
					{/if}
				</div>
			</div>
		{:else}
			<div class="flex flex-row justify-between w-full">
				<h1
					class="font-clash text-[0.875rem] leading-[0.875rem] tracking-[1.6px] capitalize self-start"
				>
					{aboutDropdown.name}
				</h1>

				{#if hasInfo}
					<div class="flex flex-row gap-1 items-center">
						<p class="font-robotoMono text-[10px] leading-[1rem] tracking-[0.05rem]">INFO</p>
						<img
							src={!visible ? infoCircle : infoCircleWhite}
							alt="info"
							class="w-[0.5rem] h-[0.5rem]"
						/>
					</div>
				{/if}
			</div>
		{/if}

		{#if visible && hasInfo}
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

				{#if aboutDropdown.about || aboutDropdown.aboutArray}
					<div
						class="flex flex-col gap-[0.5rem] justify-start items-start font-robotoMono font-light text-[12px] leading-[1.125rem] tracking-[0.0625rem] max-h-[25.5rem] {visible &&
						isTransitionEnd
							? 'overflow-y-auto'
							: ''}"
					>
						<p class="font-robotoMono">About</p>
						{#if aboutDropdown.about}
							<p class="text-left font-robotoMono">{aboutDropdown.about}</p>
						{/if}

						{#if aboutDropdown.aboutArray}
							{#each aboutDropdown.aboutArray as array}
								<p class="text-left font-robotoMono max-w-[265px]">{array}</p>
							{/each}
						{/if}
					</div>
				{/if}
			</div>
		{/if}
	</div>
</button>
