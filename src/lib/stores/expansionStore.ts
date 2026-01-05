import { writable } from 'svelte/store';

// Store para manejar el estado de expansión de la grilla
export const expandedProjectIndex = writable<number | null>(null);

// Función helper para toggle de expansión
export function toggleExpansion(projectIndex: number) {
    expandedProjectIndex.update(current => {
        return current === projectIndex ? null : projectIndex;
    });
}

// Función helper para expandir un proyecto específico
export function expandProject(projectIndex: number) {
    expandedProjectIndex.set(projectIndex);
}

// Función helper para contraer todo
export function collapseAll() {
    expandedProjectIndex.set(null);
}
