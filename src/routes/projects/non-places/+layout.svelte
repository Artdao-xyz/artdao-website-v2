<script lang="ts">
	import HomeMobileMenu from '$lib/components/HomeMobileMenu/HomeMobileMenu.svelte';
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import Popups from '$lib/elements/Popups/Popups.svelte';
	import '../../../style.css';
	import { nonPlacesNavStoreItems } from './store';

	let navItems: any;

	nonPlacesNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<Popups />

<HomeMobileMenu section="project" />

<NavBar {navItems} />

<slot />
