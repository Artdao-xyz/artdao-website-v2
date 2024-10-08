import { writable } from 'svelte/store';
import { raveNavItems } from '../../../data/Projects/Rave/NavItems';

export const raveNavStoreItems = writable(raveNavItems);
