import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const raveNavItems: INavBarItem[] = [
	{
		text: 'About',
		route: 'intro',
		selected: false
	},
	{
		text: 'Digital Rave',
		route: 'digital-rave',
		selected: false
	},
	{
		text: 'Artworks',
		route: 'artworks',
		selected: false
	}
];
