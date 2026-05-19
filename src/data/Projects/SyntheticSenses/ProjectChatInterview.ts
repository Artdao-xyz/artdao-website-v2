import type { ChatInterviewData } from '../Orb/ProjectChatInterview';

export const syntheticSensesChatInterviewBackground =
	'/media/synthetic-senses/N01-AbelandI_02-scaled.webp';

export const syntheticSensesChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'parag',
			name: 'Parag Mital',
			avatar: '/media/synthetic-senses/Captura_de_ecra_2026-01-29_as_16.45.15.webp',
			type: 'answer'
		},
		{
			id: 'aurora',
			name: 'Aurora Mititelu',
			avatar: '/media/synthetic-senses/MetaMahala-AuroraMititelu_001.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas',
			content: 'How does feedback shape the systems you build?'
		},
		{
			characterId: 'parag',
			content:
				"That's a big part of my background—utilizing theory and building systems that help us understand the theory better. They reflect back on each other. Part of it is actually interrogating gaps in the theory. The theory didn't talk about how online inference should occur, so I model it based on what I think it does and see if that matches the lived experience. There's a lot of interplay—the more we learn about computational techniques, the more it pushes what we might know about our own human experience."
		},
		{
			characterId: 'aurora',
			content:
				'The first time I used machine learning in my work was back in 2019. The visuals would change features like color depending on who was in front of the camera. At the time, I was interested in the idea of an artwork that changes based on the viewer—something that reads you and then shows you what you want to see. That was really the first work where I started to experiment seriously with feedback systems. Feedback loops and change became very important materials for me.'
		},
		{
			characterId: 'tomas',
			content: 'What role does embodied experience play when working through digital systems?'
		},
		{
			characterId: 'parag',
			content:
				"I'm less interested in it being data and more about lived experience. I'm more interested in the connections to quantum physics and wave-particle duality—understanding lived experience and the quality of experience. Data has this connotation that feels very extractive and not really present."
		},
		{
			characterId: 'aurora',
			content:
				'In my more recent work, embodied experience is very important. That\'s why I care so much about installation, spatial work, and interactivity. I want people to have bodily autonomy. I want people to move, choose, and engage sculpturally. Texture, space, and physical engagement are crucial.'
		},
		{
			characterId: 'tomas',
			content: 'Do you see your work as resisting or augmenting technological systems?'
		},
		{
			characterId: 'parag',
			content:
				"You have companies basically replacing musicians, but somewhere beneath that are people building tools that still value human labor and want to augment musicians' capabilities. Especially now that everybody can code by just talking to AI—if you know what questions to ask, you can build it. That's really empowering and interesting."
		},
		{
			characterId: 'aurora',
			content:
				"I don't think my work truly resists technology in a societal sense. It reflects how people already interact with technology and adds an absurd layer. Contemporary art doesn't have the power to change tech structures at scale. The resistance exists on a personal level. That's where its power lies."
		},
		{
			characterId: 'tomas',
			content: 'What matters more—accuracy or the questions these systems raise?'
		},
		{
			characterId: 'parag',
			content:
				"For a scientist, the result is about your p-value, statistical significance. For an artist, it's about whether it raised questions with humanity, whether people write about it, whether it connects people. Both are really important and go hand in hand."
		},
		{
			characterId: 'aurora',
			content:
				"I don't think machines feel things. I don't believe algorithms have consciousness or emotions. But I do believe people project feelings onto them. Even though I don't think Abel feels anything, interacting with him can feel emotionally real. And that's important. Connection often matters more than whether something is 'real.'"
		}
	],
	images: [],
	background: syntheticSensesChatInterviewBackground
};
