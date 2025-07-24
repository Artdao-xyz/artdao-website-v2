import type { INavBarItem as INavBarItemType } from '$lib/elements/NavBar/interfaces';

export type INavBarItem = INavBarItemType;

export const subconsciousMediaNavItems: INavBarItem[] = [
	{ text: 'Intro', route: 'intro', selected: false },
	{ text: 'Vidal Herrera', route: 'vidal-herrera', selected: false },
	{ text: 'Gregorio Nash', route: 'gregorio-nash', selected: false }
]; 