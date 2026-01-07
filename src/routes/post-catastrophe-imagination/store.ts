import { writable } from 'svelte/store';
import { postCatastropheImaginationNavItems } from '../../data/Projects/PostCatastropheImagination/NavItems';

export const postCatastropheImaginationNavStoreItems = writable(postCatastropheImaginationNavItems);
export const metaballProgress = writable(0);

