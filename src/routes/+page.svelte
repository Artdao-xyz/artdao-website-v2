<script lang="ts">
	import { preloadedHome, preloadedRave } from './store';

	import HomeMenu from '$lib/components/HomeMenu/HomeMenu.svelte';
	import Loading from '$lib/components/Loading/Loading.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import HomeImgRectV from '$lib/elements/HomeImgRectV/HomeImgRectV.svelte';
	import HomeImgSquare from '$lib/elements/HomeImgSquare/HomeImgSquare.svelte';
	import { onMount } from 'svelte';
	import { homeImages, homeImagesMobile } from '../data/HomeImgLayout';
	import { preloadFull } from '../utils/preloadImages';

	let images: string[][];
	let lastImages: string[][];

	onMount(() => {
		if (images && lastImages) {
			return;
		}

		preloadFull();

		$preloadedHome.then((array) => (images = array));
		$preloadedRave.then((array) => (lastImages = array));
	});
</script>

{#if !images && !lastImages}
	<Loading />
{:else}
	<div class="flex flex-col items-center justify-center relative w-full h-full">
		<div class="bg-color-black p-2 w-full h-full flex flex-col sm:flex-row gap-[14px]">
			<div class="w-full sm:min-w-[23.125rem] sm:max-w-[370px] sm:w-home-content-width">
				<div class="static sm:fixed h-full width-full max-w-[inherit]">
					<HomeMenu />
				</div>
			</div>

			<div class="flex-col gap-[14px] hidden sm:flex">
				<div class="flex flex-row w-full gap-[14px]">
					<div class="flex flex-col gap-[14px] w-1/2">
						<a href={homeImages[0].route} class="w-full group relative">
							<HomeImgSquare image={images[0][0]} />
							<HomeImgSquare
								image={images[1][0]}
								className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							/>
						</a>
						<a href={homeImages[1].route} class="w-full group relative">
							<HomeImgSquare image={images[0][1]} />
							<HomeImgSquare
								image={images[1][1]}
								className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							/>
						</a>
					</div>
					<div class="w-1/2">
						<a href={homeImages[2].route} class="w-full group relative">
							<HomeImgRectV image={images[0][2]} />
							<HomeImgRectV
								image={images[1][2]}
								className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							/>
						</a>
					</div>
				</div>

				<div class="w-full flex gap-[14px] flex-col">
					<div class="flex flex-col sm:flex-row gap-[14px] w-full">
						<a href={homeImages[3].route} class="w-full group relative">
							<HomeImgSquare image={images[0][3]} />
							<HomeImgSquare
								image={images[1][3]}
								className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							/>
						</a>
						<a href={homeImages[4].route} class="w-full group relative">
							<HomeImgSquare image={images[0][4]} />
							<HomeImgSquare
								image={images[1][4]}
								className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							/>
						</a>
					</div>
					<a href={homeImages[5].route} class="w-full group relative">
						<HomeImgRectV image={images[0][5]} />
						<HomeImgRectV
							image={images[1][5]}
							className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						/>
					</a>
				</div>

				<div class="w-full flex gap-[14px] flex-col">
					<div class="flex flex-col sm:flex-row gap-[14px] w-full">
						<a href={homeImages[6].route} class="w-full group relative">
							<HomeImgSquare image={images[0][6]} />
							<HomeImgSquare
								image={images[1][6]}
								className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							/>
						</a>
						<a href={homeImages[7].route} class="w-full group relative">
							<HomeImgSquare image={images[0][7]} />
							<HomeImgSquare
								image={images[1][7]}
								className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							/>
						</a>
					</div>
					<a href={homeImages[8].route} class="w-full group relative">
						<HomeImgRectV image={images[0][8]} />
						<HomeImgRectV
							image={images[1][8]}
							className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						/>
					</a>
				</div>
			</div>

			<div class="flex flex-col gap-[10px] sm:hidden">
				<a href={homeImagesMobile[0].route} class="w-full">
					<HomeImgSquare image={images[2][0]} />
				</a>
				<a href={homeImagesMobile[1].route} class="w-full">
					<HomeImgSquare image={images[2][1]} />
				</a>
				<a href={homeImagesMobile[2].route}>
					<HomeImgRectV image={images[2][2]} />
				</a>
				<a href={homeImagesMobile[3].route} class="w-full">
					<HomeImgSquare image={images[2][3]} />
				</a>
				<a href={homeImagesMobile[4].route} class="w-full">
					<HomeImgSquare image={images[2][4]} />
				</a>
				<a href={homeImagesMobile[5].route}>
					<HomeImgRectV image={images[2][5]} />
				</a>
				<a href={homeImagesMobile[6].route} class="w-full">
					<HomeImgSquare image={images[2][6]} />
				</a>
				<a href={homeImagesMobile[7].route} class="w-full">
					<HomeImgSquare image={images[2][7]} />
				</a>
				<a href={homeImagesMobile[8].route}>
					<HomeImgRectV image={images[2][8]} />
				</a>
			</div>
		</div>

		<div class="hidden sm:block">
			<HomeIcon />
		</div>
	</div>
{/if}
