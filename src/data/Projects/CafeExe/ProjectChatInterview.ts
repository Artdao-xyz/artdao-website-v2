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
			content: `Café.exe examines the internet's shift from an anarchic counterculture to what Douglas Rushkoff now calls "techno-feudalism." The seven featured artists ask what we misunderstood about the internet from the start. Instead of mourning its collapse, the exhibition revisits the cyber café as the original interface between networked ideals and social reality—a prototype for collective access that was never fully realized.

			There was a time—specifically in 1993, at London's Cyberia Café—when the internet still felt like the future: a row of flickering CRTs, the stale smell of Nescafé Sweet & Creamy, the haze of Marlboro Reds. Fans yelling across the room in Counter-Strike. You paid by the hour for your chance to live inside the machine. Remember sending emails in public?

			What seemed like a pastime was already a preview of a world increasingly governed by algorithmic logic. Slowly, finance, romance, and politics began to follow the same protocols. Elections started to look like games—candidates, mailing lists, and media polling all managed in single software environments. Romance became a sequence of gestures and interfaces. Life itself became gamified, with rippling consequences.

			In 2005, Jesper Juul defined games as Half-Real—structured by rules that are binding and real, yet animated by fictional worlds. In Gamer Theory (2007), McKenzie Wark argues that "games are no longer a counterpoint to the world, they are the world's double." In this world of multiplicity, games are fictional spaces that still feel honest.

			In Café.exe, eight computers run seven games, each stored in its own folder along with additional work-in-progress files. Eight visitors sit side by side, encountering exactly the same files—or completely different worlds—echoing the ways the web, once shared, has splintered into personalized realities.

			Within this framework, each game functions as an experiment in shared cognition: Bucknell repositions the planet as a co-player; Yan synchronizes bodies with atmospheric systems; Frenetik Void's Sereno de mi Mente encrypts autobiography into a surreal treasure hunt; Jiang drifts through digital afterlives; Triantafyllidis, in Feral Metaverse, stages cooperation as the only viable strategy in a stripped-down digital wilderness; Laughton exposes the aesthetics of simulated collapse; and Kevin Peter's Passage constructs a forest that functions like a living circuit, as the player drifts by like a passing signal. Together, this cohort of game makers asks how play—once an integral feature of the early web—might become a method for building mutual intelligences and autonomy within the infrastructures we've inherited.

			Café.exe doesn't long for the early internet; it searches for forms of collaboration, imagination, and repair that were overlooked at its formation—and how we might begin to build them again.

			This exhibition is curated by Alice Scope as part of the PCO (Partial Common Ownership) soft launch, initiated and incubated by Artdao and the Future Art Ecosystems team at Serpentine Arts Technologies, with incubation support from RadicalxChange. PCO enables early supporters to take part in the studio's growth—providing a clear, practical way to back long-term experimentation while sharing in its future outcomes. PCO doesn't replace existing models; it extends and augments them by creating an expanded framework to accompany the life of a practice as it moves through time and contexts. With PCO, art is not simply owned, but co-evolved with the communities that sustain it.`
		}
	],
	images: [],
	background: '/media/cafe-exe/interview-bg.webp'
};

