import parsaAboutDropdownTwo from '$lib/assets/images/projects/digitalMatter/Crucifixtion.webp';
import parsaAboutDropdownOne from '$lib/assets/images/projects/digitalMatter/Crucifixtion_blender.webp';
import marcusAboutDropdownTwo from '$lib/assets/images/projects/digitalMatter/caballo.webp';
import marcusAboutDropdownFour from '$lib/assets/images/projects/digitalMatter/cocodrilo.webp';
import marcusAboutDropdownThree from '$lib/assets/images/projects/digitalMatter/cuervos.webp';
import marcusAboutDropdownOne from '$lib/assets/images/projects/digitalMatter/perro.webp';
import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

export const marcusDropdownItems: IAboutDropdown[] = [
	{
		name: 'perro',
		artist: 'marcus',
		image: marcusAboutDropdownOne
	},
	{
		name: 'caballo',
		artist: 'marcus',
		image: marcusAboutDropdownTwo
	},
	{
		name: 'cuervos',
		artist: 'marcus',
		image: marcusAboutDropdownThree
	},
	{
		name: 'cocodrilo',
		artist: 'marcus',
		image: marcusAboutDropdownFour
	}
];

export const parsaDropdownItems: IAboutDropdown[] = [
	{
		name: 'Wip',
		artist: 'parsa',
		about:
			'Forming a new kinship as Clown Boy became a tool to digest the darkness of the world and allow the artist to delve deeper into his own fears. ',
		image: parsaAboutDropdownOne
	},
	{
		name: 'Crucifixtion',
		artist: 'parsa',
		about:
			'“Clown Boy is one of the most evil things that I can create. Each painting is a new adventure, almost like a comic book.”',
		image: parsaAboutDropdownTwo
	}
];
