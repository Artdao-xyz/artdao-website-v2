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

export const oracleMachinesChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'edgar-frias',
			name: 'Edgar Fabián Frías',
			avatar: '/media/oracle-machines/pfp-1.webp',
			type: 'answer'
		},
		{
			id: 'nora-berman',
			name: 'Nora Berman',
			avatar: '/media/oracle-machines/pfp-2.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'How do you understand the relationship between ritual and digital media in your practice?'
		},
		{
			characterId: 'edgar-frias',
			content:
				'For me, ritual and digital media are not opposites; they are extensions of one another. Indigenous communities like the Wixárika have long engaged with technologies in their ritual practices: ancestral communion, the creation of sacred portals, mapping through visionary journeys. These are sophisticated technologies of connection, orientation, and transformation. I see them as deeply resonant with our contemporary uses of digital tools.'
		},
		{
			characterId: 'nora-berman',
			content:
				'Streaming is about inhabiting a fabricated digital space and populating it with experiences through a new way of being, and that\'s where the duration comes in. The durational aspect, or its frequent availability online, legitimizes the stream space as a place to be.'
		},
		{
			characterId: 'tomas-jones',
			content: 'What does it mean to create work that functions as oracle or spell?'
		},
		{
			characterId: 'edgar-frias',
			content:
				'When I describe my creations as spells, I mean that they are alive. Each spell carries its own consciousness, its own will. You cannot control the living, and you cannot control spells. Instead, you enter into relationship with them, listening, collaborating, and allowing them to move through you and into the world in ways that often exceed your original intention.'
		},
		{
			characterId: 'nora-berman',
			content:
				'On one hand, a comment in chat can open up or direct something within my performance, but it can also completely derail it. That duality is what makes it a worthwhile risk. The more centered I am in my energy, the less I am affected by what is going on in chat.'
		},
		{
			characterId: 'tomas-jones',
			content:
				'How do you stay connected to embodied experience while working through digital interfaces?'
		},
		{
			characterId: 'edgar-frias',
			content:
				'I stay attuned to ancestral and more-than-human wisdom by continually reorienting my attention. That often means literally stepping away—touching grass, listening to trees, remembering that vast fractal worlds surround me at every moment. At the same time, I don\'t see the digital and the ancestral as separate. When we go online, we are also communing with ancient energies: the oil, wind, and sunlight that generate power; the metals and minerals drawn from the earth that form our devices.'
		},
		{
			characterId: 'nora-berman',
			content:
				'I often use the phrase "the solution we dissolve into" to describe a kind of consciousness—one I define as seeing through what we know—where there is no separation between self and other. In that space, there is no hierarchy, no end goal, only flow, breath, and presence.'
		},
		{
			characterId: 'tomas-jones',
			content:
				'What tensions or convergences do you find between institutional frameworks and your spiritual-digital practice?'
		},
		{
			characterId: 'edgar-frias',
			content:
				'There are tensions between digital frameworks, which are often born out of Western logics of extraction, categorization, and control, and Indigenous knowledge systems, which are rooted in relationality, reciprocity, and the sacred. But at the same time, they can speak powerfully to one another. Many Indigenous artists have shown how the digital can be a site of ancestral, communal, and cosmological expression.'
		},
		{
			characterId: 'nora-berman',
			content:
				'Successful contemporary art does not necessarily rely on shared experience. Its efficacy, whether in the market or in the institution, often lies in its capacity to sustain an ineffable, tantalizing allure embedded with mystery and desire. This quality is inherently exclusive, as it is not universally accessible or legible to a wider public. I use the platform for the technology it provides, which I\'m truly grateful for, but I don\'t expect it to serve me beyond that.'
		},
		{
			characterId: 'tomas-jones',
			content: 'How does your work speak across time to past ancestors or future discoverers?'
		},
		{
			characterId: 'edgar-frias',
			content:
				'What I hope to convey is that queerness, Indigenous futurisms, and interdimensional forms of magic are not anomalies but essential parts of human existence. I want future discoverers—whether human, alien, or something beyond both—to know that we were here, dreaming and creating, even in the face of oppression and ecological precarity.'
		},
		{
			characterId: 'nora-berman',
			content:
				'Through the creation of consciously crafted new personas, you can dissolve these associations and attachments and be more free. The point is to engage with people universally, not personally. As online surveillance becomes more extreme, no one will want to say anything of real substance attached to their name.'
		}
	],
	images: [],
	background: '/media/oracle-machines/interview-bg.webp',
	interviewerText: 'Tomas Jones, answers by Edgar Frías and Nora Berman'
};
