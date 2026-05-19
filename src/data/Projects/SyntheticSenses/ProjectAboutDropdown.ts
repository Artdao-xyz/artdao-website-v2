import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

const REFIK_ANADOL_IMAGE_CREDIT = 'Images Courtesy of Refik Anadol Studio';

export const syntheticSensesParagGridImages = [
	'/media/synthetic-senses/WDCHDreams-Keyword_select.width-1600.format-webp.webp',
	'/media/synthetic-senses/STILL_27-2048x1353.webp',
	'/media/synthetic-senses/230808_LA-Phil-Concept-Presentation-1-2048x1152.webp',
	'/media/synthetic-senses/treemap-2048x1152.webp',
	'/media/synthetic-senses/crop2-1.webp',
	'/media/synthetic-senses/STILL_27-scaled.webp'
];

export const syntheticSensesParagDropdownItems: IAboutDropdown[] =
	syntheticSensesParagGridImages.map((image, index) => ({
		name: index < 2 ? REFIK_ANADOL_IMAGE_CREDIT : '',
		image,
		normalCase: index < 2
	}));

export const syntheticSensesAuroraGridImages = [
	'/media/synthetic-senses/MetaMahala-AuroraMititelu_001.webp',
	'/media/synthetic-senses/N01-AbelandI_01-scaled.webp',
	'/media/synthetic-senses/N03-MetaMahala-03.webp',
	'/media/synthetic-senses/N01-AbelandI_03.webp',
	'/media/synthetic-senses/INSTA_005_IMG_0370.webp',
	'/media/synthetic-senses/N01-AbelandI_04.webp'
];
