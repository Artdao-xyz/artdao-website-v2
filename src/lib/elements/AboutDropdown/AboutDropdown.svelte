<script lang="ts">
	import linkIcon from '$lib/assets/images/about-dropdown-link-icon.png';
	import dottedLine from '$lib/assets/images/dotted-line.png';
	import menuLine from '$lib/assets/images/menu-line.png';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { EAboutDropdownVariant, type IAboutDropdown } from './interfaces';

	export let aboutDropdown: IAboutDropdown;
	export let variant: EAboutDropdownVariant | undefined;

	const [send, receive] = crossfade({
		duration: 450,
		easing: quintOut
	});

	let isOpen: boolean = false;
</script>

<button on:click={() => (isOpen = !isOpen)} class="absolute z-40 top-0 mt-[2.5%]">
	{#if !isOpen}
		<div
			id="small"
			in:send={{ key: 'small' }}
			out:receive={{ key: 'big' }}
			class="flex flex-col w-[20rem] h-[7.75rem] rounded-20 p-5 pb-10 gap-2.5 gray-gradient absolute z-40 top-0 mt-[2.5%]"
		>
			<h1 class="font-clash text-[2.5rem] leading-[3.125rem] uppercase self-start">
				{aboutDropdown.name}
			</h1>

			<img src={menuLine} alt="Menu Line" class="w-[8.25rem] place-self-center" />
		</div>
	{:else if variant === EAboutDropdownVariant.LINK}
		<div
			id="big"
			in:send={{ key: 'big' }}
			out:receive={{ key: 'small' }}
			class="flex flex-col gap-[0.5rem] w-[20rem] h-[16.6875rem] rounded-20 gray-gradient p-5 pb-10 absolute z-40 top-0 mt-[2.5%]"
		>
			<h1 class="font-clash text-[2.5rem] leading-[3.125rem] uppercase self-start">
				{aboutDropdown.name}
			</h1>

			<img src={dottedLine} alt="Dotted Line" />

			<div
				class="flex items-center justify-between font-robotoMono font-light text-sm leading-[0.8125rem] tracking-[0.075rem] py-[9px] px-[14px]"
			>
				<p class="font-clash text-[0.75rem]">Artist</p>
				<p class="capitalize text-[0.75rem]">{aboutDropdown.artist}</p>
			</div>

			<img src={dottedLine} alt="Dotted Line" />

			<div
				class="flex items-center justify-between font-robotoMono font-light text-sm leading-[0.8125rem] tracking-[0.075rem] py-[9px] px-[14px]"
			>
				<p class="font-clash text-[0.75rem]">Link</p>
				<a href={aboutDropdown.link}><img src={linkIcon} alt="Link" class="w-[1.25rem]" /></a>
			</div>

			<img src={dottedLine} alt="Dotted Line" />

			<div class="h-full w-full flex justify-center items-end">
				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] justify-center" />
			</div>
		</div>
	{:else if variant === EAboutDropdownVariant.ARTIST}
		<div
			id="big"
			in:send={{ key: 'big' }}
			out:receive={{ key: 'small' }}
			class="flex flex-col gap-[0.5rem] w-[20rem] h-[13.75rem] rounded-20 gray-gradient p-5 pb-10 absolute z-40 top-0 mt-[2.5%]"
		>
			<h1 class="font-clash text-[2.5rem] leading-[3.125rem] uppercase self-start">
				{aboutDropdown.name}
			</h1>

			<img src={dottedLine} alt="Dotted Line" />

			<div
				class="flex items-center justify-between font-robotoMono font-light text-sm leading-[0.8125rem] tracking-[0.075rem] py-[9px] px-[14px]"
			>
				<p class="font-clash text-[0.75rem]">Artist</p>
				<p class="capitalize text-[0.75rem]">{aboutDropdown.artist}</p>
			</div>

			<img src={dottedLine} alt="Dotted Line" />

			<div class="h-full w-full flex justify-center items-end">
				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] justify-center" />
			</div>
		</div>
	{:else if variant === EAboutDropdownVariant.ABOUT}
		<div
			id="big"
			in:send={{ key: 'big' }}
			out:receive={{ key: 'small' }}
			class="flex flex-col gap-[0.5rem] w-[20rem] h-[16.6875rem] rounded-20 gray-gradient p-5 pb-10 absolute z-40 top-0 mt-[2.5%]"
		>
			<h1 class="font-clash text-[2.5rem] leading-[3.125rem] uppercase self-start">
				{aboutDropdown.name}
			</h1>

			<img src={dottedLine} alt="Dotted Line" />

			<div
				class="flex flex-col items-center justify-between font-robotoMono font-light text-sm leading-[0.8125rem] tracking-[0.075rem] py-[9px] px-[14px]"
			>
				<p class="font-clash text-[0.75rem]">About</p>
				<p class="capitalize text-[0.75rem]">{aboutDropdown.about}</p>
			</div>

			<div class="h-full w-full flex justify-center items-end">
				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] justify-center" />
			</div>
		</div>
	{:else if variant === EAboutDropdownVariant.FULL}
		<div
			id="big"
			in:send={{ key: 'big' }}
			out:receive={{ key: 'small' }}
			class="flex flex-col gap-[0.5rem] w-[20rem] h-[16.6875rem] rounded-20 gray-gradient p-5 pb-10 absolute z-40 top-0 mt-[2.5%]"
		>
			<h1 class="font-clash text-[2.5rem] leading-[3.125rem] uppercase self-start">
				{aboutDropdown.name}
			</h1>

			<img src={dottedLine} alt="Dotted Line" />

			<div
				class="flex items-center justify-between font-robotoMono font-light text-sm leading-[0.8125rem] tracking-[0.075rem] py-[9px] px-[14px]"
			>
				<p class="font-clash text-[0.75rem]">Date</p>
				<p class="capitalize text-[0.75rem]">{aboutDropdown.date}</p>
			</div>

			<img src={dottedLine} alt="Dotted Line" />

			<div
				class="flex items-center justify-between font-robotoMono font-light text-sm leading-[0.8125rem] tracking-[0.075rem] py-[9px] px-[14px]"
			>
				<p class="font-clash text-[0.75rem]">Location</p>
				<p class="capitalize text-[0.75rem]">{aboutDropdown.location}</p>
			</div>

			<img src={dottedLine} alt="Dotted Line" />

			<div
				class="flex flex-col items-center justify-between font-robotoMono font-light text-sm leading-[0.8125rem] tracking-[0.075rem] py-[9px] px-[14px]"
			>
				<p class="font-clash text-[0.75rem]">About</p>
				<p class="capitalize text-[0.75rem]">{aboutDropdown.about}</p>
			</div>

			<div class="h-full w-full flex justify-center items-end">
				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] justify-center" />
			</div>
		</div>
	{/if}
</button>
