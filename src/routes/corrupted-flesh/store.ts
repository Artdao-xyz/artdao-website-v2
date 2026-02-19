import { writable } from 'svelte/store';
import type { INavBarItem } from '$lib/elements/NavBar/interfaces';
import { corruptedFleshNavItems } from '../../data/Projects/CorruptedFlesh/NavItems';

// ⚠️ IMPORTANT: Initialize with navItems, NOT empty array
export const corruptedFleshNavStoreItems = writable<INavBarItem[]>(corruptedFleshNavItems);

