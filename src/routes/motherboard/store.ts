import { writable } from 'svelte/store';
import { motherboardNavItems } from '../../data/Projects/Motherboard/NavItems';

export const motherboardNavStoreItems = writable(motherboardNavItems);
