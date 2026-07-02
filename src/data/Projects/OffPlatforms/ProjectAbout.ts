import type { IQuoteItem } from '$lib/components/QuoteComponent/interfaces';
import QuoteItemBodyPlaceholder from './QuoteItemBodyPlaceholder.svelte';
import ConclusionAbout from './ConclusionAbout.svelte';

const placeholder = QuoteItemBodyPlaceholder;

export interface OffPlatformsQuoteSection {
	quoteItem: IQuoteItem;
	image?: string;
}

export const offPlatformsQuoteSections: OffPlatformsQuoteSection[] = [
	{
		image: '/media/off-platforms/image%201.webp',
		quoteItem: {
			title: 'Lou Fauroux',
			subtitle: '',
			text: placeholder,
			showSectionTitle: true,
			showArtistFeature: true,
			segments: [
				{
					type: 'content',
					text: 'Lou, your film What Remains imagines a near future where a tech company develops a digital immortality program for an elite few, and the source code is leaked to the public. You started the project five years ago. Do you still believe in the ideas behind the film?'
				},
				{
					type: 'quote',
					text: "Yes. I still believe the trajectory of big tech leads toward consolidation—one system absorbing everything. The rhetoric about accessibility often masks a deeper power drive. What has changed is the landscape itself. There are new figures and dynamics that would probably appear if I made the film today. The film also became a kind of archive. When I started, I wasn't deeply familiar with AI. Now AI is moving in the direction the film was already speculating about—replacing human roles with automated systems and data infrastructures."
				},
				{
					type: 'content',
					text: 'The Archive That Predicted Itself'
				},
				{
					type: 'content',
					text: "Fauroux's response highlights a familiar paradox of technological speculation. The closer fiction moves to the present, the more it begins to resemble documentation. The acceleration of AI has made many speculative narratives feel less like prophecy and more like early field notes from an emerging regime."
				}
			]
		}
	},
	{
		image: '/media/off-platforms/image%202.webp',
		quoteItem: {
			title: 'Alice Bucknell',
			subtitle: '',
			text: placeholder,
			showSectionTitle: true,
			showArtistFeature: false,
			segments: [
				{
					type: 'content',
					text: 'Alice, you named your new film Ground Truthing. Your titles usually contain a lot of conceptual weight. Could you explain the idea behind this one?'
				},
				{
					type: 'quote',
					text: 'The phrase comes from remote sensing and AI training. When data is collected remotely—via satellites, sensors, or models—someone still has to go to the ground and verify it. "Ground truthing" means checking whether the model\'s interpretation matches reality. In AI training it serves as a corrective tool, steering models away from bias and error.'
				},
				{
					type: 'content',
					text: 'Touching Grass at Planetary Scale'
				},
				{
					type: 'content',
					text: 'Bucknell\'s film asks a broader question: what if the hierarchy were reversed? What if embodied, sensory experience—the act of "touching grass"—mattered more than the planetary-scale systems trying to map and model everything? The work plays with scale, constantly zooming between microscopic and planetary perspectives to question that hierarchy.'
				}
			]
		}
	},
	{
		image: '/media/off-platforms/image%203.webp',
		quoteItem: {
			title: '',
			subtitle: '',
			text: placeholder,
			showSectionTitle: false,
			showArtistFeature: false,
			segments: [
				{
					type: 'content',
					text: 'Ground Truthing feels like both a video game and a poem. The project also uses real climate data. Could you explain how that research feeds into the work?'
				},
				{
					type: 'quote',
					text: 'The film is actually paired with a game called Earth Engine. The two works share the same world and environments but function differently.'
				},
				{
					type: 'content',
					text: 'The game contains no written narrative. Instead it uses real-time climate data to shape the environment. Atmospheric conditions influence how the world behaves. Move too quickly and the terrain might dissolve. Move too slowly and the environment may react with storms or avalanches.'
				},
				{
					type: 'content',
					text: "Bucknell's film, by contrast, is language-heavy and research-driven. It becomes a snapshot in time."
				},
				{
					type: 'content',
					text: "For example, one scene references the iceberg A23a, which until recently was the largest iceberg in the world. In the film it's frozen at that moment. In the game, the iceberg evolves according to current geospatial data. If you play today versus two months ago, the environment is different."
				}
			]
		}
	},
	{
		image: '/media/off-platforms/image%204.webp',
		quoteItem: {
			title: '',
			subtitle: '',
			text: placeholder,
			showSectionTitle: false,
			showArtistFeature: false,
			segments: [
				{
					type: 'quote',
					text: "That's interesting because artworks usually freeze in time. The tools change so quickly that older work starts to feel like science fiction from another era. But in your case the work evolves with the world itself."
				},
				{
					type: 'content',
					text: "Exactly—the game updates with the data. The film doesn't."
				},
				{
					type: 'content',
					text: 'A lot of your work has a graphic novel quality. In Ground Truthing the 8-bit Tamagotchi aesthetic is a poignant contrast to the hyperreal visual language of modern game engines. Why did you choose this interface?'
				},
				{
					type: 'quote',
					text: "Partly nostalgia. But it's also inspired by SimEarth, a game where you play as a god controlling planetary evolution. Earth Engine flips that idea. Instead of controlling the planet, the planet controls you. It generates conditions that shape your experience."
				}
			]
		}
	},
	{
		image: '/media/off-platforms/image%205.webp',
		quoteItem: {
			title: '',
			subtitle: '',
			text: placeholder,
			showSectionTitle: false,
			showArtistFeature: false,
			segments: [
				{
					type: 'content',
					text: 'Lou, your work is also deeply research-driven, especially around tech companies pursuing life extension. Tell us about that research?'
				},
				{
					type: 'quote',
					text: 'The film started as research into companies like Google, Meta, and Amazon, notably how they invest their capital. Many of them fund longevity research through affiliated organizations.'
				},
				{
					type: 'content',
					text: 'Google has Calico, for example. Their stated mission is curing disease for humanity, but a lot of the research focuses on extending life for a small number of people.'
				},
				{
					type: 'content',
					text: 'Microsoft once explored creating digital doubles of individuals by collecting complete data profiles. Other projects focus on biological approaches, like protecting telomeres to slow aging.'
				},
				{
					type: 'content',
					text: "There's also the ideological side—figures like Ray Kurzweil who openly claim death is a problem technology can solve."
				},
				{
					type: 'content',
					text: "The film takes those real developments and pushes them into fiction. The idea that one tech company might eventually absorb the rest doesn't feel entirely unrealistic."
				}
			]
		}
	},
	{
		image: '/media/off-platforms/image.webp',
		quoteItem: {
			title: '',
			subtitle: '',
			text: placeholder,
			showSectionTitle: false,
			showArtistFeature: false,
			segments: [
				{
					type: 'content',
					text: 'Are you still researching immortality?'
				},
				{
					type: 'quote',
					text: 'Yes, but more broadly. Immortality fascinates me as a form of power. If you control enormous wealth, the next frontier might be time itself—the idea that you could still influence the world centuries from now.'
				},
				{
					type: 'content',
					text: 'So the topic keeps returning in different forms.'
				}
			]
		}
	}
];

export const offPlatformsQuoteImages = offPlatformsQuoteSections
	.map((section) => section.image)
	.filter((image): image is string => Boolean(image));

export const offPlatformsConclusionAbout = {
	title: 'Read Between The Lines:',
	subtitle: '',
	text: ConclusionAbout
};

export const offPlatformsConclusionImage = '/media/off-platforms/image%207.webp';
