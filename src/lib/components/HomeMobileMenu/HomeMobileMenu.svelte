<script lang="ts">
	import logo from '$lib/assets/images/artdao-logo.png';
	import blackToggle from '$lib/assets/images/black-toggle.png';
	import homeIcon from '$lib/assets/images/home-icon.png';
	import whiteToggle from '$lib/assets/images/white-toggle.png';

	export let toggle: 'black' | 'white' = 'black';
	export let section: 'home' | 'drop' | 'project' = 'home';
</script>

<div class="{section === 'project' ? 'fixed' : 'block'} w-full z-50">
	<div class="sm:hidden flex justify-between items-center mb-[0.5rem]">
		<a href={'/'}>
			<img src={homeIcon} alt="Home Icon" class="w-[2.5625rem]" />
		</a>

		<div
			class="w-[131px] h-[37px] rounded-20 {section === 'drop'
				? 'gray-gradient'
				: 'dark-gradient'} px-[1.1875rem] py-[0.375rem]"
		>
			<img src={logo} alt="Artdao Logo" class="w-full" />
		</div>

		<a href={section === 'home' ? '/drops' : '/'}>
			<img
				src={toggle === 'black' ? blackToggle : whiteToggle}
				alt="Go to Drops"
				class="w-[4.5rem] cursor-pointer mb-[-0.5rem]"
			/>
		</a>
	</div>
</div>
