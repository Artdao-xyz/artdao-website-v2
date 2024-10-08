<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import { orbNavItems } from '../../../data/Projects/Orb/NavItems';
	import '../../../style.css';
</script>

<NavBar navItems={orbNavItems} />

<slot />
