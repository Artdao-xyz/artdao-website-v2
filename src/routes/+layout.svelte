<script lang="ts">
	import Metaball from '$lib/components/Metaball/Metaball.svelte';
	import '../style.css';
	import { page } from '$app/stores';
	import { metaballProgress } from '../utils/metaball/getMetaballProgress';
	import { metaballRef } from '$lib/components/HomeV2/store';
	import Navbar from '$lib/components/HomeV2/Navbar/Navbar.svelte';
	import HomeNewsletter from '$lib/elements/HomeNewsletter/HomeNewsletter.svelte';
	// Determinar si estamos en la página principal
	$: isHomePage = $page?.route?.id === '/';
	$: isMapPage = $page?.route?.id === '/map';
	$: shouldShowNavbar = isHomePage || isMapPage;

	// Reset metaballProgress when route changes
	$: if ($page) {
		metaballProgress.set(0);
	}
	
	// Referencia al contenedor del Metaball
	let metaballContainer: HTMLDivElement;
	
	// Pasar la referencia al store
	$: if (metaballContainer) {
		metaballRef.set(metaballContainer);
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


<!-- Metaball condicional según la ruta -->
{#if isHomePage}
    <!-- En la página principal: Metaball extra-grande y fijo en el centro -->
    <div class="hidden lg:block fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        <div bind:this={metaballContainer}>
            <Metaball {isHomePage} size="extra-large" />
        </div>
    </div>
{:else}
    <!-- En otras páginas: Metaball pequeño y flotante en la esquina -->
    <div class="hidden sm:inline-flex fixed bottom-4 right-4 z-50">
        <Metaball {isHomePage} size="small" />
    </div>
{/if}

<div class="h-svh w-full flex flex-col">	
	{#if shouldShowNavbar}
		<Navbar />
	{/if}
	<div class="flex-1">
		<slot />
	</div>
</div>

<!-- Newsletter - Only show on home or map pages, desktop only -->
{#if (isHomePage || isMapPage)}
	<div class="hidden sm:block">
		<HomeNewsletter isAbsolute={true} />
	</div>
{/if}
