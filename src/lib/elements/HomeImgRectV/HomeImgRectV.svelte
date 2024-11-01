<script lang="ts">
	export let image: string;
	export let className: string | undefined = undefined;
</script>

<div class="w-full h-full {className}">
	<img src={image} alt="Rectangle Layout" class="object-cover rounded-30 w-full h-full" />
</div>
