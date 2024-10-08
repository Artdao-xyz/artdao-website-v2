import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const raveNavItems: INavBarItem[] = [
	{
		text: 'About',
		route: 'intro',
		selected: false
	},
	{
		text: 'Artists & Artworks',
		route: 'artists',
		selected: false
	},
	{
		text: 'Event & After Party',
		route: 'event',
		selected: false
	}
];
