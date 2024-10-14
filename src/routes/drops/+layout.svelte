<script>
	import whiteToggle from '$lib/assets/images/white-toggle.png';
	import '../../style.css';
</script>

<slot />

<a href="/">
	<img
		src={whiteToggle}
		alt="Go to Drops"
		class="fixed top-[1%] left-[0.5%] w-[6.3rem] cursor-pointer z-20"
	/>
</a>
