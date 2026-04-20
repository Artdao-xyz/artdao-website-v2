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

export const newNatureChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'sara-ludy',
			name: 'Sara Ludy',
			avatar: '/media/new-nature/about-3.webp',
			type: 'answer'
		},
		{
			id: 'mark-dorf',
			name: 'Mark Dorf',
			avatar: '/media/new-nature/about-1.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'How do you understand the boundary between real and virtual in your practice?'
		},
		{
			characterId: 'sara-ludy',
			content:
				'“There isn’t a line, there’s a field.”'
		},
		{
			characterId: 'mark-dorf',
			content:
				'I think this boundary is increasingly blurry while also retaining a significant set of differences. Is "the real" being in a place? Is "the virtual" the image of a place? What does it mean to observe an image on a screen? One core of my practice is the exploration of perception and how what we often refer to as "virtual spaces" and "image culture" shape the lived experience.'
		},
		{
			characterId: 'tomas-jones',
			content: 'What role does scientific data play in your work with nature?'
		},
		{
			characterId: 'sara-ludy',
			content:
				'“Media theorists love to remind us that the digital isn’t immaterial—that its existence is predicated on physical hardware. And that’s true, for the mechanics. But every artist knows that other things happen when you work with digital material.”'
		},
		{
			characterId: 'mark-dorf',
			content:
				"I actually don't use scientific data in my work. I often try to embody the perspective of a field ecologist… I try to work in a way that gestures poetically to and with the processes of observation, data collection, and analysis."
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you approach the relationship between different mediums in your practice?'
		},
		{
			characterId: 'sara-ludy',
			content:
				'“For me, the medium is a pathway for transmission. Whether it’s painting, moving image, or simulation, what matters is the energy that moves through the work and how it shows up... I’m less concerned with fitting into a category than with what comes across.”'
		},
		{
			characterId: 'mark-dorf',
			content:
				'I use different tools and materials as needed in order to fit within different concepts that I am exploring at the time. Each medium or material has its own history and set of connotations.'
		},
		{
			characterId: 'tomas-jones',
			content: 'What does “nature” mean to you after years of working with this concept?'
		},
		{
			characterId: 'sara-ludy',
			content:
				'“I often return to the idea that everything begins in consciousness—and who knows what kind of material that is. Simulation becomes a way to probe this paradox; the everyday as both physical and immaterial, a kind of stable hallucination we collectively agree on.”'
		},
		{
			characterId: 'mark-dorf',
			content:
				'Nature is a sort of bloated fiction based off of a history of images that are fictions unto themselves, these images are never without bias. Nature to me is something that is never quite grasped because the moment that you believe yourself to be present within it, is the moment that it changes entirely. I see it as marker on the horizon while you’re sailing over the ocean; the horizon moves away from you at the very same speed that you approach it. Can never quite reach it.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you balance intuition and intentionality in your creative process?'
		},
		{
			characterId: 'sara-ludy',
			content:
				'“I work from an intuitive space and let the everyday unfold into my work organically. Things sometimes appear that I didn’t consciously set out to include, and I realize later they’re tied to something I’ve experienced... it always goes back to embodiment.”'
		},
		{
			characterId: 'mark-dorf',
			content:
				'The films and images and objects that I make, I see them more as symptoms of a lived life than a discrete goal... They often begin quite intuitively and gesturally. Once I identify the beginnings of a language or methodology that has developed, I hone that in and try to navigate that language with an increasing sense of intention.'
		}
	],
	images: [],
	background: '/media/new-nature/bg-interview.webp'
};
