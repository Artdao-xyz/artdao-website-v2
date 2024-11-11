<script lang="ts">
	import buttonIcon from '$lib/assets/images/button-icon.webp';
	export let route: string;
</script>

<button
	class="rounded-[3.125rem] bg-dark-gradient w-[3.125rem] h-[1.3125rem] bg-color-black hover:gray-gradient"
>
	<a href={route}>
		<img src={buttonIcon} alt="Button Icon" class="mx-auto w-[0.4375rem] h-[0.4375rem]" />
	</a>
</button>
