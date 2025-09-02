<script lang="ts">
    const images = [
        'media/home/thumbnails-animation/3.webp',
        'media/home/thumbnails-animation/2.webp',
        'media/home/thumbnails-animation/1.webp'
    ];
    
    let isRotated = false;
    
    // Variables de rotación
    let rotateY = -30;  // Rotación horizontal
    let rotateX = 45;   // Rotación vertical
    let scale = 0.75;   // Escala
    let translateZ = 4.5; // Profundidad
    
    function toggleRotation() {
        isRotated = !isRotated;
    }
</script>

<svelte:head>
    <title>Test - Componente StackedCards3D</title>
</svelte:head>

<div class="test-container">
    
    <!-- Efecto 3D con elementos reales -->
    <div class="component-section">
        <div class="card-3d-effect" 
             class:rotated={isRotated} 
             style:transform={isRotated ? 
                `scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(${translateZ}rem)` : 
                'scale(1) rotateY(0deg) rotateX(0deg) translateZ(0)'
             }
             on:click={toggleRotation}>
            <!-- Capa trasera -->
            <div class="card-layer card-back">
                <img src={images[0]} alt="Capa trasera" class="card-image" />
            </div>
            
            <!-- Capa principal -->
            <div class="card-layer card-main">
                <img src={images[1]} alt="Capa principal" class="card-image" />
            </div>
            
            <!-- Capa delantera -->
            <div class="card-layer card-front">
                <img src={images[2]} alt="Capa delantera" class="card-image" />
            </div>
        </div>
    </div>
</div>

<style>
    .test-container {
        min-height: 100vh;
        padding: 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    
    h1, h2 {
        color: white;
        text-align: center;
        margin-bottom: 1rem;
    }
    
    .component-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    

    
    /* Efecto 3D arreglado */
    .card-3d-effect {
        width: 300px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
        transform: scale(1) rotateY(0deg) rotateX(0deg) translateZ(0);
        transform-origin: 50% 100%;
        transition: 0.6s ease transform;
        cursor: pointer;
    }
    

    

    
    /* Hover solo cuando está rotada - cada capa individual */
    .card-3d-effect.rotated .card-back:hover {
        transform: translateZ(-6rem) translateY(-10px);
    }
    
    .card-3d-effect.rotated .card-main:hover {
        transform: translateZ(0) translateY(-10px);
    }
    
    .card-3d-effect.rotated .card-front:hover {
        transform: translateZ(6rem) translateY(-10px);
    }
    
    /* Estilos para las capas */
    .card-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        transition: transform 0.6s ease;
        overflow: hidden;
    }
    
    .card-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
    }
    
    /* Capa trasera */
    .card-back {
        transform: translateZ(-2rem);
        z-index: 0;
    }
    
    .card-3d-effect.rotated .card-back {
        transform: translateZ(-6rem);
    }
    
    /* Capa principal */
    .card-main {
        transform: translateZ(0);
        z-index: 1;
    }
    
    /* Capa delantera */
    .card-front {
        transform: translateZ(2rem);
        z-index: 2;
    }
    
    .card-3d-effect.rotated .card-front {
        transform: translateZ(6rem);
    }
</style>
