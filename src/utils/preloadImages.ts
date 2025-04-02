import { writable } from 'svelte/store';
import { progress } from './store';

export const preloadImages = async (urls: string[][]) => {
	const flatUrls = urls.flat(); // Convertir el array 2D en 1D
	const total = flatUrls.length;
	let loaded = 0;

	const loadPromises = flatUrls.map(async (src) => {
		if (src.endsWith('.svg') || src.endsWith('.jpg') || src.endsWith('.png') || src.endsWith('.webp')) {
			return new Promise((resolve) => {
				const img = new Image();
				img.onload = async () => {
					loaded++;
					progress.set((loaded / total) * 100);
					if (loaded === total) {
						await startExit();
					}
					resolve(null);
				};
				img.src = src;
			});
		}
	});

	await Promise.all(loadPromises);
	return urls; // Mantenemos el return original por compatibilidad
};

export let isExiting = writable(false);
const startExit = async () => {
        isExiting.set(true);
        const ANIMATION_DURATION = 1500;
        return new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION));
};

export default preloadImages;
