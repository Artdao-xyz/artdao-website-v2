export interface IStudioProject {
	title: string;
	description: string;
	image: string;
	imageHover: string;
	route: string;
	link?: string | null;
	year?: string;
	categories: string[];
}

export const studioProjects: IStudioProject[] = [
	{
		title: 'Turtle',
		description: 'A contemporary fashion brand developing the nascent possibilities between environmental scans, digital modelling and 3d printing as wearable forms of art.',
		year: '2024 - Present',
		image: 'media/studio/Turtle_OFF.png',
		imageHover: 'media/studio/Turtle_ON.png',
		route: '/studio/turtle',
		link: 'https://turtle.xyz',
		categories: ['UX/UI', 'Web']
	},
	{
		title: 'Fuel',
		description: 'Exploring affective systems for the communication and world building of an advanced UTXO based blockchain and virtual machine.',
		year: '2025',
		image: 'media/studio/FUEL_OFF.png',
		imageHover: 'media/studio/FUEL_ON.png',
		route: '/studio/fuel',
		categories: ['R&D', 'UX/UI', 'Web']
	},
	{
		title: 'Mardeformas',
		description: 'A contemporary fashion brand developing the nascent possibilities between environmental scans, digital modelling and 3d printing as wearable forms of art.',
		year: '2025',
		image: 'media/studio/Mardeformas_OFF.png',
		imageHover: 'media/studio/Mardeformas_ON.png',
		route: '/studio/mardeformas',
		link: 'https://shop.mardeformas.com',
		categories: ['Web', '3D', 'Art']
	},
	{
		title: 'Hyperescapismo',
		description: 'Investigating the possibilites of three.js based worlds as multidimensional spaces through which to create ephemeral digital experiences that prioritise the exploration of information against the immediacy of display.',
		year: '2024',
		image: 'media/studio/Hyperescapismo_OFF.png',
		imageHover: 'media/studio/Hyperescapismo_ON.png',
		route: '/studio/hiperescapismo',
		link: null,
		categories: ['R&D', '3D', 'Web', 'Art']
	},
	{
		title: 'Chimerica',
		description: 'Creative direction, graphic, web, UI/UX and marketing assets.',
		image: 'media/studio/Chimerica_OFF.png',
		imageHover: 'media/studio/Chimerica_ON.png',
		route: '/studio/chimerica',
		year: '2024',
		link: null,
		categories: ['R&D', '3D', 'Art']
	},
	{
		title: 'Future Art Ecosystems',
		description: 'A project of Serpentine Galleries London, FAE builds 21st century cultural infrastructure to support art and advanced technologies for the public good.',
		year: '2025 - Present',
		image: 'media/studio/FAE_OFF.png',
		imageHover: 'media/studio/FAE_ON.png',
		route: '/studio/fae',
		link: undefined,
		categories: ['R&D', 'UX/UI', 'Web', 'Art']
	}
];
