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

export const theEndOfTheMuseChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'laura-butallo',
			name: 'Laura Butallo',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'ram',
			name: 'RAM',
			avatar: '/media/the-end-of-the-muse/interview/pfp1.webp',
			type: 'answer'
		},
		{
			id: 'lorenipsum',
			name: 'lorenipsum',
			avatar: '/media/the-end-of-the-muse/interview/pfp2.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'laura-butallo',
			content: 'How do you define your work?'
		},
		{
			characterId: 'ram',
			content: 'I currently define my work through a balance of the minimal and the objectively maximal — whether by shaping negative space or layering symbolic meaning. Lately, I\'ve been drawn to the human figure and its ability to contort, compress, and adapt within the confined limits of my canvases. I aim to evoke a grand, larger-than-life presence in my characters, placing them in scenarios that reflect the lowest points — a contrast that anchors the sublime in the depths.'
		},
		{
			characterId: 'lorenipsum',
			content: 'I think I am usually not very successful in definitions. In fact, the reason to creating visual artworks is that I think words are sometimes inadequate for communication. But if I were to define it, it could be \'a part of my journey to know myself\'. I somehow reflect the feelings inside me in my works. Sometimes I reveal feelings from moments completely related to myself as well as the feelings that other arts / paintings, books, and movies make me feel. The most recurring motif in last period artworks is a character in a liminal space. Each different character - face or faceless - has similar emotions at some point in time. The commonalities behind identity and different stories have an already woven communication that does not need words - a mirroring made in moments -'
		},
		{
			characterId: 'laura-butallo',
			content: 'How do you define beauty in today\'s digital context?'
		},
		{
			characterId: 'ram',
			content: 'I believe beauty lives in the eye of the beholder, now more than ever in our digital age. No two people carry the same lens; perception is shaped by memory, emotion, and lived experience. You can\'t reduce something so vast and subjective to a single definition. Instead, you need to rise above the noise. Become something larger. Something that demands to be seen.'
		},
		{
			characterId: 'lorenipsum',
			content: 'I generally believe that almost all concepts are relative. We all see the world with different perceptions. But in every part of life, we\'re constantly forced to decide what is right or wrong, what is beautiful or ugly, what is acceptable or unacceptable. Being accepted is an important human need, and that\'s why it\'s easy to be manipulated and to follow general rules. It\'s a safe path, but it also has a dangerous side that can break your connection with yourself. At this point, I think that when you first accept yourself and your art, those judgments and rules lose their rigidity.'
		},
		{
			characterId: 'laura-butallo',
			content: 'How would you describe the role of deformation in your work?'
		},
		{
			characterId: 'ram',
			content: 'For me, deformation is not disfigurement. It\'s emphasis. It becomes a language through which my characters speak. I use it to guide the viewer\'s gaze across the figure, compressing them into spaces so tight they feel almost claustrophobic. By stretching or scaling features to near-absurd proportions, I highlight what matters most: the tension, the emotion, the essence buried beneath the form.'
		},
		{
			characterId: 'lorenipsum',
			content: 'For me, deformation is not disfigurement. It\'s emphasis. It becomes a language through which my characters speak. I use it to guide the viewer\'s gaze across the figure, compressing them into spaces so tight they feel almost claustrophobic. By stretching or scaling features to near-absurd proportions, I highlight what matters most: the tension, the emotion, the essence buried beneath the form.'
		},
		{
			characterId: 'laura-butallo',
			content: 'Where does inspiration come from in your creative process?'
		},
		{
			characterId: 'ram',
			content: 'Lately, I\'ve been deeply inspired by artists like Gao Hang, Laust Højgaard, and David Rappeneau. Gao\'s ability to capture nostalgia with such simplicity feels almost sacred. Laust\'s manipulation of proportion, the way he shapes form with restraint and clarity, is something I hold in high regard. David\'s stylized use of clothing and alternative fashion encourages me to bring my own love for fashion into my characters, letting garments carry their own stories across the canvas.'
		},
		{
			characterId: 'lorenipsum',
			content: 'I was a visual designer before I started creating for myself as lorenipsum. In school, our teachers used to say, "Don\'t fall in love with what you do," because design is a product that solves a problem. It may need to change depending on the client\'s wishes. It might not be liked. It\'s always open to rejection. That was heartbreaking for me. Why do it if you can\'t love it? But in art that you make for yourself, there are no rules, no imposed visuals. The only critic is you. I think one of the most beautiful things in this world is that freedom. You can fall in love with what you do. It doesn\'t have to follow certain rules. It doesn\'t have to be perfect. Even if it\'s flawed, even if no one likes it, as long as you enjoy doing it and you like it, you can keep making it. What kills inspiration is the criticism we get from outside or from our own heads. When we can let go of that, inspiration becomes natural.'
		},
		{
			characterId: 'laura-butallo',
			content: 'What do you seek to convey through the alteration of form?'
		},
		{
			characterId: 'ram',
			content: 'Altering form is my way of breaking free from the illusion of perfection and the rigid ideals of what art is supposed to be. I use distortion not just as a visual tool, but as a lens to express how I perceive the world around me. There\'s honesty in imperfection. I embrace the mistakes, the irregularities, the unresolved. They become part of the narrative, embedded in the shape itself. I care about truth. We live in a world governed by standards, systems, and expectations. I want to break that, even if it\'s just a small crack or a quiet dent. Through these fractured forms, I\'m not striving for flawlessness, only for truth.'
		},
		{
			characterId: 'lorenipsum',
			content: 'I think perfection is a concept that feels artificial, but we all try to get there somehow. Some people say it\'s what keeps us going. But I think real progress starts with accepting things as they are. The message I usually want to share is not to hold ourselves captive to identities and stereotypes, and to appreciate the beauty of looking deeper. In this age of social media, we come across so much so-called perfection, as if we\'d be satisfied if we were just something more. But there\'s always more, and it\'s impossible to achieve. When you stop trying to be accepted and start accepting yourself, you\'re the closest you\'ll ever get to being satisfied.'
		},
		{
			characterId: 'laura-butallo',
			content: 'What are the greatest challenges in trying to convey emotional authenticity?'
		},
		{
			characterId: 'ram',
			content: 'One of the greatest challenges in conveying emotional authenticity is the struggle of being seen. In a world so vast, and an internet even more immense, it\'s easy to feel invisible amid the noise. The pressure to follow trends or create for validation can dilute the very soul of your work. Many of the artists who inspire me are those who defied the need for academic acceptance, carving space for deeply personal narratives. Their courage gave me permission to tell my own story. It may not resonate with the masses, but it will always find someone who understands. Another challenge is resisting the pull of saturation. What works for others might leave your own voice hollow if you chase it. Emotional authenticity means honoring your lived experience, even when it\'s quiet or difficult. It\'s about finding that delicate balance between sharing and staying true to yourself.'
		},
		{
			characterId: 'lorenipsum',
			content: 'Sometimes people see my work and find it strange or depressing. For some, healthy and beautiful art consists of happy or cute images. I don\'t agree with that. I think the most valuable thing is to look at what\'s inside without labeling it as good or bad. The repressed or ignored parts stay inside a person like a ghost. Art is an alchemy that transforms them. I wish there were more people who could look at art and different aspects of existence with interest and without judgment. It would make life more colorful and sincere.'
		}
	],
	images: [],
	background: '/media/the-end-of-the-muse/interview/interview-bg.webp'
};

