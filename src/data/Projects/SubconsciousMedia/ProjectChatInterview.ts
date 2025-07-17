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

export const subconsciousMediaChatInterview2: ChatInterviewData = {
  characters: [
    {
      id: 'laura2',
      name: 'Laura Butallo',
      avatar: '/media/artdao-question.webp',
      type: 'question'
    },
    {
      id: 'gregorio',
      name: 'Gregorio Nash',
      avatar: '/media/subconscious-media/interview/pfp2.webp',
      type: 'answer'
    }
  ],
  messages: [
    {
      characterId: 'laura2',
      content: 'How does the idea of the collective unconscious manifest itself in your works?'
    },
    {
      characterId: 'gregorio',
      content: 'I think many artists see the web as a kind of refuge. That idea of refuge reminds me of my childhood, when I first discovered cybercafés—that space where we connected with people and encountered the wonder of the internet.\n\nThe internet, with its collective unconscious, connects me to something similar: virtual legends and creepypastas. It leads me to imagine creatures or stories that don\'t exist physically but live only on the web. At the same time, I find parallels with the stories my grandfather used to tell from the countryside. In that way, my work creates a dialogue between the rural world, my neighborhood Don Orione, and the digital space.\n\nMy neighborhood exists in people\'s lived experience, but not on Google Maps or other digital maps. It\'s strange how this physical part of the world remains beyond the reach of the internet—and that really interests me. I\'m drawn to that threshold between what the internet doesn\'t know and what people do, and vice versa. I imagine that dialogue, that collective imaginary, as a kind of confluence—a wave in constant motion.'
    },
    {
      characterId: 'laura2',
      content: 'How do you access the realm of dreams and imagination with technological tools?'
    },
    {
      characterId: 'gregorio',
      content: 'When I go online, it feels like an infinite world opens up. I love doing this exercise I call web surfing.\n\nWeb surfing is basically jumping from one website to another, following whatever links or paths appear. I might start at midnight with one idea, then follow a link, then another, and suddenly I\'ve ended up in a completely different place—or the opposite of where I began.\n\nThis practice feels a lot like dreaming: it starts with one thought, and ends somewhere unexpected. I like to document the process—taking screenshots, recording my screen—and then start creating from there. Sometimes that becomes the beginning of a new story.'
    },
    {
      characterId: 'laura2',
      content: 'How do unconscious impulses guide your artistic practice?'
    },
    {
      characterId: 'gregorio',
      content: 'When I\'m creating, I follow what I call a "digital rule": my work always ends in a final format like JPG, PNG, or video. I usually start by modeling in Blender, generate a render, bring it into Photoshop, then into Illustrator, and from there I keep moving it through different programs—repeating the process until the image transforms into something new.\n\nI\'m really interested in that constant act of "translation" between images—how the filters, layers, and built-in biases of each digital step begin to shift their morphology. I like to think of creative unconscious impulses in the same way: as a chain of processes.'
    },
    {
      characterId: 'laura2',
      content: 'How does interconnectivity created by computers and technology influences your creative practice?'
    },
    {
      characterId: 'gregorio',
      content: 'Artificial intelligences have something in common with us: they are constantly learning, just as we are when we look at memes, scroll through feeds, chat with friends, watch videos, or read articles. This ongoing consumption connects us and immerses us in a kind of hyperculturality, where a meme from Brazil can shape how we think, or an event in South Korea can offer new perspectives.\n\nEven though it might sometimes feel like we\'re just "burning neurons," we\'re actually learning new languages, absorbing different viewpoints, and connecting with people from vastly different contexts through technology. This digital bridge allows us to admire and collaborate with artists thousands of miles away—just like in my experience working with Vidal Herrera.\n\nThere\'s something profoundly meaningful in that duality: the ability to collaborate and converse instantly across great distances, while still valuing the irreplaceable experience of physical presence after crossing those same distances.'
    }
  ],
  images: [],
  background: '/media/subconscious-media/interview/interview-bg2.webp'
}; 