import artificeMobile from '$lib/assets/images/projects/footer/mobile-artifice-min.webp';
import conversationMobile from '$lib/assets/images/projects/footer/mobile-conversation-min.webp';
import digitalMobile from '$lib/assets/images/projects/footer/mobile-digital-min.webp';
import ecologiesMobile from '$lib/assets/images/projects/footer/mobile-ecologies-min.webp';
import inherentMobile from '$lib/assets/images/projects/footer/mobile-inherent-min.webp';
import intertwinedMobile from '$lib/assets/images/projects/footer/mobile-intertwined-min.webp';
import nonPlacesMobile from '$lib/assets/images/projects/footer/mobile-nonplaces-min.webp';
import orbMobile from '$lib/assets/images/projects/footer/mobile-orb-min.webp';
import raveMobile from '$lib/assets/images/projects/footer/mobile-rave-min.webp';
import artifice from '$lib/assets/images/projects/footer/projects_artifice-min.webp';
import artificeHover from '$lib/assets/images/projects/footer/projects_artirfice_hover-min.webp';
import digital from '$lib/assets/images/projects/footer/projects_digital-min.webp';
import digitalHover from '$lib/assets/images/projects/footer/projects_digital_hover-min.webp';
import ecologies from '$lib/assets/images/projects/footer/projects_ecologies-min.webp';
import ecologiesHover from '$lib/assets/images/projects/footer/projects_ecologies_hover-min.webp';
import conversation from '$lib/assets/images/projects/footer/projects_in_conversation-min.webp';
import conversationHover from '$lib/assets/images/projects/footer/projects_in_conversation_hover-min.webp';
import inherent from '$lib/assets/images/projects/footer/projects_inherent-min.webp';
import inherentHover from '$lib/assets/images/projects/footer/projects_inherent_hover-min.webp';
import intertwined from '$lib/assets/images/projects/footer/projects_intertiwned-min.webp';
import intertwinedHover from '$lib/assets/images/projects/footer/projects_intertwined_hover-min.webp';
import nonPlaces from '$lib/assets/images/projects/footer/projects_non_places-min.webp';
import nonPlacesHover from '$lib/assets/images/projects/footer/projects_non_places_hover-min.webp';
import orb from '$lib/assets/images/projects/footer/projects_orb-min.webp';
import orbHover from '$lib/assets/images/projects/footer/projects_orb_hover-min.webp';
import rave from '$lib/assets/images/projects/footer/projects_rave-min.webp';
import raveHover from '$lib/assets/images/projects/footer/projects_rave_hover-min.webp';
import { EProjects } from '../../constants/enums';
import {
	ARTIFICE,
	DIGITAL_ARCHAEOLOGY,
	DIGITAL_MATTER,
	ECOLOGIES_OF_CODE,
	IN_CONVERSATION,
	INHERENT,
	INTERTWINED,
	MEMETIC_RUBBLE,
	NON_PLACES,
	ORB,
	RAVE,
	QUEERING_THE_WEB3,
	SUBCONSCIOUS_MEDIA,
	PET,
	WHATS_ON_YOUR_MIND
} from '../../constants/routes';

export interface IProject {
	name: EProjects;
	refs: EProjects[];
}

export const projects: IProject[] = [
	{
		name: EProjects.ARTIFICE,
		refs: [EProjects.DIGITAL_MATTER, EProjects.ECOLOGIES_OF_CODE, EProjects.IN_CONVERSATION]
	},
	{
		name: EProjects.DIGITAL_ARCHAEOLOGY,
		refs: [EProjects.DIGITAL_MATTER, EProjects.ECOLOGIES_OF_CODE, EProjects.INHERENT_INSTABILITY]
	},
	{
		name: EProjects.DIGITAL_MATTER,
		refs: [EProjects.INHERENT_INSTABILITY, EProjects.INTERTWINED, EProjects.NON_PLACES]
	},
	{
		name: EProjects.ECOLOGIES_OF_CODE,
		refs: [EProjects.ORB, EProjects.RAVE, EProjects.ARTIFICE]
	},
	{
		name: EProjects.IN_CONVERSATION,
		refs: [EProjects.NON_PLACES, EProjects.DIGITAL_MATTER, EProjects.INTERTWINED]
	},
	{
		name: EProjects.INHERENT_INSTABILITY,
		refs: [EProjects.RAVE, EProjects.ORB, EProjects.ECOLOGIES_OF_CODE]
	},
	{
		name: EProjects.INTERTWINED,
		refs: [EProjects.ARTIFICE, EProjects.INHERENT_INSTABILITY, EProjects.DIGITAL_MATTER]
	},
	{
		name: EProjects.MEMETIC_RUBBLE,
		refs: [EProjects.ARTIFICE, EProjects.DIGITAL_MATTER, EProjects.IN_CONVERSATION]
	},
	{
		name: EProjects.NON_PLACES,
		refs: [EProjects.ECOLOGIES_OF_CODE, EProjects.ORB, EProjects.IN_CONVERSATION]
	},
	{
		name: EProjects.ORB,
		refs: [EProjects.ARTIFICE, EProjects.RAVE, EProjects.NON_PLACES]
	},
	{
		name: EProjects.RAVE,
		refs: [EProjects.IN_CONVERSATION, EProjects.INTERTWINED, EProjects.INHERENT_INSTABILITY]
	},
	{
		name: EProjects.QUEERING_THE_WEB3,
		refs: [EProjects.ARTIFICE, EProjects.DIGITAL_MATTER, EProjects.ECOLOGIES_OF_CODE]
	},
	{
		name: EProjects.BODY_FRONTIER,
		refs: [EProjects.ARTIFICE, EProjects.ORB, EProjects.RAVE]
	},
	{
		name: EProjects.SUBCONSCIOUS_MEDIA,
		refs: [EProjects.ARTIFICE, EProjects.DIGITAL_MATTER, EProjects.ECOLOGIES_OF_CODE]
	},
	{
		name: EProjects.PET,
		refs: [EProjects.BODY_FRONTIER, EProjects.SUBCONSCIOUS_MEDIA, EProjects.DIGITAL_MATTER]
	},
	{
		name: EProjects.WHATS_ON_YOUR_MIND,
		refs: [EProjects.PET, EProjects.SUBCONSCIOUS_MEDIA, EProjects.DIGITAL_MATTER]
	}
];

export const projectsDetails = [
	{
		name: EProjects.ARTIFICE,
		nameToShow: 'artifice',
		image: artifice,
		hover: artificeHover,
		url: ARTIFICE,
		mobileImage: artificeMobile
	},
	{
		name: EProjects.DIGITAL_ARCHAEOLOGY,
		nameToShow: 'digital archaeology',
		image: '/media/thumbnails/14-home-digital-archaeology.webp',
		hover: '/media/thumbnails/14-home-digital-archaeology.webp',
		url: DIGITAL_ARCHAEOLOGY,
		mobileImage: '/media/thumbnails/14-home-digital-archaeology.webp'
	},
	{
		name: EProjects.DIGITAL_MATTER,
		nameToShow: 'digital matter',
		image: digital,
		hover: digitalHover,
		url: DIGITAL_MATTER,
		mobileImage: digitalMobile
	},
	{
		name: EProjects.ECOLOGIES_OF_CODE,
		nameToShow: 'ecologies of code',
		image: ecologies,
		hover: ecologiesHover,
		url: ECOLOGIES_OF_CODE,
		mobileImage: ecologiesMobile
	},
	{
		name: EProjects.INHERENT_INSTABILITY,
		nameToShow: 'inherent instability',
		image: inherent,
		hover: inherentHover,
		url: INHERENT,
		mobileImage: inherentMobile
	},
	{
		name: EProjects.INTERTWINED,
		nameToShow: 'intertwined',
		image: intertwined,
		hover: intertwinedHover,
		url: INTERTWINED,
		mobileImage: intertwinedMobile
	},
	{
		name: EProjects.MEMETIC_RUBBLE,
		nameToShow: 'memetic rubble',
		image: '/media/home/thumbnails/12-home-memetic-rubble.webp',
		hover: '/media/home/thumbnails/12-home-memetic-rubble.webp',
		url: MEMETIC_RUBBLE,
		mobileImage: '/media/home/thumbnails/12-home-memetic-rubble.webp'
	},
	{
		name: EProjects.IN_CONVERSATION,
		nameToShow: 'in conversation',
		image: conversation,
		hover: conversationHover,
		url: IN_CONVERSATION,
		mobileImage: conversationMobile
	},
	{
		name: EProjects.NON_PLACES,
		nameToShow: 'non places',
		image: nonPlaces,
		hover: nonPlacesHover,
		url: NON_PLACES,
		mobileImage: nonPlacesMobile
	},
	{
		name: EProjects.ORB,
		nameToShow: 'orb',
		image: orb,
		hover: orbHover,
		url: ORB,
		mobileImage: orbMobile
	},
	{
		name: EProjects.RAVE,
		nameToShow: 'rave',
		image: rave,
		hover: raveHover,
		url: RAVE,
		mobileImage: raveMobile
	},
	{
		name: EProjects.QUEERING_THE_WEB3,
		nameToShow: 'queering the web3',
		image: artifice, // Using placeholder image for now
		hover: artificeHover, // Using placeholder image for now
		url: QUEERING_THE_WEB3,
		mobileImage: artificeMobile // Using placeholder image for now
	},
	{
		name: EProjects.BODY_FRONTIER,
		nameToShow: 'body frontier',
		image: 'media/home/thumbnails/10-home-body-frontier.webp',
		hover: 'media/home/thumbnails/10-home-body-frontier.webp',
		url: '/body-frontier',
		mobileImage: 'media/home/thumbnails/10-home-body-frontier.webp'
	},
	{
		name: EProjects.SUBCONSCIOUS_MEDIA,
		nameToShow: 'subconscious media',
		image: '/media/home/thumbnails/13-home-subconscious-media.webp',
		hover: '/media/home/thumbnails/13-home-subconscious-media.webp',
		url: SUBCONSCIOUS_MEDIA,
		mobileImage: '/media/home/thumbnails/13-home-subconscious-media.webp'
	},
	{
		name: EProjects.PET,
		nameToShow: 'projected emotional technologies',
		image: '/media/pet/project/project-5.webp',
		hover: '/media/pet/project/project-5.webp',
		url: PET,
		mobileImage: '/media/pet/project/project-5.webp'
	},
	{
		name: EProjects.WHATS_ON_YOUR_MIND,
		nameToShow: "what's on your mind",
		image: '/media/home/thumbnails-v2/02-whatsonyourmind-4x.webp',
		hover: '/media/home/thumbnails-v2/02-whatsonyourmind-4x.webp',
		url: WHATS_ON_YOUR_MIND,
		mobileImage: '/media/home/thumbnails-v2/02-whatsonyourmind-4x.webp'
	}
];
