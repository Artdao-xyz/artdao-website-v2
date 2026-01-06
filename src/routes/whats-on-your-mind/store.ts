import { writable } from 'svelte/store';
import { whatsOnYourMindNavItems } from '../../data/Projects/WhatsOnYourMind/NavItems';

export const whatsOnYourMindNavStoreItems = writable(whatsOnYourMindNavItems);
export const metaballProgress = writable(0);

