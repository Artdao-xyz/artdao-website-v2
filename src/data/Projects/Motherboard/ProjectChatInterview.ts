import type { ChatInterviewData } from '../Orb/ProjectChatInterview';

export const motherboardChatInterviewBackground = '/media/motherboard/download-12%202.webp';

export const motherboardChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'wednesday',
			name: 'Wednesday Kim',
			avatar:
				'/media/motherboard/c-PersonalWednesdayKim__ScreenShot20240419at1.57.21PM_1713560265804.webp',
			type: 'answer'
		},
		{
			id: 'addie',
			name: 'Addie Wagenknecht',
			avatar: '/media/motherboard/jeremy-bailey-addie-wagenknecht.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas',
			content: 'What does invisible labor look like in your practice?'
		},
		{
			characterId: 'addie',
			content:
				'Most artists show about 5% of their work. The other 95%—the repetition, setup, maintenance—is invisible, and the visible part can make it look effortless.'
		},
		{
			characterId: 'wednesday',
			content:
				'For me, the third edition of The Rise of the Care Machines happened in my department gallery, where I built everything myself with no assistance. That process—assembling, installing, managing—was itself invisible labor.'
		},
		{
			characterId: 'tomas',
			content:
				'How do you see the connection between maintaining technology and the labor of care?'
		},
		{
			characterId: 'addie',
			content:
				'Maintaining machines is messy and imperfect. They break, they don’t understand. In a way, it mirrors parenting—constant attention, emotional investment, fixing things that go wrong.'
		},
		{
			characterId: 'wednesday',
			content:
				'Technology needs care to function. Without attention, it stops working. The same is true of mothering: neither runs on its own. That’s why I call them care machines.'
		},
		{
			characterId: 'tomas',
			content: 'How do errors and mistakes factor into your work?'
		},
		{
			characterId: 'wednesday',
			content:
				'Frustration is part of both motherhood and making art. Things break, need fixing, happen all at once. Over time, I’ve learned to embrace errors—sometimes the mistakes become part of the work itself.'
		},
		{
			characterId: 'addie',
			content:
				'I start thinking about optimization, but I also notice how kids interact with technology—phones, screens, constant connectivity. Observing that has shaped what I consider labor, attention, and care in a digital context.'
		},
		{
			characterId: 'tomas',
			content:
				'What do you want people to take away from work that deals with motherhood and technology together?'
		},
		{
			characterId: 'wednesday',
			content:
				'I want people to see that mothers are making ambitious, strange, digital art—not just work about babies or domestic life. The surprise comes from the fact that this work exists at all. Motherhood is hard, but we are creating, experimenting, and producing.'
		},
		{
			characterId: 'addie',
			content:
				'I want to show alternative ways of thinking about the female body and labor. Women, mothers, and caretakers are often expected to be conditionally invisible—without pay, without recognition, without space. My work asks: how do you make that invisibility visible, tangible, and legible?'
		}
	],
	images: [],
	background: motherboardChatInterviewBackground
};
