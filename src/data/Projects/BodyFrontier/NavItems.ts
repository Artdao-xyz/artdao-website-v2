import type { INavBarItem as INavBarItemType } from '$lib/elements/NavBar/interfaces';

export type INavBarItem = INavBarItemType;

export const bodyFrontierNavItems: INavBarItem[] = [
	{ text: 'About', route: 'intro', selected: false },
	{ text: 'AI and 3D', route: 'ai-3d', selected: false },
	{ text: 'Fashion', route: 'fashion', selected: false }
]; 