import { writable } from 'svelte/store';
import { memeticRubbleNavItems } from '../../data/Projects/MemeticRubble/NavItems';

export const memeticRubbleNavStoreItems = writable(memeticRubbleNavItems); 