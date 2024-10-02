<script>
	import artDaoLogo from '$lib/assets/images/artdao-logo.png';
	import discordIcon from '$lib/assets/images/discord-icon.png';
	import hammer from '$lib/assets/images/drops/psipsikoko-hammer.png';
	import instagramIcon from '$lib/assets/images/instagram-icon.png';
	import mapLogo from '$lib/assets/images/map.png';
	import xIcon from '$lib/assets/images/x-icon.png';
	import HomeDrop from '$lib/elements/HomeDrop/HomeDrop.svelte';
	import HomeMap from '$lib/elements/HomeMap/HomeMap.svelte';
	import HomeNewsletter from '$lib/elements/HomeNewsletter/HomeNewsletter.svelte';
	import HomeSocial from '$lib/elements/HomeSocial/HomeSocial.svelte';
	import HomeTop from '$lib/elements/HomeTop/HomeTop.svelte';
	import { homeParagraphs } from '../../../data/HomeTop';
</script>

<div class="menu flex flex-col gap-2 h-100dvh">
	<HomeTop logo={artDaoLogo} {homeParagraphs} />
	<HomeDrop dropNumber={'000'} dropName={'psipsikoko'} dropLogo={hammer} />
	<HomeMap title={'bridging the global & hyperlocal'} logo={mapLogo} />
	<HomeNewsletter route="" />
	<div class="flex gap-[2.375rem] h-full w-full">
		<HomeSocial icon={discordIcon} />
		<HomeSocial icon={instagramIcon} />
		<HomeSocial icon={xIcon} />
	</div>
</div>
