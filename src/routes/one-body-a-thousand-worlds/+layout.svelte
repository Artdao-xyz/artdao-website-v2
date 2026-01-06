<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { oneBodyAThousandWorldsNavStoreItems } from './store';

	let navItems: any;

	oneBodyAThousandWorldsNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />

<slot />

