<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { subconsciousMediaNavStoreItems } from './store';

	let navItems: any;
	subconsciousMediaNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot /> 