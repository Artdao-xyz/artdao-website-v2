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

export const everyCreationIsLossChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'chepertom',
			name: 'Chepertom',
			avatar: '/media/every-creation-is-loss/interview/pfp1.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'How does digital entropy challenge creation and preservation?'
		},
		{
			characterId: 'chepertom',
			content: 'The quote "Every creation is a loss" comes down to even a deeper meaning for me than Glitch Art itself, I was looking for a way to express this idea that when you\'re creating something, when you put things together and start to construct whatever you do, you need to remind yourself that it\'s gonna disappear at some point.\n\nIt\'s gonna break apart, it\'s gonna collapse. It\'s gonna fall down into chaos again. You can put as much energy as you want, at some point, it won\'t be there. To be really sincere with this idea of entropy and chaos, trying to bypass the idea that you can create something eternal - you need to be more sincere as a creator and tell yourself that it\'s gonna melt into chaos.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you view impermanence in your work?'
		},
		{
			characterId: 'chepertom',
			content: 'When I think about my work, I\'m putting it on a timeline and waiting for it to decline. If I don\'t see the decline, it doesn\'t feel sincere to me. I had this discussion with NFTs as well - some people asked if it would hold the same image intact eternally, and I said I hope not.\n\nI just put it there, and I hope one day it\'s going to get corrupted. I find it beautiful because that\'s what life is about - always shifting, changing form, with the past starting to feel obsolete.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How has your personal background influenced your perspective on technological impermanence?'
		},
		{
			characterId: 'chepertom',
			content: 'I was still studying drawing at the time and doing my glitch art experiments. I thought of it as an underground movement, with people doing festivals in Eastern Europe and connecting around anarchist and punk ideas.\n\nI discovered the ethical philosophy behind the Internet—more anarchist, punk, cyberpunk—the idea that it should be a place where everyone can create spaces and have conversations.\n\nThis was enlightening for me, coming from a contemporary art scene that was more focused on ego than community.'
		}
	],
	images: [],
	background: '/media/every-creation-is-loss/interview/interview-bg.webp'
};

export const everyCreationIsLossChatInterview2: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'asdrubal-gomez',
			name: 'Asdrúbal Gomez',
			avatar: '/media/every-creation-is-loss/interview/pfp3.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'How does digital entropy challenge creation and preservation?'
		},
		{
			characterId: 'asdrubal-gomez',
			content: 'Unpredictability is at the core of my creative process. It\'s not an afterthought but an essential part of how I approach art. I often integrate unpredictability from the start, allowing the medium, tools, and digital processes to guide the outcome.\n\nThis comes from my deep fascination with chaos and emergence. I don\'t see giving up control as a loss but as a form of collaboration with the unknown. There\'s an energy in uncertainty that leads to visual and conceptual breakthroughs. I see myself more as an orchestrator than a dictator of the artwork, allowing for an organic evolution of form and meaning.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you balance your artistic vision with unexpected generative outcomes?'
		},
		{
			characterId: 'asdrubal-gomez',
			content: 'I think the digital space is exactly where error becomes a blessing, giving us an aesthetic that detaches us from figurative, binary representation.\n\nIt\'s hybridization, as if the threshold of dream and reality united to create a multidimensional space. Chance leads me to more interesting dialogues. An accident can be an accident or an opportunity.\n\nI value the present and experience technology in its transitory state. I don\'t worry too much about technological advancement, not because I don\'t believe in evolution, but because I like to develop at a pace that feels real to me.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How has your personal background influenced your perspective on technological impermanence?'
		},
		{
			characterId: 'asdrubal-gomez',
			content: 'About ten years ago, I arrived in Argentina from Margarita Island in the Venezuelan Caribbean, driven by a difficult social and economic situation.\n\nOne of the things that really motivated me was wanting to grow in what I was passionate about: expressing myself. When I arrived in Buenos Aires, there were tough moments of adaptation, far from home, but it was a key place in my career. It transformed my vision as an artist and gave me the chance to develop myself and expand through experience.\n\nNow I live on the Argentine coast in Mar del Plata, which has reconnected me with my nature as someone from the sea.'
		}
	],
	images: [],
	background: '/media/every-creation-is-loss/interview/interview-bg-2.webp'
};

