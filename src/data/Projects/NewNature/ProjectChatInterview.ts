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
				'“Is it being in this place? Is it the image of this place? Is it the image as represented on a screen? What’s going on here, and does it matter?”'
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
				'“I actually don’t use scientific data. Instead, I wanted to try to embody the process of the field ecologist... I try to work in a way that gestures poetically with the processes of data analysis and the collection of data.”'
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
				'“We use these different tools as different ways of sensing and absorbing... you have to kind of understand the spectrum.”'
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
				'“Nature is the sort of fiction, this bloated fiction... A marker on the horizon while you’re sailing over the ocean. Where the horizon moves away from you at the very same speed that you approach it. Can never quite reach it.”'
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
				'“The films and images and objects that I make, I see them more as like a symptom of a lived life than like a discrete goal... I’m interested in creating conversation and dialogue.”'
		}
	],
	images: [],
	background: '/media/new-nature/bg-interview.webp'
};
