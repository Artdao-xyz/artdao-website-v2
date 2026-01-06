import { writable } from 'svelte/store';

export const metaballReady = writable(false);
export const imagesLoaded = writable(false);
export const preloadedImages = writable<string[][] | null>(null);
