import { writable } from 'svelte/store';
import { inConversationNavItems } from '../../../data/Projects/InConversation/NavItems';

export const inConversationNavStoreItems = writable(inConversationNavItems);
