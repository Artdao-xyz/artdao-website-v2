<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
	import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
	import { HOME } from '../../../constants/routes';
	import MetaSymbol from '../../../lib/components/Metaball/MetaSymbol';

	let canvas = null;
	let metaSymbol = null;

	const scene = new THREE.Scene();

	onMount(() => {
		/* SETTINGS */
		const sizes = {
			width: window.innerWidth <= 768 ? 40 : 100,
			height: window.innerWidth <= 768 ? 40 : 100
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

		// Preload the matcap texture
		const textures = textureLoader.load(
			'/metaball/matcap-black.png',
			() => {
				// console.log('Texture loaded!');
				// Texture is now loaded and can be used
			},
			undefined,
			(error) => {
				console.error('An error occurred while loading the texture:', error);
			}
		);

		metaSymbol = new MetaSymbol(textures);
		scene.add(metaSymbol.getMesh());

		/* ANIMATION */
		const animate = () => {
			requestAnimationFrame(animate);
			metaSymbol.update();
			composer.render();
		};

		animate();

		/* RESIZE */
		onresize = (e) => {
			// Update sizes
			if (window.innerWidth !== sizes.width) {
				(sizes.width = window.innerWidth <= 768 ? 40 : 100),
					(sizes.height = window.innerWidth <= 768 ? 40 : 100);

				// Adjust camera position based on viewport size
				if (sizes.width < 1025) {
					camera.position.y = 0;
					camera.position.z = 300;
				} else {
					camera.position.y = 0;
					camera.position.z = 200;
				}

				// Update camera
				camera.aspect = sizes.width / sizes.height;
				camera.updateProjectionMatrix();

				// Update renderer
				renderer.setSize(sizes.width, sizes.height);
				renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			}
		};

		return () => {
			metaSymbol.dispose();
			renderPass.dispose();
			renderTarget.dispose();
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
	let width;
</script>

<svelte:window bind:innerWidth={width} />
<a href={width <= 768 ? HOME : '#intro'} on:click={() => console.log('cilcked')}>
	<canvas
		bind:this={canvas}
		class="bg-transparent fixed z-50
			top-2 left-2
			md:bottom-4 md:right-4 md:top-auto md:left-auto"
	>
	</canvas>
</a>
