import curationAboutImage01 from '$lib/assets/images/projects/intertwined/20-DSCF3920 1-min.webp';
import artBlocksAboutImages01 from '$lib/assets/images/projects/intertwined/art-blocks-about-intro-compressed.webp';
import cryptoAboutImages01 from '$lib/assets/images/projects/intertwined/crypto-arg-1-compressed.webp';
import cryptoAboutImages02 from '$lib/assets/images/projects/intertwined/crypto-arg-2-compressed.webp';
import cryptoAboutImages03 from '$lib/assets/images/projects/intertwined/crypto-arg-3-compressed.webp';
import cryptoAboutImages04 from '$lib/assets/images/projects/intertwined/crypto-arg-4-compressed.webp';
import curationAboutImage02 from '$lib/assets/images/projects/intertwined/curation-02-compressed.webp';
import curationAboutImage03 from '$lib/assets/images/projects/intertwined/curation-03-compressed.webp';
import curationAboutImage04 from '$lib/assets/images/projects/intertwined/curation-04-compressed.webp';
import mocaAboutImages01 from '$lib/assets/images/projects/intertwined/moca-about-1-compressed.webp';
import mocaAboutImages02 from '$lib/assets/images/projects/intertwined/moca-about-2-compressed.webp';
import mocaAboutImages03 from '$lib/assets/images/projects/intertwined/moca-about-3-compressed.webp';
import CryptoArgAbout from './CryptoArgAbout.svelte';
import CurationAbout from './CurationAbout.svelte';
import { default as ArtBlocksAbout, default as MocaAbout } from './MocaAbout.svelte';

export const curationAbout = {
	title: 'entangled wires',
	subtitle: 'ARTDAO',
	text: CurationAbout
};

export const curationAboutImages = [
	curationAboutImage01,
	curationAboutImage02,
	curationAboutImage03,
	curationAboutImage04
];

export const cryptoargAbout = {
	title: 'cryptoarg',
	subtitle: 'Subtitle',
	text: CryptoArgAbout
};

export const cryptoargAboutImages = [
	cryptoAboutImages01,
	cryptoAboutImages02,
	cryptoAboutImages03,
	cryptoAboutImages04
];

export const artBlocksAbout = {
	title: 'art blocks',
	subtitle: '',
	text: ArtBlocksAbout
};

export const artBlocksAboutImages = [artBlocksAboutImages01];

export const mocaAbout = {
	title: 'moca',
	subtitle: '',
	text: MocaAbout
};

export const mocaAboutImages = [mocaAboutImages01, mocaAboutImages02, mocaAboutImages03];
