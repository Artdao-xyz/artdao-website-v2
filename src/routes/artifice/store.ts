import { writable } from 'svelte/store';
import { artificeNavItems } from '../../data/Projects/Artifice/NavItems';

export const artificeNavStoreItems = writable(artificeNavItems);
