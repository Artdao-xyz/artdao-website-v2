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

export const careBotsBrowserBeastsChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'laura-butallo',
			name: 'Laura Butallo',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'bora',
			name: 'Bora',
			avatar: '/media/care-bots-browser-beasts/interview-bg.webp',
			type: 'answer'
		},
		{
			id: 'jonathan-monaghan',
			name: 'Jonathan Monaghan',
			avatar: '/media/care-bots-browser-beasts/interview-bg.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'laura-butallo',
			content:
				'How do you view digital spaces in terms of care and connection? Do they offer genuine intimacy or simulate it?'
		},
		{
			characterId: 'bora',
			content:
				"I don't perceive different mediums as separate, so the avatars are already part of the performance. In my practice everything is intertwined: digital, sound, 3D, painting, performance, etc. I do believe in energy, and connection within other realms than the ones we can explain or see only with our eyes."
		},
		{
			characterId: 'jonathan-monaghan',
			content:
				'An AI chatbot can offer some level of companionship, but genuine empathy and emotional connection is a two-way street. You need that other person—or even a pet or an animal—to feel with you for a true connection. I worry we will become accustomed to interactions with AI chatbots, which are typically very agreeable, servile, and sycophantic.'
		},
		{
			characterId: 'laura-butallo',
			content:
				'How do you approach the relationship between control and care in your work with digital beings?'
		},
		{
			characterId: 'bora',
			content:
				"The characters invest their own space. I let them be and move, thrive, fall, and be reborn. Together we form a constellation, where I don't aim to control them."
		},
		{
			characterId: 'jonathan-monaghan',
			content:
				"if these creatures could speak, they'd likely reflect our own anxieties and desires back at us, emphasizing our complex and often paradoxical dependence on digital systems. They might remind us that while we strive to control and curate our technological relationships, we're increasingly shaped and controlled by them."
		},
		{
			characterId: 'laura-butallo',
			content:
				'Do you see digital interaction as inherently limited, or does it offer new forms of authentic connection?'
		},
		{
			characterId: 'bora',
			content:
				'Communication and interaction are not limited to verbal exchange. They do respond—just not verbally. In other ways. It is just a matter of perception, and resonance maybe. Our bodies are vessels, and our bodies and minds are capable of so much more. We can feel so much.'
		},
		{
			characterId: 'jonathan-monaghan',
			content:
				'We easily forfeit so much of our personal data to the cloud. So it is likely that AI chatbots will take on very intimate and personal roles in many people\'s lives.'
		},
		{
			characterId: 'laura-butallo',
			content: 'How do you think about permanence and temporality in digital relationships?'
		},
		{
			characterId: 'bora',
			content:
				'They do not disappear. My practice is not limited to performance—it is multidimensional. I am a sound artist, 3D artist, I write too, sculpt, and paint. Every dimension of my art is fluid and interconnected. My characters are there in every part of my artistry.'
		},
		{
			characterId: 'jonathan-monaghan',
			content:
				'Through VR or simply via a web browser, users can navigate a real-time 3D environment, discovering these creatures hidden among rocks on a beach. I appreciate how this interactive dimension cultivates a more personal, intimate connection with the virtual characters.'
		},
		{
			characterId: 'laura-butallo',
			content: "What concerns do you have about how we're learning to relate to digital beings?"
		},
		{
			characterId: 'bora',
			content:
				"I would never limit the interaction of my avatars to 'being able to respond.' I even find it dangerous to restrict interaction to that frame. Connection happens and manifests outside of that frame too."
		},
		{
			characterId: 'jonathan-monaghan',
			content:
				'Interactions with real people are usually not like that, so I worry what could happen in that dissonance. It is a kind of mutual entrapment and codependency.'
		}
	],
	images: [],
	background: '/media/care-bots-browser-beasts/interview-bg.webp',
	interviewerText: 'Laura Butallo'
};

