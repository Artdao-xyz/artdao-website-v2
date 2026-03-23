import { writable } from 'svelte/store';
import { digitalHomesteadingNavItems } from '../../data/Projects/DigitalHomesteading/NavItems';

export const digitalHomesteadingNavStoreItems = writable(digitalHomesteadingNavItems);

