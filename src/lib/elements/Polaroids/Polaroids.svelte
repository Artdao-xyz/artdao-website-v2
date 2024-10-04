<script lang="ts">
	import { selectedPolaroidsItem } from '$lib/components/ProjectPolaroids/store';
	import { ESizesVariant } from '../../../constants/enums';
	import PolaroidView from '../PolaroidView/PolaroidView.svelte';
	import type { IPolaroidImage } from './interface';

	export let images: IPolaroidImage[];

	let index: number = 0;

	const sizes = [
		ESizesVariant.MEDIUM,
		ESizesVariant.MEDIUM,
		ESizesVariant.LARGE,
		ESizesVariant.SMALL
	];

	$: viewSize = sizes[index];

	const handleOnClick = (i: number) => {
		index = i;
		selectedPolaroidsItem.set(i);
	};
</script>

<div class="flex flex-row items-center w-full border h-[54.39%] laptopL:h-[65%]">
	<PolaroidView image={images[index]} {viewSize} />

	<div class="w-[30%] flex justify-end h-full">
		<div class="w-full h-full relative">
			<button
				on:click={() => handleOnClick(0)}
				class="{index === 0
					? 'z-40'
					: 'z-0'} h-[50%] laptopM:h-[55%] laptopL:h-[55%] bigScreen:h-[300px] aspect-square bg-color-white p-5 flex flex-col gap-2.5 rounded-20 rotate-[-15deg] absolute top-0 left-[4%] cursor-pointer hover:scale-[101%] border border-color-black"
			>
				<img
					src={images[0].image}
					alt="Polaroid Gallery Item"
					class="object-cover h-[65%] macBook:h-[70%] bigScreen:h-[80%] w-full"
				/>

				<div
					class="flex flex-col gap-1 font-robotoMono text-[0.75rem] font-semibold leading-[1.375rem] tracking-[0.075rem] text-color-black"
				>
					<p class="text-ellipsis overflow-hidden whitespace-nowrap w-[160px] text-left">
						{images[0].name}
					</p>
					<p class="text-left">{images[0].date}</p>
				</div>
			</button>

			<button
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
			</button>
		</div>
	</div>
</div>
