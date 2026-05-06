<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { contactZonesNavStoreItems } from './store';

	let navItems: any;
	contactZonesNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot />
