<script lang="ts">
	import Metaball from '$lib/components/Metaball/Metaball.svelte';
	import '../style.css';
	import { page } from '$app/stores';
	import { metaballProgress } from '../utils/metaball/getMetaballProgress';
	import Navbar from '$lib/components/HomeV2/Navbar/Navbar.svelte';
	import HomeNewsletter from '$lib/elements/HomeNewsletter/HomeNewsletter.svelte';
	import { metaballReady } from '$lib/stores/metaballPreloader';
	import { fly } from 'svelte/transition';

	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import posthog from 'posthog-js';

	// Determinar si estamos en la página principal
	$: isHomePage = $page?.route?.id === '/';
	$: isMapPage = $page?.route?.id === '/map';
	$: isStudioPage = $page?.route?.id === '/studio';
	$: shouldShowNavbar = isHomePage || isMapPage || isStudioPage;

	// Toggle class on <html> to control studio background
	$: if (browser) {
		document.documentElement.classList.toggle('studio-background', isStudioPage);
	}

	// Controlar la aparición de elementos después del metaball
	let showUIElements = false;

	// Activar UI elements después de que el metaball esté listo
	$: if ($metaballReady && !showUIElements) {
		setTimeout(() => {
			showUIElements = true;
		}, 800); // Mismo timing que las imágenes del grid
	}

	// Reset metaballProgress when route changes
	$: if ($page) {
		metaballProgress.set(0);
	}

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => {
			// Capture pageview with additional context
			posthog.capture('$pageview', {
				$current_url: window.location.href,
				$referrer: document.referrer,
				$referring_domain: document.referrer ? new URL(document.referrer).hostname : null,
				// UTM parameters are automatically captured by PostHog
			});
		});
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

<!-- Metaball global - una sola instancia -->
<Metaball {isHomePage} isPreloader={true} size={'extra-large'} />

<div class="h-svh w-full flex flex-col {isMapPage ? 'map-background' : ''} {isStudioPage ? 'studio-background' : ''}">
	{#if shouldShowNavbar && showUIElements}
		<div transition:fly={{ y: 30, duration: 600, delay: 200 }}>
			<Navbar />
		</div>
	{/if}
	<div class="flex-1">
		<slot />
	</div>

    <!-- Newsletter - Only show on home, map or studio pages, desktop only -->
    {#if (isHomePage || isMapPage) && showUIElements}
		<div class="hidden sm:block" transition:fly={{ y: 30, duration: 600, delay: 400 }}>
			<HomeNewsletter isAbsolute={true} design="modern" />
		</div>
	{/if}
</div>
