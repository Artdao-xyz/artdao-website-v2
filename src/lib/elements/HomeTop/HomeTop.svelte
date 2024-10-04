<script lang="ts">
	export let logo: string;
	export let homeParagraphs: string[];
</script>

<div
	class="flex flex-col gap-[1.875rem] w-full py-[1.875rem] px-10 bg-color-dark rounded-20 h-home-content-top-height"
>
	<img src={logo} alt="ArtDao Logo" class="w-[13.5625rem] h-[3.0931rem]" />
	<div
		class="flex flex-col justify-start gap-4 text-sm font-medium font-clash leading-5 text-color-white overflow-y-auto"
	>
		{#each homeParagraphs as homeParagraph}
			<p>{homeParagraph}</p>
		{/each}
	</div>
</div>
