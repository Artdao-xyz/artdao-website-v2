import { writable } from 'svelte/store';
import type { INavBarItem } from '../../data/Projects/BodyFrontier/NavItems';
 
export const bodyFrontierNavStoreItems = writable<INavBarItem[]>([]); 