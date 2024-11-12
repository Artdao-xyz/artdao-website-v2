import { progress } from './store';

let images = [];

export const preloadImages = async (urls: string[][]): Promise<string[][]> => {
	let loadedAssets = 0;

	const getImagesArray = async () => {
		const mappedImages = [];

		for (const imageArray of urls) {
			const promises = imageArray.map(
				(url) =>
					new Promise((resolve, reject) => {
						const img = new Image();
						img.src = url;
						img.onload = () => {
							resolve(img.src);
						};
						img.onerror = reject;
					})
			);

			images = (await Promise.all(promises)) as string[];

			mappedImages.push(images);
			loadedAssets++;
			progress.set((loadedAssets / urls.length) * 100);
		}

		return mappedImages;
	};

	return getImagesArray();
};

export default preloadImages;
