<script lang="ts">
    import { Circle } from 'lucide-svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { gsap } from 'gsap';
    import { metaballRef, isMetaballTransitioning } from '../store';
    import TopBarMobile from '../../TopBarMobile/TopBarMobile.svelte';
    import Metaball from '../../Metaball/Metaball.svelte';
    import HomeNewsletter from '../../../elements/HomeNewsletter/HomeNewsletter.svelte';

    // Referencias a los elementos
    let metaballSpan: HTMLSpanElement;
    let showMobileMenu = false;
    let width: number;
    let mobileMenuButton: HTMLButtonElement;
    
    // Detectar la ruta actual
    $: isMapRoute = $page.url.pathname === '/map';
    $: isHomeRoute = $page.url.pathname === '/';
    $: isHomeMobile = isHomeRoute && width <= 768;
    $: isHomeDesktop = isHomeRoute && width > 768;
    // Función para mover la metabola al navbar
    const moveMetaballToNavbar = () => {
        console.log('moveMetaballToNavbar called');
        const metaball = $metaballRef;
        console.log('metaball ref:', metaball);
        if (metaball && !$isMetaballTransitioning) {
            isMetaballTransitioning.set(true);
            
            // Obtener la posición del span
            const rect = metaballSpan.getBoundingClientRect();
            
            // Calcular la escala basada en la altura del span vs el canvas del Metaball
            const spanHeight = rect.height;
            const canvas = metaball.querySelector('canvas');
            const metaballHeight = canvas ? canvas.height : 700; // Fallback al tamaño original
            const targetScale = spanHeight / metaballHeight;
            
            // Calcular la posición final en píxeles desde el centro
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const finalX = rect.left + (rect.width / 2) - centerX;
            const finalY = rect.top + (rect.height / 2) - centerY;
            
            // Animar el Metaball directamente hacia el span usando transform
            gsap.to(metaball, {
                duration: 1.2,
                x: finalX,
                y: finalY,
                width: rect.width,
                height: rect.height,
                scale: targetScale, // Escala calculada dinámicamente
                ease: "power3.inOut",
                onComplete: () => {
                    // Mover canvas dentro del navbar-slot después de la animación
                    metaballSpan.appendChild(metaball);
                    
                    // Resetear transform pero mantener el scale calculado
                    gsap.set(metaball, {
                        x: 0,
                        y: 0,
                        scale: targetScale, // Mantener el scale calculado para el navbar
                        width: "100%",
                        height: "100%"
                    });
                    
                    metaball.classList.remove(
                        "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2"
                    );
                    metaball.classList.add("w-full", "h-full");
                    
                    // La transición ha terminado
                    isMetaballTransitioning.set(false);
                }
            });
        }
    };

    // Reactive statement para ejecutar la animación cuando se cumplan las condiciones
    $: if (isHomeDesktop && metaballSpan) {
        console.log('isHomeDesktop changed to true, setting timeout');
        // Mover la metabola automáticamente después de 2 segundos
        setTimeout(() => {
            console.log('Timeout executed, calling moveMetaballToNavbar');
            moveMetaballToNavbar();
        }, 2000);
    }

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
<nav class="hidden sm:flex relative w-full gap-2.5 justify-between lg:w-auto lg:fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2 z-50 items-center">
        <!-- metaball goes here -->
        <span bind:this={metaballSpan} class="hidden lg:block h-16 w-20 lg:w-12 rounded-full lg:flex-shrink-0"></span>

         <div class="hidden lg:inline-flex h-14 py-6 px-8 bg-gradient-to-br from-black/60 to-black/80 rounded-[100px] shadow-[2px_2px_20px_0px_rgba(0,0,0,0.40)] outline outline-[1.40px] outline-offset-[-1.40px] outline-white/40 backdrop-blur-[34px] justify-center items-center gap-10">
                <a href="/" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isHomeRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Zine</span>
                 </a>
                 <a href="/map" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isMapRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Map</span>
                 </a>
        </div>
</nav>
{/if}

<!-- Home Mobile Navbar -->
{#if isHomeMobile}
<nav class="sm:hidden relative z-50 flex items-center justify-between w-full py-6 px-4">
        <!-- Metabola PNG para mobile -->
        <a href="/" class="h-12 w-12 rounded-full flex-shrink-0">
            <img src="media/home/icons/metaball.png" alt="metabola" class="w-full h-full object-contain" />
        </a>

        <!-- Menú hamburguesa con dropdown -->
        <div class="relative">
            <button bind:this={mobileMenuButton} on:click={() => showMobileMenu = !showMobileMenu}>
                <img src="src/lib/assets/images/mobile-hamburguer.svg" alt="Menu" class="drop-shadow drop-shadow-black" />
            </button>
            
            <!-- Dropdown Menu -->
            {#if showMobileMenu}
            <div class="absolute right-0 top-full mt-2 z-50 flex flex-col gap-2">
                <a href="/" class="w-80 h-12 px-5 py-1.5 bg-gradient-to-br from-black/60 to-black/80 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isHomeRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Zine</span>
                </a>
                <a href="/map" class="w-80 h-12 px-5 py-1.5 bg-gradient-to-br from-black/60 to-black/80 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isMapRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Map</span>
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

<!-- Other Pages Desktop Navbar -->
{#if !isHomeRoute && width > 768}
<nav class="hidden sm:flex relative w-full gap-2.5 justify-between lg:w-auto lg:fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2 z-50 items-center">
        <!-- metaball goes here -->
        <span bind:this={metaballSpan} class="hidden lg:block h-16 w-20 lg:w-12 rounded-full lg:flex-shrink-0"></span>

         <div class="hidden lg:inline-flex h-14 py-6 px-8 bg-gradient-to-br from-black/60 to-black/80 rounded-[100px] shadow-[2px_2px_20px_0px_rgba(0,0,0,0.40)] outline outline-[1.40px] outline-offset-[-1.40px] outline-white/40 backdrop-blur-[34px] justify-center items-center gap-10">
                <a href="/" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isHomeRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Zine</span>
                 </a>
                 <a href="/map" class="flex justify-start items-center gap-2">
                         <Circle size={8} class="text-white {isMapRoute ? 'fill-white' : ''}" />
                         <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Map</span>
                 </a>
        </div>
</nav>
{/if}

<!-- Other Pages Mobile Navbar -->
{#if !isHomeRoute && width <= 768}
<nav class="sm:hidden relative z-50 flex items-center justify-between w-full py-6 px-4">
        <!-- Metabola PNG para mobile -->
        <a href="/" class="h-12 w-12 rounded-full flex-shrink-0">
            <img src="media/home/icons/metaball.png" alt="metabola" class="w-full h-full object-contain" />
        </a>

        <!-- Menú hamburguesa con dropdown -->
        <div class="relative">
            <button bind:this={mobileMenuButton} on:click={() => showMobileMenu = !showMobileMenu}>
                <img src="src/lib/assets/images/mobile-hamburguer.svg" alt="Menu" class="drop-shadow drop-shadow-black" />
            </button>
            
            <!-- Dropdown Menu -->
            {#if showMobileMenu}
            <div class="absolute right-0 top-full mt-2 z-50 flex flex-col gap-2">
                <a href="/" class="w-80 h-12 px-5 py-1.5 bg-gradient-to-br from-black/60 to-black/80 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isHomeRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Zine</span>
                </a>
                <a href="/map" class="w-80 h-12 px-5 py-1.5 bg-gradient-to-br from-black/60 to-black/80 rounded-20 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5" on:click={() => showMobileMenu = false}>
                    <Circle size={6} class="text-white {isMapRoute ? 'fill-white' : ''}" />
                    <span class="text-white text-xs font-bold font-robotoMono leading-none tracking-wide">Map</span>
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


