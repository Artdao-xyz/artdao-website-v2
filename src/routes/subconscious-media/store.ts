import { writable } from 'svelte/store';
import { subconsciousMediaNavItems } from '../../data/Projects/SubconsciousMedia/NavItems';

export const subconsciousMediaNavStoreItems = writable(subconsciousMediaNavItems); 