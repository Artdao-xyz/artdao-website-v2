<script>
	import footerLogo from '$lib/assets/images/artdao-logo.webp';
	import { inview } from 'svelte-inview';
	import { isFooterVisible } from './store';
</script>

<footer
	use:inview={{ rootMargin: '0%', unobserveOnEnter: false }}
	on:inview_enter={() => {
		isFooterVisible.set(true);
	}}
	on:inview_leave={() => {
		isFooterVisible.set(false);
	}}
	class="snap-end w-full h-24 bg-color-black flex flex-row justify-between py-[1.25rem] px-[2.5rem] !z-50"
>
	<div
		class="flex flex-col font-robotoMono leading-snug tracking-tight font-normal text-[0.75rem] my-auto w-[15rem] gap-2.5"
	>
		<img src={footerLogo} alt="Footer Logo" class="w-[100px] h-[23px]" />
		<p>© 2024</p>
	</div>
</footer>
