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

export const chaosAgentsChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'rocco-gallo',
			name: 'Rocco Gallo',
			avatar: '/media/chaos-agents/interview/pfp1.webp',
			type: 'answer'
		},
		{
			id: 'perfect-loop',
			name: 'Perfect Loop',
			avatar: '/media/chaos-agents/interview/pfp2.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'When do you choose to add unpredictable elements to your creative process?'
		},
		{
			characterId: 'rocco-gallo',
			content: `Unpredictability is central to my creative process. It's not an afterthought—it's built into how I make work. I often invite uncertainty from the beginning, letting the medium, tools, and digital systems guide the outcome.

This approach grows out of a deep fascination with chaos and emergence. I don't see giving up control as a loss. It feels more like a collaboration with the unknown. There's an energy in uncertainty that can lead to visual and conceptual breakthroughs. I see myself less as a dictator of the artwork and more as an orchestrator, allowing the form and meaning to evolve organically.`
		},
		{
			characterId: 'perfect-loop',
			content: `I keep a running list of ideas, and they usually come to me when I'm lying in bed. I close my eyes and try to imagine different things. Sometimes the ideas are fully formed, and I try to recreate them exactly as I see them. Other times they're just a general direction, so I start simple and see where it goes.

With the more open-ended ideas, I'll try techniques I haven't used before or connect nodes in new ways. I mix and match, stack effects, and experiment. Often that leads somewhere unexpected—something that feels uniquely mine. A lot of tests never get shared if they don't work out, but sometimes they evolve into something worth showing. I think some of those more chaotic elements can catch people off guard in a good way.`
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you balance your artistic vision with unexpected generative outcomes?'
		},
		{
			characterId: 'rocco-gallo',
			content: `I treat that tension as a dialogue. My intent functions like a compass—it gives me direction, but it doesn't chart every move. When something unexpected appears, I consider it as valid as my original vision.

Sometimes these surprises challenge my assumptions. Other times they open up entirely new aesthetic or conceptual paths. I work with generative systems in a back-and-forth rhythm. I guide, observe, and refine. That cycle between structure and spontaneity is where the most compelling work emerges.`
		},
		{
			characterId: 'perfect-loop',
			content: `Not doing a lot of commissions definitely helps. It means there's less pressure for the final piece to match a specific outcome. If I'm just following an idea that excites me, chances are it'll excite someone else too.

I try to follow the thread and see where it leads. Even if the result isn't visually strong, I usually walk away with something valuable—maybe a new technique, a different way to use color or motion, or an idea I hadn't tried before. That learning process is its own reward.`
		},
		{
			characterId: 'tomas-jones',
			content: 'Do you see using randomness in your work as resistance against predictive algorithms?'
		},
		{
			characterId: 'rocco-gallo',
			content: `Absolutely. We live in a world shaped by personalization systems that feed us what's familiar, comfortable, and expected. Randomness is one way to push back against that.

Embracing unpredictability becomes a way to reclaim mystery, serendipity, and true discovery—things that are increasingly rare in our algorithm-driven culture. My work aims to disrupt those patterns and offer something that doesn't conform. It invites people to experience what they didn't know to look for.`
		},
		{
			characterId: 'perfect-loop',
			content: `In a way, yes. I think working with randomness is my way of negotiating a digital space that's largely controlled by algorithms. We've all seen more images and videos than any generation before us, so creating something that feels different—something erratic, jarring, flashing, or illusion-like—can actually break that rhythm and make people pause.

Sometimes those chaotic elements are more than just stylistic. They're attention strategies. They invite people to stop scrolling, focus, and maybe even wonder how it was made. And in this environment, that kind of pause has value.`
		},
		{
			characterId: 'tomas-jones',
			content: 'What discoveries has randomness led you to that controlled methods wouldn\'t?'
		},
		{
			characterId: 'rocco-gallo',
			content: `Some of my strongest pieces have come out of accidents or digital glitches. One of the most powerful discoveries has been how randomness can create emotional depth. When colors collide in unexpected ways, or when a generative script produces something I couldn't have planned, it often resonates more deeply than something I meticulously constructed.

It's also led me to unexpected narratives. A strange visual structure might shift the meaning of a piece entirely, opening up interpretations I never would've arrived at through control alone.`
		},
		{
			characterId: 'perfect-loop',
			content: `Most of my unexpected discoveries have happened in TouchDesigner, especially through feedback loops. You can send a visual signal back into itself and alter it with different processes. That kind of recursive system can generate results you'd never think to plan—and they're often visually striking.

Even after spending countless hours with it, I still get results I couldn't have predicted. With After Effects, I've also made discoveries by layering effects in ways I didn't expect. That's how I started. But it's a more structured system, so while randomness still exists, the outcomes are usually more limited compared to what's possible in TouchDesigner.`
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you balance technical unpredictability with your conceptual coherence?'
		},
		{
			characterId: 'rocco-gallo',
			content: `It comes down to intentional framing. Even if the process is unpredictable, the work still rests on a strong conceptual foundation. I create systems with constraints so that the randomness unfolds within a purposeful structure.

It's a bit like jazz improvisation. You're not controlling every note, but you've set up a harmonic logic that holds it together. Coherence doesn't come from control—it comes from knowing when the chaos serves the idea, and when it needs to be reshaped.`
		},
		{
			characterId: 'perfect-loop',
			content: `Honestly, I'm not always sure I do. I hope there's some coherence that people can perceive, but it's not always deliberate. I do have recurring themes I think about—like being inside a computer, human-computer interaction, GUI icons, retro graphics, or the history of computing.

Sometimes I'll come up with a chaotic process and fold those ideas in. Whether it all holds together, I don't really know. But I do feel like there's a running thread, or at least a general direction, a set of concepts I keep returning to. Hopefully that comes through and resonates with people when they see the work.`
		}
	],
	images: [],
	background: '/media/chaos-agents/interview/interview-bg.webp',
	interviewerText: 'Laura Butallo and Tomas Jones'
}; 