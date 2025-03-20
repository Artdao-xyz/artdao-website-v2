import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const artificeNavItems: INavBarItem[] = [
	{
		text: 'About',
		route: 'intro',
		selected: false
	},
	{
		text: 'Psipsikoko?!',
		route: 'koko',
		selected: false
	},
	{
		text: 'Panels',
		route: 'panels',
		selected: false
	},
	{
		text: 'Artifice Videos',
		route: 'videos',
		selected: false
	}
];
