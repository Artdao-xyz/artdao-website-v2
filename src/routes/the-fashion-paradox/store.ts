import { writable } from 'svelte/store';
import { theFashionParadoxNavItems } from '../../data/Projects/TheFashionParadox/NavItems';

export const theFashionParadoxNavStoreItems = writable(theFashionParadoxNavItems);
export const metaballProgress = writable(0);

