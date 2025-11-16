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

export const cafeExeChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'alicescope',
			name: 'Alice Scope',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		}
	],
	messages: [
		{
			characterId: 'alicescope',
			content: 'Café.exe examines the internet\'s shift from an anarchic counterculture to what Douglas Rushkoff now calls "techno-feudalism." The seven featured artists ask what we misunderstood about the internet from the start. Instead of mourning its collapse, the exhibition revisits the cyber café as the original interface between networked ideals and social reality—a prototype for collective access that was never fully realized.\n\nThere was a time—specifically in 1993, at London\'s Cyberia Café—when the internet still felt like the future: a row of flickering CRTs, the stale smell of Nescafé Sweet & Creamy, the haze of Marlboro Reds. Fans yelling across the room in Counter-Strike. You paid by the hour for your chance to live inside the machine. Remember sending emails in public?\n\nWhat seemed like a pastime was already a preview of a world increasingly governed by algorithmic logic. Slowly, finance, romance, and politics began to follow the same protocols. Elections started to look like games—candidates, mailing lists, and media polling all managed in single software environments. Romance became a sequence of gestures and interfaces. Life itself became gamified, with rippling consequences.\n\nIn 2005, Jesper Juul defined games as Half-Real—structured by rules that are binding and real, yet animated by fictional worlds. In Gamer Theory (2007), McKenzie Wark argues that "games are no longer a counterpoint to the world, they are the world\'s double." In this world of multiplicity, games are fictional spaces that still feel honest.\n\nIn Café.exe, eight computers run seven games, each stored in its own folder along with'
		}
	],
	images: [],
	background: '/media/cafe-exe/interview-bg.webp'
};

