import carocoAbout03 from '$lib/assets/images/projects/orb/240326_caroco_030.webp';
import carocoAbout01 from '$lib/assets/images/projects/orb/240326_caroco_043.webp';
import magmaAbout01 from '$lib/assets/images/projects/orb/CHAPTER_1_PHOTOS_(2)_1.webp';
import seedAbout01 from '$lib/assets/images/projects/orb/CHAPTER_1_PHOTOS_(2)_1_(1).webp';
import seedAbout03 from '$lib/assets/images/projects/orb/CHAPTER_1_PHOTOS_(5).webp';
import seedAbout02 from '$lib/assets/images/projects/orb/CHAPTER_1_PHOTOS_(8).webp';
import hivemindAbout02 from '$lib/assets/images/projects/orb/FrL2C_XWIAA6M-a_1.webp';
import magmaAbout02 from '$lib/assets/images/projects/orb/IMG_6407.webp';
import magmaAbout03 from '$lib/assets/images/projects/orb/Magma_fewparticipants_upscaled_1.webp';
import hivemindAbout01 from '$lib/assets/images/projects/orb/Snapinsta.app_365906490_3490152554575869_922764423978742968_n_1080_1.webp';
import carocoAbout02 from '$lib/assets/images/projects/orb/Untitled_(1).webp';
import CarocoAbout from './CarocoAbout.svelte';
import HivemindAbout from './HivemindAbout.svelte';
import MagmaAbout from './MagmaAbout.svelte';
import SeedAbout from './SeedAbout.svelte';

export const magmaAbout = {
	title: 'magma',
	subtitle: 'DAO 01',
	text: MagmaAbout
};

export const magmaAboutImages = [magmaAbout01, magmaAbout02, magmaAbout03];

export const seedAbout = {
	title: 'S.E.E.D.',
	subtitle: 'DAO 02',
	text: SeedAbout
};

export const seedAboutImages = [seedAbout01, seedAbout02, seedAbout03];

export const hivemindAbout = {
	title: 'HIVEMIND',
	subtitle: 'DAO 03',
	text: HivemindAbout
};

export const hivemindAboutImages = [hivemindAbout01, hivemindAbout02];

export const carocoAbout = {
	title: 'Caroço',
	subtitle: 'THE VENUE',
	text: CarocoAbout
};

export const carocoAboutImages = [carocoAbout01, carocoAbout02, carocoAbout03];
