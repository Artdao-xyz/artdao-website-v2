import { writable } from 'svelte/store';
import { weLikeBeingDataNavItems } from '../../data/Projects/WeLikeBeingData/NavItems';

export const weLikeBeingDataNavStoreItems = writable(weLikeBeingDataNavItems);
