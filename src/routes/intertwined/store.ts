import { writable } from 'svelte/store';
import { intertwinedNavItems } from '../../data/Projects/Intertwined/NavItems';

export const intertwinedNavStoreItems = writable(intertwinedNavItems);
