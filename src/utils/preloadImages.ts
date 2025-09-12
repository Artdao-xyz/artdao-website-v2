import { writable } from 'svelte/store';
import { progress } from './store';

export const preloadImages = async (urls: string[][]) => {
	const flatUrls = urls.flat(); // Convertir el array 2D en 1D
	const total = flatUrls.length;
	let loaded = 0;
	let errors = 0;

	// Logging detallado de todos los archivos
	console.log('🚀 Iniciando precarga de imágenes...');
	console.log('📊 Total de archivos a precargar:', total);
	console.log('📁 Archivos a precargar:');
	flatUrls.forEach((url, index) => {
		console.log(`  ${index + 1}. ${url}`);
	});

	const loadPromises = flatUrls.map(async (src, index) => {
		if (src.endsWith('.svg') || src.endsWith('.jpg') || src.endsWith('.png') || src.endsWith('.webp')) {
			return new Promise((resolve) => {
				const img = new Image();
				
				img.onload = async () => {
					loaded++;
					const progressPercent = (loaded / total) * 100;
					progress.set(progressPercent);
					
					console.log(`✅ Imagen cargada (${loaded}/${total}): ${src}`);
					
					if (loaded + errors === total) {
						console.log('🎉 ¡Todas las imágenes han sido precargadas!');
						await startExit();
					}
					resolve(null);
				};
				
				img.onerror = async (error) => {
					errors++;
					const progressPercent = ((loaded + errors) / total) * 100;
					progress.set(progressPercent);
					
					console.log(`❌ Error cargando imagen (${loaded + errors}/${total}): ${src}`);
					
					if (loaded + errors === total) {
						console.log('🎉 ¡Todas las imágenes han sido precargadas!');
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
			
			console.log(`⚠️ Archivo no válido (${loaded}/${total}): ${src}`);
			
			if (loaded + errors === total) {
				console.log('🎉 ¡Todas las imágenes han sido precargadas!');
				await startExit();
			}
			return Promise.resolve(null);
		}
	});

	await Promise.all(loadPromises);
	
	console.log('📈 Resumen de precarga:');
	console.log(`  ✅ Imágenes cargadas: ${loaded}`);
	console.log(`  ❌ Errores: ${errors}`);
	console.log(`  📊 Total procesado: ${loaded + errors}/${total}`);
	
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
