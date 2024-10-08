import { writable } from 'svelte/store';
import { ecologiesNavItems } from '../../../data/Projects/EcologiesOfCode/NavItems';

export const ecologiesNavStoreItems = writable(ecologiesNavItems);
