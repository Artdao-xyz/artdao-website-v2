import { writable } from 'svelte/store';
import { viralityOvernightNavItems } from '../../data/Projects/ViralityOvernight/NavItems';

export const viralityOvernightNavStoreItems = writable(viralityOvernightNavItems);

