import { writable } from 'svelte/store';
import { newNatureNavItems } from '../../data/Projects/NewNature/NavItems';

export const newNatureNavStoreItems = writable(newNatureNavItems);
export const metaballProgress = writable(0);
