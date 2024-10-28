import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const orbNavItems: INavBarItem[] = [
	{
		text: 'About',
		route: 'intro',
		selected: false
	},
	{
		text: 'Curators & DAOs',
		route: 'curators',
		selected: false
	},
	{
		text: 'Vernisagge',
		route: 'vernisagge',
		selected: false
	},
	{
		text: 'Artworks',
		route: 'artworks',
		selected: false
	}
];
