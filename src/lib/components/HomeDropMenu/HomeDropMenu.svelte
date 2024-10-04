<script lang="ts">
	import dottedLine from '$lib/assets/images/dotted-line.png';
	import menuLine from '$lib/assets/images/menu-line.png';

	import HomeDropMenuDetails from '$lib/elements/HomeDropMenuDetails/HomeDropMenuDetails.svelte';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	export let dropNumber: string;
	export let dropName: string;
	export let dropLogo: string;
	export let dropDate: string[];
	export let texts: string[];
	export let names: string[];
	export let bgImage: string;
	let isOpen: boolean = false;

	const [send, receive] = crossfade({
		duration: 400,
		easing: quintOut
	});
</script>

<div
	style={`background-image: url("${bgImage}"); background-size: cover; background-position: center;`}
	class="w-full h-[100dvh] p-[2.5rem] relative"
>
	<button on:click={() => (isOpen = !isOpen)}>
		{#if !isOpen}
			<div
				id="small"
				in:send={{ key: 'small' }}
				out:receive={{ key: 'big' }}
				class="flex flex-col w-[23.125rem] h-[11.375rem] gray-gradient rounded-20 py-[0.9375rem] px-[1.375rem] backdrop-filter backdrop-blur-[2.5rem] absolute top-[2.5rem]"
			>
				<HomeDropMenuDetails {dropNumber} {dropName} {dropLogo} {dropDate} />

				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] place-self-center mt-7" />
			</div>
		{:else}
			<div
				id="big"
				in:send={{ key: 'big' }}
				out:receive={{ key: 'small' }}
				class="flex flex-col gap-2.5 w-[23.125rem] h-home-content-drop-open-height gray-gradient rounded-20 py-[0.9375rem] px-[1.375rem] backdrop-filter backdrop-blur-[2.5rem] absolute top-[2.5rem]"
			>
				<HomeDropMenuDetails {dropNumber} {dropName} {dropLogo} {dropDate} />

				<img src={dottedLine} alt="Dotted Line" />

				<div class="w-full h-[2.5625rem] flex flex-col place-content-center">
					<p class="font-clash text-[0.9375rem] font-semibold leading-[2.1875rem]">COMING SOON</p>
				</div>

				<img src={dottedLine} alt="Dotted Line" />

				<div class="w-full] h-[12.75rem] py-[1.4375rem] px-[1.3125rem] text-left">
					{#each texts as text}
						<p class="font-clash leading-[1.25rem] text-sm font-medium">{text}</p>
					{/each}
				</div>

				<img src={dottedLine} alt="Dotted Line" />

				<div
					class="h-[6.3125rem] w-[17.5625rem] flex flex-col justify-start gap-[0.5625rem] py-[1.4375rem] px-[1.3125rem]"
				>
					{#each names as name, i}
						<p
							class="font-clash text-sm h-[1.125rem] font-medium leading-[1.75rem] tracking-[-0.0143rem] flex flex-row"
						>
							{name}
						</p>
						{#if i !== names.length - 1}
							<img src={dottedLine} alt="Dotted Line" />
						{/if}
					{/each}
				</div>

				<img src={menuLine} alt="Menu Line" class="w-[8.25rem] place-self-center mt-7" />
			</div>
		{/if}
	</button>
</div>
