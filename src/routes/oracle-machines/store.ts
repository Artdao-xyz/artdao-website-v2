import { writable } from 'svelte/store';
import { oracleMachinesNavItems } from '../../data/Projects/OracleMachines/NavItems';

export const oracleMachinesNavStoreItems = writable(oracleMachinesNavItems);
