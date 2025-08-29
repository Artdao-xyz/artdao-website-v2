import { writable } from 'svelte/store';

// Store para la referencia del Metaball
export const metaballRef = writable<HTMLDivElement | null>(null);

// Store para el estado de la transición
export const isMetaballTransitioning = writable(false);
