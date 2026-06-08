import { writable } from 'svelte/store';
import { portalHighwayNavItems } from '../../data/Projects/PortalHighway/NavItems';

export const portalHighwayNavStoreItems = writable(portalHighwayNavItems);
