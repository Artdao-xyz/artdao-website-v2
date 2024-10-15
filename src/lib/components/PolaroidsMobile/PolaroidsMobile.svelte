<script lang="ts">
	import type { IPolaroidImage } from '$lib/elements/Polaroids/interface';

	export let polaroidImages: IPolaroidImage[];
</script>

<div
	class="h-screen scroll-panel bg-color-white flex flex-row sm:hidden flex-grow overflow-x-auto items-center p-5 gap-5"
>
	{#each polaroidImages as polaroidImage}
		<div class="flex flex-col w-full flex-shrink-0 gap-10 overflow-x-auto snap-center">
			<div class="w-full flex items-end sm:h-[25%]">
				<h1
					class="text-color-black text-[2rem] sm:text-[3rem] macBook:text-[3.5rem] xlScreen:text-[4rem] font-semibold sm:leading-[5rem] tracking-[0.065rem] uppercase font-neue w-full text-center"
				>
					&gt; {polaroidImage.quote} &lt;
				</h1>
			</div>

			<div
				class="w-full h-fit p-5 bg-color-white rounded-30 border border-color-black flex flex-col flex-shrink-0 flex-grow-0 justify-between"
			>
				<img src={polaroidImage.image} alt="Gallery" class="h-auto w-full" />
				{#if polaroidImage.name && polaroidImage.description}
					<div
						class="flex flex-col text-color-black font-robotoMono text-[0.625rem] bigScreen:text-[1rem] font-semibold leading-4 bigScreen:leading-6"
					>
						<p>{polaroidImage.name}</p>
						<p>{polaroidImage.description}</p>
					</div>
				{/if}
			</div>
		</div>
	{/each}
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
