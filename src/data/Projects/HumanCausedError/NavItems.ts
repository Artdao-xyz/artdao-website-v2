import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const humanCausedErrorNavItems: INavBarItem[] = [
	{
		text: 'Friction',
		route: 'friction',
		selected: false
	},
	{
		text: 'Marco Donnarumma',
		route: 'marco-donnarumma',
		selected: false,
		shortText: 'M. Donnarumma'
	},
	{
		text: 'Mónica Rikić',
		route: 'monica-rikic',
		selected: false,
		shortText: 'M. Rikić'
	},
	{
		text: 'Q&A',
		route: 'qa',
		selected: false
	}
];
