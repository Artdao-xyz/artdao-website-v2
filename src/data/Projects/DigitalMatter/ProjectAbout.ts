import marcusAboutOne from '$lib/assets/images/projects/digitalMatter/alien.webp';
import sulkianAboutThree from '$lib/assets/images/projects/digitalMatter/Dolphin_Graphics.webp';
import sulkianAboutOne from '$lib/assets/images/projects/digitalMatter/IRL2.webp';
import marcusAboutTwo from '$lib/assets/images/projects/digitalMatter/mirando la luna2.webp';
import parsaAboutOne from '$lib/assets/images/projects/digitalMatter/Pay_to_Win.webp';
import marcusAboutThree from '$lib/assets/images/projects/digitalMatter/png.webp';
import sulkianAboutTwo from '$lib/assets/images/projects/digitalMatter/Shark.webp';
import parsaAboutThree from '$lib/assets/images/projects/digitalMatter/Starving_In_The_Belly_Of_A_Whale.webp';
import parsaAboutTwo from '$lib/assets/images/projects/digitalMatter/Sweeney_Among_The_Incels.webp';
import MarcusAbout from './MarcusAbout.svelte';
import ParsaAbout from './ParsaAbout.svelte';
import SulkianAbout from './SulkianAbout.svelte';

export const marcusAbout = {
	title: 'marcus',
	subtitle: '3D ART + VR',
	text: MarcusAbout
};

export const sulkianAbout = {
	title: 'sulkian',
	subtitle: '3D ART + VR + IA',
	text: SulkianAbout
};

export const parsaAbout = {
	title: 'parsa mostaghim',
	subtitle: 'VR',
	text: ParsaAbout
};

export const marcusAboutImages = [marcusAboutOne, marcusAboutTwo, marcusAboutThree];

export const sulkianAboutImages = [sulkianAboutOne, sulkianAboutTwo, sulkianAboutThree];

export const parsaAboutImages = [parsaAboutThree, parsaAboutOne, parsaAboutTwo];
