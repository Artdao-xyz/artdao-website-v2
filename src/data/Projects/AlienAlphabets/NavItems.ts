import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const alienAlphabetsNavItems: INavBarItem[] = [
	{
		text: 'Intro',
		route: 'intro',
		selected: false
	},
	{
		text: 'The Edge of the Archive',
		route: 'edge-of-the-archive',
		selected: false,
		shortText: 'The Archive'
	},
	{
		text: 'Alice Bucknell',
		route: 'alice-bucknell',
		selected: false
	},
	{
		text: 'Kyle McDonald',
		route: 'kyle-mcdonald',
		selected: false
	}
];
