<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import * as THREE from 'three';
	import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
	import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
	import { gsap } from 'gsap';
	import { HOME } from '../../../constants/routes';
	import MetaSymbol from '../../../lib/components/Metaball/MetaSymbol';
	import { fly } from 'svelte/transition';
	import { metaballReady, imagesLoaded } from '$lib/stores/metaballPreloader';
	// Props para controlar el comportamiento
	export let isHomePage: boolean = false;
	export let isPreloader: boolean = false;
	export let size: 'small' | 'medium' | 'large' | 'extra-large' = 'small';

	let canvas: any = null;
	let metaSymbol: any = null;
	let isLoaded = false;
	let isAnimated = false;	
	let metaballContainer: any = null;
	
	// Detectar si estamos en la página de inherent-instability
	$: isInherentInstabilityPage = $page?.route?.id === '/inherent-instability';

	const scene = new THREE.Scene();

	// Función para animar el canvas hacia la esquina inferior derecha
	const animateToBottomRight = () => {
		console.log('🎬 animateToBottomRight iniciada');
		console.log('🎬 canvas:', !!canvas, 'isAnimated:', isAnimated);
		console.log('🎬 metaballContainer:', !!metaballContainer);
		
		if (!canvas || isAnimated) {
			console.log('❌ animateToBottomRight cancelada - canvas:', !!canvas, 'isAnimated:', isAnimated);
			return;
		}
		
		// Limpiar cualquier animación GSAP previa del canvas
		gsap.killTweensOf(canvas);
		
		isAnimated = true;
		console.log('✅ animateToBottomRight ejecutándose');

		// Hacer transparente el wrapper si existe
		if (metaballContainer) {
			console.log('🎯 Haciendo transparente metaballContainer');
			metaballContainer.classList.add('opacity-0');
			metaballContainer.classList.remove('opacity-100');
		}
		
		// Remover las clases de centrado y establecer posición inicial
		console.log('🎬 Removiendo clases CSS');
		console.log('🎬 Canvas antes:', canvas.style.transform, canvas.style.bottom, canvas.style.right);
		canvas.classList.remove('bottom-1/2', 'right-1/2', 'translate-x-1/2', 'translate-y-1/2');
		canvas.style.bottom = '50%';
		canvas.style.right = '50%';
		canvas.style.transform = 'translate(50%, 50%)';
		console.log('🎬 Canvas después:', canvas.style.transform, canvas.style.bottom, canvas.style.right);
		
		console.log('🎬 Iniciando animación GSAP');
		console.log('🎬 GSAP activo:', gsap.globalTimeline.getChildren().length, 'animaciones');
		const startTime = performance.now();
		
		gsap.to(canvas, {
			duration: 1.5,
			ease: "power2.inOut",
			bottom: '10px',
			right: '10px',
			transform: 'translate(0, 0) scale(0.2)',
			onStart: () => {
				console.log('🚀 GSAP animación iniciada');
			},
			onComplete: () => {
				console.log('✅ GSAP animación completada');
			}
		});
	};


	onMount(() => {
		console.log('🎯 Metaball onMount iniciado - isPreloader:', isPreloader, 'size:', size);
		
		// Reset del estado para evitar conflictos
		isAnimated = false;
		isLoaded = false;
		
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
					console.log('🎉 Metabola cargada, esperando 2 segundos para animar');
					
					// Si es preloader, disparar evento metaballReady
					if (isPreloader) {
						metaballReady.set(true);
					}
					
					setTimeout(() => {
						console.log('⏰ Ejecutando animateToBottomRight después de 2 segundos');
						animateToBottomRight();
					}, 2000);
				}, 100);
			},
			undefined,
			(error) => {
				console.error('Error cargando textura de metabola:', error);
			}
		);

		/* ANIMATION */
		let animationId: number;
		let frameCount = 0;
		const animate = () => {
			animationId = requestAnimationFrame(animate);
			if (metaSymbol) {
				metaSymbol.update();
			}
			composer.render();
			
			// Log cada 300 frames (aproximadamente 5 segundos)
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
			console.log('🧹 Metaball cleanup iniciado');
			if (animationId) {
				cancelAnimationFrame(animationId);
				console.log('🧹 Animation frame cancelado');
			}
			
			// Limpiar todas las animaciones GSAP del canvas
			if (canvas) {
				gsap.killTweensOf(canvas);
				console.log('🧹 GSAP animations killed');
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

<div 
	transition:fly={{ duration: 1000 }} 
	bind:this={metaballContainer}
	class="bg-dot h-screen w-screen fixed inset-0 z-50 transition-opacity duration-[2000ms] ease-in-out opacity-100 pointer-events-none"
>
</div>
<canvas 
	bind:this={canvas} 
	class="bg-transparent fixed bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 z-50 transition-opacity duration-500 ease-in-out"
	class:opacity-0={!isLoaded}
	class:opacity-100={isLoaded}
	style="transition-delay: {isLoaded ? '200ms' : '0ms'}; transform-origin: bottom right;"
>
</canvas>


<style>
	.bg-dot {
		background: #F7F5F2 url('/media/home/home-dot.svg') repeat;
		background-size: 20px 20px;
	}
</style>