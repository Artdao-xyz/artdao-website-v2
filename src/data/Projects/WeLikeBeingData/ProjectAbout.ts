import type { IQuoteItem } from '$lib/components/QuoteComponent/interfaces';
import QuoteItemBodyPlaceholder from './QuoteItemBodyPlaceholder.svelte';

const placeholder = QuoteItemBodyPlaceholder;

/**
 * Five full-viewport quote sections (one image each). Only the first shows the
 * section title + Artist Feature / In conversation. Each block is content + quote pair(s);
 * the first section opens with a pull quote (Wagner), then body, then a second pull quote.
 */
export const quoteMitchellSections: IQuoteItem[] = [
	{
		title: 'Mitchell F. Chan',
		subtitle: '',
		text: placeholder,
		showSectionTitle: true,
		showArtistFeature: true,
		segments: [
			{
				type: 'quote',
				text:
					'Artists are attracted to video games for the same reason that Wagner was attracted to opera. You can be a music composer and an architect and a generative systems designer, and that\'s all great.'
			},
			{
				type: 'content',
				text:
					'But Mitchell sees this as only the first reason, the obvious one that draws most artists to game engines, the Gesamtkunstwerk appeal. His first video game, Winslow Homer\'s Croquet Challenge, transforms a 19th-century painting into an interactive meditation on distraction and boundaries. The entire game takes place inside a gilded gold frame, until you zoom out.'
			},
			{
				type: 'quote',
				text:
					'If you zoom out of the game far enough, you get to see the prison labor that facilitates the game outside of the scope of Winslow Homer\'s painting. And what\'s great is most people who play the game, they don\'t actually zoom out this far.'
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
					'Mitchell is convinced that corporations have learned behavioral patterns from games. They have become devastatingly effective at deploying them in everyday life. Gig workers have heads-up displays and quest logs; social media users chase likes the way players chase high scores; we\'ve all been nudged into treating our lives as games we didn\'t agree to play.'
			},
			{
				type: 'quote',
				text:
					'You finish the quest, you get coins. Your life is basically a never-ending game loop. And so that\'s why I make art like this. Because it uniquely allows me to reproduce systems and structures that affect people\'s everyday lives.'
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
					'His second game tackles identity as commodity. The Boys of Summer is a baseball management sim that lures you in with stats and strategy before pulling a bait-and-switch: your character doesn\'t make the majors. He gets a job at Amazon. And suddenly, you\'re not tracking batting averages, you\'re tracking student loan repayments, luxury spending, resting heart rate. All of it gets permanently written to the NFT\'s metadata.'
			},
			{
				type: 'quote',
				text:
					'We thought this was a fun game about baseball because baseball makes sense. You put your attribute points, you get stats, and we\'re used to following baseball through statistics. But unfortunately, Kimbrick Pitts did not make it to the major leagues. And now he has a job at Amazon.'
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
					'Mitchell doesn\'t treat his video games as formal exercises, they\'re delicately handled narratives, short fictions. He writes his own stories from scratch, realizing his Wagnerian vision entirely solo. He only commissions musicians because otherwise he\'d be too annoyed by his own work to enjoy playing it. In Ladyboss, an endless runner game, a female streamer\'s voiceover reveals her loss of autonomy after an unwanted pregnancy. The repetitive gameplay mirrors the trapped feeling of hustle culture while the coin-collecting mechanic distracts you from the story\'s darkening turn.'
			},
			{
				type: 'quote',
				text:
					'There are these Subway Surfer videos where they just lay these long speeches on top of footage of Subway Surfer. I\'m like, that\'s really interesting that these kids need a distraction just to concentrate on a story, which is such a paradox.'
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
					'Mitchell\'s dream exhibition isn\'t in a major museum, it\'s inside the PlayStation Store. Not as a punk gesture against institutions, but because more people who would never "open their generosity of thought and spirit to art" will experience his work there than in the white cube. His entire practice revolves around three beliefs:'
			},
			{
				type: 'quote',
				text:
					'Games are the modern-day equivalent of opera. There are mechanical things that you can do and conceptual truths about the world that you can express through this format better than any other format. And this art form has the potential to be radically open. Which I really believe in.'
			}
		]
	}
];

export const quoteMitchellImages = [
	'/media/we-like-being-data/about-1.webp',
	'/media/we-like-being-data/about-2.webp',
	'/media/we-like-being-data/about-3.webp',
	'/media/we-like-being-data/about-4.webp',
	'/media/we-like-being-data/about-5.webp'
];
