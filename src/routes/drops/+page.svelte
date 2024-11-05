<script lang="ts">
	import chimericaBg from '$lib/assets/images/drops/chimerica-bg.png';
	import drop3Bg from '$lib/assets/images/drops/drop3-bg.png';
	import psikokoBanner from '$lib/assets/images/drops/psipsikoko-banner.png';
	import hammer from '$lib/assets/images/drops/psipsikoko-hammer.png';
	import HomeDropMenu from '$lib/components/HomeDropMenu/HomeDropMenu.svelte';
	import HomeMobileMenu from '$lib/components/HomeMobileMenu/HomeMobileMenu.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { homeDropMenuNames, homeDropMenuText } from '../../data/HomeDropMenu';
</script>

<div
	class="w-full h-[100dvh] sm:min-h-screen sm:h-auto overflow-x-hidden sm:snap-y sm:snap-mandatory overflow-y-auto"
>
	<HomeMobileMenu toggle="white" section="drop" />

	<!-- TODO: implement date -->
	<HomeDropMenu
		dropNumber={'001'}
		dropName={'psipsikoko'}
		dropLogo={hammer}
		dropDate={['10W', '12D', '00H']}
		texts={homeDropMenuText}
		names={homeDropMenuNames}
		bgImage={psikokoBanner}
	/>

	<HomeDropMenu
		dropNumber={'002'}
		dropName={'chimerica'}
		dropLogo={hammer}
		dropDate={['10W', '12D', '00H']}
		texts={homeDropMenuText}
		names={homeDropMenuNames}
		bgImage={chimericaBg}
	/>

	<HomeDropMenu
		dropNumber={'003'}
		dropName={'another drop'}
		dropLogo={hammer}
		dropDate={['10W', '12D', '00H']}
		texts={homeDropMenuText}
		names={homeDropMenuNames}
		bgImage={drop3Bg}
	/>

	<HomeIcon />
</div>
