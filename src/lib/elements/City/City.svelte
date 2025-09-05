<script lang="ts">
	export let dotOnLeft = true;
	export let top: string;
	export let left: string;
	export let eventToShow;
	import menuLine from '$lib/assets/images/map-menu-line.webp';
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
	class="relative flex flex-row items-center justify-center w-40 h-6 px-4 py-[5px] {isSelected ? 'bg-[#101010]' : 'bg-[#f7f5f2]'} rounded-[100px] outline outline-1 outline-black"
>
	<p
		class="w-full {isSelected ? 'text-[#f7f5f2]' : 'text-[#101010]'} text-xs font-normal font-robotoMono leading-none tracking-wide capitalize"
	>
		{mapLocation.location}
	</p>

	{#if isSelected}
		<div
			class="z-50 w-40 h-fit bg-[#101010] rounded-[20px] outline outline-1 outline-[#f7f5f2] py-[20px] px-[20px] {!showOnTop
				? 'top-[120%]'
				: 'top-[-400%]'} left-0 absolute flex flex-col justify-center items-center gap-[20px]"
		>
			{#each mapLocation.events as event}
				<button
					on:click={() => handleOnClick(event)}
					class="group w-full h-6 px-4 py-[5px] bg-[#101010] hover:bg-[#f7f5f2] rounded-[100px] outline outline-1 outline-[#f7f5f2] hover:outline-[#101010] flex justify-center items-center"
				>
					<p
						class="text-[#f7f5f2] text-xs font-normal font-robotoMono leading-none tracking-wide group-hover:text-[#101010]"
					>
						{event.title}
					</p>
				</button>
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
