import { writable } from 'svelte/store';
import { everyCreationIsLossNavItems } from '../../data/Projects/EveryCreationIsLoss/NavItems';

export const everyCreationIsLossNavStoreItems = writable(everyCreationIsLossNavItems);

