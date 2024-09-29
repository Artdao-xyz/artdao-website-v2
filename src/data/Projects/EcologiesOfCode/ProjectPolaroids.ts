import ecologiesPolaroidFour from '$lib/assets/images/projects/ecologiesOfCode/ecologies-polaroid-four.png';
import ecologiesPolaroidOne from '$lib/assets/images/projects/ecologiesOfCode/ecologies-polaroid-one.png';
import ecologiesPolaroidThree from '$lib/assets/images/projects/ecologiesOfCode/ecologies-polaroid-three.png';
import joaquinaPolaroidTwo from '$lib/assets/images/projects/ecologiesOfCode/joaquina/polaroids/JOAQUINA - WIP 2.png';
import imageOne from '$lib/assets/images/projects/ecologiesOfCode/okytomo/polaroids/Fs96jdnWAB0Yk8H 2.png';
import imageTwo from '$lib/assets/images/projects/ecologiesOfCode/okytomo/polaroids/Screenshot 2024-09-20 130751 1.png';
import imageThree from '$lib/assets/images/projects/ecologiesOfCode/okytomo/polaroids/progreso 1.png';
import imageFour from '$lib/assets/images/projects/ecologiesOfCode/okytomo/polaroids/ssstwitter.com_1721316787674 1.png';
import type { IPolaroidImage } from '$lib/elements/Polaroids/interface';

export const ecologiesPolaroidImages: IPolaroidImage[] = [
	{ image: ecologiesPolaroidOne, name: 'WIP - 1', date: '12/03/22' },
	{ image: joaquinaPolaroidTwo, name: 'WIP - 2', date: '20/05/24' },
	{ image: ecologiesPolaroidThree, name: 'WIP - 3', date: '05/11/20' },
	{ image: ecologiesPolaroidFour, name: 'WIP - 4', date: '28/09/21' }
];

export const ecologiesPolaroidImagesTwo: IPolaroidImage[] = [
	{ image: imageOne, name: 'Fs96jdnWAB0Yk8H 2', date: '12/03/22' },
	{ image: imageTwo, name: 'Screenshot 2024-09-20 130751 1', date: '20/05/24' },
	{ image: imageThree, name: 'progreso 1', date: '05/11/20' },
	{ image: imageFour, name: 'ssstwitter.com_1721316787674 1', date: '28/09/21' }
];
