import digitalMatter from '$lib/assets/images/DIgitalMatter_Home_Square 1-min.png';
import ecologies from '$lib/assets/images/IMG Home Sizes-min.png';
import artifice from '$lib/assets/images/projects/artifice/Artifice_Cover_Home-min.png';
import inConversation from '$lib/assets/images/projects/inConversation/IMG Home Sizes 1.png';
import inherent from '$lib/assets/images/projects/inherentInstability/InherentInstability_Home_Square_1.png';
import intertwined from '$lib/assets/images/projects/intertwined/Interwined_Home_Vertical 1-min.png';
import nonPlaces from '$lib/assets/images/projects/nonPlaces/nonPlacesHome-min.png';
import orb from '$lib/assets/images/projects/orb/Orb_Home_Square 1-min.png';
import rave from '$lib/assets/images/RAVE_Home_Horizontal 1-min.png';

import {
	ARTIFICE,
	DIGITAL_MATTER,
	ECOLOGIES_OF_CODE,
	IN_CONVERSATION,
	INHERENT,
	INTERTWINED,
	NON_PLACES,
	ORB,
	RAVE
} from '../constants/routes';

export const homeImages = [
	{ imageUrl: digitalMatter, route: DIGITAL_MATTER },
	{ imageUrl: inherent, route: INHERENT },
	{ imageUrl: rave, route: RAVE },
	{ imageUrl: ecologies, route: ECOLOGIES_OF_CODE },
	{ imageUrl: intertwined, route: INTERTWINED },
	{ imageUrl: artifice, route: ARTIFICE },
	{ imageUrl: orb, route: ORB },
	{ imageUrl: nonPlaces, route: NON_PLACES },
	{ imageUrl: inConversation, route: IN_CONVERSATION }
];
