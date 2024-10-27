import { writable } from 'svelte/store';
import { nonPlacesNavItems } from '../../../data/Projects/NonPlaces/NavItems';

export const nonPlacesNavStoreItems = writable(nonPlacesNavItems);
