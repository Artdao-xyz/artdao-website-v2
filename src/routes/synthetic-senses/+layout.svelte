<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { syntheticSensesNavStoreItems } from './store';

	let navItems: any;
	syntheticSensesNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot />
