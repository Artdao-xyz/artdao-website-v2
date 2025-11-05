<script lang="ts">
    import { Circle } from 'lucide-svelte';
    import { page } from '$app/stores';

    import HomeNewsletter from '../../../elements/HomeNewsletter/HomeNewsletter.svelte';

    // Referencias a los elementos
    let showMobileMenu = false;
    let width: number;
    let mobileMenuButton: HTMLButtonElement;

    
    // Detectar la ruta actual
    $: isMapRoute = $page.url.pathname === '/map';
    $: isHomeRoute = $page.url.pathname === '/';
    $: isStudioRoute = $page.url.pathname === '/studio';
    $: isHomeMobile = isHomeRoute && width <= 768;
    $: isHomeDesktop = isHomeRoute && width > 768;
    // Función para mover la metabola al navbar

    // Función para cerrar el menú móvil cuando se hace click fuera
    function handleClickOutside(event: MouseEvent) {
        if (mobileMenuButton && !mobileMenuButton.contains(event.target as Node)) {
            showMobileMenu = false;
        }
    }
    
    
</script>

<svelte:window bind:innerWidth={width} on:click={handleClickOutside} />

<!-- Home Desktop Navbar -->
{#if isHomeDesktop}
<nav class="hidden sm:flex relative w-full gap-2.5 justify-between lg:w-auto lg:fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2 z-40 items-center">
        <!-- metaball goes here -->

         <div class="hidden lg:inline-flex h-14 py-6 px-8 bg-gradient-to-br from-black/60 to-black/80 rounded-[100px] shadow-[2px_2px_20px_0px_rgba(0,0,0,0.40)] outline outline-[1.40px] outline-offset-[-1.40px] outline-white/40 backdrop-blur-[34px] justify-center items-center gap-10">
                <a data-sveltekit-reload href="/" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isHomeRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Zine</span>
                 </a>
                 <a data-sveltekit-reload href="/map" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isMapRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Map</span>
                 </a>
                 
                 <a data-sveltekit-reload href="/studio" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isStudioRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Studio</span>
                 </a>
        </div>
</nav>
{/if}

<!-- Home Mobile Navbar -->
{#if isHomeMobile}
<nav class="sm:hidden relative z-40 flex items-center justify-between w-full py-6 px-4">
        <!-- Metabola PNG para mobile -->
        <!-- <a href="/" class="h-12 w-12 rounded-full flex-shrink-0">
            <img src="media/home/icons/metaball.png" alt="metabola" class="w-full h-full object-contain" />
        </a> -->
        <span></span>

        <!-- Menú hamburguesa con dropdown -->
        <div class="relative">
            <button bind:this={mobileMenuButton} on:click={() => showMobileMenu = !showMobileMenu}>
                <img src="media/home/icons/mobile-hamburguer.svg" alt="Menu" class="drop-shadow drop-shadow-black" />
            </button>
            
            <!-- Dropdown Menu -->
            {#if showMobileMenu}
            <div class="absolute  right-0 top-full mt-2 z-50 flex flex-col gap-2">
                <a href="/" class="mobile-nav-button w-80 h-12 px-5 py-1.5 bg-black/90 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isHomeRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Zine</span>
                </a>
                <a href="/map" class="mobile-nav-button w-80 h-12 px-5 py-1.5 bg-black/90 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isMapRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Map</span>
                </a>

                <a href="/studio" class="mobile-nav-button w-80 h-12 px-5 py-1.5 bg-black/90 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isStudioRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Studio</span>
                </a>
                <!-- Newsletter Signup -->
                <div class="w-80" on:click|stopPropagation>
                    <HomeNewsletter  />
                </div>
            </div>
            {/if}
        </div>
</nav>
{/if}

<!-- Other Pages Desktop Navbar -->
{#if !isHomeRoute && width > 768}
<nav class="hidden sm:flex relative w-full gap-2.5 justify-between lg:w-auto lg:fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2 z-50 items-center">
        <!-- metaball goes here -->

         <div class="hidden lg:inline-flex h-14 py-6 px-8 bg-gradient-to-br from-black/60 to-black/80 rounded-[100px] shadow-[2px_2px_20px_0px_rgba(0,0,0,0.40)] outline outline-[1.40px] outline-offset-[-1.40px] outline-white/40 backdrop-blur-[34px] justify-center items-center gap-10">
                <a href="/" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isHomeRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Zine</span>
                 </a>
                 <a href="/map" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isMapRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Map</span>
                 </a>

                 <a href="/studio" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isStudioRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Studio</span>
                 </a>
        </div>
</nav>
{/if}

<!-- Other Pages Mobile Navbar -->
{#if !isHomeRoute && width <= 768}
<nav class="sm:hidden relative z-50 flex items-center justify-between w-full p-4">
        <!-- Metabola PNG para mobile -->
        <!-- <a href="/" class="h-12 w-12 rounded-full flex-shrink-0">
            <img src="media/home/icons/metaball.png" alt="metabola" class="w-full h-full object-contain" />
        </a> -->
        <span></span>

        <!-- Menú hamburguesa con dropdown -->
        <div class="">
            <button bind:this={mobileMenuButton} on:click={() => showMobileMenu = !showMobileMenu}>
                <img src="media/home/icons/mobile-hamburguer.svg" alt="Menu" class="drop-shadow drop-shadow-black outline outline-1 outline-white/20 rounded-[999px]" />
            </button>
            
            <!-- Dropdown Menu -->
            {#if showMobileMenu}
            <div class="absolute right-0 top-3/4 z-50 flex flex-col items-end gap-2 backdrop-blur-sm w-full p-4">
                <a data-sveltekit-reload href="/" class="mobile-nav-button w-80 h-12 px-5 py-1.5 bg-black/90 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isHomeRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Zine</span>
                </a>
                <a data-sveltekit-reload href="/map" class="mobile-nav-button w-80 h-12 px-5 py-1.5 bg-black/90 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isMapRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Map</span>
                </a>
                <a data-sveltekit-reload href="/studio" class="mobile-nav-button w-80 h-12 px-5 py-1.5 bg-black/90 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isStudioRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Studio</span>
                </a>
                <!-- Newsletter Signup -->
                <div class="w-80" on:click|stopPropagation>
                    <HomeNewsletter isFooter={true} />
                </div>
            </div>
            {/if}
        </div>
</nav>
{/if}

<style>
    :global(.mobile-nav-button) {
        position: relative;
        background-clip: padding-box;
    }
    
    :global(.mobile-nav-button::before) {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: 21px;
        background: transparent;
        z-index: -1;
        pointer-events: none;
        clip-path: inset(0 round 20px);
    }
    
    :global(.mobile-nav-button::after) {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 20px;
        background: inherit;
        z-index: -1;
        pointer-events: none;
    }
</style>
