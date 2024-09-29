<script lang="ts">
	import NavBar from '$lib/elements/NavBar/NavBar.svelte';
	import { raveNavItems } from '../../../data/Projects/Rave/NavItems';
	import '../../../style.css';
</script>

<NavBar navItems={raveNavItems} />

<slot />
