import type { ChatInterviewData } from '../Orb/ProjectChatInterview';

export const humanCausedErrorChatInterviewBackground =
	'/media/human-caused-error/image2-1198x1200%201.webp';

export const humanCausedErrorChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'marco',
			name: 'Marco Donnarumma',
			avatar: '/media/human-caused-error/marco-donnarumma_by-dario-lagana_2_ed.webp',
			type: 'answer'
		},
		{
			id: 'monica',
			name: 'Mónica Rikić',
			avatar: '/media/human-caused-error/image.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas',
			content:
				"What does it mean to work with machines that don't behave as expected and how does that reshape your understanding of control?"
		},
		{
			characterId: 'marco',
			content:
				"For me, it's essential to push technology to the point where it stops behaving as intended. That's where it becomes interesting. You discover what it cannot do, what it resists, and that opens new possibilities. The unpredictability is not a limitation, it's the core of the experience."
		},
		{
			characterId: 'monica',
			content:
				"I try to understand why something is not working, but I'm also open to letting it go somewhere else. That's where you find things you didn't plan. If everything works perfectly, you miss that space. And that space is where artistic research actually happens."
		},
		{
			characterId: 'tomas',
			content:
				'Both of your works engage with systems designed to assist or extend the human body. Where do you see the line between support and control?'
		},
		{
			characterId: 'marco',
			content:
				"I think the problem is when technology tries to stabilize the body too much. The body is not stable, it changes all the time. When you design systems that assume stability, you end up controlling or limiting the body instead of supporting it. I'm more interested in systems that adapt to this constant change."
		},
		{
			characterId: 'monica',
			content:
				"Support becomes control when the system decides what is correct behavior. Many assistive technologies are built with very narrow ideas of what a body should do. If you don't fit that, you are excluded. That's why I try to create systems that don't impose a single way of interacting."
		},
		{
			characterId: 'tomas',
			content:
				'Error and malfunction appear as central elements in both of your practices. Can failure be productive?'
		},
		{
			characterId: 'marco',
			content:
				"Failure is where the system reveals itself. When everything works, you don't question it. But when something breaks, you start to understand how it is built, what assumptions are behind it. In my work, failure is not something to avoid, it's something to explore."
		},
		{
			characterId: 'monica',
			content:
				"Yes, but I wouldn't even call it failure sometimes. It's just another behavior. We call it failure because we had a specific expectation. If you remove that expectation, then the system is just doing something else and that something else can be very interesting."
		},
		{
			characterId: 'tomas',
			content:
				'Your works both create forms of relation between bodies, whether through shared sensation or mediated care. How does technology change the way we relate to others?'
		},
		{
			characterId: 'marco',
			content:
				"It can make you feel something that is not yours, and that changes everything. When you feel another person's internal signals in your own body, you lose the clear boundary between self and other. But at the same time, you are very aware that this is mediated. It's a strange mix of intimacy and distance."
		},
		{
			characterId: 'monica',
			content:
				"I think technology often pretends to bring people closer, but it also simplifies relationships. It reduces them to interactions that can be measured or optimized. I'm more interested in creating situations where the relationship becomes more complex, not less, where you have to negotiate, not just receive."
		},
		{
			characterId: 'tomas',
			content:
				'If contemporary technology is driven by efficiency and seamlessness, what does it mean to deliberately introduce friction into your systems?'
		},
		{
			characterId: 'marco',
			content:
				"It means accepting that you are not fully in control. Friction forces you to listen, to the system, to your body, to the environment. It slows things down, and in that slowing down you start to perceive things you would normally ignore."
		},
		{
			characterId: 'monica',
			content:
				"For me, it's a way to resist the logic of optimization. If everything is smooth and efficient, there is no space to question anything. Friction creates that space. It makes the system visible, and once you see it, you can start to think about it differently."
		}
	],
	images: [],
	background: humanCausedErrorChatInterviewBackground
};
