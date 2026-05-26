import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

const REFIK_ANADOL_IMAGE_CREDIT = 'Images Courtesy of Refik Anadol Studio';

const syntheticSensesParagRefikAnadolImages = new Set([
	'/media/synthetic-senses/WDCHDreams-Keyword_select.width-1600.format-webp.webp',
	'/media/synthetic-senses/treemap-2048x1152.webp'
]);

export const syntheticSensesParagGridImages = [
	'/media/synthetic-senses/WDCHDreams-Keyword_select.width-1600.format-webp.webp',
	'/media/synthetic-senses/treemap-2048x1152.webp',
	'/media/synthetic-senses/Artboard%201.webp',
	'/media/synthetic-senses/Artboard%203_1.webp',
	'/media/synthetic-senses/Artboard%209.webp',
	'/media/synthetic-senses/Overhead1%202.webp',
	'/media/synthetic-senses/image.webp'
];

export const syntheticSensesParagDropdownItems: IAboutDropdown[] =
	syntheticSensesParagGridImages.map((image) => ({
		name: syntheticSensesParagRefikAnadolImages.has(image)
			? REFIK_ANADOL_IMAGE_CREDIT
			: '',
		image,
		normalCase: syntheticSensesParagRefikAnadolImages.has(image)
	}));

export const syntheticSensesAuroraGridImages = [
	'/media/synthetic-senses/MetaMahala-AuroraMititelu_001.webp',
	'/media/synthetic-senses/N01-AbelandI_01-scaled.webp',
	'/media/synthetic-senses/N03-MetaMahala-03.webp',
	'/media/synthetic-senses/N01-AbelandI_03.webp',
	'/media/synthetic-senses/INSTA_005_IMG_0370.webp',
	'/media/synthetic-senses/N01-AbelandI_04.webp'
];
