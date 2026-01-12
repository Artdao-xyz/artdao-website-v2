<script lang="ts">
	import Metaball from '$lib/components/Metaball/Metaball.svelte';
	import '../style.css';
	import { page } from '$app/stores';
	import { metaballProgress } from '../utils/metaball/getMetaballProgress';
	import Navbar from '$lib/components/HomeV2/Navbar/Navbar.svelte';
	import HomeNewsletter from '$lib/elements/HomeNewsletter/HomeNewsletter.svelte';
	import { metaballReady } from '$lib/stores/metaballPreloader';
	import { pageMetadata } from '$lib/stores/pageMetadata';
	import { fly } from 'svelte/transition';

	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import posthog from 'posthog-js';

	// Determinar si estamos en la página principal
	$: isHomePage = $page?.route?.id === '/';
	$: isMapPage = $page?.route?.id === '/map';
	$: isStudioPage = $page?.route?.id === '/studio';
	$: isStudioDetailPage = $page?.route?.id?.startsWith('/studio/') || false;
	$: isStudioAny = isStudioPage || isStudioDetailPage;
	$: shouldShowNavbar = isHomePage || isMapPage || isStudioAny;

	// Toggle class on <html> to control studio background
	$: if (browser) {
		document.documentElement.classList.toggle('studio-background', isStudioAny);
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

	// Get current URL for canonical and og:url
	$: currentUrl = browser ? window.location.origin + $page.url.pathname : 'https://artdao.xyz';

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
	<title>{$pageMetadata.title || 'Artdao'}</title>
	<meta name="description" content={$pageMetadata.description || 'Artists helping artists'} />

	<!-- Viewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={$pageMetadata.title || 'Artdao'} />
	<meta property="og:description" content={$pageMetadata.description || 'Artists helping artists'} />
	<meta property="og:image" content={$pageMetadata.ogImage || 'https://artdao.xyz/banner.png'} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={currentUrl} />
	<meta name="twitter:title" content={$pageMetadata.title || 'Artdao'} />
	<meta name="twitter:description" content={$pageMetadata.description || 'Artists helping artists'} />
	<meta name="twitter:image" content={$pageMetadata.ogImage || 'https://artdao.xyz/banner.png'} />

	<!-- Additional SEO Tags -->
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<link rel="canonical" href={$pageMetadata.canonical || currentUrl} />
</svelte:head>

<!-- Metaball global - una sola instancia -->
<Metaball {isHomePage} isPreloader={true} size={'extra-large'} />

<div class="h-svh w-full flex flex-col {isMapPage ? 'map-background' : ''} {isStudioAny ? 'studio-background' : ''}">
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
