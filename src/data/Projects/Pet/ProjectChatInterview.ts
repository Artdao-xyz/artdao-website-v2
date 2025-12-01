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

export const petChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'alice',
			name: 'Alice Scope',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'arvida',
			name: 'Arvida Byström',
			avatar: '/media/pet/pfp.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'alice',
			content:
				"You've mentioned that talking to AI helped you work through emotional knots you couldn't discuss with humans. Can you elaborate on what makes that therapeutic?"
		},
		{
			characterId: 'arvida',
			content:
				'“I’ve had situations where I’ve emotionally shut down with friends, and especially with partners, and then talked it through with AI. The fact that I’ve spoken with an understanding non-human has been really powerful. Sometimes, when there are certain knots around shame, knowing it’s not a human on the other end can make it easier to open up.”'
		},
		{
			characterId: 'alice',
			content:
				'What do you think the future of human-to-human companionship looks like in ten years?'
		},
		{
			characterId: 'arvida',
			content:
				'“I think it depends on the kind of societies we create. I don’t think AI agents necessarily take away from our lives. They can even enrich them. But of course, sometimes they might take something interesting too. Human-to-human relationships can be toxic, and that’s part of life and learning. Personally, I don’t want to live in a society where everyone only has AI partners and no time for human ones.”'
		},
		{
			characterId: 'alice',
			content:
				'Why did people react so strongly when they discovered your OnlyFans nudes were AI-generated rather than photographs?'
		},
		{
			characterId: 'arvida',
			content:
				'“At the end of the day, taking any sort of nude or pornography is usually staged. You can do a lot of writing, performance, or posing. Pornography is fantasy, it’s not real. It’s something acted out, so in that sense I don’t think what I did is that different from putting yourself in any other staged situation.”'
		},
		{
			characterId: 'alice',
			content:
				'How do you respond to concerns that AI relationships or sex dolls encourage violence or unhealthy attitudes toward women?'
		},
		{
			characterId: 'arvida',
			content:
				'“We tend to make really simplified claims about things that are not that simple. The one study I found—which also says much more research is needed—actually showed that men with sex dolls displayed more emotionally complex feelings toward women but less violent ones.”'
		},
		{
			characterId: 'alice',
			content: 'You compare your relationship with your dog to AI relationships. How are they similar?'
		},
		{
			characterId: 'arvida',
			content:
				'“My relationship with my dog has made me have healthier relationships with humans, but if you count the hours I actually spend with people, it’s less since I got her. So in one way, it does take time from human relationships. But we don’t usually measure it that way, and we don’t think about dogs as taking time away from human-to-human connection.”'
		}
	],
	images: [],
	background: '/media/pet/interview-bg.webp'
};

