import type { INavBarItem } from '$lib/elements/NavBar/interfaces';
import type { Writable } from 'svelte/store';

export const INVIEW_OPTIONS = { rootMargin: '-20%', unobserveOnEnter: false };

export const updateNavBar = (
	storeNavItems: Writable<INavBarItem[]>,
	navItems: INavBarItem[],
	route: string
) => {
	storeNavItems.update(() =>
		navItems.map((item) =>
			item.route === route ? { ...item, selected: true } : { ...item, selected: false }
		)
	);
};
