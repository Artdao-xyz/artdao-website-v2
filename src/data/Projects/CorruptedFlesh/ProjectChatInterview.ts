export interface Character {
	id: string;
	name: string;
	avatar: string;
	type: 'question' | 'answer';
}

export interface ChatMessage {
	characterId: string;
	content: string;
}

export interface ChatInterviewData {
	characters: Character[];
	messages: ChatMessage[];
	images: string[];
	background: string;
}

export const corruptedFleshChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'veronika',
			name: 'VERONIKA',
			avatar: '/media/corrupted-flesh/interview/pfp1.webp',
			type: 'answer'
		},
		{
			id: 'matheus',
			name: 'MATHEUS',
			avatar: '/media/corrupted-flesh/interview/pfp2.webp',
			type: 'answer'
		},
		{
			id: 'tim',
			name: 'TIM',
			avatar: '/media/corrupted-flesh/interview/pfp3.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'What role does transformation play in your artistic practice?'
		},
		{
			characterId: 'veronika',
			content: 'I am fascinated by how software and devices simultaneously expand and distort our perception and bodies. This has become a central theme in my work—exploring how emerging technologies unfold, their potentials, and their threats. Digital doubles and content filters blur identity boundaries. Body mutation in my work also reflects posthumanist discourse and biotechnological human modification, raising questions about the limits of humanity in the era of CRISPR and genetic engineering. I am also inspired by Rosi Braidotti\'s posthumanist concept of the "nomadic subject" - the idea of existing in a state of constant transformation and movement between different identities and states, including virtual ones.'
		},
		{
			characterId: 'matheus',
			content: 'I explore the limits of transmutation without going so far that it becomes unreal. I like to recognize what I create, and I research extensively—sometimes about survival. I like creating this almost realistic distortion of the human body that doesn\'t actually exist but could happen. I work with destroyed people and bodies—like an experiment, playing with these subcultures within my bubble to create something new. I believe that, as mentioned before, the most important point of my work nowadays is the observation of subcultures and representation of existing realities. The meeting point of all these realities that we observe is the fact that, perhaps, all these characters have gone through some near-death experience, or survival in other words.'
		},
		{
			characterId: 'tim',
			content: 'There\'s something deeply personal about transformation. Growing up, I became attuned to change, not always by choice but by circumstance. That sensitivity stayed with me. The idea of shifting from one state to another, of adapting, dissolving, or reforming, became both a way of surviving and a way of thinking. It\'s about possibility, fluidity, and refusing to settle into what\'s expected. For me, this fusion relates to queerness not just as identity but as a method of imagining otherwise. It holds a utopian impulse, a desire to reshape the body, dissolve fixed categories, and invent new modes of being that resist the limits of normativity. Queerness allows for fragmentation, ambiguity, softness, rupture, and repair. It is not only a political or personal stance but also a strategy that invites transformation and experimentation.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you use visual distortion, corruption, or "damage" as an artistic tool?'
		},
		{
			characterId: 'veronika',
			content: 'Perhaps as an anxious fusion of posthumanist imagery with developments that feel already embedded in everyday life. I often turn to horror, techno-magic, fetish elements, and weird advertising aesthetics. The transformations of the human mouth in Variations of Grin were inspired by both real scientific advancements and the metaphorical images embedded in eerily persistent advertising.'
		},
		{
			characterId: 'matheus',
			content: 'You\'ll find deformed characters probably wearing the same clothes you saw on someone in the street and found interesting (or tacky). Fashionable glasses among some groups cover crooked and bulging eyes. Braces adorn mutant, strangely happy smiles. Necrotic limbs are decorated with pendants and piercings. I think the important thing is to understand that in this universe, banalities are represented in a comical way, like satires or fables of real life. I work with opposing ideas: comic but grotesque, fashionable but tacky. These distortions and prosthetics also come from a personal experience of needing to use a prosthesis after surgery. I love building grotesque characters and adding a comic or cute piece of clothing.'
		},
		{
			characterId: 'tim',
			content: 'I\'m interested in how certain states or materials can shift in meaning depending on how they\'re framed. I remember a quote from David Lynch where he spoke about zooming into a bruise and discovering its beauty. That idea has stayed with me. A bruise typically signals pain or damage, but when seen closely, it can become something strangely beautiful. I\'m drawn to that kind of perceptual shift—when something uncomfortable or grotesque transforms into something poetic and maybe beautiful. I want to use the digital for what it does best: distortion, fragmentation, nonlinearity. The digital isn\'t just a container; it\'s an active, unstable material.'
		},
		{
			characterId: 'tomas-jones',
			content: 'What emotional or psychological states are you trying to convey through your work?'
		},
		{
			characterId: 'veronika',
			content: 'It\'s a dialogue between control and chaos. In Variations of Grin I explored different aspects of fear—from my personal fear of dental procedures (since this exhibition was held in a dental clinic) to broader concerns about humanity\'s future. The digital and virtual carry something both awe-inspiring and terrifying, which is why people perceive them as sublime and captivating. Neuroscience confirms this connection through experiments where VR simulations caused short-term neural activity changes similar to those induced by LSD or psilocybin. This fascinates me—the direct impact on human physiology.'
		},
		{
			characterId: 'matheus',
			content: 'When you create something that tends to be uglier, it affects people differently than beauty does. Ugliness is always a sensation we don\'t quite know how to handle. I think the discomfort in my pieces touches something interior in the viewer—it depends a lot on their experiences. When we don\'t know something, we tend to fear it or feel discomfort. I like playing with that, and I tend not to be a very soft person. I\'ve always liked things that are somewhat gore, and I\'m a bit disgusting—it\'s part of who I am. I see life as a performance, very realistic and painful, but fun at times.'
		},
		{
			characterId: 'tim',
			content: 'There\'s a layer of abjection, horror, and the morbid in my work. What interests me isn\'t just how technology represents the body, but how it unsettles it—how it makes the body unfamiliar, harder to locate, harder to define. That opens something up. There\'s potential in that instability, especially for thinking about identity, desire, and power. I\'m drawn to surfaces that evoke the uncanny, the dreamlike, or the emotionally charged. Texture for me is tied to memory and affect. In a world that often demands clarity and categorization, I want to work with messiness, mutation, and ambiguity.'
		}
	],
	images: [],
	background: '/media/corrupted-flesh/interview/interview-bg.webp'
};

