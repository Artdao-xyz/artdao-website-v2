import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const orbNavItems: INavBarItem[] = [
	{
		text: 'About',
		route: '',
		selected: false
	},
	{
		text: 'Curators & DAOs',
		route: 'curators',
		selected: false
	},
	{
		text: 'Artworks',
		route: 'artworks',
		selected: false
	},
	{
		text: 'Vernissage',
		route: 'vernissage',
		selected: false
	}
];
