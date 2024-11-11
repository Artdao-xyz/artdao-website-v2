import hoverArtifice from '$lib/assets/images/projects/desktop-home/artifice-hover-desktop-min.webp';
import artifice from '$lib/assets/images/projects/desktop-home/artifice-min.webp';
import hoverEcologies from '$lib/assets/images/projects/desktop-home/ecologies-hover-desktop-min.webp';
import ecologies from '$lib/assets/images/projects/desktop-home/ecologies-min.webp';
import hoverInherent from '$lib/assets/images/projects/desktop-home/inherent-hover-desktop-min.webp';
import inherent from '$lib/assets/images/projects/desktop-home/inherent-min.webp';
import hoverIntertwined from '$lib/assets/images/projects/desktop-home/interwined-hover-desktop-min.webp';
import intertwined from '$lib/assets/images/projects/desktop-home/interwined-min.webp';
import hoverDigitalMatter from '$lib/assets/images/projects/desktop-home/matter-hover-desktop-min.webp';
import digitalMatter from '$lib/assets/images/projects/desktop-home/matter-min.webp';
import hoverNonPlaces from '$lib/assets/images/projects/desktop-home/nonplaces-hover-desktop-min.webp';
import nonPlaces from '$lib/assets/images/projects/desktop-home/nonplaces-min.webp';
import hoverInConversation from '$lib/assets/images/projects/desktop-home/operator-hover-desktop-min.webp';
import inConversation from '$lib/assets/images/projects/desktop-home/operator-min.webp';
import orb from '$lib/assets/images/projects/desktop-home/orb-cover-desktop-min.webp';
import hoverOrb from '$lib/assets/images/projects/desktop-home/orb-hover-desktop-min.webp';
import hoverRave from '$lib/assets/images/projects/desktop-home/rave-hover-desktop-min.webp';
import rave from '$lib/assets/images/projects/desktop-home/rave-min.webp';
import hoverArtificeMobile from '$lib/assets/images/projects/mobile-home/artifice-hover-mobile-min.webp';
import artificeMobile from '$lib/assets/images/projects/mobile-home/Artifice-min.webp';
import hoverEcologiesMobile from '$lib/assets/images/projects/mobile-home/ecologies-hover-mobile-min.webp';
import ecologiesMobile from '$lib/assets/images/projects/mobile-home/Ecologies-min.webp';
import hoverInherentMobile from '$lib/assets/images/projects/mobile-home/inherent-hover-mobile-min.webp';
import inherentMobile from '$lib/assets/images/projects/mobile-home/Instability-min.webp';
import hoverInterwinedMobile from '$lib/assets/images/projects/mobile-home/interwined-hover-mobile-min.webp';
import interwinedMobile from '$lib/assets/images/projects/mobile-home/Interwined-min.webp';
import hoverMatterMobile from '$lib/assets/images/projects/mobile-home/matter-hover-mobile-min.webp';
import matterMobile from '$lib/assets/images/projects/mobile-home/Matter-min.webp';
import nonplacesMobile from '$lib/assets/images/projects/mobile-home/Non-min.webp';
import hoverNonplacesMobile from '$lib/assets/images/projects/mobile-home/nonplaces-hover-mobile-min.webp';
import hoverOperatorMobile from '$lib/assets/images/projects/mobile-home/operator-hover-mobile-min.webp';
import operatorMobile from '$lib/assets/images/projects/mobile-home/Operator-min.webp';
import hoverOrbMobile from '$lib/assets/images/projects/mobile-home/orb-hover-mobile-min.webp';
import orbMobile from '$lib/assets/images/projects/mobile-home/Orb-min.webp';
import hoverRaveMobile from '$lib/assets/images/projects/mobile-home/rave-hover-mobile-min.webp';
import raveMobile from '$lib/assets/images/projects/mobile-home/Rave-min.webp';

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
