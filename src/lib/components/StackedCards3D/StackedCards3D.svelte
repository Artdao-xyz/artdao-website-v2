<script lang="ts">
    import type { Project } from '../../../constants/projects';

    export let projects: Project;
    export let isSelected: boolean = false;
    export let hasSelection: boolean = false;
    export let isHovered: boolean = false;
    export const hasHover: boolean = false;
    export let onSelect: (index: number) => void;
    export let onHover: (index: number | null) => void = () => {};
    export let index: number;

    // Generar valores aleatorios para back-scale y main-scale
    $: {
        const random = Math.random();
        if (random < 0.5) {
            // 50% de probabilidad: back-scale = 0.9, main-scale = 1.3
            document.documentElement.style.setProperty('--back-scale', '0.9');
            document.documentElement.style.setProperty('--main-scale', '0.7');
        } else {
            // 50% de probabilidad: back-scale = 1.3, main-scale = 0.9
            document.documentElement.style.setProperty('--back-scale', '0.7');
            document.documentElement.style.setProperty('--main-scale', '0.9');
        }
    }

    $: console.log('isHovered', isHovered, 'isSelected', isSelected, 'classes:', { selected: isSelected, 'grid-hover': isHovered });
    
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
     class:grid-hover={isHovered}
     on:click={handleClick}
     on:keydown={(e) => e.key === 'Enter' && handleClick(e)}
>
    
    {#if projects.thumbnailPath[0]}
        <!-- Imagen trasera -->
        <div class="card-layer card-back flex flex-col items-center justify-center">
            <img src={projects.thumbnailPath[0]} alt="Capa trasera" class="card-image" />
            {#if isSelected && projects.artworks && projects.artworks[0]}
                <div class="artwork-name">{projects.artworks[0]}</div>
            {/if}
        </div>
    {/if}
    
    {#if projects.thumbnailPath[1]}
        <!-- Imagen principal -->
        <div class="card-layer card-main flex flex-col items-center justify-center">
            <img src={projects.thumbnailPath[1]} alt="Capa principal" class="card-image" />
            {#if isSelected && projects.artworks && projects.artworks[1]}
                <div class="artwork-name">{projects.artworks[1]}</div>
            {/if}
        </div>
    {/if}
    
    {#if projects.thumbnailPath[2]}
        <!-- Imagen delantera -->
        <div class="card-layer card-front flex flex-col items-center justify-center">
            <img src={projects.thumbnailPath[2]} alt="Capa delantera" class="card-image" />
            {#if isSelected && projects.artworks && projects.artworks[2]}
                <div class="artwork-name">{projects.artworks[2]}</div>
            {/if}
        </div>
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
        
        /* Variables CSS personalizables */
        --rotation-y: -25deg;
        --back-scale: 0.75;
        --main-scale: 0.75;
        --front-scale: 0.7;
        --back-translate-z: 0px;
        --main-translate-z: 0px;
        --front-translate-z: 0px;
        --back-translate-y: 0%;
        --main-translate-y: 0%;
        --front-translate-y: 0%;
        --back-translate-x: 30px;
        --main-translate-x: 0px;
        --front-translate-x: -60px;
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
        top: 0%;
        left: 0%;
        /* transform: translate(-50%, -50%); */
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
        backdrop-filter: blur(4px);
        width: fit-content;
        align-self: start;
    }
    
    /* Alineación específica para la primera capa (back) */
    .card-back .artwork-name {
        align-self: end; /* Derecha */
    }
    
    /* Capa trasera - más pequeña y desplazada con rotación 3D */
    .card-back {
        z-index: 1;
        transform: scale(var(--back-scale)) translateX(var(--back-translate-x)) translateY(var(--back-translate-y)) translateZ(var(--back-translate-z)) rotateY(var(--rotation-y));
        transition: transform 0.3s ease;
    }
    
    /* Capa principal - tamaño normal con rotación 3D */
    .card-main {
        z-index: 2;
        transform: scale(var(--main-scale)) translateX(var(--main-translate-x)) translateY(var(--main-translate-y)) translateZ(var(--main-translate-z)) rotateY(var(--rotation-y));
        transition: transform 0.3s ease;
    }
    
    /* Capa delantera - más pequeña y desplazada con rotación 3D */
    .card-front {
        z-index: 3;
        transform: scale(var(--front-scale)) translateX(var(--front-translate-x)) translateY(var(--front-translate-y)) translateZ(var(--front-translate-z)) rotateY(var(--rotation-y));
        transition: transform 0.3s ease;
    }
    
    /* HOVER: Dispersión moderada de las cartas */
    .card-container.grid-hover .card-back {
        transform: scale(0.60) translateX(20%) translateY(-30%) translateZ(-30px) rotateY(0deg) !important;
        transform-style: flat !important;
    }
    
    .card-container.grid-hover .card-main {
        transform: scale(0.60) translateX(0%) translateY(30%) translateZ(-10px) rotateY(0deg) !important;
        transform-style: flat !important;
    }
    
    .card-container.grid-hover .card-front {
        transform: scale(0.6) translateX(-20%) translateY(-30%) translateZ(30px) rotateY(0deg) !important;
        transform-style: flat !important;
    }
    
    /* SELECTED: Layout personalizado - back arriba centrada, main abajo izquierda, front abajo derecha */
    .card-container.selected .card-back {
        transform: scale(0.75) translateX(75%) translateY(-20%) translateZ(0px) rotateY(0deg) !important;
    }
    
    .card-container.selected .card-main {
        transform: scale(0.75) translateX(40%) translateY(20%) translateZ(0px) rotateY(-10deg) !important;
    }
    
    .card-container.selected .card-front {
        transform: scale(0.75) translateX(10%) translateY(-20%) translateZ(0px) rotateY(10deg) !important;
        }
    
</style>
