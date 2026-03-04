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
	interviewerText?: string;
}

export const onlineFemininityChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'laura-butallo',
			name: 'Laura Butallo',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'minati',
			name: 'MINATI',
			avatar: '/media/online-feminity/interview-bg.webp',
			type: 'answer'
		},
		{
			id: 'virk',
			name: 'Virk',
			avatar: '/media/online-feminity/interview-bg.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'laura-butallo',
			content:
				'How do you view the Web3/NFT space in terms of opportunities for women and femme artists?'
		},
		{
			characterId: 'minati',
			content:
				'I don’t see much difference from the real world. It’s still a male-dominated space, where women are often seen as second-tier artists. In my experience, many female artists tend to create more personal work, while male artists often lean into hype-driven trends that get more attention. It’s no secret that collectors usually go for what’s cool, hyped, or profitable.'
		},
		{
			characterId: 'virk',
			content:
				'I think Web3 is a gateway of opportunities for many people, regardless of their region or social class. However, opportunities aren’t equal for women. For example, some people have access to insider information about certain shitcoins or projects that might surge, but that data usually circulates in small groups where women are a tiny minority.'
		},
		{
			characterId: 'laura-butallo',
			content:
				'How do you decide which aspects of your feminity to show or hide online? Is there a difference between who you are offline and your digital persona?'
		},
		{
			characterId: 'minati',
			content:
				'It’s important for me to separate my online persona from my personal life. That way, I can be fully in control in both worlds, without one overshadowing the other.'
		},
		{
			characterId: 'virk',
			content:
				'I don’t think there’s a big difference between my digital identity and my offline one. Maybe it’s a way of being present. I also think it’s important to show some form of the body in the Web3 universe, where many people operate anonymously.'
		},
		{
			characterId: 'laura-butallo',
			content:
				'Do you see the internet and digital tools as inherently liberating for women, or do they just recreate existing power structures in new forms?'
		},
		{
			characterId: 'minati',
			content:
				'It might seem liberating at first glance. But in the end, it’s often just the same thing all over again.'
		},
		{
			characterId: 'virk',
			content:
				'I see it as any other tool. It always depends on how it’s used. It has the potential to challenge limits or reinforce them.'
		},
		{
			characterId: 'laura-butallo',
			content:
				'Have you ever felt the need to censor or alter your work because of how it might be perceived online?'
		},
		{
			characterId: 'minati',
			content:
				'I used to draw lots of NSFW art, trying to express my feminity. But over time, I realized there are many ways to express that in a way that isn’t exploitative. Femininity is a spectrum, and there’s so much more to it.'
		},
		{
			characterId: 'virk',
			content:
				'I’ve adjusted how I present myself or share my work. I wouldn’t want it to be misinterpreted as fanservice, even though my artistic inquiries often touch on themes related to sexuality or intimacy.'
		},
		{
			characterId: 'laura-butallo',
			content:
				'How do you deal with the digital “male gaze” — the feeling of being watched and judged by a predominantly male audience?'
		},
		{
			characterId: 'minati',
			content: 'Fortunately for me, I haven’t encountered such a thing. But honestly, I couldn’t be bothered.'
		},
		{
			characterId: 'virk',
			content:
				'I think it’s a bit difficult. In virtual spaces, where anonymity often gives men a sense of entitlement, you have to be careful. That’s why sometimes it’s hard to be yourself without overexposing yourself.'
		}
	],
	images: [],
	background: '/media/online-feminity/interview-bg.webp',
	interviewerText: 'Laura Butallo'
};

