<script lang="ts">
	import artDaoLogo from '$lib/assets/images/artdao-logo.png';
	import hammer from '$lib/assets/images/hammer.png';
	import mapLogo from '$lib/assets/images/map.png';
	import HomeDropMenu from '$lib/components/HomeDropMenu/HomeDropMenu.svelte';
	import HomeImgLayout from '$lib/components/HomeImgLayout/HomeImgLayout.svelte';
	import HomeMap from '$lib/components/HomeMap/HomeMap.svelte';
	import HomeSocial from '$lib/components/HomeSocial/HomeSocial.svelte';
	import HomeTop from '$lib/components/HomeTop/HomeTop.svelte';
	import AboutCard from '$lib/elements/AboutCard/AboutCard.svelte';
	import HomeDrop from '$lib/elements/HomeDrop/HomeDrop.svelte';
	import ImgNavigator from '$lib/elements/ImgNavigator/ImgNavigator.svelte';
	import InterviewCard from '$lib/elements/InterviewCard/InterviewCard.svelte';
	import TextCard from '$lib/elements/TextCard/TextCard.svelte';
	import VideoCard from '$lib/elements/VideoCard/VideoCard.svelte';
	import { EColorVariant, ESizesVariant, ESizeVariant } from '../../constants/enums';
	import { aboutCard } from '../../data/AboutCard';
	import { homeDropMenuNames, homeDropMenuText } from '../../data/HomeDropMenu';
	import { fourImages, sixImages, threeImages, twoImages } from '../../data/HomeImgLayout';
	import { homeParagraphs } from '../../data/HomeTop';
	import { interviewCardQuestions } from '../../data/InterviewCard';
	import { textCardItemOne, textCardItemThree, textCardItemTwo } from '../../data/TextCard';
	import { videoProject } from '../../data/VideoCard';
</script>

<div class="flex flex-col items-center justify-center gap-20 my-20 w-[img-square-width]">
	<div class="flex flex-row gap-5">
		<div class="flex flex-col gap-2.5">
			<HomeTop logo={artDaoLogo} {homeParagraphs} />
			<HomeDrop dropNumber={'000'} dropName={'psipsikoko'} dropLogo={hammer} />
			<HomeMap title={'bridging the global & hyperlocal'} logo={mapLogo} />
			<HomeSocial title={'instagram'} />
			<HomeSocial title={'discord'} />
			<HomeSocial title={'twitter'} />
		</div>

		<div>
			<HomeImgLayout variant="two-rect-h" images={twoImages} />
			<HomeImgLayout variant="four-squares" images={fourImages} />
			<HomeImgLayout variant="two-squares-left" images={threeImages} />
			<HomeImgLayout variant="two-squares-right" images={threeImages} />
			<HomeImgLayout variant="two-rect-v" images={twoImages} />
		</div>
	</div>

	<!-- TODO: implement date -->
	<HomeDropMenu
		dropNumber={'000'}
		dropName={'psipsikoko'}
		dropLogo={hammer}
		dropDate={['10W', '12D', '00H']}
		texts={homeDropMenuText}
		names={homeDropMenuNames}
	/>

	<HomeDropMenu
		dropNumber={'000'}
		dropName={'psipsikoko'}
		dropLogo={hammer}
		dropDate={['10W', '12D', '00H']}
		texts={homeDropMenuText}
		names={homeDropMenuNames}
	/>

	<AboutCard aboutItem={aboutCard} />

	<InterviewCard questions={interviewCardQuestions} />

	<ImgNavigator images={twoImages} variant={ESizeVariant.SMALL} />

	<ImgNavigator images={sixImages} variant={ESizeVariant.BIG} />

	<VideoCard {videoProject} size={ESizesVariant.LARGE} />

	<VideoCard {videoProject} size={ESizesVariant.MEDIUM} />

	<VideoCard {videoProject} size={ESizesVariant.SMALL} />

	<TextCard
		textCardItem={textCardItemOne}
		sizeVariant={ESizeVariant.BIG}
		colorVariant={EColorVariant.LIGHT}
	/>

	<TextCard
		textCardItem={textCardItemOne}
		sizeVariant={ESizeVariant.BIG}
		colorVariant={EColorVariant.DARK}
	/>

	<TextCard
		textCardItem={textCardItemTwo}
		sizeVariant={ESizeVariant.BIG}
		colorVariant={EColorVariant.LIGHT}
	/>

	<TextCard
		textCardItem={textCardItemTwo}
		sizeVariant={ESizeVariant.BIG}
		colorVariant={EColorVariant.DARK}
	/>

	<TextCard
		textCardItem={textCardItemThree}
		sizeVariant={ESizeVariant.SMALL}
		colorVariant={EColorVariant.DARK}
	/>
</div>
