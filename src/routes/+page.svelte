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
	<div class="bg-color-black p-2 w-full h-full flex gap-2">
		<div class="min-w-[23.125rem] max-w-[370px] w-home-content-width">
			<div class="fixed h-full width-full max-w-[inherit]">
				<HomeMenu />
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<div class="w-full h-full borderGreen flex gap-2">
				<div class="flex flex-col gap-2 w-1/2 borderBlue">
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

			<div class="w-full h-full borderGreen flex gap-2">
				<a href={homeImages[2].route} class="w-1/2">
					<HomeImgRectV image={homeImages[2].imageUrl} />
				</a>
				<div class="flex flex-col gap-2 w-1/2 borderBlue h-full">
					<a href={homeImages[3].route}>
						<HomeImgSquare image={homeImages[3].imageUrl} />
					</a>
					<a href={homeImages[4].route}>
						<HomeImgSquare image={homeImages[4].imageUrl} />
					</a>
				</div>
			</div>
		</div>
	</div>

	<HomeIcon />
</div>
