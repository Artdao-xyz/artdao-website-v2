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

export const subconsciousMediaChatInterview: ChatInterviewData = {
  characters: [
    {
      id: 'laura',
      name: 'Laura Butallo',
      avatar: '/media/artdao-question.webp',
      type: 'question'
    },
    {
      id: 'vidal',
      name: 'Vidal Herrera',
      avatar: '/media/subconscious-media/interview/pfp1.webp',
      type: 'answer'
    }
  ],
  messages: [
    {
      characterId: 'laura',
      content: 'What does automatism mean to you in your art?'
    },
    {
      characterId: 'vidal',
      content: 'For me, automatism is to let the work flow, to allow the creative process to advance without stopping to judge—something that is difficult in such a rational world. It is giving space to the imaginary, to the fantastic, and leaving aside the logical. Since I was a child, I had that creative instinct, although I never really understood where that urge came from.\n\nWhen I create, I always start from scratch, with a blank canvas, and play with shapes, colors, or sounds that inspire me. There are stimuli that generate something physical, an inexplicable connection, and I feel the need to work with that in any medium. It is a constant attempt to discover something, although at the same time I don\'t want to discover it completely, because that mystery is what makes it infinite and fascinating.\n\nIt\'s like improvising, letting go without thinking too much about what I do or say.'
    },
    {
      characterId: 'laura',
      content: 'Does this relate to a more of personal unconscious or something more collective?'
    },
    {
      characterId: 'vidal',
      content: 'Both. It is an impulse that I have felt since I was a child, but I also believe that it is something collective—an impulse that we all have, although we often don\'t give it the time or importance it deserves. It\'s as if there are different planes of our existence, and each one acts differently.\n\nPaying attention to those planes is valuable because they contain much of what we are unaware of, and by exploring those unconscious aspects, we can become more aware of them. In the end, it is about knowing oneself. Such introspection, especially on a more spiritual level, can offer us new perspectives and information that transform the way we see and do things.'
    },
    {
      characterId: 'laura',
      content: 'What is the intersection between unconscious creative practices and digital technologies?'
    },
    {
      characterId: 'vidal',
      content: 'I feel that technology is a super powerful tool, very connected to the unconscious. It\'s as if the machine represents a divine archetype.\n\nWhat I find very crazy is that sometimes, when you are thinking about something or working on a piece, you realize that other artists—at the same time or within a few days—are in the same situation as you, with the same questions or concerns.\n\nFor me, that shows that there is a kind of network that connects us all, whether it\'s technological or spiritual. Call it God, religion, or whatever you want. I don\'t know how far it will go—I think that\'s very wonderful. If you made God, it\'s a computer.'
    },
    {
      characterId: 'laura',
      content: 'How digital tools affect your unconscious artistic work?'
    },
    {
      characterId: 'vidal',
      content: 'Having more tools gives you the possibility to better express that which you don\'t quite know what it is. Even if you are never completely sure of the path, the important thing is not to lose the light that guides you—the essential, what really matters.\n\nI consider myself a digital artist, and it was through digital art that I began to discover myself. I compare it a bit to the performing arts, which are another world—more linked to the unconscious and improvisation. But I feel that the more you learn and explore, the clearer the path becomes.\n\nI never get bored; when I feel I\'m stuck or too comfortable, I intuitively start exploring new functions that take me out of that place. I love that feeling, because that reworking allows me to integrate interesting things from my previous work into what I\'m creating now.'
    },
    {
      characterId: 'laura',
      content: 'How does your artistic process relate to improvisation and error?'
    },
    {
      characterId: 'vidal',
      content: 'My works have always emerged from improvisation. Sometimes there is a trigger, but not a visual one—rather, it comes from the world of sensations or emotions. It is not a visual representation, but an intense, almost literal emotion that drives me to transform what I feel into something tangible.\n\nOver time, as I\'ve acquired more tools and technical skills, I\'ve developed the ability to realize what I imagine. However, that technique is always at the service of improvisation, which remains the central axis of my creative process.\n\nFor me, error is never really present. It\'s a valuable philosophy because it avoids frustration or fear of failure. Letting error be part of the learning process is incredible, because no one can define what is right or wrong more than oneself. I always try to explore without obsessing over reaching a specific result.'
    }
  ],
  images: [],
  background: '/media/subconscious-media/interview/interview-bg.webp'
}; 