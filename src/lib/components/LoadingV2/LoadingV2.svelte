<script lang="ts">
	import { progress } from '../../../utils/store';
	import logo from '$lib/assets/images/artdao-logo.webp';
	import loading from '$lib/assets/images/loading.gif';
	import { fly } from 'svelte/transition';
	import { isExiting } from '../../../utils/preloadImages';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	const text1 = "Artists helping artists";
	const text2 = "© 2025";

	const animationProgress = writable(0);
	
	// Detectar si estamos en una ruta de studio
	$: isStudioPage = $page?.route?.id === '/studio';
	$: isStudioDetailPage = $page?.route?.id?.startsWith('/studio/') || false;
	$: isStudioAny = isStudioPage || isStudioDetailPage;
	
	
	// Cuando isExiting cambia a true, iniciamos la animación
	$: if ($isExiting) {
		console.log('🎬 Iniciando animación de salida en LoadingV2...');
		let start = 0;
		const duration = 700;
		const animate = (timestamp: number) => {
			if (!start) start = timestamp;
			const progress = timestamp - start;
			
			const percent = Math.min(progress / duration * 200, 200);
			animationProgress.set(percent);
			
			if (progress < duration) {
				requestAnimationFrame(animate);
			} else {
				console.log('✨ Animación de salida completada en LoadingV2');
			}
		};
		requestAnimationFrame(animate);
	} else {
		animationProgress.set(0);
	}

	let metaballRef: any;
	onMount(() => {
		metaballRef.classList.remove('opacity-0');
		metaballRef.classList.add('opacity-100');
	});

</script>

<div
	transition:fly={{ duration: 300 }}
	class="absolute left-0 top-0 w-full h-full flex justify-center items-center z-50 {isStudioAny ? 'bg-black' : 'bg-[#F7F5F2] bg-dot'}"
>
	<div class="flex flex-col sm:flex-row items-center gap-12 relative">
		<div class="w-[200px] overflow-hidden hidden">
			<img 
				class="w-full"
				style="mask-image: linear-gradient(to right, 
					black {$animationProgress - 200}%, 
					black {$animationProgress - 150}%,
					rgba(0,0,0,0.8) {$animationProgress - 100}%,
					rgba(0,0,0,0.4) {$animationProgress - 50}%,
					transparent {$animationProgress}%);
					-webkit-mask-image: linear-gradient(to right, 
					black {$animationProgress - 200}%, 
					black {$animationProgress - 150}%,
					rgba(0,0,0,0.8) {$animationProgress - 100}%,
					rgba(0,0,0,0.4) {$animationProgress - 50}%,
					transparent {$animationProgress}%);"
				src={logo} 
				alt="Logo" 
			/>
		</div>

		
		<div class="h-[150px] w-[150px]">
			<img bind:this={metaballRef} 
				class="h-full opacity-0 transition-opacity duration-300 ease-in" 
				src="media/intro-metabola-alpha.gif" 
				alt="Loading gif"

			/>
		</div>

		<div class="hidden text-white text-center sm:text-left font-clash font-xl leading-tight tracking-tight font-medium w-[200px] overflow-hidden">
			<div class="space-y-1">
				<p style="mask-image: linear-gradient(to right, 
					black {$animationProgress - 200}%, 
					black {$animationProgress - 150}%,
					rgba(0,0,0,0.8) {$animationProgress - 100}%,
					rgba(0,0,0,0.4) {$animationProgress - 50}%,
					transparent {$animationProgress}%);
					-webkit-mask-image: linear-gradient(to right, 
					black {$animationProgress - 200}%, 
					black {$animationProgress - 150}%,
					rgba(0,0,0,0.8) {$animationProgress - 100}%,
					rgba(0,0,0,0.4) {$animationProgress - 50}%,
					transparent {$animationProgress}%);">
					{text1}
				</p>
				<p style="mask-image: linear-gradient(to right, 
					black {$animationProgress - 200}%, 
					black {$animationProgress - 150}%,
					rgba(0,0,0,0.8) {$animationProgress - 100}%,
					rgba(0,0,0,0.4) {$animationProgress - 50}%,
					transparent {$animationProgress}%);
					-webkit-mask-image: linear-gradient(to right, 
					black {$animationProgress - 200}%, 
					black {$animationProgress - 150}%,
					rgba(0,0,0,0.8) {$animationProgress - 100}%,
					rgba(0,0,0,0.4) {$animationProgress - 50}%,
					transparent {$animationProgress}%);">
					{text2}
				</p>
			</div>
		</div>
	</div>
	
</div>

<style>
	.bg-dot {
		background: #F7F5F2 url("/media/home/home-dot.svg") repeat;
		background-size: 20px 20px;
	}
</style>