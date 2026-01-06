import { writable } from 'svelte/store';

// Store para los filtros activos
export const activeFilters = writable<string[]>([]);

// Store para el proyecto en hover persistente
export const hoveredProject = writable<string | null>(null);

// Función para limpiar todos los stores
export function clearAllStudioStores() {
	activeFilters.set([]);
	hoveredProject.set(null);
}
