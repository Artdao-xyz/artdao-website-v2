import { writable } from 'svelte/store';
import { petNavItems } from '../../data/Projects/Pet/NavItems';

export const petNavStoreItems = writable(petNavItems);
export const metaballProgress = writable(0);

