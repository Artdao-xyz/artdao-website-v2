<script lang="ts">
	import blackToggle from '$lib/assets/images/black-toggle.png';
	import homeIcon from '$lib/assets/images/home-icon.png';
	import minusIcon from '$lib/assets/images/minus-menu-mobile.png';
	import plusIcon from '$lib/assets/images/plus-menu-mobile.png';
	import whiteToggle from '$lib/assets/images/white-toggle.png';
	import NewsletterPopup from '$lib/elements/Popups/components/NewsletterPopup.svelte';
	import { slide } from 'svelte/transition';

	export let toggle: 'black' | 'white' = 'black';
	export let section: 'home' | 'drop' | 'project' = 'home';

	let isOpen = false;

	const handleOnClick = () => {
		isOpen = !isOpen;
	};
</script>

<div
	class="{section === 'project'
		? 'w-full fixed'
		: section === 'home'
			? 'block w-full'
			: 'w-[98%] fixed'} left-[2%] top-[0.9%] w-full z-50"
>
	<div
		class="sm:hidden flex {section !== 'project'
			? 'justify-between'
			: 'gap-[0.5rem]'} items-center sm:mb-[0.5rem] mb-[-1rem]"
	>
		<a href={'/'}>
			<img src={homeIcon} alt="Home Icon" class="w-[2.5625rem]" />
		</a>

		<div>
			<button on:click={handleOnClick}>
				<img
					src={!isOpen ? plusIcon : minusIcon}
					alt="open menu"
					class="w-[2.375rem] mt-[0.2rem]"
				/>
			</button>

			{#if isOpen}
				<div class="absolute top-[46px] left-[5px]" transition:slide={{ axis: 'y', duration: 500 }}>
					<NewsletterPopup />
				</div>
			{/if}
		</div>

		{#if section === 'home' || section === 'drop'}
			<a href={section === 'home' ? '/drops' : '/'}>
				<img
					src={toggle === 'black' ? blackToggle : whiteToggle}
					alt="Go to Drops"
					class="w-[4.5rem] cursor-pointer mb-[-0.5rem]"
				/>
			</a>
		{/if}
	</div>
</div>
