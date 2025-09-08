<script lang="ts">
    import { Circle } from 'lucide-svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { gsap } from 'gsap';
    import { metaballRef, isMetaballTransitioning } from '../store';
    import TopBarMobile from '../../TopBarMobile/TopBarMobile.svelte';

    // Referencias a los elementos
    let metaballSpan: HTMLSpanElement;
    let showInfo = false;
    
    // Detectar la ruta actual
    $: isMapRoute = $page.url.pathname === '/map';
    $: isHomeRoute = $page.url.pathname === '/';
    onMount(() => {
        // Estado para controlar si ya se activó la transición
        let hasTriggered = false;
        
        // Detectar interacciones del mouse
        const handleMouseInteraction = () => {
            const metaball = $metaballRef;
            if (metaball && !hasTriggered && !$isMetaballTransitioning) {
                hasTriggered = true; // Marcar como activado para siempre
                isMetaballTransitioning.set(true);
                
                // Obtener la posición del span
                const rect = metaballSpan.getBoundingClientRect();
                
                // Calcular la escala basada en la altura del span vs el canvas del Metaball
                const spanHeight = rect.height;
                const canvas = metaball.querySelector('canvas');
                const metaballHeight = canvas ? canvas.height : 700; // Fallback al tamaño original
                const targetScale = spanHeight / metaballHeight;
                
                // Animar el Metaball hacia el span
                gsap.to(metaball, {
                    duration: 1.2,
                    left: rect.left,
                    top: rect.top,
                    width: rect.width,
                    height: rect.height,
                    x: 0,
                    y: 0,
                    scale: targetScale, // Escala calculada dinámicamente
                    ease: "power3.inOut",
                    onComplete: () => {
                        // Mover canvas dentro del navbar-slot después de la animación
                        metaballSpan.appendChild(metaball);
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
        
        // Eventos del mouse
        document.addEventListener('wheel', handleMouseInteraction, { passive: true });
        document.addEventListener('mousemove', handleMouseInteraction, { passive: true });
        
        return () => {
            document.removeEventListener('wheel', handleMouseInteraction);
            document.removeEventListener('mousemove', handleMouseInteraction);
        };
    });
</script>

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

<TopBarMobile bind:showInfo/>
