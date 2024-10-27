import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const nonPlacesNavItems: INavBarItem[] = [
	{
		text: 'About',
		route: 'intro',
		selected: false
	},
	{
		text: 'The Venue',
		route: 'venue',
		selected: false
	},
	{
		text: 'Artworks',
		route: 'artworks',
		selected: false
	},
	{
		text: 'Vernisagge',
		route: 'vernisagge',
		selected: false
	}
];
