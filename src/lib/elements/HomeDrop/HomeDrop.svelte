<script lang="ts">
	export let dropNumber: string;
	export let dropName: string;
	export let dropLogo: string;
</script>

<a
	class="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between gap-2.5 w-full bg-color-dark rounded-20 px-5 sm:px-10 py-5 sm:py-2.5 hover:gray-gradient"
	href="/drops"
>
	<div class="flex flex-col justify-start gap-0 sm:gap-2.5">
		<div
			class="flex flex-col font-clash leading-[1.375rem] uppercase tracking-[0.0375rem] text-[1.1rem] sm:text-[1.25rem] font-semibold"
		>
			<h2>DROP #{dropNumber}</h2>
			<h2>{dropName}</h2>
		</div>

		<p class="tracking-[0.0187rem] uppercase text-[0.875rem] font-clash font-semibold">LIVE NOW</p>
	</div>

	<img
		src={dropLogo}
		alt="Drop Logo"
		class="w-[4.9819rem] h-[4.6375rem] sm:w-[5.9206rem] sm:h-[5.5119rem] self-center"
	/>
</a>
