import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

export const petDropdownImages = [
	'/media/pet/project/project-1.webp',
	'/media/pet/project/project-2.webp',
	'/media/pet/project/project-3.webp',
	'/media/pet/project/project-4.webp',
	'/media/pet/project/project-5.webp'
];

export const petDropdownItems: IAboutDropdown[] = [
	{
		name: 'Harmony Diagnostics',
		location: 'Telematic Media Arts, SF',
		about:
			'Performance documentation where Byström scripts corporate icebreakers for Harmony, exposing how “helpful” AI tone policing maps to feminized care work.',
		image: petDropdownImages[0]
	},
	{
		name: 'Projected Prototypes',
		location: 'Studio Notes',
		about:
			'Process stills of outfits tailored for silicone seams, built to erase the border between performer and asset while keeping the labor visible.',
		image: petDropdownImages[1]
	},
	{
		name: 'Deepfake Batch #17',
		location: 'OnlyFans release files',
		about:
			'Rasterized composites from In The Clouds, where self-authored nudes circulate as proof that authenticity is contractual, not aesthetic.',
		image: petDropdownImages[2]
	},
	{
		name: 'Breadless Companions',
		location: 'Video installation still',
		about:
			'Five silent faces loop asynchronous responses to male-voiced chatlogs, collapsing empathy scripts into a single stare.',
		image: petDropdownImages[3]
	},
	{
		name: 'Quiet Logistics',
		location: 'Shipping manifest detail',
		about:
			'A reminder that every emotional technology ships with financing plans, maintenance schedules, and the exhaustion that prompted its purchase.',
		image: petDropdownImages[4]
	}
];

