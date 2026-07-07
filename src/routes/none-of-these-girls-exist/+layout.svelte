<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { noneOfTheseGirlsExistNavStoreItems } from './store';

	let navItems: any;
	noneOfTheseGirlsExistNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot />
