<script lang="ts">
	export let checked = false;
	export let label = '';
	export let onToggle: (checked: boolean) => void = () => {};

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		checked = target.checked;
		onToggle(checked);
	}
</script>


<label class="flex flex-col gap-2 justify-center items-center cursor-pointer">
	<input 
		type="checkbox" 
		{checked}
		on:change={handleChange}
		class="sr-only peer"
	>
	<div class="relative w-8 h-4 bg-black peer-focus:outline-none rounded-[999px] peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[3px] after:bg-white after:rounded-[999px] after:h-3 after:w-3 after:transition-all peer-checked:bg-white peer-checked:after:bg-black" style="box-shadow: 0 0 0 1px white;"></div>
	{#if label}
		<span class="font-bold tracking-tight text-white font-robotoMono">{label}</span>
	{/if}
</label>
      
