import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const motherboardNavItems: INavBarItem[] = [
	{
		text: 'The Labor Underneath',
		route: 'labor-underneath',
		selected: false,
		shortText: 'Labor'
	},
	{
		text: 'Wednesday Kim',
		route: 'wednesday-kim',
		selected: false
	},
	{
		text: 'Addie Wagenknecht',
		route: 'addie-wagenknecht',
		selected: false,
		shortText: 'A. Wagenknecht'
	},
	{
		text: 'Q&A',
		route: 'qa',
		selected: false
	}
];
