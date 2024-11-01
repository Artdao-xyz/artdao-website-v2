<script lang="ts">
	import HomeMenu from '$lib/components/HomeMenu/HomeMenu.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import HomeImgRectV from '$lib/elements/HomeImgRectV/HomeImgRectV.svelte';
	import HomeImgSquare from '$lib/elements/HomeImgSquare/HomeImgSquare.svelte';
	import { homeImages, homeImagesMobile } from '../data/HomeImgLayout';
</script>

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
					<a href={homeImages[0].route} class="w-full">
						<HomeImgSquare image={homeImages[0].imageUrl} />
					</a>
					<a href={homeImages[1].route} class="w-full">
						<HomeImgSquare image={homeImages[1].imageUrl} />
					</a>
				</div>
				<div class="w-1/2">
					<a href={homeImages[2].route}>
						<HomeImgRectV image={homeImages[2].imageUrl} />
					</a>
				</div>
			</div>

			<div class="w-full flex gap-[14px] flex-col">
				<div class="flex flex-col sm:flex-row gap-[14px] w-full">
					<a href={homeImages[3].route} class="w-full">
						<HomeImgSquare image={homeImages[3].imageUrl} />
					</a>
					<a href={homeImages[4].route} class="w-full">
						<HomeImgSquare image={homeImages[4].imageUrl} />
					</a>
				</div>
				<a href={homeImages[5].route}>
					<HomeImgRectV image={homeImages[5].imageUrl} />
				</a>
			</div>

			<div class="w-full flex gap-[14px] flex-col">
				<div class="flex flex-col sm:flex-row gap-[14px] w-full">
					<a href={homeImages[6].route} class="w-full">
						<HomeImgSquare image={homeImages[6].imageUrl} />
					</a>
					<a href={homeImages[7].route} class="w-full">
						<HomeImgSquare image={homeImages[7].imageUrl} />
					</a>
				</div>
				<a href={homeImages[8].route}>
					<HomeImgRectV image={homeImages[8].imageUrl} />
				</a>
			</div>
		</div>

		<div class="flex flex-col gap-[10px] sm:hidden">
			<a href={homeImagesMobile[0].route} class="w-full">
				<HomeImgSquare image={homeImagesMobile[0].imageUrl} />
			</a>
			<a href={homeImagesMobile[1].route} class="w-full">
				<HomeImgSquare image={homeImagesMobile[1].imageUrl} />
			</a>
			<a href={homeImagesMobile[2].route}>
				<HomeImgRectV image={homeImagesMobile[2].imageUrl} />
			</a>
			<a href={homeImagesMobile[3].route} class="w-full">
				<HomeImgSquare image={homeImagesMobile[3].imageUrl} />
			</a>
			<a href={homeImagesMobile[4].route} class="w-full">
				<HomeImgSquare image={homeImagesMobile[4].imageUrl} />
			</a>
			<a href={homeImagesMobile[5].route}>
				<HomeImgRectV image={homeImagesMobile[5].imageUrl} />
			</a>
			<a href={homeImagesMobile[6].route} class="w-full">
				<HomeImgSquare image={homeImagesMobile[6].imageUrl} />
			</a>
			<a href={homeImagesMobile[7].route} class="w-full">
				<HomeImgSquare image={homeImagesMobile[7].imageUrl} />
			</a>
			<a href={homeImagesMobile[8].route}>
				<HomeImgRectV image={homeImagesMobile[8].imageUrl} />
			</a>
		</div>
	</div>

	<HomeIcon isHome />
</div>
