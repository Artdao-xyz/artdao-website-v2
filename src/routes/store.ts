import { writable } from 'svelte/store';

export const alreadyShown = writable(false);

export const preloadedHome = writable<Promise<string[][]>>();
export const preloadedArtifice = writable<Promise<string[][]>>();
export const preloadedDigital = writable<Promise<string[][]>>();
export const preloadedEcologies = writable<Promise<string[][]>>();
export const preloadedConversation = writable<Promise<string[][]>>();
export const preloadedInherent = writable<Promise<string[][]>>();
export const preloadedIntertwined = writable<Promise<string[][]>>();
export const preloadedNonplaces = writable<Promise<string[][]>>();
export const preloadedOrb = writable<Promise<string[][]>>();
export const preloadedRave = writable<Promise<string[][]>>();
export const preloadedMap = writable<Promise<string[][]>>();
export const preloadedEvents = writable<Promise<string[][]>>();
