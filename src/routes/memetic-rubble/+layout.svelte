<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import '../../style.css';
	import { memeticRubbleNavStoreItems } from './store';

	let navItems: any;
	memeticRubbleNavStoreItems.subscribe((item) => {
		navItems = item;
	});
</script>

<NavBar {navItems} />
<slot /> 