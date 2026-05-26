import { writable } from 'svelte/store';
import { syntheticSensesNavItems } from '../../data/Projects/SyntheticSenses/NavItems';

export const syntheticSensesNavStoreItems = writable(syntheticSensesNavItems);
