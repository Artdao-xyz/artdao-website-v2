import parsaPolaroidsTwo from '$lib/assets/images/projects/digitalMatter/1.webp';
import parsaPolaroidsThree from '$lib/assets/images/projects/digitalMatter/2.webp';
import parsaPolaroidsOne from '$lib/assets/images/projects/digitalMatter/3.webp';
import parsaPolaroidsFour from '$lib/assets/images/projects/digitalMatter/5.webp';
import marcusPolaroidsThree from '$lib/assets/images/projects/digitalMatter/SaveClip.App_341766475_6716237288405642_5129891025817825423_n.webp';
import marcusPolaroidsTwo from '$lib/assets/images/projects/digitalMatter/SaveClip.App_341950897_770383014495634_8158274282921773720_n.webp';
import marcusPolaroidsFour from '$lib/assets/images/projects/digitalMatter/SaveClip.App_342046454_807141040259784_9112264041733936694_n.webp';
import marcusPolaroidsOne from '$lib/assets/images/projects/digitalMatter/SaveClip.App_342383072_928061838501136_3557387611596278564_n.webp';
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
	{ image: parsaPolaroidsOne, quote: 'Digital mediums are like flying...' },
	{ image: parsaPolaroidsTwo, quote: 'And physical mediums are like walking' },
	{ image: parsaPolaroidsThree, quote: "It's that kind of freedom" },
	{
		image: parsaPolaroidsFour,
		quote: 'Space took a really important shift in his artistic practice'
	}
];
