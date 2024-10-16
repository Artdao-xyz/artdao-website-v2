<script lang="ts">
	import blackToggle from '$lib/assets/images/black-toggle.png';
	import homeIcon from '$lib/assets/images/home-icon.png';
	import whiteToggle from '$lib/assets/images/white-toggle.png';

	export let toggle: 'black' | 'white' = 'black';
	export let section: 'home' | 'drop' | 'project' = 'home';
</script>

<div class="{section === 'project' ? 'fixed' : 'block'} w-full z-50">
	<div class="sm:hidden flex justify-between items-center sm:mb-[0.5rem] mb-[-1rem]">
		<a href={'/'}>
			<img src={homeIcon} alt="Home Icon" class="w-[2.5625rem]" />
		</a>

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
