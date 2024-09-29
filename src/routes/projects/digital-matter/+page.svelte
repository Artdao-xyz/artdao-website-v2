<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import ImgNavigator from '$lib/elements/ImgNavigator/ImgNavigator.svelte';
	import SectionContainer from '$lib/elements/SectionContainer/SectionContainer.svelte';
	import { ESizeVariant } from '../../../constants/enums';
	import { sulkianImages } from '../../../data/Projects/DigitalMatter/ImgNavigator';
	import { digitalMatterNavItems } from '../../../data/Projects/DigitalMatter/NavItems';
	import {
		marcusAbout,
		marcusAboutImages,
		parsaAbout,
		parsaAboutImages,
		sulkianAbout,
		sulkianAboutImages
	} from '../../../data/Projects/DigitalMatter/ProjectAbout';
	import {
		marcusAboutDropdown,
		marcusDropdownItems,
		parsaAboutDropdown,
		parsaDropdownItems
	} from '../../../data/Projects/DigitalMatter/ProjectAboutDropdown';
	import { parsaArtworkImages } from '../../../data/Projects/DigitalMatter/ProjectArtworkGallery';
	import { digitalMatterProjectIntro } from '../../../data/Projects/DigitalMatter/ProjectIntro';
	import {
		marcusPolaroidsImages,
		parsaPolaroidsImages
	} from '../../../data/Projects/DigitalMatter/ProjectPolaroids';
	import { aeroVideo } from '../../../data/Projects/DigitalMatter/ProjectVideo';
</script>

<div class="mx-auto mt-[-1rem] w-full overflow-x-hidden">
	<ProjectIntro project={digitalMatterProjectIntro} />

	<ProjectAbout
		aboutItem={marcusAbout}
		aboutImages={marcusAboutImages}
		route={digitalMatterNavItems[1].route}
	/>

	<ProjectAboutDropdown
		images={marcusAboutDropdown}
		aboutDropdownItems={marcusDropdownItems}
		route={digitalMatterNavItems[1].route}
	/>

	<ProjectPolaroids images={marcusPolaroidsImages} />

	<ProjectAbout
		aboutItem={sulkianAbout}
		aboutImages={sulkianAboutImages}
		route={digitalMatterNavItems[2].route}
	/>

	<SectionContainer>
		<ImgNavigator images={sulkianImages} variant={ESizeVariant.BIG} isContain />
	</SectionContainer>

	<ProjectVideo videoProject={aeroVideo} />

	<ProjectAbout
		aboutItem={parsaAbout}
		aboutImages={parsaAboutImages}
		route={digitalMatterNavItems[3].route}
	/>

	<ProjectAboutDropdown
		images={parsaAboutDropdown}
		aboutDropdownItems={parsaDropdownItems}
		route={digitalMatterNavItems[1].route}
	/>

	<ProjectArtworkGrid galleryImages={parsaArtworkImages} isSingleRow />

	<ProjectPolaroids images={parsaPolaroidsImages} />

	<HomeIcon />
</div>
