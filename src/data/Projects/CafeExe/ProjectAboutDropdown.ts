import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

// Alice Bucknell images
const aliceImages = [
	'/media/cafe-exe/alicebucknell/alicebucknell-01-2x.webp',
	'/media/cafe-exe/alicebucknell/alicebucknell-02-2x.webp',
	'/media/cafe-exe/alicebucknell/alicebucknell-03-2x.webp',
	'/media/cafe-exe/alicebucknell/alicebucknell-04-2x.webp'
];

// Frenetik Void images
const frenetikImages = [
	'/media/cafe-exe/frenetikvoid/frenetikvoid-01-2x.webp',
	'/media/cafe-exe/frenetikvoid/frenetikvoid-02-2x.webp',
	'/media/cafe-exe/frenetikvoid/frenetikvoid-03-2x.webp',
	'/media/cafe-exe/frenetikvoid/frenetikvoid-04-2x.webp',
	'/media/cafe-exe/frenetikvoid/frenetikvoid-05-2x.webp'
];

// Kevin Peter He images
const kevinImages = [
	'/media/cafe-exe/kevinpeterhe/kevinpeterhe-01-2x.webp',
	'/media/cafe-exe/kevinpeterhe/kevinpeterhe-02-2x.webp',
	'/media/cafe-exe/kevinpeterhe/kevinpeterhe-03-2x.webp',
	'/media/cafe-exe/kevinpeterhe/kevinpeterhe-04-2x.webp'
];

// Kim images
const kimImages = [
	'/media/cafe-exe/kim/kim-01-2x.webp',
	'/media/cafe-exe/kim/kim-02-2x.webp',
	'/media/cafe-exe/kim/kim-03-2x.webp',
	'/media/cafe-exe/kim/kim-04-2x.webp'
];

// Theo images
const theoImages = [
	'/media/cafe-exe/theo/theo-01-2x.webp',
	'/media/cafe-exe/theo/theo-02-2x.webp',
	'/media/cafe-exe/theo/theo-03-2x.webp',
	'/media/cafe-exe/theo/theo-04-2x.webp'
];

// Wendi Yan images
const wendiImages = [
	'/media/cafe-exe/wendiyan/wendiyan-01-2x.webp',
	'/media/cafe-exe/wendiyan/wendiyan-02-2x.webp',
	'/media/cafe-exe/wendiyan/wendiyan-03-2x.webp',
	'/media/cafe-exe/wendiyan/wendiyan-04-2x.webp'
];

// Yuehao images
const yuehaoImages = [
	'/media/cafe-exe/yuehao/yuehao-01-2x.webp',
	'/media/cafe-exe/yuehao/yuehao-02-2x.webp',
	'/media/cafe-exe/yuehao/yuehao-03-2x.webp',
	'/media/cafe-exe/yuehao/yuehao-04-2x.webp'
];

// Dropdown items for each artist - separate arrays
export const aliceBucknellDropdownItems: IAboutDropdown[] = [
	{
		name: 'Earth Engine',
		artist: 'Alice Bucknell',
		image: aliceImages[0],
		about: 'Earth Engine is a video game exploring planetary play. Its principle mechanic is a refusal of the Player-vs-Environment (PVE) and Player-vs-Player (PVP) power hierarchies typical of gaming. Instead, Earth Engine proposes EAP, or Earth-as-Player. In Earth Engine, the planet is main player, and the human is more like an NPC.\n\nInspired by the legacy of walking simulators, a type of video game where the agency of the player comes second to the world that they inhabit, Earth Engine uses real-time climate data and GIS integration to spawn a "digital Earth" every time it is played.'
	},
	{
		name: 'Earth Engine',
		artist: 'Alice Bucknell',
		image: aliceImages[1]
	},
	{
		name: 'Earth Engine',
		artist: 'Alice Bucknell',
		image: aliceImages[2]
	},
	{
		name: 'Earth Engine',
		artist: 'Alice Bucknell',
		image: aliceImages[3]
	}
];

export const frenetikVoidDropdownItems: IAboutDropdown[] = [
	{
		name: 'Sereno de mi Mente',
		artist: 'Frenetik Void',
		image: frenetikImages[0],
		about: 'The game plays out like a classic treasure hunt. Through a first-person perspective, the player navigates a gated community, exploring scenes and objects drawn from the artist\'s life—like a personal museum. Clues and puzzles guide the way, with the ultimate goal being to escape. But the true essence of the game lies in the journey itself. Through audio recordings, childhood objects, and surreal scenes, Frenetik Void offers a deeply cinematic glimpse into his subconscious. As the player moves forward, they gradually piece together an encrypted self-portrait—nostalgic, intimate, and slighty unsettling.'
	},
	{
		name: 'Sereno de mi Mente',
		artist: 'Frenetik Void',
		image: frenetikImages[1]
	},
	{
		name: 'Sereno de mi Mente',
		artist: 'Frenetik Void',
		image: frenetikImages[2]
	},
	{
		name: 'Sereno de mi Mente',
		artist: 'Frenetik Void',
		image: frenetikImages[3]
	},
	{
		name: 'Sereno de mi Mente',
		artist: 'Frenetik Void',
		image: frenetikImages[4]
	}
];

export const kevinPeterHeDropdownItems: IAboutDropdown[] = [
	{
		name: 'Passage',
		artist: 'Kevin Peter He',
		image: kevinImages[0],
		about: 'Passage is an evolving speculative project that explores the entanglement between ecology and synthetic infrastructure. Spanning live cinema performance, sculptural installation, and fragrance, it invites audiences into a world where organic life and machine systems grow inseparably.'
	},
	{
		name: 'Passage',
		artist: 'Kevin Peter He',
		image: kevinImages[1]
	},
	{
		name: 'Passage',
		artist: 'Kevin Peter He',
		image: kevinImages[2]
	},
	{
		name: 'Passage',
		artist: 'Kevin Peter He',
		image: kevinImages[3]
	}
];

export const kimLaughtonDropdownItems: IAboutDropdown[] = [
	{
		name: 'Defective Holiday',
		artist: 'Kim Laughton',
		image: kimImages[0],
		about: 'Defective Holiday is a surreal exploration game that unfolds like a fragmented vacation dream. Set within glitching resorts, synthetic beaches, and looping landscapes, the game presents a world both idyllic and unsettling. Players wander through these uncanny environments without clear objectives, encountering shifting architectures and digital detritus that evoke the aesthetics of simulation gone awry. At once playful and disorienting, Defective Holiday destabilizes the conventions of leisure and travel, offering instead a meditation on escape, repetition, and the fragile pleasures of digital worlds.'
	},
	{
		name: 'Defective Holiday',
		artist: 'Kim Laughton',
		image: kimImages[1]
	},
	{
		name: 'Defective Holiday',
		artist: 'Kim Laughton',
		image: kimImages[2]
	},
	{
		name: 'Defective Holiday',
		artist: 'Kim Laughton',
		image: kimImages[3]
	}
];

export const theoTriantafyllidisDropdownItems: IAboutDropdown[] = [
	{
		name: 'Feral Metaverse',
		artist: 'Theo Triantafyllidis',
		image: theoImages[0],
		about: 'Feral Metaverse is an experimental multiplayer game that immerses players in a silent, dystopian world where survival depends on cooperation and kindness. Created by renowned digital artist Theo Triantafyllidis, the game transforms up to 100 players into primal beings who must work together to unlock dramatic world transformations—all without traditional communication methods.\n\nThe game represents a bold evolution in multiplayer design, replacing voice chat and text with physical actions and environmental storytelling. Players gallop, climb, and rampage through physics-driven landscapes, working together to discover and unlock the secrets of a constantly shifting world. Run on all fours across the desolate landscape, ride fellow players like mounts, and collaborate to operate ancient machinery. Every gesture matters in this wordless environment where primal screams become your voice.'
	},
	{
		name: 'Feral Metaverse',
		artist: 'Theo Triantafyllidis',
		image: theoImages[1]
	},
	{
		name: 'Feral Metaverse',
		artist: 'Theo Triantafyllidis',
		image: theoImages[2]
	},
	{
		name: 'Feral Metaverse',
		artist: 'Theo Triantafyllidis',
		image: theoImages[3]
	}
];

export const wendiYanDropdownItems: IAboutDropdown[] = [
	{
		name: 'Inner Carbon',
		artist: 'Wendi Yan',
		image: wendiImages[0],
		about: 'The Inner Carbon Classic (ICC) is a series of 3D games that explore the alignment of human breath with the planetary circulation of carbon. Inspired by the Daoist Inner Alchemy "Chart of the Inner Landscape," ICC presents a rite of passage within an alternative science-fiction universe. Through a series of simulated somatic tunings via the game controller, the player-adept—embodied as a bundle of Daoist qi—enters into a dynamic exchange of energy with a metaphysical landscape rendered from the human body\'s inner rhythms. Using system worldbuilding and philosophical mechanics derived from Daoist cosmotechnics, ICC stages a porous self, situated between the human and the planetary, the material and the spiritual.'
	},
	{
		name: 'Inner Carbon',
		artist: 'Wendi Yan',
		image: wendiImages[1]
	},
	{
		name: 'Inner Carbon',
		artist: 'Wendi Yan',
		image: wendiImages[2]
	},
	{
		name: 'Inner Carbon',
		artist: 'Wendi Yan',
		image: wendiImages[3]
	}
];

export const yuehaoJiangDropdownItems: IAboutDropdown[] = [
	{
		name: 'Spider Lily',
		artist: 'Yuehao Jiang',
		image: yuehaoImages[0],
		about: 'Spider Lily is a cinematic platformer game that explores emotional attachment through the language of play. The player inhabits the perspective of the Lost Soul, a twelve-year-old girl who awakens on the desolate shores of purgatory with no memory of her past life. She encounters a blind fish whose eyes have been taken by ravens. The girl and the fish form a faithful bond that becomes the emotional and mechanical heart of the game. What begins as a narrative of rescue becomes an allegory of letting go.\n\nSpider Lily is produced by Falsework, a studio based in Los Angeles founded by Yuehao Jiang and Matthew J.X. Doyle.'
	},
	{
		name: 'Spider Lily',
		artist: 'Yuehao Jiang',
		image: yuehaoImages[1]
	},
	{
		name: 'Spider Lily',
		artist: 'Yuehao Jiang',
		image: yuehaoImages[2]
	},
	{
		name: 'Spider Lily',
		artist: 'Yuehao Jiang',
		image: yuehaoImages[3]
	}
];

