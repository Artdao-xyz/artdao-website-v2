import { writable } from 'svelte/store';
import { noneOfTheseGirlsExistNavItems } from '../../data/Projects/NoneOfTheseGirlsExist/NavItems';

export const noneOfTheseGirlsExistNavStoreItems = writable(noneOfTheseGirlsExistNavItems);
export const metaballProgress = writable(0);
