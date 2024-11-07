<script lang="ts">
	export let dotOnLeft = true;
	export let top: string;
	export let left: string;
	export let eventToShow;
	import menuLine from '$lib/assets/images/map-menu-line.png';
	import buttonIcon from '$lib/assets/images/video-arrow.svg';
	import type { IMapEvent, IMapLocation } from '../../../data/Map/MapData';
	export let mapLocation: IMapLocation;
	export let showOnTop = false;

	let isSelected = false;

	const toggleSelected = () => {
		isSelected = !isSelected;
	};

	function clickOutside(element: any, callbackFunction: any) {
		function onClick(event: any) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction: any) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}

	const handleOnClick = (event: IMapEvent) => {
		eventToShow = event;
	};
</script>

<button
	on:click={toggleSelected}
	use:clickOutside={() => {
		isSelected = false;
	}}
	style="position: absolute; left: {left}%; top: {top}%;"
	class="relative flex flex-row items-center justify-center rounded-40 py-[13px] px-[17px] w-full max-w-[160px] h-[2.9375rem] {!isSelected
		? 'unselected'
		: 'selected'}"
>
	{#if dotOnLeft}
		<div class="w-[0.75rem] h-[0.75rem] bg-color-white rounded-[100px]" />
	{/if}
	<p
		class="w-full h-[21px] text-color-white font-robotoMono text-[12px] font-medium tracking-[0.156px] capitalize"
	>
		{mapLocation.location}
	</p>
	{#if !dotOnLeft}
		<div class="w-[0.75rem] h-[0.75rem] bg-color-white rounded-[100px]" />
	{/if}

	{#if isSelected}
		<div
			class="z-50 w-[32.3125rem] h-fit menu py-[30px] px-[19px] rounded-20 {!showOnTop
				? 'top-[120%]'
				: 'top-[-400%]'} left-0 absolute flex flex-col justify-center items-center gap-[5px]"
		>
			<img src={menuLine} alt="line" class="w-[449px]" />
			{#each mapLocation.events as event}
				<button
					on:click={() => handleOnClick(event)}
					class="group w-full h-[2.9375rem] hover:bg-color-dark rounded-[100px] flex justify-between items-center pl-[15px] pr-[8px]"
				>
					<p
						class="font-neue text-[20px] tracking-[0.0163rem] font-semibold uppercase text-color-black group-hover:text-color-white"
					>
						{event.title}
					</p>
					<button
						class="w-[30px] h-[30px] rounded-[6.25rem] border-color-black border group-hover:border-color-white flex items-center justify-center"
					>
						<img src={buttonIcon} alt="Button" class="rotate-180 w-[10px] group-hover:invert" />
					</button>
				</button>
				<img src={menuLine} alt="line" class="w-[449px]" />
			{/each}
		</div>
	{/if}
</button>

<style>
	.unselected {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(2px);
	}

	.unselected:hover {
		background: linear-gradient(95deg, rgba(0, 0, 0, 0.64) 6.17%, rgba(0, 0, 0, 0.8) 92.59%);
	}

	.selected {
		background: linear-gradient(95deg, rgba(0, 0, 0, 0.64) 6.17%, rgba(0, 0, 0, 0.8) 92.59%);
	}

	.menu {
		background: linear-gradient(
			108deg,
			rgba(255, 255, 255, 0.6) 9.86%,
			rgba(255, 255, 255, 0.6) 89.79%
		);
		backdrop-filter: blur(20px);
	}
</style>
