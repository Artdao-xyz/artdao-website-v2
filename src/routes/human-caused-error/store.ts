import { writable } from 'svelte/store';
import { humanCausedErrorNavItems } from '../../data/Projects/HumanCausedError/NavItems';

export const humanCausedErrorNavStoreItems = writable(humanCausedErrorNavItems);
