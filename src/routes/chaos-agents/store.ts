import { writable } from 'svelte/store';
import { chaosAgentsNavItems } from '../../data/Projects/ChaosAgents/NavItems';

export const chaosAgentsNavStoreItems = writable(chaosAgentsNavItems); 