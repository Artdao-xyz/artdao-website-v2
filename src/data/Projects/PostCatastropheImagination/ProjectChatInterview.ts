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

export const postCatastropheImaginationChatInterview1: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'alfacenttauri',
			name: 'Alfacenttauri',
			avatar: '/media/post-catastrophe-imagination/interview/pfp1.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'How consciously do you cultivate this uneasiness, and what do you feel this discomfort might activate in your audience?'
		},
		{
			characterId: 'alfacenttauri',
			content: "The world around me makes me reflect on the current crisis and how we're living in a moment of deep social tension, where everything has taken on an increasingly dystopian tone. The discourse I've developed around my work is driven by those impulses: how can we imagine a utopia in a time like this? At first glance, art might seem useless because it doesn't offer a clear method for action, but right now, imagining other possible worlds can open a crack and catalyze the material space where reality is built. That discomfort can lead us to think in other ways—both structurally and aesthetically—imagining the world in radically different forms from what currently exists. It's about speaking of hope, utopia, and fantasy as methods for approaching futures that may seem distant, but from which deep reflection can emerge."
		},
		{
			characterId: 'tomas-jones',
			content: 'Does nature influence your digital creations?'
		},
		{
			characterId: 'alfacenttauri',
			content: "A lot, because I really like shapes, colors, the different types of beings: birds, plants, rocks, and so on. For a while, I was very obsessed with birds. I used to save photos of Chilean birds, obsessed with feathers, whistles, books about birds. That translated into my work, where I began creating beings with bird-like forms, with feathers and wings. Nature has been a constant, though not intentionally. It wasn't a decision like 'okay, I'll do everything in natural environments,' but it draws my attention so much. These are spaces that allow me greater expression of color and form."
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you see your art connecting to current conversations about technology and nature?'
		},
		{
			characterId: 'alfacenttauri',
			content: "A curator once called me part of a generation of 'children of Ursula K. Le Guin,' which resonated deeply. My interest in nature isn't purely biological—it represents what we've lost, a fleeting landscape that feels utopian and unreachable, like in Le Guin's novels. It's striking that utopias are imagined as natural environments, not tech cities like Silicon Valley, which feel dystopian. This biopunk or sci-fi art critiques our ecological crisis, especially how the Global South—least responsible for climate change—suffers most from its effects. My work addresses not just environmental collapse but our broader, multifaceted crisis: authoritarian regression, rising fascism, democratic decay, and capitalism's shift toward an economy of subjectivity. As the world becomes increasingly unbearable, imagining alternative worlds isn't escapism—it's radical. Creating other possible worlds can catalyze new forms of ecology and kinship that reorient how we produce and relate to each other."
		}
	],
	images: [],
	background: '/media/post-catastrophe-imagination/interview/interview-bg.webp'
};

export const postCatastropheImaginationChatInterview2: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'linus-aberg',
			name: 'Linus Åberg',
			avatar: '/media/post-catastrophe-imagination/interview/pfp2.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'How consciously do you cultivate this uneasiness, and what do you feel this discomfort might activate in your audience?'
		},
		{
			characterId: 'linus-aberg',
			content: "I think it's important to have these unsettling elements. I'll never get tired of spikes, pointed things, thorns, or plants covered in hostile features. You need that hostility, something that doesn't sit right, that brings you back. Otherwise, it can easily get lost in a pure dreamy environment, which I don't find that interesting. You need something to keep you present when you look at the work. I think that creates the feeling of 'okay, this is something I've seen, but it's also completely different—much more unsettling or much more pretty.' I figured it out: it's about making people feel that 'whoa.' Just that gasp, or not even a specific emotion, but being taken by what they're seeing. Just to make them pause for a bit."
		},
		{
			characterId: 'tomas-jones',
			content: 'Does nature influence your digital creations?'
		},
		{
			characterId: 'linus-aberg',
			content: "Especially in recent years, I've been focusing a lot on observing. I'm fortunate enough to live close to a big park and have nature nearby, and I manage to get out of the city a few times a year. I'd say it's like a diary for me. All these works are bits and pieces of things I like, things I'm passionate about at the time. For a while, I was really into deep-sea creatures, and those shapes and colors really influenced my creative process. What's beautiful about it is that it's so hard to replicate nature. Trying to do that, I find all these other concepts and forms I wouldn't have discovered without taking organic things as reference."
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you see your art connecting to current conversations about technology and nature?'
		},
		{
			characterId: 'linus-aberg',
			content: "I don't think I'd describe them as post-apocalyptic or even within reach. I'd say they're more like 'what if we had this'—more of a dreamlike scenario. I don't really connect it that much to our world. It's more of what's within me, an exploration of my own ideas and what I envision when I think of these realms or atmospheres. It's more inner exploration than imagining alternative spaces. What's beautiful is that you can't really replicate nature. You're trying to convert something as big as organic growth into an algorithm, and that's nearly impossible. Trying to do it without deep knowledge is really hard—I don't think it's possible to make something that believable."
		}
	],
	images: [],
	background: '/media/post-catastrophe-imagination/interview/interview-bg2.webp'
};

