import parsaAboutDropdownTwo from '$lib/assets/images/projects/digitalMatter/Crucifixtion.png';
import parsaAboutDropdownOne from '$lib/assets/images/projects/digitalMatter/Crucifixtion_blender.png';
import marcusAboutDropdownTwo from '$lib/assets/images/projects/digitalMatter/caballo.png';
import marcusAboutDropdownFour from '$lib/assets/images/projects/digitalMatter/cocodrilo.png';
import marcusAboutDropdownThree from '$lib/assets/images/projects/digitalMatter/cuervos.png';
import marcusAboutDropdownOne from '$lib/assets/images/projects/digitalMatter/perro.png';
import type { IAboutDropdown } from '$lib/elements/AboutDropdown/interfaces';

export const marcusAboutDropdown = [
	marcusAboutDropdownOne,
	marcusAboutDropdownTwo,
	marcusAboutDropdownThree,
	marcusAboutDropdownFour
];

export const parsaAboutDropdown = [parsaAboutDropdownOne, parsaAboutDropdownTwo];

export const marcusDropdownItems: IAboutDropdown[] = [
	{
		name: 'perro',
		artist: 'marcus',
		link: '#'
	},
	{
		name: 'caballo',
		artist: 'marcus',
		link: '#'
	},
	{
		name: 'cuervos',
		artist: 'marcus',
		link: '#'
	},
	{
		name: 'cocodrilo',
		artist: 'marcus',
		link: '#'
	}
];

export const parsaDropdownItems: IAboutDropdown[] = [
	{
		name: 'Wip',
		artist: 'parsa',
		about:
			'Forming a new kinship as Clown Boy became a tool to digest the darkness of the world and allow the artist to delve deeper into his own fears. '
	},
	{
		name: 'Crucifixtion',
		artist: 'parsa',
		about:
			'“Clown Boy is one of the most evil things that I can create. Each painting is a new adventure, almost like a comic book.”'
	}
];
