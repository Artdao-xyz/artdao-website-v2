import { writable } from 'svelte/store';
import type { INavBarItem } from '$lib/elements/NavBar/interfaces';
import { oneBodyAThousandWorldsNavItems } from '../../data/Projects/OneBodyAThousandWorlds/NavItems';

// ⚠️ IMPORTANT: Initialize with navItems, NOT empty array
export const oneBodyAThousandWorldsNavStoreItems = writable<INavBarItem[]>(oneBodyAThousandWorldsNavItems);

