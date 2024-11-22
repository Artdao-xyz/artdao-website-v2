<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import Popups from '$lib/elements/Popups/Popups.svelte';
	import '../../style.css';
	import { digitalMatterNavStoreItems } from './store';

	let navItems: any;

	digitalMatterNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<Popups />

<NavBar {navItems} />

<slot />
