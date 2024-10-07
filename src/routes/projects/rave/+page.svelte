<script>
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectAudioFiles from '$lib/components/ProjectAudioFiles/ProjectAudioFiles.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { ESizesVariant } from '../../../constants/enums';
	import { raveNavItems } from '../../../data/Projects/Rave/NavItems';
	import {
		raveAboutDropdopwnItems,
		raveAboutDropdopwnItemsTwo
	} from '../../../data/Projects/Rave/ProjectAboutDropdown';
	import { raveAudioFiles } from '../../../data/Projects/Rave/ProjectAudioFiles';
	import { raveProject } from '../../../data/Projects/Rave/ProjectIntro';
	import {
		afterPartyVideo,
		blessingForSaleVideo,
		frequencyVideo,
		fwvnVideo,
		petroVideo
	} from '../../../data/Projects/Rave/ProjectVideo';
</script>

<div
	class="mx-auto mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory overflow-y-auto h-screen"
>
	<ProjectIntro project={raveProject} />

	<ProjectAboutDropdown
		images={raveAboutDropdopwnItems.map((image) => image.image)}
		aboutDropdownItems={raveAboutDropdopwnItems}
		route={raveNavItems[1].route}
	/>

	<ProjectVideo videoProjects={[blessingForSaleVideo, fwvnVideo, frequencyVideo]} />

	<ProjectAudioFiles audioItems={raveAudioFiles} />

	<ProjectAboutDropdown
		images={raveAboutDropdopwnItemsTwo.map((item) => item.image)}
		aboutDropdownItems={raveAboutDropdopwnItemsTwo}
		route={raveNavItems[2].route}
	/>

	<ProjectVideo videoProjects={[afterPartyVideo, petroVideo]} size={ESizesVariant.SMALL} />

	<HomeIcon />
</div>
