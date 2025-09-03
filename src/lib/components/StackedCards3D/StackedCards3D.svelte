<script lang="ts">
    import type { Project } from '../../../constants/projects';

    export let projects: Project;
    export let isSelected: boolean = false;
    export let hasSelection: boolean = false;
    export const isHovered: boolean = false;
    export const hasHover: boolean = false;
    export let onSelect: (index: number) => void;
    export let onHover: (index: number | null) => void;
    export let index: number;
    
    function handleClick(event: MouseEvent) {
        if (!isSelected) {
            // Primer click: seleccionar
            event.preventDefault();
            onSelect(index);
        }
        // Si ya está seleccionado, el link normal funcionará (segundo click: redirigir)
    }
</script>

<a href={projects.pagePath} class="card-container" 
     class:opacity-50={hasSelection && !isSelected}
     class:selected={isSelected}
     on:click={handleClick}
     on:mouseenter={() => onHover(index)}
     on:mouseleave={() => onHover(null)}>
    
    {#if projects.thumbnailPath[0]}
        <!-- Imagen trasera -->
        <div class="card-layer card-back flex items-center justify-center">
            <img src={projects.thumbnailPath[0]} alt="Capa trasera" class="card-image" />
        </div>
    {/if}
    
    {#if projects.thumbnailPath[1]}
        <!-- Imagen principal -->
        <div class="card-layer card-main flex items-center justify-center">
            <img src={projects.thumbnailPath[1]} alt="Capa principal" class="card-image" />
        </div>
    {/if}
    
    {#if projects.thumbnailPath[2]}
        <!-- Imagen delantera -->
        <div class="card-layer card-front flex items-center justify-center">
            <img src={projects.thumbnailPath[2]} alt="Capa delantera" class="card-image" />
        </div>
    {/if}
</a>

<style>
    .card-container {
        position: relative;
        display: block;
        width: 100%;
        height: 200px;
        cursor: pointer;
        transition: opacity 0.3s ease;
        perspective: 1000px;
        
        /* Variables CSS personalizables */
        --rotation-y: -25deg;
        --back-scale: 1.3;
        --main-scale: 1.3;
        --front-scale: 1.3;
        --back-translate-x: 10px;
        --back-translate-y: 15px;
        --back-translate-z: -100px;
        --main-translate-x: 0px;
        --main-translate-y: 10px;
        --main-translate-z: 0px;
        --front-translate-x: -50px;
        --front-translate-y: 20px;
        --front-translate-z: 50px;
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
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        border-radius: 8px;
        overflow: hidden;
        transform-style: preserve-3d;
        pointer-events: none;
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
    
    /* Efecto hover individual - solo cuando NO está seleccionado */
    .card-container:not(.selected) .card-back:hover {
        transform: scale(var(--back-scale)) translateX(var(--back-translate-x)) translateY(calc(var(--back-translate-y) + var(--hover-translate-y))) translateZ(var(--back-translate-z)) rotateY(var(--rotation-y));
    }
    
    .card-container:not(.selected) .card-main:hover {
        transform: translateX(var(--main-translate-x)) translateY(calc(var(--main-translate-y) + var(--hover-translate-y))) translateZ(var(--main-translate-z)) rotateY(var(--rotation-y));
    }
    
    .card-container:not(.selected) .card-front:hover {
        transform: scale(var(--front-scale)) translateX(var(--front-translate-x)) translateY(calc(var(--front-translate-y) + var(--hover-translate-y))) translateZ(var(--front-translate-z)) rotateY(var(--rotation-y));
    }
    
    /* Estados seleccionados - layout flex horizontal */
    .card-container.selected .card-layer {
        position: relative;
        transform: none;
        transform-style: flat;
        flex: 1;
        margin: 0 10px;
    }
    
    /* Estado 3D - cartas justificadas al piso */
    .card-container:not(.selected) .card-layer {
        align-items: flex-end;
    }
    
    /* Estado seleccionado - cartas centradas */
    .card-container.selected .card-layer {
        align-items: center;
    }
    
    .card-container.selected .card-back {
        order: 1;
    }
    
    .card-container.selected .card-main {
        order: 2;
    }
    
    .card-container.selected .card-front {
        order: 3;
    }
</style>
