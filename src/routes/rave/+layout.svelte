<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import Popups from '$lib/elements/Popups/Popups.svelte';
	import '../../style.css';
	import { raveNavStoreItems } from './store';

	let navItems: any;

	raveNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<Popups />

<NavBar {navItems} />

<slot />
