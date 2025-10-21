export interface IStudioProject {
	title: string;
	description: string;
	image: string;
	imageHover: string;
	route: string;
	categories: string[];
}

export const studioProjects: IStudioProject[] = [
	{
		title: 'Turtle',
		description: 'Creative direction, graphic, web, UI/UX and marketing assets.',
		image: 'media/studio/Turtle_OFF.png',
		imageHover: 'media/studio/Turtle_ON.png',
		route: '/studio/turtle',
		categories: ['UX/UI', 'Web']
	},
	{
		title: 'Fuel',
		description: 'Creative direction, graphic, web, UI/UX and marketing assets.',
		image: 'media/studio/FUEL_OFF.png',
		imageHover: 'media/studio/FUEL_ON.png',
		route: '/studio/fuel',
		categories: ['R&D', 'UX/UI', 'Web']
	},
	{
		title: 'Mardeformas',
		description: 'Creative direction, graphic, web, UI/UX and marketing assets.',
		image: 'media/studio/Mardeformas_OFF.png',
		imageHover: 'media/studio/Mardeformas_ON.png',
		route: '/studio/mardeformas',
		categories: ['Web', '3D', 'Art']
	},
	{
		title: 'Hyperescapismo',
		description: 'Creative direction, graphic, web, UI/UX and marketing assets.',
		image: 'media/studio/Hyperescapismo_OFF.png',
		imageHover: 'media/studio/Hyperescapismo_ON.png',
		route: '/studio/hiperescapismo',
		categories: ['R&D', '3D', 'Web', 'Art']
	},
	{
		title: 'Chimerica',
		description: 'Creative direction, graphic, web, UI/UX and marketing assets.',
		image: 'media/studio/Chimerica_OFF.png',
		imageHover: 'media/studio/Chimerica_ON.png',
		route: '/studio/chimerica',
		categories: ['R&D', '3D', 'Art']
	},
	// {
	// 	title: 'Fae',
		// description: 'Creative direction, graphic, web, UI/UX and marketing assets.',
	// 	image: 'https://picsum.photos/400/300?random=3',
	// 	route: '/studio/fae',
	// 	categories: ['R&D', 'UX/UI', 'Web', 'Art']
	// }
];
