<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { careBotsBrowserBeastsNavStoreItems } from './store';

	let navItems: any;
	careBotsBrowserBeastsNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot />

