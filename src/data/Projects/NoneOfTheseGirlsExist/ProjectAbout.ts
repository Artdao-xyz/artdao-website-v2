import type { IQuoteItem } from '$lib/components/QuoteComponent/interfaces';
import QuoteItemBodyPlaceholder from './QuoteItemBodyPlaceholder.svelte';

const placeholder = QuoteItemBodyPlaceholder;

export const quoteMayaManSections: IQuoteItem[] = [
	{
		title: 'Maya Man',
		subtitle: '',
		text: placeholder,
		showSectionTitle: true,
		showArtistFeature: true,
		segments: [
			{
				type: 'content',
				text:
					"You've written about how you need to render yourself consumable. I want to bring up, ironically, Marina Abramović's manifesto from 2009, where she stated two principles among her eighteen: the artist should not make themselves into an idol, and the artist should not compromise themselves in regard to the art market. You are very good with the art market, and you know how to represent yourself and create an image around you. What is your take on this?"
			},
			{
				type: 'quote',
				text:
					"This project entirely started with an essay I wrote on Dance Moms, comparing Abby Lee Miller, the coach, to the concept of the algorithm as people reference it online. The way you're conditioned and trained as a dancer by a coach to perform in a specific way mirrors how the algorithm conditions and trains you to post in a very specific way to maximize success on social media."
			}
		]
	},
	{
		title: '',
		subtitle: '',
		text: placeholder,
		showSectionTitle: false,
		showArtistFeature: false,
		segments: [
			{
				type: 'quote',
				text:
					'So much of the psychology I bring to my practice is very similar to the dialogue and mindset encouraged in young dancers.'
			},
			{
				type: 'content',
				text:
					'Maya is interested in the parallels between the role of a contemporary artist and the role of an influencer. Star Quest became the way out of the system she was built by, and then trying to stand inside it and outside it at the same time. This work circumvents the traditional mode of presenting work entirely.'
			}
		]
	},
	{
		title: '',
		subtitle: '',
		text: placeholder,
		showSectionTitle: false,
		showArtistFeature: false,
		segments: [
			{
				type: 'content',
				text:
					"Abby Lee Miller ranks her dancers in a pyramid every week. Growing up in Ukraine doing ballet, I was in a very similar environment: you are ranked as a woman and you never get out of it. What's your take on this idea of public hierarchy? Is there something almost honest about Abby's cruelty compared to the algorithm?"
			},
			{
				type: 'quote',
				text:
					"Maybe it's honest in the way that she's quite overt about being manipulative. I'm thinking a lot about quantification on social media. Abby Lee Miller has all these systems for quantifying her dancers, and beyond that, at a dance competition you get a ranking after you perform."
			},
			{
				type: 'quote',
				text:
					"So much of our life is now quantified and gamified. We have all of these software-based systems to categorize and rank how we're doing against other people, against ourselves. That gamified mindset has really permeated living in a way that is, honestly, scary."
			},
			{
				type: 'content',
				text:
					'Do you think you still have a coach now, being in the art world? Or how do you feel about anyone who can coach you? I imagine being quite resistant to that.'
			},
			{
				type: 'quote',
				text:
					'Making this work, I realized that the person who is most Abby Lee Miller-esque in my life is absolutely me. I talk about this in the performance. I kind of become the coach in this work, but also in the way I talk to myself about the work I\'m making. It can be kind of intense. There\'s a line where the coach says, "Are you gonna get out there and choke?" and I was thinking that exact thing all day today.'
			},
			{
				type: 'quote',
				text:
					'I had the realization about halfway through making the piece that I was really the coach in this work, not the dancers at all. That was a radical shift in my relationship to it.'
			}
		]
	},
	{
		title: '',
		subtitle: '',
		text: placeholder,
		showSectionTitle: false,
		showArtistFeature: false,
		segments: [
			{
				type: 'content',
				text:
					"Star Quest is built on 111 eight-second clips that reconfigure endlessly. Maya was playing a lot of different filmmaking roles, styling the dancers and describing the set. In all of her generative, software-based work, there's an element of randomness seeded into the code. It means when the work is finished, it's still not completely up to her. There's a liveness to the software that's running. It's built on a model like TikTok: you move through these eight-second clips and get a video mood board of the world of the show."
			},
			{
				type: 'quote',
				text:
					'A lot of my work is JavaScript-based and runs in the browser, so that feels like home to me. And of course, the way we mostly watch television now is streaming through a browser, so I really wanted this to stream in that same way.'
			},
			{
				type: 'content',
				text: 'Does the AI default girl actually have any interiority, or is she a pure surface?'
			},
			{
				type: 'quote',
				text:
					"I don't think the characters have interiority or are conscious. But what's so important to me about the work is that they can have a similar effect on an audience to watching live-action footage, where the people on screen obviously do have interiority. The fact that you can mimic that and affect an audience in the same way was so surprising to me and, honestly, very scary."
			},
			{
				type: 'content',
				text:
					'Being able to affect what people think through the images and videos we produce is one of the most powerful tools out there right now. You can quite easily slip into a state where you perceive them as if they do.'
			}
		]
	},
	{
		title: '',
		subtitle: '',
		text: placeholder,
		showSectionTitle: false,
		showArtistFeature: false,
		segments: [
			{
				type: 'content',
				text:
					'After criticizing this whole competitive, performative culture, knowing how toxic it is, why did you still choose to engage with it, and keep choosing to?'
			},
			{
				type: 'quote',
				text:
					"This is exactly how I feel about the internet and social media. There's so much to be critical of, but it's really complicated, and there is a sense of indulgence and love I have for it as well. In most of my work, I need that tension. Working on this body of work around competition dance culture has been really generative for me because of the layers, and because of that tension between loving it and feeling so critical of it at the same time."
			}
		]
	}
];

export const quoteMayaManImages = [
	'/media/none-of-these-girls-exist/StarQuest-LA-8.webp',
	'/media/none-of-these-girls-exist/StarQuest-LA-2.webp',
	'/media/none-of-these-girls-exist/StarQuest-LA-3.webp',
	'/media/none-of-these-girls-exist/StarQuest-LA-4.webp',
	'/media/none-of-these-girls-exist/StarQuest-LA-6.webp'
];
