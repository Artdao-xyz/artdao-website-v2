import hoverArtifice from '$lib/assets/images/projects/desktop-home/artifice-hover-desktop-min.png';
import artifice from '$lib/assets/images/projects/desktop-home/artifice-min.png';
import hoverEcologies from '$lib/assets/images/projects/desktop-home/ecologies-hover-desktop-min.png';
import ecologies from '$lib/assets/images/projects/desktop-home/ecologies-min.png';
import hoverInherent from '$lib/assets/images/projects/desktop-home/inherent-hover-desktop-min.png';
import inherent from '$lib/assets/images/projects/desktop-home/inherent-min.png';
import hoverIntertwined from '$lib/assets/images/projects/desktop-home/interwined-hover-desktop-min.png';
import intertwined from '$lib/assets/images/projects/desktop-home/interwined-min.png';
import hoverDigitalMatter from '$lib/assets/images/projects/desktop-home/matter-hover-desktop-min.png';
import digitalMatter from '$lib/assets/images/projects/desktop-home/matter-min.png';
import hoverNonPlaces from '$lib/assets/images/projects/desktop-home/nonplaces-hover-desktop-min.png';
import nonPlaces from '$lib/assets/images/projects/desktop-home/nonplaces-min.png';
import hoverInConversation from '$lib/assets/images/projects/desktop-home/operator-hover-desktop-min.png';
import inConversation from '$lib/assets/images/projects/desktop-home/operator-min.png';
import orb from '$lib/assets/images/projects/desktop-home/orb-cover-desktop-min.png';
import hoverOrb from '$lib/assets/images/projects/desktop-home/orb-hover-desktop-min.png';
import hoverRave from '$lib/assets/images/projects/desktop-home/rave-hover-desktop-min.png';
import rave from '$lib/assets/images/projects/desktop-home/rave-min.png';
import hoverArtificeMobile from '$lib/assets/images/projects/mobile-home/artifice-hover-mobile-min.png';
import artificeMobile from '$lib/assets/images/projects/mobile-home/Artifice-min.png';
import hoverEcologiesMobile from '$lib/assets/images/projects/mobile-home/ecologies-hover-mobile-min.png';
import ecologiesMobile from '$lib/assets/images/projects/mobile-home/Ecologies-min.png';
import hoverInherentMobile from '$lib/assets/images/projects/mobile-home/inherent-hover-mobile-min.png';
import inherentMobile from '$lib/assets/images/projects/mobile-home/Instability-min.png';
import hoverInterwinedMobile from '$lib/assets/images/projects/mobile-home/interwined-hover-mobile-min.png';
import interwinedMobile from '$lib/assets/images/projects/mobile-home/Interwined-min.png';
import hoverMatterMobile from '$lib/assets/images/projects/mobile-home/matter-hover-mobile-min.png';
import matterMobile from '$lib/assets/images/projects/mobile-home/Matter-min.png';
import nonplacesMobile from '$lib/assets/images/projects/mobile-home/Non-min.png';
import hoverNonplacesMobile from '$lib/assets/images/projects/mobile-home/nonplaces-hover-mobile-min.png';
import hoverOperatorMobile from '$lib/assets/images/projects/mobile-home/operator-hover-mobile-min.png';
import operatorMobile from '$lib/assets/images/projects/mobile-home/Operator-min.png';
import hoverOrbMobile from '$lib/assets/images/projects/mobile-home/orb-hover-mobile-min.png';
import orbMobile from '$lib/assets/images/projects/mobile-home/Orb-min.png';
import hoverRaveMobile from '$lib/assets/images/projects/mobile-home/rave-hover-mobile-min.png';
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
	{ imageUrl: inherent, route: INHERENT, hover: hoverInherent },
	{ imageUrl: digitalMatter, route: DIGITAL_MATTER, hover: hoverDigitalMatter },
	{ imageUrl: ecologies, route: ECOLOGIES_OF_CODE, hover: hoverEcologies },
	{ imageUrl: artifice, route: ARTIFICE, hover: hoverArtifice },
	{ imageUrl: rave, route: RAVE, hover: hoverRave },
	{ imageUrl: orb, route: ORB, hover: hoverOrb },
	{ imageUrl: nonPlaces, route: NON_PLACES, hover: hoverNonPlaces },
	{ imageUrl: inConversation, route: IN_CONVERSATION, hover: hoverInConversation },
	{ imageUrl: intertwined, route: INTERTWINED, hover: hoverIntertwined }
];

export const homeImagesMobile = [
	{ imageUrl: inherentMobile, route: INHERENT, hover: hoverInherentMobile },
	{ imageUrl: matterMobile, route: DIGITAL_MATTER, hover: hoverMatterMobile },
	{ imageUrl: ecologiesMobile, route: ECOLOGIES_OF_CODE, hover: hoverEcologiesMobile },
	{ imageUrl: artificeMobile, route: ARTIFICE, hover: hoverArtificeMobile },
	{ imageUrl: raveMobile, route: RAVE, hover: hoverRaveMobile },
	{ imageUrl: orbMobile, route: ORB, hover: hoverOrbMobile },
	{ imageUrl: nonplacesMobile, route: NON_PLACES, hover: hoverNonplacesMobile },
	{ imageUrl: operatorMobile, route: IN_CONVERSATION, hover: hoverOperatorMobile },
	{ imageUrl: interwinedMobile, route: INTERTWINED, hover: hoverInterwinedMobile }
];
