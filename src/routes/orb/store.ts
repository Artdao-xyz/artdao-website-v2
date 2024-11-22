import { writable } from 'svelte/store';
import { orbNavItems } from '../../data/Projects/Orb/NavItems';

export const orbNavStoreItems = writable(orbNavItems);
