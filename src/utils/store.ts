import { writable } from 'svelte/store';

export const progress = writable(0);
export const scrollProgress = writable({
    container: 0,
    sections: 0,
    progress: 0
});
