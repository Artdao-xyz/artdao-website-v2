import { writable } from 'svelte/store';
import { careBotsBrowserBeastsNavItems } from '../../data/Projects/CareBotsBrowserBeasts/NavItems';

export const careBotsBrowserBeastsNavStoreItems = writable(careBotsBrowserBeastsNavItems);

