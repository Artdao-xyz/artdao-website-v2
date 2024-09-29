<script lang="ts">
	import dottedLine from '$lib/assets/images/dotted-line.png';
	import menuLine from '$lib/assets/images/menu-line.png';

	import HomeDropMenuDetails from '$lib/elements/HomeDropMenuDetails/HomeDropMenuDetails.svelte';
	import { linear } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';

	export let dropNumber: string;
	export let dropName: string;
	export let dropLogo: string;
	export let dropDate: string[];
	export let texts: string[];
	export let names: string[];
	export let bgImage: string;
	let isOpen: boolean = false;
</script>

<div
	style={`background-image: url("${bgImage}"); background-size: cover; background-position: center;`}
	class="w-full h-[100dvh] p-[2.5rem]"
>
	<button on:click={() => (isOpen = !isOpen)} class="backdrop-filter backdrop-blur-[2.5rem]">
		{#if !isOpen}
			<div
				in:fade={{}}
				out:slide={{ duration: 10 }}
				class="flex flex-col w-home-content-width h-home-content-drop-closed-height gray-gradient rounded-20 py-[0.9375rem] px-[1.375rem]"
			>
				<HomeDropMenuDetails {dropNumber} {dropName} {dropLogo} {dropDate} />

				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] place-self-center mt-2.5" />
			</div>
		{:else}
			<div
				in:slide={{ duration: 900, easing: linear }}
				out:slide={{ duration: 300 }}
				class="flex flex-col gap-2.5 w-home-content-width h-home-content-drop-open-height gray-gradient rounded-20 py-[0.9375rem] px-[1.375rem]"
			>
				<HomeDropMenuDetails {dropNumber} {dropName} {dropLogo} {dropDate} />

				<img src={dottedLine} alt="Dotted Line" />

				<div class="w-[17.5625rem] h-[2.5625rem] flex flex-col place-content-center">
					<p class="font-clash text-[0.9375rem] font-semibold leading-[2.1875rem]">COMING SOON</p>
				</div>

				<img src={dottedLine} alt="Dotted Line" />

				<div class="w-[17.5625rem] h-[12.75rem] py-[1.4375rem] px-[1.3125rem] text-left">
					{#each texts as text}
						<p class="font-clash leading-[1.25rem] text-[0.75rem] font-medium">{text}</p>
					{/each}
				</div>

				<img src={dottedLine} alt="Dotted Line" />

				<div
					class="h-[6.3125rem] w-[17.5625rem] flex flex-col justify-start gap-[0.5625rem] py-[1.4375rem] px-[1.3125rem]"
				>
					{#each names as name, i}
						<p
							class="font-clash text-[0.75rem] h-[1.125rem] font-medium leading-[1.75rem] tracking-[-0.0143rem] flex flex-row"
						>
							{name}
						</p>
						{#if i !== names.length - 1}
							<img src={dottedLine} alt="Dotted Line" />
						{/if}
					{/each}
				</div>

				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] place-self-center mt-3.5" />
			</div>
		{/if}
	</button>
</div>
