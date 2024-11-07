<script lang="ts">
	import minus from '$lib/assets/images/minus-icon.png';
	import plus from '$lib/assets/images/plus-icon.png';
	import NewsletterPopup from '$lib/elements/Popups/components/NewsletterPopup.svelte';
	import { isNavOpen, isPopupOpen } from '$lib/elements/Popups/components/store';
	import { onDestroy } from 'svelte';
	import { slide } from 'svelte/transition';

	// export let toggle: 'black' | 'white' = 'black';
	export let section: 'home' | 'drop' | 'project' = 'home';

	$: isOpen = false;
	$: isPopupOpen.set(isOpen);
	let isNavbarOpen = false;

	const unsubscribe = isNavOpen.subscribe((boolean) => {
		isNavbarOpen = boolean;

		if (isNavbarOpen) {
			isOpen = false;
		}
	});

	onDestroy(unsubscribe);

	const handleOnClick = () => {
		isOpen = !isOpen;

		if (isOpen) {
			isNavOpen.set(false);
		}
	};
</script>

<div
	class="{section === 'project'
		? 'w-full fixed'
		: section === 'home'
			? 'block w-full'
			: 'w-[98%] fixed'} left-[2%] top-[1%] w-[98%] z-50"
>
	<div
		class="sm:hidden flex {section !== 'project'
			? 'justify-between'
			: 'gap-[0.5rem]'} items-center sm:mb-[0.5rem] mb-[-1rem]"
	>
		<span class="w-[2.5625rem]"></span>

		{#if section === 'project'}
			<div>
				<button
					on:click={handleOnClick}
					class="w-[2.25rem] rounded-[100px] {isOpen
						? 'nav-gradient-unselected border-color-gray'
						: 'nav-gradient-selected border-color-dark'}  h-[2.25rem] border mt-[0.1rem]"
				>
					<img
						src={isOpen ? minus : plus}
						alt="open menu"
						class="w-[20px] my-auto mx-auto invert"
					/>
				</button>

				{#if isOpen}
					<div
						class="absolute top-[46px] left-[5px]"
						transition:slide={{ axis: 'y', duration: 500 }}
					>
						<NewsletterPopup />
					</div>
				{/if}
			</div>
		{/if}

		<!-- {#if section === 'home' || section === 'drop'}
			<a href={section === 'home' ? '/drops' : '/'}>
				<img
					src={toggle === 'black' ? blackToggle : whiteToggle}
					alt="Go to Drops"
					class="w-[4.5rem] cursor-pointer mb-[-0.5rem]"
				/>
			</a>
		{/if} -->
	</div>
</div>
