import parsaPolaroidsTwo from '$lib/assets/images/projects/digitalMatter/1.png';
import parsaPolaroidsOne from '$lib/assets/images/projects/digitalMatter/2.png';
import parsaPolaroidsThree from '$lib/assets/images/projects/digitalMatter/4.png';
import parsaPolaroidsFour from '$lib/assets/images/projects/digitalMatter/5.png';
import marcusPolaroidsThree from '$lib/assets/images/projects/digitalMatter/SaveClip.App_341766475_6716237288405642_5129891025817825423_n.png';
import marcusPolaroidsTwo from '$lib/assets/images/projects/digitalMatter/SaveClip.App_341950897_770383014495634_8158274282921773720_n.png';
import marcusPolaroidsFour from '$lib/assets/images/projects/digitalMatter/SaveClip.App_342046454_807141040259784_9112264041733936694_n.png';
import marcusPolaroidsOne from '$lib/assets/images/projects/digitalMatter/SaveClip.App_342383072_928061838501136_3557387611596278564_n.png';
import type { IPolaroidImage } from '$lib/elements/Polaroids/interface';

export const marcusPolaroidsImages: IPolaroidImage[] = [
	{
		image: marcusPolaroidsOne,
		quote: "It's easy to play around with VR"
	},
	{
		image: marcusPolaroidsThree,
		quote: 'Quickly create intricate, twisted, imperfect volumes'
	},
	{
		image: marcusPolaroidsTwo,
		quote: 'Iterate, test positions, stretch and arrange, cut and patch'
	},
	{
		image: marcusPolaroidsFour,
		quote: 'There is no work in which I do not use it'
	}
];

export const parsaPolaroidsImages: IPolaroidImage[] = [
	{ image: parsaPolaroidsOne, name: '2 (1)', date: '12/03/22' },
	{ image: parsaPolaroidsTwo, name: '1 (1)', date: '20/05/24' },
	{ image: parsaPolaroidsThree, name: '4 (1)', date: '05/11/20' },
	{ image: parsaPolaroidsFour, name: '5 (1)', date: '28/09/21' }
];
