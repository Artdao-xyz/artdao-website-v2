<script lang="ts">
	import { selectedPolaroidsItem } from '$lib/components/ProjectPolaroids/store';
	import { EPolaroidPosition } from '../PolaroidSquare/interface';
	import PolaroidSquare from '../PolaroidSquare/PolaroidSquare.svelte';
	import PolaroidView from '../PolaroidView/PolaroidView.svelte';
	import type { IPolaroidImage } from './interface';

	export let images: IPolaroidImage[];

	let index: number = 0;

	const handleOnClick = (i: number) => {
		index = i;
		selectedPolaroidsItem.set(i);
	};
</script>

<div class="flex-row flex w-full h-[65%] justify-between">
	<div class="flex flex-row w-[62%]">
		<PolaroidView image={images[index]} />
	</div>

	<div
		class="w-[28%] laptopM:w-[25%] macBook:w-[27%] laptopL:w-[20%] bigScreen:w-[28%] h-full bigScreen:h-[85%] mx-auto"
	>
		<div class="w-full h-full relative">
			<PolaroidSquare
				polaroid={images[0]}
				polaroidPosition={EPolaroidPosition.TOP_LEFT}
				on:click={() => handleOnClick(0)}
				isSelected={index === 0}
			/>

			<PolaroidSquare
				polaroid={images[1]}
				polaroidPosition={EPolaroidPosition.TOP_RIGHT}
				on:click={() => handleOnClick(1)}
				isSelected={index === 1}
			/>

			<PolaroidSquare
				polaroid={images[2]}
				polaroidPosition={EPolaroidPosition.BOTTOM_LEFT}
				on:click={() => handleOnClick(2)}
				isSelected={index === 2}
			/>

			<PolaroidSquare
				polaroid={images[3]}
				polaroidPosition={EPolaroidPosition.BOTTOM_RIGHT}
				on:click={() => handleOnClick(3)}
				isSelected={index === 3}
			/>
		</div>
	</div>
</div>

<!-- <button
				on:click={() => handleOnClick(1)}
				class="{index === 1
					? 'z-40'
					: 'z-0'} aspect-square h-[50%] laptopM:h-[55%] laptopL:h-[55%] bigScreen:h-[300px] bg-color-white p-5 flex flex-col gap-2.5 rounded-20 rotate-[15deg] absolute top-0 right-6 cursor-pointer hover:scale-[101%] border border-color-black"
			>
				<img
					src={images[1].image}
					alt="Polaroid Gallery Item"
					class="object-cover h-[65%] macBook:h-[70%] bigScreen:h-[80%] w-full"
				/>

				<div
					class="flex flex-col w-full gap-1 items-start font-robotoMono text-[0.75rem] font-semibold leading-[1.375rem] tracking-[0.075rem] text-color-black"
				>
					<p class="text-ellipsis overflow-hidden whitespace-nowrap w-full text-left">
						{images[1].name}
					</p>
					<p class="text-left">{images[1].date}</p>
				</div>
			</button>

			<button
				on:click={() => handleOnClick(2)}
				class="{index === 2
					? 'z-40'
					: 'z-0'} w-[80%] xl:max-w-[18rem] laptopM:max-w-[17rem] macBook:max-w-[28rem] h-[50%] laptopM:h-[55%] laptopL:h-[55%] bigScreen:h-[18.75rem] bg-color-white p-5 flex flex-col gap-2.5 rounded-20 rotate-[15deg] absolute top-[33%] right-[1%] cursor-pointer hover:scale-[101%] border border-color-black"
			>
				<img
					src={images[2].image}
					alt="Polaroid Gallery Item"
					class="object-cover h-[65%] macBook:h-[75%] laptopL:h-[70%] bigScreen:h-[72%] w-full"
				/>

				<div
					class="flex flex-col w-full gap-1 items-start font-robotoMono text-[0.75rem] font-semibold leading-[1.375rem] tracking-[0.075rem] text-color-black"
				>
					<p class="text-ellipsis overflow-hidden whitespace-nowrap w-full text-left">
						{images[2].name}
					</p>
					<p class="text-left">{images[2].date}</p>
				</div>
			</button>

			<button
				on:click={() => handleOnClick(3)}
				class="{index === 3
					? 'z-40'
					: 'z-0'} w-[47.5%] xl:max-w-[12rem] h-[80%] laptopM:h-[90%] macBook:h-[85%] laptopL:h-[80%] bigScreen:h-[420px] bigScreen:w-[300px] bg-color-white p-5 flex flex-col gap-2.5 rounded-20 rotate-[-15deg] absolute top-[30%] left-[8%] cursor-pointer hover:scale-[101%] border border-color-black"
			>
				<img
					src={images[3].image}
					alt="Polaroid Gallery Item"
					class="object-cover h-[80%] macBook:h-[90%] bigScreen:h-[83%] w-full"
				/>

				<div
					class="flex w-full flex-col gap-1 font-robotoMono text-[0.75rem] font-semibold leading-[1.375rem] tracking-[0.075rem] text-color-black"
				>
					<p class="text-ellipsis overflow-hidden whitespace-nowrap w-full text-left">
						{images[3].name}
					</p>
					<p class="text-left">{images[3].date}</p>
				</div>
			</button> -->
