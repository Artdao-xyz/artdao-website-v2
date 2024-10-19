<script lang="ts">
	import type { IGalleryImage } from '$lib/elements/ArtworkContainer/interfaces';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { onDestroy, onMount, tick } from 'svelte';
	import { EColorVariant } from '../../../constants/enums';

	export let galleryImages: IGalleryImage[];

	export const stretchFirst = false,
		gridGap = '0.5em',
		colWidth = 'minmax(Min(20em, 100%), 1fr)',
		items: never[] = []; // pass in data if it's dynamically updated
	let grids: any[] = [],
		masonryElement: any;

	const refreshLayout = async () => {
		grids.forEach(async (grid) => {
			/* get the post relayout number of columns */
			let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length;

			grid.items.forEach(
				(c: {
					getBoundingClientRect: () => { (): any; new (): any; height: any };
					dataset: { h: string | number };
				}) => {
					let new_h = c.getBoundingClientRect().height;

					if (new_h !== +c.dataset.h) {
						c.dataset.h = new_h;
						grid.mod++;
					}
				}
			);

			/* if the number of columns has changed */
			if (grid.ncol !== ncol || grid.mod) {
				/* update number of columns */
				grid.ncol = ncol;
				/* revert to initial positioning, no margin */
				grid.items.forEach((c: { style: { removeProperty: (arg0: string) => any } }) =>
					c.style.removeProperty('margin-top')
				);
				/* if we have more than one column */
				if (grid.ncol > 1) {
					grid.items.slice(ncol).forEach(
						(
							c: {
								getBoundingClientRect: () => { (): any; new (): any; top: any };
								style: { marginTop: string };
							},
							i: string | number
						) => {
							let prev_fin =
									grid.items[i].getBoundingClientRect().bottom /* bottom edge of item above */,
								curr_ini = c.getBoundingClientRect().top; /* top edge of current item */

							c.style.marginTop = `${prev_fin + grid.gap - curr_ini}px`;
						}
					);
				}

				grid.mod = 0;
			}
		});
	};

	const calcGrid = async (_masonryArr: any[]) => {
		await tick();
		if (_masonryArr.length && getComputedStyle(_masonryArr[0]).gridTemplateRows !== 'masonry') {
			grids = _masonryArr.map((grid: Element) => {
				return {
					_el: grid,
					gap: parseFloat(getComputedStyle(grid).gridRowGap),
					items: [...grid.childNodes].filter(
						(c: any) => c.nodeType === 1 && +getComputedStyle(c).gridColumnEnd !== -1
					),
					ncol: 0,
					mod: 0
				};
			});
			refreshLayout(); /* initial load */
		}
	};

	let _window: Window & typeof globalThis;
	onMount(() => {
		_window = window;
		_window.addEventListener('resize', refreshLayout, false); /* on resize */
	});
	onDestroy(() => {
		if (_window) {
			_window.removeEventListener('resize', refreshLayout, false); /* on resize */
		}
	});

	$: if (masonryElement) {
		calcGrid([masonryElement]);
	}

	$: if (items) {
		// update if items are changed
		masonryElement = masonryElement; // refresh masonryElement
	}
</script>

<SectionContainer colorVariant={EColorVariant.LIGHT} hasPadding={false}>
	<div class="sm:hidden grid--masonry h-full overflow-y-hidden" bind:this={masonryElement}>
		{#each galleryImages as galleryImage}
			<img
				src={galleryImage.image}
				alt="Gallery"
				class="block w-full rounded-20 cursor-pointer hover:scale-105"
			/>
		{/each}
	</div>
</SectionContainer>

<style>
	.grid--masonry {
		display: grid;
		grid-template-columns: repeat(2, 180px);
		justify-content: center;
		grid-gap: 10px;
		padding-top: 3.75rem;
		grid-template-rows: masonry;
	}
</style>
