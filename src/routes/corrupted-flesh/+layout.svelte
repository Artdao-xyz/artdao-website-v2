<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { corruptedFleshNavStoreItems } from './store';

	let navItems: any;

	corruptedFleshNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />

<slot />

