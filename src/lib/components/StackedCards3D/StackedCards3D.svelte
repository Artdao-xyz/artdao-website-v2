<script lang="ts">
    import type { Project } from '../../../constants/projects';

    export let projects: Project;
    export let isSelected: boolean = false;
    export let hasSelection: boolean = false;
    export let isHovered: boolean = false;
    export const hasHover: boolean = false;
    export let onSelect: (index: number) => void;
    export const onHover: (index: number | null) => void = () => {};
    export let index: number;
    export let isAnimating: boolean = false; // Nueva prop para controlar animaciones
    export let showEnterButton: boolean = false; // Nueva prop para mostrar el botón

    // Valores fijos para posicionamiento consistente
    $: {
        // Valores fijos para un posicionamiento más confiable - un poco menos
        document.documentElement.style.setProperty('--back-scale', '0.65');
        document.documentElement.style.setProperty('--main-scale', '0.8');
        document.documentElement.style.setProperty('--front-scale', '0.6');
    }

    // Solo aplicar hover si no está animando
    $: shouldShowHover = isHovered && !isAnimating;
    
    $: console.log('isHovered', isHovered, 'isSelected', isSelected, 'isAnimating', isAnimating, 'shouldShowHover', shouldShowHover);
    
    function handleClick(event: MouseEvent | KeyboardEvent) {
        if (!isSelected) {
            // Primer click: seleccionar
            event.preventDefault();
            onSelect(index);
        }
        // Si ya está seleccionado, el link normal funcionará (segundo click: redirigir)
    }
</script>

<div class="card-container" 
    role="button"
    tabindex="0"
     class:opacity-50={hasSelection && !isSelected}
     class:selected={isSelected}
     class:grid-hover={shouldShowHover}
     on:click={handleClick}
     on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
>
    
    {#if projects.thumbnailPath[0]}
        <!-- Imagen trasera -->
        <div class="card-layer card-back flex flex-col items-center justify-center">
            <img src={projects.thumbnailPath[0]} alt="Capa trasera" class="card-image" />
            {#if isSelected && projects.artworks && projects.artworks[0]}
                <div class="artwork-name">
                    <div class="w-1.5 h-1.5 bg-black rounded-[100px]"></div>
                    {projects.artworks[0]}
                </div>
            {/if}
        </div>
    {/if}
    
    {#if projects.thumbnailPath[1]}
        <!-- Imagen principal -->
        <div class="card-layer card-main flex flex-col items-center justify-center">
            <img src={projects.thumbnailPath[1]} alt="Capa principal" class="card-image" />
            {#if isSelected && projects.artworks && projects.artworks[1]}
                <div class="artwork-name">
                    <div class="w-1.5 h-1.5 bg-black rounded-[100px]"></div>
                    {projects.artworks[1]}
                </div>
            {/if}
            <!-- Quote dentro de la capa principal -->
            {#if isSelected && projects.quote}
                <div class="quote-container">
                    <p class="quote-text">{projects.quote}</p>
                </div>
            {/if}
        </div>
    {/if}
    
    {#if projects.thumbnailPath[2]}
        <!-- Imagen delantera -->
        <div class="card-layer card-front flex flex-col items-center justify-center">
            <img src={projects.thumbnailPath[2]} alt="Capa delantera" class="card-image" />
            {#if isSelected && projects.artworks && projects.artworks[2]}
                <div class="artwork-name">
                    <div class="w-1.5 h-1.5 bg-black rounded-[100px]"></div>
                    {projects.artworks[2]}
                </div>
            {/if}
        </div>
    {/if}
    
    <!-- Botón Enter the zine -->
    {#if showEnterButton}
        <a 
            href={projects.pagePath}
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
                   h-32 w-32 px-5 py-11 bg-[#d9d9d9]/20 rounded-[999px] outline outline-2 outline-white backdrop-blur-[2px] inline-flex flex-col justify-center items-center gap-2.5
                   transition-all duration-200
                   hover:scale-110 hover:shadow-xl
                   opacity-100 scale-100"
            on:click={(e) => {
                e.stopPropagation();
            }}
        >
            <div class="justify-center text-white text-[10px] font-normal font-robotoMono leading-3 tracking-tight">Enter the Zine</div>
        </a>
    {/if}
    
</div>

<style>
    .card-container {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: opacity 0.3s ease;
        perspective: 1000px;
        
        /* Variables CSS para posicionamiento consistente */
        --rotation-y: -20deg;
        --back-scale: 0.65;
        --main-scale: 0.8;
        --front-scale: 0.6;
        
        /* Posicionamiento base - offset dramático del centro */
        --back-translate-x: 80px;     /* Derecha dramática */
        --main-translate-x: 0px;      /* Centro horizontal */
        --front-translate-x: -80px;   /* Izquierda dramática */
        
        --back-translate-y: 60px;     /* Piso alineado */
        --main-translate-y: 0px;      /* Piso alineado */
        --front-translate-y: 60px;    /* Piso alineado */
        
        --back-translate-z: -20px;
        --main-translate-z: 0px;
        --front-translate-z: 20px;
        
        --hover-translate-y: -30px;
    }
    
    .card-container.selected {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        perspective: none;

    }
    
    .card-layer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        border-radius: 8px;
        overflow: hidden;
        transform-style: preserve-3d;
        pointer-events: none;
        
    }
    
    /* Permitir overflow visible cuando está seleccionado */
    .card-container.selected .card-layer {
        overflow: visible;
        width: auto;
        height: auto;
    }
    
    .card-image {
        display: block;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 8px;
        pointer-events: auto;
    }
    
    .artwork-name {
        position: relative;
        margin-top: 8px;
        color: black;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
        font-family: 'Roboto Mono', monospace;
        text-align: center;
        white-space: nowrap;
        z-index: 10;
        width: fit-content;
        align-self: start;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    
    /* Alineación específica para la primera capa (back) */
    .card-back .artwork-name {
        align-self: end; /* Derecha */
    }
    
    /* Capa trasera - más pequeña y desplazada con rotación 3D */
    .card-back {
        z-index: 1;
        transform: translate(-50%, -50%) scale(var(--back-scale)) translateX(var(--back-translate-x)) translateY(var(--back-translate-y)) translateZ(var(--back-translate-z)) rotateY(var(--rotation-y));
        transition: transform 0.3s ease;
    }
    
    /* Capa principal - tamaño normal con rotación 3D */
    .card-main {
        z-index: 2;
        transform: translate(-50%, -50%) scale(var(--main-scale)) translateX(var(--main-translate-x)) translateY(var(--main-translate-y)) translateZ(var(--main-translate-z)) rotateY(var(--rotation-y));
        transition: transform 0.3s ease;
    }
    
    /* Capa delantera - más pequeña y desplazada con rotación 3D */
    .card-front {
        z-index: 3;
        transform: translate(-50%, -50%) scale(var(--front-scale)) translateX(var(--front-translate-x)) translateY(var(--front-translate-y)) translateZ(var(--front-translate-z)) rotateY(var(--rotation-y));
        transition: transform 0.3s ease;
    }
    
    
    /* HOVER: Dispersión moderada - sin drama */
    .card-container.grid-hover .card-back {
        transform: translate(-50%, -50%) scale(0.65) translateX(40px) translateY(-30px) translateZ(-30px) rotateY(0deg);
        transform-style: flat;
        /* transition: transform 0.2s ease; */
    }
    
    .card-container.grid-hover .card-main {
        transform: translate(-50%, -50%) scale(0.65) translateX(0px) translateY(30px) translateZ(-10px) rotateY(0deg);
        transform-style: flat;
        /* transition: transform 0.2s ease; */
    }
    
    .card-container.grid-hover .card-front {
        transform: translate(-50%, -50%) scale(0.65) translateX(-40px) translateY(-30px) translateZ(30px) rotateY(0deg);
        transform-style: flat;
        /* transition: transform 0.2s ease; */
    }
    
    /* SELECTED: Layout SÚPER DRAMÁTICO con offset del centro */
    .card-container.selected .card-back {
        transform: translate(-50%, -50%) scale(0.6) translateX(200px) translateY(-120px) translateZ(0px) rotateY(-15deg) !important;
        transform-style: flat !important;
    }
    
    .card-container.selected .card-main {
        transform: translate(-50%, -50%) scale(0.6) translateX(0px) translateY(30%) translateZ(0px) rotateY(0deg) !important;
    }
    
    .card-container.selected .card-front {
        transform: translate(-50%, -50%) scale(0.6) translateX(-200px) translateY(-120px) translateZ(0px) rotateY(15deg) !important;
    }
    
    /* Quote container - posicionamiento relativo dentro de la capa principal */
    .quote-container {
        position: relative;
        width: 200%;
        text-align: center;
        margin-top: 12px;
        z-index: 20;
    }
    
    .quote-text {
        color: black;
        font-size: 20px;
        font-family: 'Roboto Mono', monospace;
        line-height: 1.3;
        margin: 0;
    }
    
</style>
