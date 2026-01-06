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

export const viralityOvernightChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'riniifish',
			name: 'riniifish',
			avatar: '/media/virality-overnight/interview/pfp1.webp',
			type: 'answer'
		},
		{
			id: 'woc',
			name: 'woc',
			avatar: '/media/virality-overnight/interview/pfp2.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'Where do you think virality comes from?'
		},
		{
			characterId: 'riniifish',
			content: 'There are a lot of reasons. Memes have always been this weird and fun thing—I wouldn\'t say I\'m obsessed, but I do love seeing a good one. As artists, we don\'t necessarily chase virality, but somehow many of us end up in that space, whether we intend to or not. Sometimes, it feels like a huge party—some people are having the time of their lives, and others feel like they don\'t belong at all.'
		},
		{
			characterId: 'woc',
			content: 'I don\'t know where virality comes from. I believe it\'s the result of a secret recipe, just like Coca-Cola\'s. Virality changes over time, depending on the platforms, perception, and different avenues of distribution.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How did your work go viral? Was it a particular piece or just luck?'
		},
		{
			characterId: 'riniifish',
			content: 'Honestly, I\'m still figuring out where my work fits—what kind of space it takes up and how it connects with people. I call my little community "bug frens," and I feel really lucky to have them. Whether my work goes viral or not, I just want to keep making things that feel exciting. I\'ve been trying new visual tools, making music to go with my pieces… I really love electronic music, and I want to bring more of the things I love into my art. That\'s what keeps me going.\n\nCreatively, everything happens in phases. No matter what\'s happening outside, my process is mostly about looking inward. But sometimes I wonder if I focus too much on my own thoughts. The world is full of messy, broken-up structures—and my bugs are just one of the weird little fragments that come out of it. Maybe in the future, I\'ll start looking outward more. Who knows—maybe that\'s when the bugs will actually go viral. I like imagining what that might look like.'
		},
		{
			characterId: 'woc',
			content: 'For almost 15 years, I have been using the spaces and languages of the web as a means of sharing and spreading my narrative and artistic work. Building a history of content inevitably leads to a form of organic virality. In my case, I believe that virality is the result of a journey.\n\nMy journey has never changed. However, I can say that my approach to content diffusion has become more professional, focusing on achieving healthy and targeted visibility.\n\nVirality is a possibility, but in my case, it has never been a necessity.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you balance viral, fast-paced art with deeper, more conceptual work?'
		},
		{
			characterId: 'riniifish',
			content: 'Oh yeah, I treat them really differently. When something spreads quickly, it\'s usually a single character—it\'s simple, easy to connect with, and can stand on its own.\n\nEvery character I create has its own personality, and they all tell stories in different ways. For my 1/1 works, the focus is immersion and world-building. I want them to pull people into the Bug Universe—a space I don\'t really want to leave.\n\nBut those single-character pieces are louder, simpler, more direct. They act like messengers, carrying little bits of culture with them. Kind of like tiny revolutionaries.'
		}
	],
	images: [],
	background: '/media/virality-overnight/interview/interview-bg.webp'
};

