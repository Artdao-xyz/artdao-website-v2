<script lang="ts">
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { EPolaroidType } from '$lib/elements/Polaroids/interface';
	import { EColorVariant, ESizesVariant } from '../../../constants/enums';
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
		marcusDropdownItems,
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

<div
	id="rave"
	class="mx-auto mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth"
>
	<ProjectIntro project={digitalMatterProjectIntro} />

	<ProjectAbout
		aboutItem={marcusAbout}
		aboutImages={marcusAboutImages}
		route={digitalMatterNavItems[1].route}
	/>

	<ProjectAboutDropdown
		images={marcusDropdownItems.map((item) => item.image)}
		aboutDropdownItems={marcusDropdownItems}
		route={digitalMatterNavItems[1].route}
	/>

	<ProjectPolaroids images={marcusPolaroidsImages} />

	<ProjectAbout
		aboutItem={sulkianAbout}
		aboutImages={sulkianAboutImages}
		route={digitalMatterNavItems[2].route}
	/>

	<ProjectAboutDropdown
		images={sulkianImages}
		route={''}
		colorVariant={EColorVariant.BLACK}
		aboutDropdownItems={undefined}
		isImageWhiteBg
	/>

	<ProjectVideo videoProjects={[aeroVideo]} size={ESizesVariant.MEDIUM} />

	<ProjectAbout
		aboutItem={parsaAbout}
		aboutImages={parsaAboutImages}
		route={digitalMatterNavItems[3].route}
	/>

	<ProjectAboutDropdown
		images={parsaDropdownItems.map((item) => item.image)}
		aboutDropdownItems={parsaDropdownItems}
		route={digitalMatterNavItems[1].route}
	/>

	<ProjectArtworkGrid galleryImages={parsaArtworkImages} showDetails />

	<ProjectPolaroids
		images={parsaPolaroidsImages}
		polaroidsTypes={[
			EPolaroidType.RECTANGLE,
			EPolaroidType.RECTANGLE,
			EPolaroidType.RECTANGLE,
			EPolaroidType.VERTICAL
		]}
	/>

	<HomeIcon />
</div>
