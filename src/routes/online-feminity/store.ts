import { writable } from 'svelte/store';
import { onlineFemininityNavItems } from '../../data/Projects/OnlineFemininity/NavItems';

export const onlineFemininityNavStoreItems = writable(onlineFemininityNavItems);

