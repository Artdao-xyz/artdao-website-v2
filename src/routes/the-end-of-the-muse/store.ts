import { writable } from 'svelte/store';
import { theEndOfTheMuseNavItems } from '../../data/Projects/TheEndOfTheMuse/NavItems';

export const theEndOfTheMuseNavStoreItems = writable(theEndOfTheMuseNavItems);
export const metaballProgress = writable(0);

