import perro from '$lib/assets/images/projects/digitalMatter/perro.png';
import joaquina from '$lib/assets/images/projects/ecologiesOfCode/joaquina/interview/HORIZONTAL_FINAL6 (1) 1.png';
import orb from '$lib/assets/images/projects/orb/Asset _1_1.png';
import cymoon from '$lib/assets/images/projects/rave/imgNavigator/cymoon.png';

import { DIGITAL_MATTER, ECOLOGIES_OF_CODE, ORB, RAVE } from '../constants/routes';

export const homeImages = [
	{ imageUrl: joaquina, route: ECOLOGIES_OF_CODE },
	{ imageUrl: cymoon, route: RAVE },
	{ imageUrl: perro, route: DIGITAL_MATTER },
	{ imageUrl: orb, route: ORB }
];
