<script lang="ts">
	export let title: string;
	export let logo: string;
</script>

<a
	class="flex flex-row items-center justify-between gap-2.5 w-full bg-color-dark rounded-20 py-5 sm:py-[0.9375rem] px-10 hover:gray-gradient"
	href="/map"
>
	<div class="flex flex-col justify-start gap-0 sm:gap-2.5">
		<div
			class="flex flex-col text-left font-clash leading-[1.375rem] uppercase tracking-[0.0375rem] text-[1.1rem] sm:text-[1.25rem] font-semibold"
		>
			<h2>{title}</h2>
		</div>
	</div>

	<img
		src={logo}
		alt="Drop Logo"
		class="w-[8.4375rem] h-[3.9463rem] sm:w-[7.4831rem] sm:h-[3.5rem]"
	/>
</a>
