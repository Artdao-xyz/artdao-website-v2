import type { INavBarItem as INavBarItemType } from '$lib/elements/NavBar/interfaces';

export type INavBarItem = INavBarItemType;

export const memeticRubbleNavItems: INavBarItem[] = [
	{ text: 'Intro', route: 'intro', selected: false },
	{ text: 'Femzor', route: 'femzor', selected: false },
	{ text: 'Julian Brangold', route: 'julian-brangold', selected: false }
]; 