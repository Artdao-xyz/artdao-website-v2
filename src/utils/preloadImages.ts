import { writable } from 'svelte/store';
import { progress } from './store';

export const preloadImages = async (urls: string[][]) => {
	const flatUrls = urls.flat(); // Convertir el array 2D en 1D
	const total = flatUrls.length;
	let loaded = 0;
	let errors = 0;

	const loadPromises = flatUrls.map(async (src, index) => {
		if (src.endsWith('.svg') || src.endsWith('.jpg') || src.endsWith('.png') || src.endsWith('.webp')) {
			return new Promise((resolve) => {
				const img = new Image();
				
				img.onload = async () => {
					loaded++;
					const progressPercent = (loaded / total) * 100;
					progress.set(progressPercent);
					
					if (loaded + errors === total) {
						await startExit();
					}
					resolve(null);
				};
				
				img.onerror = async (error) => {
					errors++;
					const progressPercent = ((loaded + errors) / total) * 100;
					progress.set(progressPercent);
					
					if (loaded + errors === total) {
						await startExit();
					}
					resolve(null);
				};
				
				img.src = src;
			});
		} else {
			// Si no es una imagen válida, contamos como cargada
			loaded++;
			const progressPercent = (loaded / total) * 100;
			progress.set(progressPercent);
			
			if (loaded + errors === total) {
				await startExit();
			}
			return Promise.resolve(null);
		}
	});

	await Promise.all(loadPromises);
	
	return urls; // Mantenemos el return original por compatibilidad
};

export let isExiting = writable(false);
const startExit = async () => {
        isExiting.set(true);
        const ANIMATION_DURATION = 1500;
        
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(undefined);
            }, ANIMATION_DURATION);
        });
};

export default preloadImages;
