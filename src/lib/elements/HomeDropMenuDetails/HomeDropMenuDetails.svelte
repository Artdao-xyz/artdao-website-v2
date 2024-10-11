<script lang="ts">
	export let dropNumber: string;
	export let dropName: string;
	export let dropLogo: string;
	export let dropDate: string[];
</script>

<div class="flex flex-row items-center gap-2.5">
	<div class="flex flex-col justify-start gap-2.5">
		<div
			class="flex flex-col font-clash leading-[1.375rem] uppercase tracking-[0.0375rem] text-[0.875rem] font-semibold"
		>
			<h2>DROP #{dropNumber}</h2>
			<h2>{dropName}</h2>
		</div>

		<p
			class="tracking-[0.0187rem] uppercase text-[0.625rem] font-clash font-semibold flex flex-row gap-[0.5rem]"
		>
			<span>{dropDate[0]}</span>
			<span>{dropDate[1]}</span>
			<span>{dropDate[2]}</span>
		</p>
	</div>

	<img src={dropLogo} alt="Drop Logo" class="h-[3.8563rem]" />
</div>
