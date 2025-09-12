<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
	import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
	import { gsap } from 'gsap';
	import { HOME } from '../../../constants/routes';
	import MetaSymbol from '../../../lib/components/Metaball/MetaSymbol';
	
	// Props para controlar el comportamiento
	export let isHomePage: boolean = false;
	export let size: 'small' | 'medium' | 'large' | 'extra-large' = 'small';

	let canvas: any = null;
	let metaSymbol: any = null;
	let isLoaded = false;
	let isAnimated = false;

	const scene = new THREE.Scene();

	// Función para animar el canvas hacia la esquina inferior derecha
	const animateToBottomRight = () => {
		if (!canvas || isAnimated) return;
		
		isAnimated = true;
		
		// Remover las clases de centrado y establecer posición inicial
		canvas.classList.remove('bottom-1/2', 'right-1/2', 'translate-x-1/2', 'translate-y-1/2');
		canvas.style.bottom = '50%';
		canvas.style.right = '50%';
		canvas.style.transform = 'translate(50%, 50%)';
		
		gsap.to(canvas, {
			duration: 1.5,
			ease: "power2.inOut",
			bottom: '10px',
			right: '10px',
			transform: 'translate(0, 0) scale(0.2)',
			onComplete: () => {
				// Mantener la posición final
				// canvas.style.transform = 'scale(0.2)';
			}
		});
	};

	onMount(() => {
		/* SETTINGS */
		let baseSize: number;
		switch (size) {
					case 'extra-large':
			baseSize = window.innerWidth <= 768 ? 350 : 700;
			break;
			case 'large':
				baseSize = window.innerWidth <= 768 ? 150 : 300;
				break;
			case 'medium':
				baseSize = window.innerWidth <= 768 ? 80 : 150;
				break;
			case 'small':
			default:
				baseSize = window.innerWidth <= 768 ? 60 : 100;
				break;
		}
		
		const sizes = {
			width: baseSize,
			height: baseSize
		};

		/* SCENE */
		const camera = new THREE.PerspectiveCamera(12.0, sizes.width / sizes.height, 0.001, 1000.0);
		if (sizes.width < 1025) {
			camera.position.y = 0;
			camera.position.z = 300;
		} else {
			camera.position.z = 200;
		}

		const renderer = new THREE.WebGLRenderer({
			canvas,
			antialias: true,
			alpha: true,
			premultipliedAlpha: false
		});

		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(sizes.width, sizes.height);
		const renderTarget = new THREE.WebGLRenderTarget(sizes.width, sizes.height, {
			samples: 4,
			type: THREE.HalfFloatType
		});
		const renderPass = new RenderPass(scene, camera);
		const composer = new EffectComposer(renderer, renderTarget);
		composer.addPass(renderPass);

		const textureLoader = new THREE.TextureLoader();

		// Preload the matcap texture and create metaball only when loaded
		textureLoader.load(
			'/metaball/matcap-black.png',
			(texture) => {
				// Texture is now loaded, create the metaball
				metaSymbol = new MetaSymbol(texture);
				scene.add(metaSymbol.getMesh());

				// Activar fade-in después de que el Metaball esté listo
				setTimeout(() => {
					isLoaded = true;
					
					// Iniciar animación después de 2 segundos
					if (isHomePage) {
						setTimeout(() => {
							animateToBottomRight();
						}, 2000);
					}
				}, 100);
			},
			undefined,
			(error) => {
				console.error('Error cargando textura de metabola:', error);
			}
		);

		/* ANIMATION */
		let animationId: number;
		const animate = () => {
			animationId = requestAnimationFrame(animate);
			if (metaSymbol) {
				metaSymbol.update();
			}
			composer.render();
		};

		animate();

		// document.addEventListener('wheel', () => {
		// 	console.log('wheel');
		// });

		/* RESIZE */
		onresize = (e) => {
			
		};

		return () => {
			// Cancelar requestAnimationFrame
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			
			if (metaSymbol) {
				metaSymbol.dispose();
			}
			if (renderPass) {
				renderPass.dispose();
			}
			if (renderTarget) {
				renderTarget.dispose();
			}
			// Limpiar animaciones GSAP si las hay
			if (canvas) {
				gsap.killTweensOf(canvas);
			}
		};
	});

	// $: { 
	//     if (metaSymbol)   {
	//         metaSymbol.changeTexture(0);
	//         document.body.className = themes[0];
	//     }
	// }

	/**
	 * @type {any}
	 */
	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

{#if isHomePage}
	<!-- En la página principal: Metaball fijo en el centro -->
	<canvas 
		bind:this={canvas} 
		class="bg-transparent fixed bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 z-40 transition-opacity duration-500 ease-in-out"
		class:opacity-0={!isLoaded}
		class:opacity-100={isLoaded}
		style="transition-delay: {isLoaded ? '200ms' : '0ms'}; transform-origin: bottom right;"
	>
	</canvas>
{:else}
	<!-- En otras páginas: Metaball como enlace flotante -->
	<a href={width <= 768 ? HOME : '#intro'}>
		<canvas 
			bind:this={canvas} 
			class="bg-transparent relative transition-opacity duration-600 ease-in-out"
			class:opacity-0={!isLoaded}
			class:opacity-100={isLoaded}
		>
		</canvas>
	</a>
{/if}
