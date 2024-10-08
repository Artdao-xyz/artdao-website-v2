<script lang="ts">
	import ecoInterviewBg from '$lib/assets/images/projects/ecologiesOfCode/ecologies-interview-bg.png';
	import hyperInterview from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/interview/artwork-press.png';
	import okytomoInterview from '$lib/assets/images/projects/ecologiesOfCode/okytomo/interview/okytomoInterview.png';
	import ProjectAbout from '$lib/components/ProjectAbout/ProjectAbout.svelte';
	import ProjectArtworkGrid from '$lib/components/ProjectArtworkGrid/ProjectArtworkGrid.svelte';
	import ProjectInterview from '$lib/components/ProjectInterview/ProjectInterview.svelte';
	import ProjectIntro from '$lib/components/ProjectIntro/ProjectIntro.svelte';
	import ProjectPolaroids from '$lib/components/ProjectPolaroids/ProjectPolaroids.svelte';
	import ProjectVideo from '$lib/components/ProjectVideo/ProjectVideo.svelte';
	import HomeIcon from '$lib/elements/HomeIcon/HomeIcon.svelte';
	import { ecologiesNavItems } from '../../../data/Projects/EcologiesOfCode/NavItems';
	import {
		hypereikonAbout,
		hypereikonAboutImages,
		joaquinaAbout,
		joaquinaAboutImages,
		okytomoAbout,
		okytomoAboutImages
	} from '../../../data/Projects/EcologiesOfCode/ProjectAbout';
	import { ecologiesArtworkImages } from '../../../data/Projects/EcologiesOfCode/ProjectArtworkGallery';
	import { ecologiesOfCodeQuestions } from '../../../data/Projects/EcologiesOfCode/ProjectInterview';
	import { ecologiesOfCodeProject } from '../../../data/Projects/EcologiesOfCode/ProjectIntro';
	import {
		ecologiesPolaroidImages,
		ecologiesPolaroidImagesTwo
	} from '../../../data/Projects/EcologiesOfCode/ProjectPolaroids';
	import {
		ecologiesVideoProjectOne,
		ecologiesVideoProjectTwo
	} from '../../../data/Projects/EcologiesOfCode/ProjectVIdeo';
</script>

<div
	class="mx-auto mt-[-1rem] w-full overflow-x-hidden snap-y snap-mandatory overflow-y-auto h-screen"
>
	<ProjectIntro project={ecologiesOfCodeProject} />

	<ProjectAbout
		aboutItem={joaquinaAbout}
		aboutImages={joaquinaAboutImages}
		route={ecologiesNavItems[1].route}
	/>

	<ProjectInterview bgImage={ecoInterviewBg} questions={ecologiesOfCodeQuestions} />

	<ProjectVideo videoProjects={[ecologiesVideoProjectOne]} />

	<ProjectPolaroids images={ecologiesPolaroidImages} />

	<ProjectAbout
		aboutItem={okytomoAbout}
		aboutImages={okytomoAboutImages}
		route={ecologiesNavItems[2].route}
	/>

	<ProjectInterview bgImage={okytomoInterview} questions={ecologiesOfCodeQuestions} />

	<ProjectVideo videoProjects={[ecologiesVideoProjectTwo]} />

	<ProjectPolaroids images={ecologiesPolaroidImagesTwo} />

	<ProjectAbout
		aboutItem={hypereikonAbout}
		aboutImages={hypereikonAboutImages}
		route={ecologiesNavItems[3].route}
	/>

	<ProjectInterview bgImage={hyperInterview} questions={ecologiesOfCodeQuestions} />

	<ProjectArtworkGrid galleryImages={ecologiesArtworkImages} />

	<HomeIcon />
</div>
