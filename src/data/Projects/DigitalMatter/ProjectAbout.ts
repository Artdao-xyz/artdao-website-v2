import marcusAboutOne from '$lib/assets/images/projects/digitalMatter/alien.png';
import sulkianAboutThree from '$lib/assets/images/projects/digitalMatter/Dolphin_Graphics.png';
import sulkianAboutOne from '$lib/assets/images/projects/digitalMatter/IRL2.png';
import marcusAboutTwo from '$lib/assets/images/projects/digitalMatter/mirando la luna2.png';
import parsaAboutOne from '$lib/assets/images/projects/digitalMatter/Pay_to_Win.png';
import marcusAboutThree from '$lib/assets/images/projects/digitalMatter/png.png';
import sulkianAboutTwo from '$lib/assets/images/projects/digitalMatter/Shark.png';
import parsaAboutThree from '$lib/assets/images/projects/digitalMatter/Starving_In_The_Belly_Of_A_Whale.png';
import parsaAboutTwo from '$lib/assets/images/projects/digitalMatter/Sweeney_Among_The_Incels.png';
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
	title: 'parsa',
	subtitle: 'VR',
	text: ParsaAbout
};

export const marcusAboutImages = [marcusAboutOne, marcusAboutTwo, marcusAboutThree];

export const sulkianAboutImages = [sulkianAboutOne, sulkianAboutTwo, sulkianAboutThree];

export const parsaAboutImages = [parsaAboutThree, parsaAboutOne, parsaAboutTwo];
