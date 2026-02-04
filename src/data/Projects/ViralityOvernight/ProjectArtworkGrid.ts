import type { IGalleryImageMobile } from '$lib/elements/ArtworkContainer/interfaces';

export const ViralityOvernightArtworkGrid = {
	title: "Artworks",
	description: "A collection of artworks from Virality Overnight.",
	artworks: [
		{
			id: "artwork1",
			name: "Old Woman",
			description: "",
			image: "/media/virality-overnight/artwork-grid/artwork-grid-1.webp",
			alt: "Old Woman"
		},
		{
			id: "artwork2",
			name: "ASTRONAUT",
			description: "",
			image: "/media/virality-overnight/artwork-grid/artwork-grid-2.webp",
			alt: "ASTRONAUT"
		},
		{
			id: "artwork3",
			name: "Shrek",
			description: "",
			image: "/media/virality-overnight/artwork-grid/artwork-grid-3.webp",
			alt: "Shrek"
		},
		{
			id: "artwork4",
			name: "Self Portrait",
			description: "",
			image: "/media/virality-overnight/artwork-grid/artwork-grid-4.webp",
			alt: "Self Portrait"
		},
		{
			id: "artwork5",
			name: "DIRT BIKE",
			description: "",
			image: "/media/virality-overnight/artwork-grid/artwork-grid-5.webp",
			alt: "DIRT BIKE"
		},
		{
			id: "artwork6",
			name: "SNOOPY",
			description: "",
			image: "/media/virality-overnight/artwork-grid/artwork-grid-6.webp",
			alt: "SNOOPY"
		},
		{
			id: "artwork7",
			name: "FERRARI",
			description: "",
			image: "/media/virality-overnight/artwork-grid/artwork-grid-7.webp",
			alt: "FERRARI"
		},
		{
			id: "artwork8",
			name: "MONEY",
			description: "",
			image: "/media/virality-overnight/artwork-grid/artwork-grid-8.webp",
			alt: "MONEY"
		}
	]
};

// Mobile artwork arrays - split evenly between left and right columns
export const viralityOvernightArtworkGridMobileLeft: IGalleryImageMobile[] = [
	{
		src: '/media/virality-overnight/artwork-grid/artwork-grid-1.webp',
		alt: 'Old Woman',
		name: 'Old Woman',
		description: ''
	},
	{
		src: '/media/virality-overnight/artwork-grid/artwork-grid-3.webp',
		alt: 'Shrek',
		name: 'Shrek',
		description: ''
	},
	{
		src: '/media/virality-overnight/artwork-grid/artwork-grid-5.webp',
		alt: 'DIRT BIKE',
		name: 'DIRT BIKE',
		description: ''
	},
	{
		src: '/media/virality-overnight/artwork-grid/artwork-grid-7.webp',
		alt: 'FERRARI',
		name: 'FERRARI',
		description: ''
	}
];

export const viralityOvernightArtworkGridMobileRight: IGalleryImageMobile[] = [
	{
		src: '/media/virality-overnight/artwork-grid/artwork-grid-2.webp',
		alt: 'ASTRONAUT',
		name: 'ASTRONAUT',
		description: ''
	},
	{
		src: '/media/virality-overnight/artwork-grid/artwork-grid-4.webp',
		alt: 'Self Portrait',
		name: 'Self Portrait',
		description: ''
	},
	{
		src: '/media/virality-overnight/artwork-grid/artwork-grid-6.webp',
		alt: 'SNOOPY',
		name: 'SNOOPY',
		description: ''
	},
	{
		src: '/media/virality-overnight/artwork-grid/artwork-grid-8.webp',
		alt: 'MONEY',
		name: 'MONEY',
		description: ''
	}
];
