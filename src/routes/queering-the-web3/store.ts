import { writable } from 'svelte/store';
import { queeringTheWeb3NavItems } from '../../data/Projects/QueeringTheWeb3/NavItems';

export const queeringTheWeb3NavStoreItems = writable(queeringTheWeb3NavItems); 