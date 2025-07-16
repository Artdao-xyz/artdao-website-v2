<script>
	import Metaball from '$lib/components/Metaball/Metaball.svelte';
	import '../style.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { metaballProgress } from '../utils/metaball/getMetaballProgress';

	// Reset metaballProgress when route changes
	$: if ($page) {
		metaballProgress.set(0);
	}
</script>

<svelte:head>
	<!-- Essential Meta Tags -->
	<title>Artdao</title>
	<meta name="description" content="Artists helping artists" />
	
	<!-- Viewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://artdao.xyz" />
	<meta property="og:title" content="ArtDao" />
	<meta property="og:description" content="Artists helping artists" />
	<meta property="og:image" content="/banner.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://artdao.xyz" />
	<meta name="twitter:title" content="ArtDao" />
	<meta name="twitter:description" content="Artists helping artists" />
	<meta name="twitter:image" content="/banner.png" />

	<!-- Additional SEO Tags -->
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<link rel="canonical" href="https://artdao.xyz" />
</svelte:head>

<div class="hidden sm:inline-flex fixed bottom-4 right-4 z-50">
        <Metaball/>
</div>

<slot />