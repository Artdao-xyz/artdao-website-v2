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

export const digitalHomesteadingChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'laura-butallo',
			name: 'Laura Butallo',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'resonant-love',
			name: 'Resonant Love',
			avatar: '/media/digital-homesteading/interview-bg.webp',
			type: 'answer'
		},
		{
			id: 'huntrezz',
			name: 'Huntrezz',
			avatar: '/media/digital-homesteading/interview-bg.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'laura-butallo',
			content:
				'How do you view digital spaces in terms of building sustainable, long-term creative practices? Do they offer genuine autonomy or just different forms of dependency?'
		},
		{
			characterId: 'resonant-love',
			content:
				'We resist the totalizing influence of these cyberarchitectures which resemble slot machines or malls, and move into something messier. We live every day on stolen Indigenous land. Cyberspace is land that did not need to be stolen—it was created and rented back to us. Corpotech is a landlord extracting rent from our intimacies.'
		},
		{
			characterId: 'huntrezz',
			content:
				'"I am still seduced by the \'escape\' promise; AI, 3D printing, and VR/AR have opened doors for me in wild ways, even as I ration watt-hours on a solar rig and watch my face-filter artwork get removed by Instagram and Facebook. The way through is to live with limits and understand their reasons."'
		},
		{
			characterId: 'laura-butallo',
			content:
				'How do you balance the desire for visibility and connection with the need for technological independence?'
		},
		{
			characterId: 'resonant-love',
			content:
				'"We\'re not trying to make something that is totalizing. We\'re not really thinking about how it scales, more so thinking about something that can spread like a seed—with the possibility to germinate in communities beyond ours, for people to be utilizing these tools for their networks as well."'
		},
		{
			characterId: 'huntrezz',
			content:
				'"People assume I want to be maximally visible because I am an artist, but I do not. A safe system connects the right people in the right ways. Privacy has value, and it is fragile. It can also be an illusion, so yes, stay safe out there, folkz."'
		},
		{
			characterId: 'laura-butallo',
			content:
				'What role do material constraints—energy, hardware, geography—play in shaping your digital practice?'
		},
		{
			characterId: 'resonant-love',
			content:
				'"We must make useful software and take that with us, and figure out how to build a system as cheaply as possible that can run code generation LLMs locally. They want you to become dependent. Do not let them win."'
		},
		{
			characterId: 'huntrezz',
			content:
				'"I count electricity, batch heavy jobs for sunny hours, compress and cache instead of brute-forcing, and keep projects portable because I consider the impacts of my choices. Capitalism trains us not to feel environmental costs: the consumer is separated from the consumed."'
		},
		{
			characterId: 'laura-butallo',
			content:
				'How do you approach the maintenance and inevitable breakdown of the systems you build?'
		},
		{
			characterId: 'resonant-love',
			content:
				'"The idea of an \'app\' as this solid architectural form doesn\'t suit our purposes. When we build the orange peel way, we can burn the entire software layer, and our data and metadata will leave us in a place where it is easier to build another website."'
		},
		{
			characterId: 'huntrezz',
			content:
				'"Decay is quick in tech, fr. Nothing is safe. Consider it all temporary, like a garden you tend: prune, mulch, reseed. The best you can do is enjoy it while it lasts and document it along the way."'
		},
		{
			characterId: 'laura-butallo',
			content:
				'Do you see your work as preparation for a different kind of future, or as a response to present conditions?'
		},
		{
			characterId: 'resonant-love',
			content:
				'"Perhaps again we might say we are not exactly preparing for a future but enacting a present. This meridian of time is the substance which moves us toward a desired future. Call it utopia, call it revolution, or call it a long stroll with a good friend."'
		},
		{
			characterId: 'huntrezz',
			content:
				'"End times, yes. They are here, they have come and gone, and the world as we knew it will not return. I am preparing to make it through these turbulent times to a future where we coexist with our ecosystem in a more harmonious way, because there is no other choice."'
		}
	],
	images: [],
	background: '/media/digital-homesteading/interview-bg.webp',
	interviewerText: 'Laura Butallo'
};

