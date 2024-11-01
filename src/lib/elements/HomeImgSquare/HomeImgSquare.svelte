<script lang="ts">
	export let image: string;
	export let className: string | undefined = undefined;
</script>

<div class="w-full {className}">
	<img
		src={image}
		alt="Square Layout"
		class="object-cover rounded-30 aspect-square w-full max-h-full"
	/>
</div>
