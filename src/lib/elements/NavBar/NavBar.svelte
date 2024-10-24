<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { INavBarItem } from './interfaces';

	export let navItems: INavBarItem[];
	let index: number = 0;
	$: percentage = 100 / navItems.length + 50;
	navItems[index].selected = true;
	$: selectedItem = navItems.find((item) => item.selected === true);

	$: visible = false;

	const handleOnClick = (i: number) => {
		index = i;
		navItems.forEach((navItem) => (navItem.selected = false));
		navItems[i].selected = true;
		visible = false;
	};

	const toggleVisibility = () => {
		visible = !visible;
	};
</script>

<div
	class="w-100dvw rounded-[6.25rem] h-[1rem] sm:flex flex-row items-center z-50 sticky top-[2.88%] mx-[1.625rem] gap-2.5 hidden"
>
	{#each navItems as navItem, i}
		<a
			data-sveltekit-noscroll
			href={`#${navItem.route}`}
			class="rounded-[6.25rem] font-robotoMono text-[0.75rem] font-medium tracking-[0.075rem] !opacity-100 text-color-white {navItem.selected
				? 'nav-gradient-selected font-semibold border border-color-dark'
				: 'nav-gradient-unselected'} capitalize h-[1rem] justify-end
                flex flex-row items-center py-[0.75rem] pr-[2.5rem] pl-[3.75rem] transition delay-75 duration-700 ease-in-out transform"
			style="width: {percentage}%; z-index: -{i};"
			on:click={() => handleOnClick(i)}
		>
			{navItem.text}
		</a>
	{/each}
</div>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex flex-col sm:hidden gap-[0.375rem] z-50 fixed top-[12px] right-[1.25rem]">
	{#if selectedItem && !visible}
		<a
			on:click={toggleVisibility}
			data-sveltekit-noscroll
			href={`#${selectedItem.route}`}
			class="w-[16.8rem] h-[2.3125rem] rounded-[6.25rem] font-robotoMono text-[1rem] font-medium !opacity-100 text-color-white {selectedItem.selected
				? 'nav-gradient-selected font-semibold border border-color-dark'
				: 'nav-gradient-unselected'} capitalize h-[1rem] justify-end
		flex flex-row items-center py-[0.75rem] pr-[2.5rem] pl-[3.75rem] transition delay-75 duration-700 ease-in-out transform"
		>
			{selectedItem.text}
		</a>
	{/if}
	{#if visible}
		<div transition:slide={{ axis: 'y', duration: 300 }} class="flex flex-col gap-[0.375rem]">
			{#each navItems as navItem, i}
				<a
					data-sveltekit-noscroll
					href={`#${navItem.route}`}
					class="w-[16.1875rem] h-[2.3125rem] rounded-[6.25rem] font-robotoMono text-[1rem] font-medium !opacity-100 text-color-white {navItem.selected
						? 'nav-gradient-selected font-semibold border border-color-dark'
						: 'nav-gradient-unselected'} capitalize h-[1rem] justify-end
                flex flex-row items-center py-[0.75rem] pr-[2.5rem] pl-[3.75rem] transition delay-75 duration-700 ease-in-out transform"
					on:click={() => handleOnClick(i)}
				>
					{navItem.text}
				</a>
			{/each}
		</div>
	{/if}
</div>
