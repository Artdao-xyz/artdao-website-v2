<script lang="ts">
	import HomeImgRectH from '$lib/elements/HomeImgRectH/HomeImgRectH.svelte';
	import HomeImgRectV from '$lib/elements/HomeImgRectV/HomeImgRectV.svelte';
	import HomeImgSquare from '$lib/elements/HomeImgSquare/HomeImgSquare.svelte';
	import type { IHomeImage } from './interface';

	export let variant:
		| 'two-rect-h'
		| 'four-squares'
		| 'two-squares-left'
		| 'two-squares-right'
		| 'two-rect-v';

	export let images: IHomeImage[];
</script>

<div class="flex flex-row flex-wrap gap-5 mb-5 h-full w-full">
	{#if variant === 'two-rect-h'}
		{#each images as image}
			<a href={image.route}>
				<HomeImgRectH image={image.imageUrl} />
			</a>
		{/each}
	{:else if variant === 'four-squares'}
		{#each images as image}
			<HomeImgSquare image={image.imageUrl} />
		{/each}
	{:else if variant === 'two-squares-left'}
		<div class="flex flex-col gap-5">
			<a href={images[0].route}>
				<HomeImgSquare image={images[0].imageUrl} />
			</a>
			<a href={images[1].route}>
				<HomeImgSquare image={images[1].imageUrl} />
			</a>
		</div>
		<a href={images[2].route}>
			<HomeImgRectV image={images[2].imageUrl} />
		</a>
	{:else if variant === 'two-squares-right'}
		<a href={images[0].route}>
			<HomeImgRectV image={images[0].imageUrl} />
		</a>
		<div class="flex flex-col gap-5">
			<a href={images[1].route}>
				<HomeImgSquare image={images[1].imageUrl} />
			</a>
			<a href={images[2].route}>
				<HomeImgSquare image={images[2].imageUrl} />
			</a>
		</div>
	{:else if variant === 'two-rect-v'}
		{#each images as image}
			<a href={image.route}>
				<HomeImgRectV image={image.imageUrl} />
			</a>
		{/each}
	{/if}
</div>
