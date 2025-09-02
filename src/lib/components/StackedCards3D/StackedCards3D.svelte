<script lang="ts">
    import type { Project } from '../../../constants/projects';

    export let projects: Project;
    export let isSelected: boolean = false;
    export let hasSelection: boolean = false;
    export let isHovered: boolean = false;
    export let hasHover: boolean = false;
    export let onSelect: (index: number) => void;
    export let onHover: (index: number | null) => void;
    export let index: number;
    
    let isRotated = false;
    let hoveredLayer: 'back' | 'main' | 'front' | null = null;
    let localHovered = false;
    
    // Variables de rotación del contenedor
    let containerRotateY = -45;  // Rotación del contenedor en Y
    let containerRotateX = -0;  // Rotación del contenedor en X (hacia abajo)
    
    // Variables de traslación Z individual para cada capa
    let backTranslateZ = -50;   // Traslación Z de la capa trasera (hacia atrás)
    let mainTranslateZ = -0;      // Traslación Z de la capa principal (centro)
    let frontTranslateZ = 50;   // Traslación Z de la capa delantera (hacia adelante)
    
    // Variables de rotación Y individual para cada capa
    let backRotateY = -30;       // Rotación Y de la capa trasera
    let mainRotateY = -30;         // Rotación Y de la capa principal
    let frontRotateY = -30;       // Rotación Y de la capa delantera
    
    // Variables de traslación X individual para cada capa
    let backTranslateX = -20;   // Traslación X de la capa trasera
    let mainTranslateX = 0;     // Traslación X de la capa principal
    let frontTranslateX = -50;   // Traslación X de la capa delantera
    
    function handleClick(event: MouseEvent) {
        if (!isSelected) {
            // Primer click: seleccionar
            event.preventDefault();
            onSelect(index);
        }
        // Si ya está seleccionado, el link normal funcionará (segundo click: redirigir)
    }
    
    function handleLayerHover(layer: 'back' | 'main' | 'front') {
        hoveredLayer = layer;
    }
    
    function handleLayerLeave() {
        hoveredLayer = null;
    }
    
    // Rotar automáticamente cuando el proyecto está seleccionado o en hover
    $: isRotated = isSelected || localHovered;
</script>

<a href={projects.pagePath} class="card-3d-effect" 
     class:opacity-20={hasSelection && !isSelected}
     class:selected={isSelected}
     on:click={handleClick}
     on:mouseenter={() => { localHovered = true; onHover(index); }}
     on:mouseleave={() => { localHovered = false; onHover(null); }}>
    <!-- Contenedor 3D que rota -->
    <div class="card-3d-container" 
         style:transform={isRotated ? 
            `translate(-50%, -50%) scale(1.25) rotateY(0deg) rotateX(0deg)` : 
            'translate(-50%, -50%) scale(1) rotateY(0deg) rotateX(0deg)'
         }>
                            <!-- Capa trasera - Centro arriba -->
                    <div class="card-layer card-back" 
                         role="button"
                         tabindex="0"
                         style:transform={isRotated ? 
                            'translate(-50%, -50%) translateX(0px) translateY(-36px) translateZ(-1px) rotateY(0deg)' : 
                            `translate(-50%, -50%) translateX(${backTranslateX}px) translateZ(${backTranslateZ}px) rotateY(${backRotateY}deg) translateY(0px)`
                         }>
                        <img src={projects.thumbnailPath[0] || ''} alt="Capa trasera" class="card-image" />
                    </div>
                    
                    <!-- Capa principal - Abajo derecha -->
                    <div class="card-layer card-main" 
                         role="button"
                         tabindex="0"
                         style:transform={isRotated ? 
                            'translate(-50%, -50%) translateX(80px) translateY(36px) translateZ(0px) rotateY(0deg)' : 
                            `translate(-50%, -50%) translateX(${mainTranslateX}px) translateZ(${mainTranslateZ}px) rotateY(${mainRotateY}deg) translateY(0px)`
                         }>
                        <img src={projects.thumbnailPath[1] || ''} alt="Capa principal" class="card-image" />
                    </div>
                    
                    <!-- Capa delantera - Abajo izquierda -->
                    <div class="card-layer card-front" 
                         role="button"
                         tabindex="0"
                         style:transform={isRotated ? 
                            'translate(-50%, -50%) translateX(-80px) translateY(36px) translateZ(1px) rotateY(0deg)' : 
                            `translate(-50%, -50%) translateX(${frontTranslateX}px) translateZ(${frontTranslateZ}px) rotateY(${frontRotateY}deg) translateY(0px)`
                         }>
                        <img src={projects.thumbnailPath[2] || ''} alt="Capa delantera" class="card-image" />
                    </div>
    </div>
</a>

<style>
    .card-3d-effect {
        position: relative;
        perspective: 1000px;
        cursor: pointer;
        display: inline-block;
        width: 300px;
        height: 200px;
        padding: 20px;
        box-sizing: border-box;
        transition: opacity 0.1s ease 0.1s;
        z-index: 1;
        overflow: visible;
    }
    
    .card-3d-effect.selected {
        z-index: 10;
    }
    
    .card-3d-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform-style: preserve-3d;
        transition: transform 0.6s ease;
        transform-origin: center center;
        overflow: visible;
    }
    

    
    /* Estilos para las capas */
    .card-layer {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 8px;
        transition: transform 0.6s ease;
        overflow: hidden;
        pointer-events: auto;
        transform-origin: center center;
    }
    
    .card-image {
        display: block;
        max-width: 300px;
        max-height: 200px;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 8px;
    }
    
    /* Capa trasera */
    .card-back {
        z-index: 0;
        transform-origin: center center;
    }
    
    /* Capa principal */
    .card-main {
        z-index: 1;
        transform-origin: center center;
    }
    
    /* Capa delantera */
    .card-front {
        z-index: 2;
        transform-origin: center center;
    }
</style>
