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
	DIGITAL_MATTER,
	ECOLOGIES_OF_CODE,
	IN_CONVERSATION,
	INHERENT,
	INTERTWINED,
	NON_PLACES,
	ORB,
	RAVE
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
	}
];

export const projectsDetails = [
	{
		name: EProjects.ARTIFICE,
		nameToShow: 'artifice',
		image: artifice,
		hover: artificeHover,
		url: ARTIFICE
	},
	{
		name: EProjects.DIGITAL_MATTER,
		nameToShow: 'digital matter',
		image: digital,
		hover: digitalHover,
		url: DIGITAL_MATTER
	},
	{
		name: EProjects.ECOLOGIES_OF_CODE,
		nameToShow: 'ecologies of code',
		image: ecologies,
		hover: ecologiesHover,
		url: ECOLOGIES_OF_CODE
	},
	{
		name: EProjects.INHERENT_INSTABILITY,
		nameToShow: 'inherent instability',
		image: inherent,
		hover: inherentHover,
		url: INHERENT
	},
	{
		name: EProjects.INTERTWINED,
		nameToShow: 'intertwined',
		image: intertwined,
		hover: intertwinedHover,
		url: INTERTWINED
	},
	{
		name: EProjects.IN_CONVERSATION,
		nameToShow: 'in conversation',
		image: conversation,
		hover: conversationHover,
		url: IN_CONVERSATION
	},
	{
		name: EProjects.NON_PLACES,
		nameToShow: 'non places',
		image: nonPlaces,
		hover: nonPlacesHover,
		url: NON_PLACES
	},
	{
		name: EProjects.ORB,
		nameToShow: 'orb',
		image: orb,
		hover: orbHover,
		url: ORB
	},
	{
		name: EProjects.RAVE,
		nameToShow: 'rave',
		image: rave,
		hover: raveHover,
		url: RAVE
	}
];
