<script lang="ts">
	import HomeMobileMenu from '$lib/components/HomeMobileMenu/HomeMobileMenu.svelte';
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../../style.css';
	import { ecologiesNavStoreItems } from './store';

	let navItems: any;

	ecologiesNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<HomeMobileMenu section="project" />

<NavBar {navItems} />

<slot />
