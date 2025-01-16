import hyperAboutOne from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/about/hyper-about-1-compressed.webp';
import hyperAboutTwo from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/about/hyper-about-2-compressed.webp';
import hyperAboutThree from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/about/hyper-about-3-compressed.webp';
import joaquinaAboutOne from '$lib/assets/images/projects/ecologiesOfCode/joaquina/about/joaquina-about-1-compressed.webp';
import joaquinaAboutTwo from '$lib/assets/images/projects/ecologiesOfCode/joaquina/about/joaquina-about-2-compressed.webp';
import joaquinaAboutThree from '$lib/assets/images/projects/ecologiesOfCode/joaquina/about/joaquina-about-3-compressed.webp';
import okytomoAboutOne from '$lib/assets/images/projects/ecologiesOfCode/okytomo/about/oky-about-1-compressed.webp';
import okytomoAboutTwo from '$lib/assets/images/projects/ecologiesOfCode/okytomo/about/oky-about-2-compressed.webp';
import okytomoAboutThree from '$lib/assets/images/projects/ecologiesOfCode/okytomo/about/oky-about-3-compressed.webp';
import Hypereikon from './Hypereikon.svelte';
import JoaquinaAbout from './JoaquinaAbout.svelte';
import OkytomoAbout from './OkytomoAbout.svelte';

export const joaquinaAbout = {
	title: 'joaquina salgado',
	subtitle: 'digital art + installation',
	text: JoaquinaAbout
};

export const okytomoAbout = {
	title: 'okytomo',
	subtitle: 'digital artist',
	text: OkytomoAbout
};

export const hypereikonAbout = {
	title: 'hypereikon',
	subtitle: 'duo of digital artists + IA',
	text: Hypereikon
};

export const joaquinaAboutImages = [joaquinaAboutOne, joaquinaAboutTwo, joaquinaAboutThree];

export const okytomoAboutImages = [okytomoAboutOne, okytomoAboutTwo, okytomoAboutThree];

export const hypereikonAboutImages = [hyperAboutOne, hyperAboutTwo, hyperAboutThree];
