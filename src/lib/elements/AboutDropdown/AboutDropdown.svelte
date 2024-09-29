<script lang="ts">
	import linkIcon from '$lib/assets/images/about-dropdown-link-icon.png';
	import dottedLine from '$lib/assets/images/dotted-line.png';
	import menuLine from '$lib/assets/images/menu-line.png';
	import { linear } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import type { IAboutDropdown } from './interfaces';

	export let aboutDropdown: IAboutDropdown;

	let isOpen: boolean = false;
</script>

<div class="absolute z-40 ml-[2%] mt-[5%]">
	<button on:click={() => (isOpen = !isOpen)}>
		{#if !isOpen}
			<div
				in:fade={{}}
				out:slide={{ duration: 10 }}
				class="flex flex-col w-[31.25rem] h-[7.125rem] rounded-20 py-5 px-10 bg-color-dark gap-5"
			>
				<h1 class="font-clash text-[2.5rem] leading-[3.125rem] uppercase self-start">
					{aboutDropdown.name}
				</h1>

				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] place-self-center" />
			</div>
		{:else}
			<div
				in:slide={{ duration: 900, easing: linear }}
				out:slide={{ duration: 300 }}
				class="flex flex-col gap-[0.5rem] w-[31.25rem] h-[16.5625rem] rounded-20 py-5 pb-5 px-10 bg-color-dark"
			>
				<h1 class="font-clash text-[2.5rem] leading-[3.125rem] uppercase self-start">
					{aboutDropdown.name}
				</h1>

				<img src={dottedLine} alt="Dotted Line" />

				<div
					class="flex items-center justify-between font-robotoMono font-light text-sm leading-[1.125rem] tracking-[0.075rem]"
				>
					<p class="font-clash text-[0.9375rem] leading-[2.1875rem]">Artist</p>
					<p class="capitalize">{aboutDropdown.artist}</p>
				</div>

				<img src={dottedLine} alt="Dotted Line" />

				<div
					class="flex items-center justify-between font-robotoMono font-light text-sm leading-[1.125rem] tracking-[0.075rem]"
				>
					<p class="font-clash text-[0.9375rem] leading-[2.1875rem]">Link</p>
					<a href={aboutDropdown.link}><img src={linkIcon} alt="Link" class="w-[1.25rem]" /></a>
				</div>

				<img src={dottedLine} alt="Dotted Line" />

				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] place-self-center mt-5" />
			</div>
		{/if}
	</button>
</div>
