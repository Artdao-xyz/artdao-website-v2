import { writable } from 'svelte/store';
import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const digitalArchaeologyNavStoreItems = writable<INavBarItem[]>([]); 