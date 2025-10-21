<script lang="ts">
	import { activeFilters } from '../../stores/studio';
	import Toggle from './Toggle.svelte';
	
	const categories = ['R&D', 'Web', 'Art', '3D', 'UX/UI'];
	
	function toggleFilter(category: string) {
		activeFilters.update(filters => {
			if (filters.includes(category)) {
				// Si ya está activo, lo removemos
				return filters.filter(f => f !== category);
			} else {
				// Si no está activo, lo agregamos
				return [...filters, category];
			}
		});
	}
	
	function clearAllFilters() {
		activeFilters.set([]);
	}
</script>

<div class="relative -mt-20 mx-auto w-full max-w-screen-md backdrop-blur-sm p-[1px] rounded-[999px] bg-gradient-to-br from-white/20 via-transparent to-white/20 hidden md:block">
        <div class="relative flex flex-wrap items-center justify-center gap-6 p-6 rounded-[999px] bg-black/50">
                <div class="flex flex-wrap items-center justify-between w-full px-16">
                        {#each categories as category}
                                <Toggle 
                                        checked={$activeFilters.includes(category)}
                                        label={category}
                                        onToggle={(checked) => toggleFilter(category)}
                                />
                        {/each}
                </div>
        </div>
</div>

