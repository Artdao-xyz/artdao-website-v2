import artifice from '$lib/assets/images/projects/desktop-home/artifice-min.png';
import ecologies from '$lib/assets/images/projects/desktop-home/ecologies-min.png';
import inherent from '$lib/assets/images/projects/desktop-home/inherent-min.png';
import intertwined from '$lib/assets/images/projects/desktop-home/interwined-min.png';
import digitalMatter from '$lib/assets/images/projects/desktop-home/matter-min.png';
import nonPlaces from '$lib/assets/images/projects/desktop-home/nonplaces-min.png';
import inConversation from '$lib/assets/images/projects/desktop-home/operator-min.png';
import orb from '$lib/assets/images/projects/desktop-home/orb-min.png';
import rave from '$lib/assets/images/projects/desktop-home/rave-min.png';
import artificeMobile from '$lib/assets/images/projects/mobile-home/Artifice-min.png';
import ecologiesMobile from '$lib/assets/images/projects/mobile-home/Ecologies-min.png';
import inherentMobile from '$lib/assets/images/projects/mobile-home/Instability-min.png';
import interwinedMobile from '$lib/assets/images/projects/mobile-home/Interwined-min.png';
import matterMobile from '$lib/assets/images/projects/mobile-home/Matter-min.png';
import nonplacesMobile from '$lib/assets/images/projects/mobile-home/Non-min.png';
import operatorMobile from '$lib/assets/images/projects/mobile-home/Operator-min.png';
import orbMobile from '$lib/assets/images/projects/mobile-home/Orb-min.png';
import raveMobile from '$lib/assets/images/projects/mobile-home/Rave-min.png';

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
	{ imageUrl: inherent, route: INHERENT },
	{ imageUrl: digitalMatter, route: DIGITAL_MATTER },
	{ imageUrl: ecologies, route: ECOLOGIES_OF_CODE },
	{ imageUrl: artifice, route: ARTIFICE },
	{ imageUrl: rave, route: RAVE },
	{ imageUrl: orb, route: ORB },
	{ imageUrl: nonPlaces, route: NON_PLACES },
	{ imageUrl: inConversation, route: IN_CONVERSATION },
	{ imageUrl: intertwined, route: INTERTWINED }
];

export const homeImagesMobile = [
	{ imageUrl: inherentMobile, route: INHERENT },
	{ imageUrl: matterMobile, route: DIGITAL_MATTER },
	{ imageUrl: ecologiesMobile, route: ECOLOGIES_OF_CODE },
	{ imageUrl: artificeMobile, route: ARTIFICE },
	{ imageUrl: raveMobile, route: RAVE },
	{ imageUrl: orbMobile, route: ORB },
	{ imageUrl: nonplacesMobile, route: NON_PLACES },
	{ imageUrl: operatorMobile, route: IN_CONVERSATION },
	{ imageUrl: interwinedMobile, route: INTERTWINED }
];
