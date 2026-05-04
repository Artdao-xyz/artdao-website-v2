import { writable } from 'svelte/store';
import { contactZonesNavItems } from '../../data/Projects/ContactZones/NavItems';

export const contactZonesNavStoreItems = writable(contactZonesNavItems);
