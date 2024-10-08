<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../../style.css';
	import { raveNavStoreItems } from './store';

	let navItems: any;

	raveNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />

<slot />
