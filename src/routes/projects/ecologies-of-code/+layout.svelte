<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import { ecologiesNavItems } from '../../../data/Projects/EcologiesOfCode/NavItems';
	import '../../../style.css';
</script>

<NavBar navItems={ecologiesNavItems} />

<slot />
