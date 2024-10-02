<script lang="ts">
	import type { INavBarItem } from './interfaces';

	export let navItems: INavBarItem[];
	let index: number = 0;
	$: percentage = 100 / navItems.length + 50;
	navItems[index].selected = true;

	const handleOnClick = (i: number) => {
		index = i;
		navItems.forEach((navItem) => (navItem.selected = false));
		navItems[i].selected = true;
	};
</script>

<div
	class="w-100dvw rounded-[6.25rem] h-[1rem] flex flex-row items-center z-50 sticky top-[1.95%] mx-10 gap-2.5"
>
	{#each navItems as navItem, i}
		<a
			data-sveltekit-noscroll
			href={`#${navItem.route}`}
			class="rounded-[6.25rem] font-robotoMono text-[0.75rem] font-medium tracking-[0.075rem] !opacity-100 text-color-white {navItem.selected
				? 'nav-gradient-selected justify-center font-semibold border border-color-dark'
				: 'nav-gradient-unselected justify-end'} capitalize h-[1rem]
                flex flex-row items-center py-[0.75rem] pr-[2.5rem] pl-[3.75rem] transition delay-75 duration-700 ease-in-out transform"
			style="width: {percentage}%; z-index: -{i};"
			on:click={() => handleOnClick(i)}
		>
			{navItem.text}
		</a>
	{/each}
</div>
