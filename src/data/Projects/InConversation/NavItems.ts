import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const inConversationNavItems: INavBarItem[] = [
	{
		text: 'About',
		route: 'intro',
		selected: false
	},
	{
		text: 'Interview',
		route: 'interview',
		selected: false
	},
	{
		text: 'Exhibition',
		route: 'exhibition',
		selected: false
	}
];
