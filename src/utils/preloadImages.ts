import {
	preloadedArtifice,
	preloadedConversation,
	preloadedDigital,
	preloadedEcologies,
	preloadedEvents,
	preloadedHome,
	preloadedInherent,
	preloadedIntertwined,
	preloadedMap,
	preloadedNonplaces,
	preloadedOrb,
	preloadedRave,
	preloadHomeMenu
} from '../routes/store';
import { progress } from './store';

import artDaoLogo from '$lib/assets/images/artdao-logo.webp';
import discordIcon from '$lib/assets/images/discord-icon.webp';
import hammer from '$lib/assets/images/hammer-min.webp';
import instagramIcon from '$lib/assets/images/instagram-icon.webp';
import mapBg from '$lib/assets/images/map-background.webp';
import mapLogo from '$lib/assets/images/map.webp';
import menuIcon from '$lib/assets/images/mobile-hamburguer.svg';
import ecoInterviewBg from '$lib/assets/images/projects/ecologiesOfCode/ecologies-interview-bg.webp';
import inaInterviewBgImage from '$lib/assets/images/projects/inherentInstability/Background_Img.webp';
import orbBgImage from '$lib/assets/images/projects/orb/240326_caroco_035_1.webp';
import xIcon from '$lib/assets/images/x-icon.webp';
import { homeImages, homeImagesMobile } from '../data/HomeImgLayout';
import { eventImages } from '../data/Map/MapData';
import {
	furnitureAboutImages,
	kokoAboutImahges,
	panelsAboutImages
} from '../data/Projects/Artifice/ProjectAbout';
import {
	psipsikokoDropdownItems,
	vernisaggeDropdownItems
} from '../data/Projects/Artifice/ProjectAboutDropdown';
import { artificeProjectIntro } from '../data/Projects/Artifice/ProjectIntro';
import {
	marcusAboutImages,
	parsaAboutImages,
	sulkianAboutImages
} from '../data/Projects/DigitalMatter/ProjectAbout';
import { marcusDropdownItems } from '../data/Projects/DigitalMatter/ProjectAboutDropdown';
import {
	parsaArtworkImages,
	parsaArtworkImages1,
	parsaArtworkImages2
} from '../data/Projects/DigitalMatter/ProjectArtworkGallery';
import { digitalMatterProjectIntro } from '../data/Projects/DigitalMatter/ProjectIntro';
import {
	marcusPolaroidsImages,
	parsaPolaroidsImages
} from '../data/Projects/DigitalMatter/ProjectPolaroids';
import {
	hypereikonAboutImages,
	joaquinaAboutImages,
	okytomoAboutImages
} from '../data/Projects/EcologiesOfCode/ProjectAbout';
import {
	ecologiesArtworkImages,
	ecologiesGallery1,
	ecologiesGallery2
} from '../data/Projects/EcologiesOfCode/ProjectArtworkGallery';
import { ecologiesOfCodeProject } from '../data/Projects/EcologiesOfCode/ProjectIntro';
import {
	ecologiesPolaroidImages,
	ecologiesPolaroidImagesTwo
} from '../data/Projects/EcologiesOfCode/ProjectPolaroids';
import { inConversationDropdownItems } from '../data/Projects/InConversation/ProjectAboutDropdown';
import { inConversationProjectIntro } from '../data/Projects/InConversation/ProjectIntro';
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
	cryptoargAboutImages,
	curationAboutImages
} from '../data/Projects/Intertwined/ProjectAbout';
import {
	artdaoDropdownItems,
	cryptoargDropdownItems,
	intertwinedVernisaggeDropdownItems
} from '../data/Projects/Intertwined/ProjectAboutDropdown';
import { intertwinedProjectIntro } from '../data/Projects/Intertwined/ProjectIntro';
import {
	nonPlacesDropdownItems,
	nonPlacesTwoDropdownItems
} from '../data/Projects/NonPlaces/ProjectAboutDropdown';
import { nonPlacesProjectIntro } from '../data/Projects/NonPlaces/ProjectIntro';
import {
	carocoAboutImages,
	hivemindAboutImages,
	magmaAboutImages
} from '../data/Projects/Orb/ProjectAbout';
import { daoDropdownItems } from '../data/Projects/Orb/ProjectAboutDropdown';
import { orbProject } from '../data/Projects/Orb/ProjectIntro';
import {
	performanceDropdownItems,
	raveAboutDropdopwnItems,
	raveAboutDropdopwnItemsTwo
} from '../data/Projects/Rave/ProjectAboutDropdown';
import { raveProject } from '../data/Projects/Rave/ProjectIntro';

let images = [];

export const preloadFull = async () => {
	let loadedAssets = 0;

	preloadHomeMenu.set(
		preloadImages([[artDaoLogo, discordIcon, hammer, instagramIcon, mapLogo, menuIcon, xIcon]])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedHome.set(
		preloadImages([
			homeImages.map((project) => project.imageUrl),
			homeImages.map((project) => project.hover),
			homeImagesMobile.map((project) => project.hover)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedArtifice.set(
		preloadImages([
			[artificeProjectIntro.bgImage, artificeProjectIntro.bgImageMobile],
			kokoAboutImahges,
			furnitureAboutImages,
			psipsikokoDropdownItems.map((item) => item.image),
			panelsAboutImages,
			vernisaggeDropdownItems.map((item) => item.image)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedDigital.set(
		preloadImages([
			[digitalMatterProjectIntro.bgImage, digitalMatterProjectIntro.bgImageMobile],
			marcusAboutImages,
			marcusDropdownItems.map((item) => item.image),
			marcusPolaroidsImages.map((item) => item.image),
			sulkianAboutImages,
			parsaAboutImages,
			parsaArtworkImages.map((item) => item.image),
			parsaArtworkImages1.map((item) => item.src),
			parsaArtworkImages2.map((item) => item.src),
			parsaPolaroidsImages.map((item) => item.image)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedEcologies.set(
		preloadImages([
			[ecologiesOfCodeProject.bgImage, ecologiesOfCodeProject.bgImageMobile],
			joaquinaAboutImages,
			[ecoInterviewBg],
			ecologiesPolaroidImages.map((item) => item.image),
			okytomoAboutImages,
			ecologiesPolaroidImagesTwo.map((item) => item.image),
			hypereikonAboutImages,
			ecologiesArtworkImages.map((item) => item.image),
			ecologiesGallery1.map((item) => item.src),
			ecologiesGallery2.map((item) => item.src)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedConversation.set(
		preloadImages([
			[inConversationProjectIntro.bgImage, inConversationProjectIntro.bgImageMobile],
			inConversationDropdownItems.map((item) => item.image)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedInherent.set(
		preloadImages([
			[inherentInstabilityProjectIntro.bgImage, inherentInstabilityProjectIntro.bgImageMobile],
			[inaInterviewBgImage],
			inaVareAboutImages,
			inaVarePolaroidsImages.map((item) => item.image),
			elbiAboutImages,
			nicoAboutImages,
			nicoPolaroidsImages.map((item) => item.image)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedIntertwined.set(
		preloadImages([
			[intertwinedProjectIntro.bgImage, intertwinedProjectIntro.bgImageMobile],
			curationAboutImages,
			artdaoDropdownItems.map((item) => item.image),
			cryptoargAboutImages,
			cryptoargDropdownItems.map((item) => item.image),
			intertwinedVernisaggeDropdownItems.map((item) => item.image)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedMap.set(preloadImages([[mapBg]]));

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedEvents.set(preloadImages([eventImages]));

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedNonplaces.set(
		preloadImages([
			[nonPlacesProjectIntro.bgImage, nonPlacesProjectIntro.bgImageMobile],
			nonPlacesDropdownItems.map((item) => item.image),
			nonPlacesTwoDropdownItems.map((item) => item.image)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedOrb.set(
		preloadImages([
			[orbProject.bgImage, orbProject.bgImageMobile],
			[orbBgImage],
			carocoAboutImages,
			vernisaggeDropdownItems.map((item) => item.image),
			magmaAboutImages,
			hivemindAboutImages,
			daoDropdownItems.map((item) => item.image)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);

	preloadedRave.set(
		preloadImages([
			[raveProject.bgImage, raveProject.bgImageMobile],
			raveAboutDropdopwnItems.map((image) => image.image),
			performanceDropdownItems.map((item) => item.image),
			raveAboutDropdopwnItemsTwo.map((item) => item.image)
		])
	);

	loadedAssets++;
	progress.set((loadedAssets / 13) * 100);
};

export const preloadImages = async (urls: string[][]): Promise<string[][]> => {
	// let loadedAssets = 0;

	const getImagesArray = async () => {
		const mappedImages = [];

		for (const imageArray of urls) {
			const promises = imageArray.map(
				(url) =>
					new Promise((resolve, reject) => {
						const img = new Image();
						img.src = url;
						img.onload = () => {
							resolve(img.src);
						};
						img.onerror = reject;
					})
			);

			images = (await Promise.all(promises)) as string[];

			mappedImages.push(images);
			// loadedAssets++;
			// progress.set((loadedAssets / urls.length) * 100);
		}

		return mappedImages;
	};

	return getImagesArray();
};

export default preloadImages;
