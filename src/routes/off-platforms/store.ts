import { writable } from 'svelte/store';
import { offPlatformsNavItems } from '../../data/Projects/OffPlatforms/NavItems';

export const offPlatformsNavStoreItems = writable(offPlatformsNavItems);
