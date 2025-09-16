<script lang="ts">
	import buttonIcon from '$lib/assets/images/button-icon.webp';
	import menuIcon from '$lib/assets/images/mobile-hamburguer.svg';
	import { onDestroy } from 'svelte';
	import { slide } from 'svelte/transition';
	import { isFooterVisible } from '../Footer/store';
	import NewsletterPopup from '../Popups/components/NewsletterPopup.svelte';
	import type { INavBarItem } from './interfaces';

	export let navItems: INavBarItem[] | [];
	export let isMap = false;
	let index: number = 0;
	$: percentage = 100 / navItems.length + 50;

	if (navItems.length) {
		navItems[index].selected = true;
	}

	let selectedItem;

	$: visible = false;

	const handleOnClick = (i: number) => {
		index = i;
		navItems.forEach((navItem) => (navItem.selected = false));
		navItems[i].selected = true;
		visible = false;
		selectedItem = navItems.find((item) => item.selected === true);
	};

	const toggleVisibility = () => {
		visible = !visible;
	};

	let size: number;

	let hideNav = false;

	const unsubscribe = isFooterVisible.subscribe((boolean) => {
		hideNav = boolean;
	});

	onDestroy(unsubscribe);
</script>

<svelte:window bind:innerWidth={size} />

{#if isMap && size > 500}
	<div></div>
{:else}
	<div
		class="{hideNav
			? 'justify-between'
			: ''} w-100dvw rounded-[6.25rem] h-[1rem] flex flex-row items-center z-40 sticky top-[2.88%] mx-[1.625rem] gap-2.5"
	>
		<a href={'/'}>
			<div
				class="rounded-[100px] nav-gradient-unselected w-[24px] h-[24px] flex flex-row items-center justify-center"
			>
				<img src={buttonIcon} alt="Go to home" class="rotate-180 w-[10px]" />
			</div>
		</a>

		{#if !hideNav}
			{#each navItems as navItem, i}
				<a
					data-sveltekit-noscroll
					href={`#${navItem.route}`}
					class="truncate rounded-[6.25rem] font-robotoMono text-[0.75rem] font-medium tracking-[0.075rem] !opacity-100 text-color-white {navItem.selected
						? 'nav-gradient-selected font-semibold border border-color-dark'
						: 'nav-gradient-unselected'} capitalize h-[1rem] justify-end
                flex flex-row items-center py-[0.75rem] pr-[2.5%] pl-[3.75rem]"
					style="width: {percentage}%; z-index: -{i};"
					on:click={() => handleOnClick(i)}
				>
					{navItem.text}
				</a>
			{/each}
		{/if}

		<!-- transition delay-75 duration-700 ease-in-out transform -->

		<!-- {#if hideNav}
			<a href={'#intro'}>
				<div
					class="rounded-[100px] nav-gradient-unselected w-[24px] h-[24px] flex flex-row items-center justify-center"
				>
					<img src={buttonIcon} alt="Go to home" class="w-[10px] rotate-[-90deg]" />
				</div>
			</a>
		{/if} -->
	</div>

	<div class="flex flex-col z-50 fixed top-[13px] w-full gap-[10px] sm:hidden">
		<div class="flex flex-row justify-between w-full px-[1.3125rem] items-center">
			<a href={'/'}>
				<div
					class="rounded-[100px] nav-gradient-selected w-[49px] h-[49px] flex flex-row items-center justify-center border border-color-dark"
				>
					<img src={buttonIcon} alt="Go to home" class="rotate-180 w-[10px]" />
				</div>
			</a>

			<button on:click={toggleVisibility}>
				<div
					class="rounded-[100px] {!visible
						? 'nav-gradient-selected'
						: 'nav-gradient-unselected'} w-[49px] h-[49px] flex flex-row items-center justify-center border border-color-dark"
				>
					<img src={menuIcon} alt="menu" class="" />
				</div>
			</button>
		</div>
		{#if visible}
			<div
				transition:slide={{ axis: 'y', duration: 300 }}
				class="flex flex-col gap-[6px] h-full px-[1.3125rem]"
			>
				{#if !isMap}
					{#each navItems as navItem, i}
						<a
							data-sveltekit-noscroll
							href={`#${navItem.route}`}
							class="h-[49px] rounded-[0.9375rem] font-robotoMono text-[1rem] font-medium !opacity-100 text-color-white {navItem.selected
								? 'nav-gradient-selected font-semibold border border-color-dark'
								: 'nav-gradient-unselected'} capitalize justify-end
	flex flex-row items-center py-[0.75rem] pr-[2.5rem] transition delay-75 duration-700 ease-in-out transform"
							on:click={() => handleOnClick(i)}
						>
							{navItem.text}
						</a>
					{/each}
				{/if}
				<!-- <NewsletterPopup /> -->
			</div>
		{/if}
	</div>
{/if}
