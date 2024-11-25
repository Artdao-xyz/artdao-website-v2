import { EProjects } from '../../constants/enums';

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
