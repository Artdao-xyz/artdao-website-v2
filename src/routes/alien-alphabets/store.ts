import { writable } from 'svelte/store';
import { alienAlphabetsNavItems } from '../../data/Projects/AlienAlphabets/NavItems';

export const alienAlphabetsNavStoreItems = writable(alienAlphabetsNavItems);
export const metaballProgress = writable(0);
