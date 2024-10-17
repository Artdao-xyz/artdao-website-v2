<script lang="ts">
	import type { IPolaroidImage } from '$lib/elements/Polaroids/interface';

	export let polaroidImages: IPolaroidImage[];
	export let route: string;
</script>

<div class="snap-start h-screen sm:hidden flex flex-col justify-between bg-color-white" id={route}>
	<div
		class="scroll-panel flex flex-row flex-grow overflow-x-auto items-center px-5 pt-[3.75rem] gap-5 max-h-[37.5rem] h-full"
	>
		{#each polaroidImages as polaroidImage}
			<div
				class="flex flex-col w-full flex-shrink-0 gap-[1.875rem] snap-center"
				id={polaroidImage.image}
			>
				<div class="w-full flex items-end">
					<h1
						class="text-color-black text-[1.75rem] leading-[1.75rem] font-semibold tracking-[0.0244rem] uppercase font-neue w-full text-center"
					>
						&gt; {polaroidImage.quote} &lt;
					</h1>
				</div>

				<div
					class="w-fit h-auto p-5 bg-color-white rounded-30 border border-color-black flex flex-col flex-shrink-0 flex-grow-0 justify-between"
				>
					<img src={polaroidImage.image} alt="Gallery" class="h-auto w-full" />
					{#if polaroidImage.name && polaroidImage.description}
						<div
							class="flex flex-col text-color-black font-robotoMono text-[0.625rem] font-semibold leading-4"
						>
							<p>{polaroidImage.name}</p>
							<p>{polaroidImage.description}</p>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<div class="flex flex-row gap-[0.625rem] pb-[1.25rem] justify-center">
		{#each polaroidImages as polaroidImage}
			<button
				on:click={() =>
					document.getElementById(`${polaroidImage.image}`)?.scrollIntoView({
						behavior: 'smooth',
						block: 'nearest',
						inline: 'start'
					})}
			>
				<img
					src={polaroidImage.image}
					alt="Gallery"
					class="object-cover hover:scale-105 rounded-[0.625rem] w-[2.4375rem] h-[3.625rem]"
				/>
			</button>
		{/each}
	</div>
</div>

<style>
	.scroll-panel {
		width: 100%;
		overflow: auto;
		outline: none;
		overflow-y: hidden;
		-ms-overflow-style: scroll;
		scrollbar-width: none;
		touch-action: none;
		user-select: none;
		overflow-x: scroll;
		overscroll-behavior-x: contain;
		scroll-snap-type: x mandatory;
	}

	.scroll-panel::-webkit-scrollbar {
		display: none;
	}
</style>
