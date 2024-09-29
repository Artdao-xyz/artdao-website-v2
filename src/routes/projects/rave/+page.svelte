<script>
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { ESizesVariant } from '../../../constants/enums';
	import { raveNavItems } from '../../../data/Projects/Rave/NavItems';
	import {
		raveAboutDropdopwnItems,
		raveAboutDropdopwnItemsTwo,
		raveDelirioImages,
		raveMemoriesImages
	} from '../../../data/Projects/Rave/ProjectAboutDropdown';
	import { raveArtworkImages } from '../../../data/Projects/Rave/ProjectArtworkGallery';
	import { raveProject } from '../../../data/Projects/Rave/ProjectIntro';
	import { afterPartyVideo, blessingForSaleVideo } from '../../../data/Projects/Rave/ProjectVideo';
</script>

<div class="mx-auto mt-[-1rem] w-full overflow-x-hidden">
	<ProjectIntro project={raveProject} />

	<ProjectArtworkGrid galleryImages={raveArtworkImages} />

	<ProjectAboutDropdown
		images={raveDelirioImages}
		aboutDropdownItems={raveAboutDropdopwnItems}
		route={raveNavItems[1].route}
	/>

	<ProjectVideo videoProject={blessingForSaleVideo} />

	<ProjectAboutDropdown
		images={raveMemoriesImages}
		aboutDropdownItems={raveAboutDropdopwnItemsTwo}
		route={raveNavItems[2].route}
	/>

	<ProjectVideo videoProject={afterPartyVideo} size={ESizesVariant.SMALL} />

	<HomeIcon />
</div>
