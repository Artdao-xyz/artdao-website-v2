import { writable } from 'svelte/store';
import type { INavBarItem } from '$lib/elements/NavBar/interfaces';

export const queeringTheWeb3NavStoreItems = writable<INavBarItem[]>([]); 