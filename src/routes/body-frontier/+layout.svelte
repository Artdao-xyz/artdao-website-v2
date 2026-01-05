<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { bodyFrontierNavStoreItems } from './store';

	let navItems: any;

	bodyFrontierNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />

<slot /> 