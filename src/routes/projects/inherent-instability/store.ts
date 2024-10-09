import { writable } from 'svelte/store';
import { inherentInstabilityNavItems } from '../../../data/Projects/InherentInstability/NavItems';

export const inherentInstabilityNavStoreItems = writable(inherentInstabilityNavItems);
