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

export const alienAlphabetsChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'alice-bucknell',
			name: 'Alice Bucknell',
			avatar: '/media/alien-alphabets/AliceBucknell_1.webp',
			type: 'answer'
		},
		{
			id: 'kyle-mcdonald',
			name: 'Kyle McDonald',
			avatar: '/media/alien-alphabets/KyleMcDonald_Siren_humpback_visualization1.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content:
				'When did you realize the most interesting creative territory was the place where existing knowledge ran out?'
		},
		{
			characterId: 'alice-bucknell',
			content:
				'I was really excited about building out a communication system that goes beyond human understanding. A kind of communication system for some other being or entity that is simultaneously something we register as being a language but also something we don\'t really have access to as viewers. It\'s not really speaking for you or to us. It\'s not really about us in a way.'
		},
		{
			characterId: 'kyle-mcdonald',
			content:
				'At the edges of knowledge are curiosity. And curiosity is the thing that continues to expand knowledge. If something is settled, then you have to do a lot of work to unsettle it. That is one of artists\' responsibilities, to unsettle the settled things.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you use research as a foundation for going somewhere genuinely unknown?'
		},
		{
			characterId: 'alice-bucknell',
			content:
				'There has to be this kind of anchor of the real in order for the leap into the unreal to have any sort of gravity. For it to feel like a tether that extends from the world. Because that foundation is so dense and solid, I can peel away off of it and go into this space of unknowing with a bit more structural integrity.'
		},
		{
			characterId: 'kyle-mcdonald',
			content:
				'I was sort of filled with an insatiable curiosity and I felt there was no one else doing this work. So I just threw myself into it. Curiosity can lead you down some funny rabbit holes. It can create new knowledge at the edge of what was previously known. It can also inspire poetry.'
		},
		{
			characterId: 'tomas-jones',
			content: 'What does it mean to build a language that isn\'t meant for the audience?'
		},
		{
			characterId: 'alice-bucknell',
			content:
				'The planet is talking to itself. Whether or not you\'re there doesn\'t really matter. It\'s not speaking for you or to you. I like the idea of a language that is just really sprawling and durational and non-penetrable. It just rolls over you and you have to kind of listen to it and let it wash over you.'
		},
		{
			characterId: 'kyle-mcdonald',
			content:
				'Google Translate is internally speaking a non-human language to itself and no one has really unpacked that. We just don\'t really care about it. There are a lot of artifacts like that, non-human artifacts of language translation and image generation, that we don\'t look at because there\'s no way for us to connect to them.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How do glitches and failures become a method rather than a problem?'
		},
		{
			characterId: 'kyle-mcdonald',
			content:
				'When a system fails it shows you the traces of its functions and how it\'s designed. One of the things artists can do is build systems that put the audience directly in an interaction loop with the glitchiness of these systems. By doing that we help build intuition for how they work.'
		},
		{
			characterId: 'alice-bucknell',
			content:
				'I was thinking quite a bit about what parts of the language do I reveal and what parts do I keep hidden. There are moments of interference, moments of a failed translation, a translation that leaks. It\'s actually kind of messy and fluid and jumps between its sources.'
		},
		{
			characterId: 'tomas-jones',
			content:
				'Do you think AI will ever produce something truly nonhuman, or does it always carry the weight of the data it was trained on?'
		},
		{
			characterId: 'alice-bucknell',
			content:
				'A lot of the buzz around AI is about demystification. I think it should be less demystifying and more remystifying. I took the same technology that is being used to demystify and instead of using it to render a language understandable, I used it to make the language even less legible.'
		},
		{
			characterId: 'kyle-mcdonald',
			content:
				'In some sense they already produce things that are nonhuman. There\'s some evidence that it doesn\'t matter what model you use or what data set you train on, if you train on a sufficiently large data set the internal representation of the world converges. Maybe there\'s really only one way to see the world. And maybe anything sufficiently intelligent that is connected to the world will be quite similar to us.'
		},
		{
			characterId: 'tomas-jones',
			content: 'What is the knowledge that AI will never have access to?'
		},
		{
			characterId: 'kyle-mcdonald',
			content:
				'There\'s information I\'ve gathered from conversations with elders in Fiji, Solomon Islands, and Papua New Guinea. Those stories are just not written down anywhere. They\'ve never been digitized. No LLM has ever been exposed to them. I\'m interested in the knowledge that comes from relationships, not just romantic relationships but also relationships with nature. These are things that many indigenous people around the world have a deep understanding of and LLMs have very little understanding of it.'
		},
		{
			characterId: 'alice-bucknell',
			content:
				'I wanted to take a language fundamentally not human and blend it with a dying earth language. A constructed language made of another constructed language, and the other half a language that is almost gone. If these are symbionts, what can the constructed language give to the Scottish Gaelic, and what can Scottish Gaelic give back?'
		}
	],
	images: [],
	background: '/media/alien-alphabets/image_17.webp'
};
