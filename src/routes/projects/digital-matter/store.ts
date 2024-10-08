import { writable } from 'svelte/store';
import { digitalMatterNavItems } from '../../../data/Projects/DigitalMatter/NavItems';

export const digitalMatterNavStoreItems = writable(digitalMatterNavItems);
