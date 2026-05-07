import { writable } from 'svelte/store';
import { accessFrictionNavItems } from '../../data/Projects/AccessFriction/NavItems';

export const accessFrictionNavStoreItems = writable(accessFrictionNavItems);
