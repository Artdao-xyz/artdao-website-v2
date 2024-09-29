<script lang="ts">
	export let image: string;
</script>

<div class="w-full h-full">
	<img
		src={image}
		alt="Rectangle Layout"
		class="object-cover rounded-30 min-w-[30.625rem] min-h-[58.75rem] h-[calc(100dvh+1.25rem)]"
	/>
</div>
