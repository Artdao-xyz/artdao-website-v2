import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

export const newNatureGrid1Images = [
	'/media/new-nature/artwork-grid/1.webp',
	'/media/new-nature/artwork-grid/2.webp',
	'/media/new-nature/artwork-grid/3.webp',
	'/media/new-nature/artwork-grid/4.webp',
	'/media/new-nature/artwork-grid/5.webp'
];

export const newNatureGrid1DropdownItems: IAboutDropdown[] = newNatureGrid1Images.map((image, i) => ({
	name: `Selected work ${i + 1}`,
	image
}));

export const newNatureGrid2Images = [
	'/media/new-nature/artwork-grid-2/1.webp',
	'/media/new-nature/artwork-grid-2/2.webp',
	'/media/new-nature/artwork-grid-2/3.webp',
	'/media/new-nature/artwork-grid-2/4.webp',
	'/media/new-nature/artwork-grid-2/5.webp',
	'/media/new-nature/artwork-grid-2/6.webp'
];

export const newNatureGrid2DropdownItems: IAboutDropdown[] = newNatureGrid2Images.map((image, i) => ({
	name: `Selected work ${i + 1}`,
	image
}));
