<script lang="ts">
	import HomeButton from '$lib/elements/HomeButton/HomeButton.svelte';

	export let dropNumber: string;
	export let dropName: string;
	export let dropLogo: string;
</script>

<div
	class="flex flex-row items-center justify-between gap-2.5 w-home-content-width h-home-content-drop-closed-height bg-color-dark rounded-20 py-[0.9375rem] px-[1.375rem]"
>
	<div class="flex flex-col justify-start gap-2.5">
		<div
			class="flex flex-col font-clash leading-[1.375rem] uppercase tracking-[0.0375rem] text-[1.25rem] font-semibold"
		>
			<h2>DROP #{dropNumber}</h2>
			<h2>{dropName}</h2>
		</div>

		<p class="tracking-[0.0187rem] uppercase text-[0.625rem] font-clash font-semibold">LIVE NOW</p>

		<HomeButton route={'/drops'} />
	</div>

	<img src={dropLogo} alt="Drop Logo" class="w-[5.9206rem] h-[5.5119rem]" />
</div>
