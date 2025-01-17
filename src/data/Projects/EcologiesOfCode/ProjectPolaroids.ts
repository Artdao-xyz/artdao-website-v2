import joaquinaPolaroidTwo from '$lib/assets/images/projects/ecologiesOfCode/joaquina/polaroids/Joaquina 1-min.webp';
import ecologiesPolaroidOne from '$lib/assets/images/projects/ecologiesOfCode/joaquina/polaroids/joaquina wip 7 1-min.webp';
import ecologiesPolaroidThree from '$lib/assets/images/projects/ecologiesOfCode/joaquina/polaroids/pez14jpg 1-min.webp';
import ecologiesPolaroidFour from '$lib/assets/images/projects/ecologiesOfCode/joaquina/polaroids/simulacionDeLoEsencial.Intro.00_00_25_21.Imagen fija003 5 1-min.webp';
import imageFour from '$lib/assets/images/projects/ecologiesOfCode/okytomo/polaroids/Fs96jdnWAB0Yk8H 2-min.webp';
import imageThree from '$lib/assets/images/projects/ecologiesOfCode/okytomo/polaroids/Screenshot 2024-09-20 130751 1-min.webp';
import imageOne from '$lib/assets/images/projects/ecologiesOfCode/okytomo/polaroids/progreso 1-min.webp';
import imageTwo from '$lib/assets/images/projects/ecologiesOfCode/okytomo/polaroids/ssstwitter.com_1721316787674 1.webp';
import type { IPolaroidImage } from '$lib/elements/Polaroids/interface';

export const ecologiesPolaroidImages: IPolaroidImage[] = [
	{
		image: ecologiesPolaroidThree,
		quote: 'Water has a fascinating duality'
	},
	{
		image: ecologiesPolaroidFour,
		quote: 'And a powerful symbol in our collective imagination'
	},
	{
		image: joaquinaPolaroidTwo,
		quote: 'It’s both a real-world element'
	},
	{
		image: ecologiesPolaroidOne,
		quote: 'Different types of water evoke different emotions and mental images'
	}
];

export const ecologiesPolaroidImagesTwo: IPolaroidImage[] = [
	{ image: imageOne, quote: 'I always work in those hours that are a sunset or sunrise' },
	{ image: imageTwo, quote: 'where that landscape looks mysterious or as if it hides something.' },
	{ image: imageThree, quote: 'I work a lot with light.' },
	{ image: imageFour, quote: 'in that hour everything is bathed in a special color' }
];
