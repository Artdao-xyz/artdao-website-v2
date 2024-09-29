<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import { digitalMatterNavItems } from '../../../data/Projects/DigitalMatter/NavItems';
	import '../../../style.css';
</script>

<NavBar navItems={digitalMatterNavItems} />

<slot />
