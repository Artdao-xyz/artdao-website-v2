<script lang="ts">
	import { progress } from '../../../utils/store';
	import logo from '$lib/assets/images/artdao-logo.webp';
	import loading from '$lib/assets/images/loading.gif';
	import { fly } from 'svelte/transition';
	import { isExiting } from '../../../utils/preloadImages';
	import { writable } from 'svelte/store';

	const text1 = "Artists helping artists";
	const text2 = "© 2025";

	const animationProgress = writable(0);
	
	// Cuando isExiting cambia a true, iniciamos la animación
	$: if ($isExiting) {
		let start = 0;
		const duration = 700;
		const animate = (timestamp: number) => {
			if (!start) start = timestamp;
			const progress = timestamp - start;
			const percent = Math.min(progress / duration * 200, 200);
			animationProgress.set(percent);
			
			if (progress < duration) {
				requestAnimationFrame(animate);
			}
		};
		requestAnimationFrame(animate);
	} else {
		animationProgress.set(0);
	}
</script>

<div
	transition:fly={{ duration: 300 }}
	class="bg-black absolute left-0 top-0 w-full h-full flex justify-center items-center z-50"
>
	<div class="flex flex-col sm:flex-row items-center gap-12 relative">
		<div class="w-[200px] overflow-hidden">
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
			<img class="h-full" src="media/intro-metabola-1.gif" alt="Loading gif" />
		</div>

		<div class="text-white text-center sm:text-left font-clash font-xl leading-tight tracking-tight w-[200px] overflow-hidden">
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
	<!-- <progress class="invisible" value={$progress} max="100"></progress> -->
</div>

<style>
	.transition-opacity {
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
