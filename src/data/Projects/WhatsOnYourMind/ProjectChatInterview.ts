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

export const whatsOnYourMindChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'daniel',
			name: 'Daniel Vasconcelos',
			avatar: '/media/whats-on-your-mind/about-21.webp',
			type: 'answer'
		},
		{
			id: 'h4wnee',
			name: 'H4WNEE',
			avatar: '/media/whats-on-your-mind/about-31.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas',
			content: 'How do you perceive social media platforms?'
		},
		{
			characterId: 'daniel',
			content:
				"I've used social networks since I first learned to use a computer, and I look at them very literally. When a prompt asks, “What are you thinking?”—I’m probably thinking about bananas with oats. And I have no problem posting that. I try to be myself and say exactly what I’m thinking, what I’m doing, what I want to do."
		},
		{
			characterId: 'h4wnee',
			content:
				'More and more, we use our profiles like avatars. Sometimes we’re sad or happy, and we process those emotions through music clips, videos, or images.\n\nWe don’t always say “I’m sad,” but we post something that expresses that feeling indirectly. That makes social media a performative space, even if we’re not fully aware of it. Every choice to reveal or conceal something is part of that performance.\n\nI think through the whole experience—from the sequence of stories to the impact of a planned hiatus. That moment of absence, before coming back with something new, creates anticipation. It makes everything more interesting.'
		},
		{
			characterId: 'tomas',
			content: 'Can algorithms and platform-specific limitations affect how you create and share your work?'
		},
		{
			characterId: 'daniel',
			content:
				'When people say Instagram is for photography, I always reply: who said there’s no photography in this collage?\n\nIf the algorithm is looking for photography, it’ll find it—a smiling face, for example, and almost everything I make includes that on purpose. It’s a tactic to work around the algorithm’s limits.'
		},
		{
			characterId: 'h4wnee',
			content:
				'Even with all the tools software gives us, there’s still something important in what can’t be easily translated into code. That’s what makes the work feel real—it challenges the limits of the platform while still using it.\n\nOver time, my feed became more fluid. I use Instagram as both a portfolio and an open studio. Some works exist only there, without a physical version. But I don’t follow Instagram’s rules to gain reach.'
		},
		{
			characterId: 'tomas',
			content: 'What’s your interest in everyday objects?'
		},
		{
			characterId: 'daniel',
			content:
				'I like to give objects new meaning. A shoe can become a house or tell a story about hunger and poverty. A computer screen can speak about misery or madness.\n\nEverything I do relates to some form of lack—resentment, envy, absence. I often include sneakers I want, objects I don’t have, or qualities I wish I had. You can tell any story with any object—you just need to arrange it well.'
		},
		{
			characterId: 'h4wnee',
			content:
				'Subverting everyday items—turning them into social critiques or aesthetic interventions—is central to my practice.\n\nLately, I’ve been studying routers. They’re everywhere, but almost invisible, like home décor. Yet they’re portals to the cloud, like a post office for our digital letters.\n\nI like displacing those realities, turning something mundane into something significant.'
		}
	],
	images: [],
	background: '/media/whats-on-your-mind/interview-bg.webp'
};

