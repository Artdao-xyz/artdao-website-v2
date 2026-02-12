<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { viralityOvernightNavStoreItems } from './store';

	let navItems: any;

	viralityOvernightNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot />

