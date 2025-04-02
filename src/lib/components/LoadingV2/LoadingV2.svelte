<script lang="ts">
	import { progress } from '../../../utils/store';
	import logo from '$lib/assets/images/artdao-logo.webp';
	import loading from '$lib/assets/images/loading.gif';
	import { fly } from 'svelte/transition';
	import { isExiting } from '../../../utils/preloadImages';
</script>

<div
	transition:fly={{ duration: 300 }}
	class="bg-black absolute left-0 top-0 w-full h-full flex justify-center items-center z-50"
>
	<div class="flex items-center gap-12">
		<div class="w-[150px]">
			<img 
				class="w-full transition-opacity duration-500 {$isExiting ? 'opacity-100' : 'opacity-0'}" 
				src={logo} 
				alt="Logo" 
			/>
		</div>

		<div class="h-[100px] w-[100px]">
			<img class="h-full" src="media/intro-metaball.gif" alt="Loading gif" />
		</div>

		<div class="text-white font-clash font-xl leading-tight tracking-tight font-bold w-[200px]">
			<div class="transition-opacity duration-500 {$isExiting ? 'opacity-100' : 'opacity-0'} space-y-1">
				<p>Artists helping artists</p>
				<p>© 2025</p>
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
