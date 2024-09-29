<script lang="ts">
	import blackToggle from '$lib/assets/images/black-toggle.png';
	import HomeMenu from '$lib/components/HomeMenu/HomeMenu.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import HomeImgRectV from '$lib/elements/HomeImgRectV/HomeImgRectV.svelte';
	import HomeImgSquare from '$lib/elements/HomeImgSquare/HomeImgSquare.svelte';
	import { homeImages } from '../data/HomeImgLayout';
</script>

<div class="flex flex-col items-center justify-center relative w-full h-full">
	<a href="/drops">
		<img
			src={blackToggle}
			alt="Go to Drops"
			class="fixed top-[2.5%] right-[1%] w-[5.9063rem] cursor-pointer z-10"
		/>
	</a>
	<div class="bg-color-white pt-10 px-10 w-full h-full flex gap-2.5">
		<div class="fixed top-50 left-100">
			<HomeMenu />
		</div>

		<div class="w-[26.2%] min-w-[20.3125rem]" />

		<div class="flex flex-col">
			<div class="w-full h-full borderGreen flex mb-5 gap-5">
				<div class="flex flex-col gap-5 w-1/2 borderBlue h-full">
					<a href={homeImages[0].route}>
						<HomeImgSquare image={homeImages[0].imageUrl} />
					</a>
					<a href={homeImages[1].route}>
						<HomeImgSquare image={homeImages[1].imageUrl} />
					</a>
				</div>
				<a href={homeImages[2].route} class="w-1/2">
					<HomeImgRectV image={homeImages[2].imageUrl} />
				</a>
			</div>

			<div class="w-full h-full borderGreen flex mb-5 gap-5">
				<a href={homeImages[2].route} class="w-1/2">
					<HomeImgRectV image={homeImages[2].imageUrl} />
				</a>
				<div class="flex flex-col gap-5 w-1/2 borderBlue h-full">
					<a href={homeImages[0].route}>
						<HomeImgSquare image={homeImages[0].imageUrl} />
					</a>
					<a href={homeImages[1].route}>
						<HomeImgSquare image={homeImages[1].imageUrl} />
					</a>
				</div>
			</div>
		</div>
	</div>

	<HomeIcon />
</div>
