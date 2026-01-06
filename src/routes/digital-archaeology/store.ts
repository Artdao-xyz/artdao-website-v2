import { writable } from 'svelte/store';
import { digitalArchaeologyNavItems } from '../../data/Projects/DigitalArchaeology/NavItems';

export const digitalArchaeologyNavStoreItems = writable(digitalArchaeologyNavItems); 