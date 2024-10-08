<script>
	import bgImage from '$lib/assets/images/projects/orb/240326_caroco_035_1.png';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectAboutDropdown from '$lib/components/ProjectAboutDropdown/ProjectAboutDropdown.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import {
		hivemindAbout,
		hivemindAboutImages,
		magmaAbout,
		magmaAboutImages,
		seedAbout,
		seedAboutImages
	} from '../../../data/Projects/Orb/ProjectAbout';
	import { daoDropdownItems } from '../../../data/Projects/Orb/ProjectAboutDropdown';
	import { orbQuestions } from '../../../data/Projects/Orb/ProjectInterview';
	import { orbProject } from '../../../data/Projects/Orb/ProjectIntro';
</script>

<div
	class="mx-auto mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory overflow-y-auto h-screen"
>
	<ProjectIntro project={orbProject} />

	<ProjectInterview questions={orbQuestions} {bgImage} />

	<ProjectAbout aboutImages={magmaAboutImages} aboutItem={magmaAbout} route="artists" />

	<ProjectAbout aboutImages={seedAboutImages} aboutItem={seedAbout} route="" />

	<ProjectAbout aboutImages={hivemindAboutImages} aboutItem={hivemindAbout} route="" />

	<ProjectAboutDropdown
		aboutDropdownItems={daoDropdownItems}
		images={daoDropdownItems.map((item) => item.image)}
		route=""
	/>

	<HomeIcon />
</div>
