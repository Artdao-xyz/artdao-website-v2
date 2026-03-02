<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { theEndOfTheMuseNavStoreItems } from './store';

	let navItems: any;
	theEndOfTheMuseNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot />

