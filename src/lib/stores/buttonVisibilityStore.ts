import { writable } from 'svelte/store';

// Store para manejar la visibilidad de los botones "Enter the zine"
export const buttonVisibility = writable<Record<number, boolean>>({});

// Función para actualizar la visibilidad de un botón específico
export function updateButtonVisibility(projectIndex: number, isVisible: boolean) {
    buttonVisibility.update(current => ({
        ...current,
        [projectIndex]: isVisible
    }));
}

// Función para limpiar todos los botones
export function clearAllButtons() {
    buttonVisibility.set({});
}

// Función para obtener si un botón específico debe ser visible
export function isButtonVisible(projectIndex: number): boolean {
    let visible = false;
    buttonVisibility.subscribe(state => {
        visible = state[projectIndex] || false;
    })();
    return visible;
}
