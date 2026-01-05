import { writable } from 'svelte/store';
import { cafeExeNavItems } from '../../data/Projects/CafeExe/NavItems';

export const cafeExeNavStoreItems = writable(cafeExeNavItems);

