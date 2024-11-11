<script>
	import inaInterviewBgImage from '$lib/assets/images/projects/inherentInstability/Background_Img.webp';
	import Metaball from '$lib/components/Metaball/Metaball.svelte';
	import { vernisaggeDropdownItems } from '../data/Projects/Artifice/ProjectAboutDropdown';
	import {
		elbiAboutImages,
		inaVareAboutImages,
		nicoAboutImages
	} from '../data/Projects/InherentInstability/ProjectAbout';
	import { inherentInstabilityProjectIntro } from '../data/Projects/InherentInstability/ProjectIntro';
	import {
		inaVarePolaroidsImages,
		nicoPolaroidsImages
	} from '../data/Projects/InherentInstability/ProjectPolaroids';
	import {
		nonPlacesDropdownItems,
		nonPlacesTwoDropdownItems
	} from '../data/Projects/NonPlaces/ProjectAboutDropdown';
	import { nonPlacesProjectIntro } from '../data/Projects/NonPlaces/ProjectIntro';
	import {
		carocoAboutImages,
		hivemindAboutImages,
		magmaAboutImages,
		seedAboutImages
	} from '../data/Projects/Orb/ProjectAbout';
	import { daoDropdownItems } from '../data/Projects/Orb/ProjectAboutDropdown';
	import { orbProject } from '../data/Projects/Orb/ProjectIntro';
	import {
		performanceDropdownItems,
		raveAboutDropdopwnItems,
		raveAboutDropdopwnItemsTwo
	} from '../data/Projects/Rave/ProjectAboutDropdown';
	import { raveProject } from '../data/Projects/Rave/ProjectIntro';
	import '../style.css';
</script>

<svelte:head>
	<title>ArtDao</title>

	<!-- ORB -->

	{#each orbProject.bgImage as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each orbProject.bgImageMobile as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each carocoAboutImages as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each vernisaggeDropdownItems.map((item) => item.image) as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each hivemindAboutImages as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each magmaAboutImages as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each seedAboutImages as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each daoDropdownItems.map((item) => item.image) as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	<!-- RAVE -->

	{#each raveProject.bgImage as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each raveProject.bgImageMobile as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each raveAboutDropdopwnItems.map((image) => image.image) as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each performanceDropdownItems.map((item) => item.image) as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each raveAboutDropdopwnItemsTwo.map((item) => item.image) as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	<!-- NON PLACE -->

	{#each nonPlacesProjectIntro.bgImage as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each nonPlacesProjectIntro.bgImageMobile as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each nonPlacesDropdownItems.map((item) => item.image) as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each nonPlacesTwoDropdownItems.map((item) => item.image) as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	<!-- INHERENT -->

	{#each inherentInstabilityProjectIntro.bgImage as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each inherentInstabilityProjectIntro.bgImageMobile as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each inaInterviewBgImage as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each elbiAboutImages as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each inaVareAboutImages as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each nicoAboutImages as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each inaVarePolaroidsImages.map((item) => item.image) as image}
		<link rel="preload" as="image" href={image} />
	{/each}

	{#each nicoPolaroidsImages.map((item) => item.image) as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

<Metaball />
<slot />
