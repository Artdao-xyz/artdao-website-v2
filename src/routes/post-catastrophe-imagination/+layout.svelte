<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { postCatastropheImaginationNavStoreItems } from './store';

	let navItems: any;
	postCatastropheImaginationNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot />

