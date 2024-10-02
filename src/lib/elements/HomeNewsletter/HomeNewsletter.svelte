<script lang="ts">
	import buttonIcon from '$lib/assets/images/button-icon.png';
	export let route: string;
</script>

<div
	class="w-full h-[1.75rem] bg-color-dark rounded-20 px-10 py-2 flex items-center justify-between"
>
	<p
		class="font-clash leading-[1.375rem] uppercase tracking-[0.0375rem] text-[0.875rem] font-semibold"
	>
		join our collective
	</p>
	<a href={route}>
		<img src={buttonIcon} alt="Button Icon" class="mx-auto w-[0.4375rem] h-[0.4375rem]" />
	</a>
</div>
