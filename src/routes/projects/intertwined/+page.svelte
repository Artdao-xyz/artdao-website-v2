<script>
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import Footer from '$lib/elements/Footer/Footer.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { EColorVariant } from '../../../constants/enums';
	import {
		cryptoargAbout,
		cryptoargAboutImages,
		curationAbout,
		curationAboutImages
	} from '../../../data/Projects/Intertwined/ProjectAbout';
	import {
		artdaoDropdownItems,
		cryptoargDropdownItems,
		intertwinedVernisaggeDropdownItems
	} from '../../../data/Projects/Intertwined/ProjectAboutDropdown';
	import { intertwinedProjectIntro } from '../../../data/Projects/Intertwined/ProjectIntro';
	import {
		artdaoVideo,
		cryptoVideo,
		introVideo
	} from '../../../data/Projects/Intertwined/ProjectVideo';
	import { elementIsVisibleInViewport } from '../../../utils/elementVisibility';
	import { intertwinedNavStoreItems } from './store';

	const handleScroll = () => {
		const intro = document.getElementById('intro');
		const artdao = document.getElementById('artdao');
		const artdaoEnd = document.getElementById('artdao-end');
		const crypto = document.getElementById('crypto');
		const cryptoEnd = document.getElementById('crypto-end');
		const vernisagge = document.getElementById('vernisagge');

		if (elementIsVisibleInViewport(intro)) {
			intertwinedNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: true
				},
				{
					text: 'ArtDao Curation',
					route: 'artdao',
					selected: false
				},
				{
					text: 'CryptoArg',
					route: 'crypto',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(artdao, true) || elementIsVisibleInViewport(artdaoEnd)) {
			intertwinedNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'ArtDao Curation',
					route: 'artdao',
					selected: true
				},
				{
					text: 'CryptoArg',
					route: 'crypto',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(crypto, true) || elementIsVisibleInViewport(cryptoEnd)) {
			intertwinedNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'ArtDao Curation',
					route: 'artdao',
					selected: false
				},
				{
					text: 'CryptoArg',
					route: 'crypto',
					selected: true
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: false
				}
			]);
		}

		if (elementIsVisibleInViewport(vernisagge)) {
			intertwinedNavStoreItems.update((items) => [
				{
					text: 'About',
					route: 'intro',
					selected: false
				},
				{
					text: 'ArtDao Curation',
					route: 'artdao',
					selected: false
				},
				{
					text: 'CryptoArg',
					route: 'crypto',
					selected: false
				},
				{
					text: 'Vernisagge',
					route: 'vernisagge',
					selected: true
				}
			]);
		}
	};
</script>

<div
	on:scroll={handleScroll}
	class="mx-auto sm:mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory overflow-y-auto h-screen"
>
	<ProjectIntro project={intertwinedProjectIntro} textColor="black" />

	<ProjectVideo videoProjects={introVideo} />

	<div id="artdao">
		<ProjectAbout
			aboutItem={curationAbout}
			aboutImages={curationAboutImages}
			route=""
			colorVariant={EColorVariant.BLACK}
		/>
	</div>

	<ProjectAboutDropdown
		images={artdaoDropdownItems.map((item) => item.image)}
		aboutDropdownItems={artdaoDropdownItems}
		route=""
	/>

	<ProjectVideo videoProjects={artdaoVideo} route="artdao-end" />

	<div id="crypto">
		<ProjectAbout
			aboutItem={cryptoargAbout}
			aboutImages={cryptoargAboutImages}
			route=""
			colorVariant={EColorVariant.BLACK}
		/>
	</div>

	<ProjectAboutDropdown
		images={cryptoargDropdownItems.map((item) => item.image)}
		aboutDropdownItems={cryptoargDropdownItems}
		route=""
	/>

	<ProjectVideo videoProjects={cryptoVideo} route="crypto-end" />

	<ProjectAboutDropdown
		images={intertwinedVernisaggeDropdownItems.map((item) => item.image)}
		aboutDropdownItems={intertwinedVernisaggeDropdownItems}
		route="vernisagge"
	/>

	<HomeIcon />
	<Footer />
</div>
