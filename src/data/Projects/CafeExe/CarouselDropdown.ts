import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

// Carousel images
export const carouselImages = [
	'/media/cafe-exe/cafe-exe-carusel/carusel-1.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-2.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-3.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-4.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-5.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-6.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-7.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-8.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-9.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-10.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-11.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-12.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-13.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-14.webp',
	'/media/cafe-exe/cafe-exe-carusel/carusel-15.webp'
];

// Dropdown items for carousel
export const carouselDropdownItems: IAboutDropdown[] = carouselImages.map((image, index) => ({
	name: 'Café Exe',
	image: image
}));

