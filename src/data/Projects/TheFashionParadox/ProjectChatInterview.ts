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

export const theFashionParadoxChatInterview1: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'matheus-araujo',
			name: 'Matheus Araújo',
			avatar: '/media/the-fashion-paradox/interview-bg.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'Can you tell us more about your creative process, from creation to completion?'
		},
		{
			characterId: 'matheus-araujo',
			content:
				'Today I still use 3D but also do a lot of Photoshop and image manipulation. For clothing, I think about wearability—observing what people wear on the street, considering utility (Brazil is very hot), and appropriate materials.\n\nMy art now connects with wearability, thinking about where people will use each piece. Previously with digital art, I\'d create and post immediately—have an idea, execute it, move on. Now it\'s more time-consuming.\n\nMy ideas start from fully formed concepts, with plans for future creations. My creative process heavily involves colors, materials, and forms. I create digitally, then transform it into something material.'
		},
		{
			characterId: 'tomas-jones',
			content: 'Where did the name Museu Gráfico Visual come from?'
		},
		{
			characterId: 'matheus-araujo',
			content:
				'I wanted my art to be in a museum, as if creating my own museum. People often refer to the brand as \"O Museu\" (The Museum), but it\'s actually \"A Museu\" because it\'s \"A marca\" (The brand).\n\nThe name also reflects my educational background in Visual Communication Design. When shifting toward clothing, I felt conflicted about leaving behind my graphic design training—I had expected to create editorial designs and visual identities for print media. The name was partly a way to reassure myself I wasn\'t abandoning graphic design. I incorporate this connection by sending graphic posters with purchased pieces.\n\nSometimes I consider simplifying the name to just \"Museu,\" which sounds elegant, but in Brazil there may be restrictions on registering certain names. It\'s a brand, not an actual museum.'
		},
		{
			characterId: 'tomas-jones',
			content:
				'You mentioned telling narratives through your clothing. What themes do you explore with your Museu Gráfico Visual project?'
		},
		{
			characterId: 'matheus-araujo',
			content:
				'Visually, I create small narratives. My visual perspective is growing. With recent work, I wanted to demonstrate I can make elaborate pieces, considering photography and makeup, not just following the frenzied rhythm of printing, photographing, and posting on social media. I\'m going in the opposite direction, being more selective about releasing work.\n\nI sometimes wonder if Museu Gráfico Visual is separate from me or always about me. Initially, it was about monetizing my digital art through screen printing, but now it feels like its own entity with an established language. My target audience is someone aware of fashion and art\'s impacts, who understands art. When someone sees my piece worn on the street, I want them to recognize the wearer appreciates art.'
		}
	],
	images: [],
	background: '/media/the-fashion-paradox/interview-bg.webp'
};

export const theFashionParadoxChatInterview2: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'costas-kazantzis',
			name: 'Costas Kazantzis',
			avatar: '/media/the-fashion-paradox/interview-bg-2.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content:
				'How do you see the combination between natural surrealistic landscapes with technological spaces, humans and fashion?'
		},
		{
			characterId: 'costas-kazantzis',
			content:
				'I’m drawn to landscapes that feel both familiar and off—spaces that could exist, but maybe not here, or not yet. Natural and surreal elements help me build that ambiguity, and when I combine them with technological spaces, human forms, or digital garments, something starts to shift. It’s like a tension between what we know and what we sense.\n\nI’m not interested in perfect simulation—I’d rather create a kind of dream logic, where a landscape might breathe, a piece of clothing might behave like water, or a human figure might glitch or vanish. These combinations help me explore how identity, memory, and desire can move through a world. They also allow me to work with scale, distortion, softness—things that blur the line between the organic and the digital, between presence and disappearance.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you see the growth of fashion in virtual landscapes? How do they combine for you?'
		},
		{
			characterId: 'costas-kazantzis',
			content:
				'I see fashion in virtual landscapes not just as clothing but as atmosphere, gesture, storytelling. In digital space, garments don’t have to follow gravity or logic—they can glitch, dissolve, or behave like weather. I’m drawn to that freedom. For me, fashion becomes part of the world itself, not separate from it. It’s not just something worn by an avatar, but something that shapes the mood of the space, the way movement feels, the way bodies appear or disappear.\n\nMy background in fashion media taught me how to think about texture, silhouette, presence—and game engines gave me the space to reimagine all of that without physical limitations. The two come together in how I design environments that feel tactile, intimate, and slightly unreal.'
		},
		{
			characterId: 'tomas-jones',
			content:
				'How has your understanding of the relationship between humans and digital spaces evolved through your creative practice?'
		},
		{
			characterId: 'costas-kazantzis',
			content:
				'Over time I’ve started to see digital spaces less as separate from the physical world and more as extensions of it—emotional, relational, sometimes even spiritual extensions. In the beginning, I thought of them as places to escape into, but now I think of them as places where we process, remember, connect.\n\nThrough my practice—and more recently through my PhD research, which explores how game engines can hold queer memory and collaborative storytelling—I’ve come to understand that how we move through digital environments says a lot about how we relate to ourselves and each other—how we grieve, desire, wait, disconnect. The screen isn’t a barrier. It’s a surface where certain feelings can take shape. For me, the relationship between humans and digital space is no longer about immersion or simulation—it’s about intimacy, friction, presence, and sometimes, care.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How do queer narratives influence the worlds that you create?'
		},
		{
			characterId: 'costas-kazantzis',
			content:
				'Queer narratives influence the way I think about structure, time, and presence inside the worlds I create, they offer ways of telling stories that aren’t linear or goal-driven, that hold ambiguity, softness, contradiction. I’m interested in what it means to build environments where nothing has to resolve, where characters aren’t defined by success or failure but by how they relate, drift, connect, disappear. Queerness for me is not just a theme but a method, a way of designing space that resists control and embraces fluidity, and a way of holding memory—especially the kinds of queer memory that are fragile, collective, and often left undocumented.'
		}
	],
	images: [],
	background: '/media/the-fashion-paradox/interview-bg-2.webp'
};

