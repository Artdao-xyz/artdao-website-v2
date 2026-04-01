import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const newNatureNavItems: INavBarItem[] = [
	{
		text: 'Intro',
		route: 'intro',
		selected: false
	},
	{
		text: 'Mark Dorf',
		route: 'mark-dorf',
		selected: false
	},
	{
		text: 'a new nature',
		route: 'new-nature',
		selected: false
	},
	{
		text: 'Sara Ludy',
		route: 'sara-ludy',
		selected: false
	},
	{
		text: 'Conversation',
		route: 'chat-interview',
		selected: false,
		shortText: 'Chat'
	},
	{
		text: 'natural technologies',
		route: 'natural-technologies',
		selected: false,
		shortText: 'Natural tech'
	}
];
