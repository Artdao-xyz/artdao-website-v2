import type { IProject } from '$lib/components/ProjectIntro/interfaces';
import { EProjects } from '../../../constants/enums';

export const theEndOfTheMuseIntro: IProject = {
	name: EProjects.THE_END_OF_THE_MUSE,
	description: [
		'Artists no longer depict idealized sitters with flawless features. Instead, their subjects have disproportionate eyes, melting skin, and limbs elongated at impossible angles. Ugliness and disturbance have become artistic languages, echoing Umberto Eco\'s argument in History of Ugliness that beauty has always been a cultural convention and that the grotesque carries symbolic value capable of redefining art.',
		'These new muses are no longer bound to narrow ideals of beauty. They reflect more varied, complex, and even unsettling forms that challenge traditional expectations.'
	],
	bgImage: '/media/the-end-of-the-muse/main-cover.webp',
	bgImageMobile: '/media/the-end-of-the-muse/main-cover.webp'
};

