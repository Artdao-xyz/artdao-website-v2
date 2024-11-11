import hyperAboutOne from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/about/image-one.webp';
import hyperAboutThree from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/about/image-three.webp';
import hyperAboutTwo from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/about/image-two.webp';
import joaquinaAboutOne from '$lib/assets/images/projects/ecologiesOfCode/joaquina/about/img-one.webp';
import joaquinaAboutThree from '$lib/assets/images/projects/ecologiesOfCode/joaquina/about/img-three.webp';
import joaquinaAboutTwo from '$lib/assets/images/projects/ecologiesOfCode/joaquina/about/img-two.webp';
import okytomoAboutOne from '$lib/assets/images/projects/ecologiesOfCode/okytomo/about/image-one.webp';
import okytomoAboutThree from '$lib/assets/images/projects/ecologiesOfCode/okytomo/about/image-three.webp';
import okytomoAboutTwo from '$lib/assets/images/projects/ecologiesOfCode/okytomo/about/image-two.webp';
import Hypereikon from './Hypereikon.svelte';
import JoaquinaAbout from './JoaquinaAbout.svelte';
import OkytomoAbout from './OkytomoAbout.svelte';

export const joaquinaAbout = {
	title: 'joaquina',
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
