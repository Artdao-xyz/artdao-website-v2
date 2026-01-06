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

export const orbChatInterview: ChatInterviewData = {
  characters: [
    {
      id: 'interviewer',
      name: 'Alice Scope',
      avatar: 'https://i.pravatar.cc/150?img=1',
      type: 'question'
    },
    {
      id: 'vixy',
      name: 'VIXY',
      avatar: 'https://i.pravatar.cc/150?img=2',
      type: 'answer'
    },
    {
      id: 'cymoon',
      name: 'CYMOON',
      avatar: 'https://i.pravatar.cc/150?img=3',
      type: 'answer'
    }
  ],
  messages: [
    {
      characterId: 'interviewer',
      content: 'What themes drive your creative process?'
    },
    {
      characterId: 'vixy',
      content: 'In this particular series of works everything is centered on the connection between body and technology, what I call flesh and metal.\n\nIn today\'s age, technology is not only a functional tool, but an intimate terrain where human desire is challenged. It is a \'lover and control tool\', reflecting how our digital connections, stripped of boundaries, open new doors to eroticism and sexuality in unexpected ways.'
    },
    {
      characterId: 'cymoon',
      content: 'I am particularly interested in fiction in relation to the body, especially the feminized and queer body. I seek to create fluid universes through the body as a form of personal healing and redefining identity and expression from the virtual, such as the online world, 3D and avatars.\n\nToday, we all live through screens, and my interest is in how we construct our identity in this virtual space.'
    },
    {
      characterId: 'interviewer',
      content: 'Has software shaped the way you see human identity?'
    },
    {
      characterId: 'vixy',
      content: 'Working with digital tools, especially Artificial Intelligence, allows me to explore human identity beyond traditional physical limitations.\n\nI believe that the interaction with these digital tools makes it clear that human identity is not a fixed essence, but rather a construction that can be manipulated and rediscovered, opening a space where every feature, every line and texture is amplified or deformed, revealing both our malleable nature and our desire to transcend.'
    },
    {
      characterId: 'cymoon',
      content: 'For me, it\'s natural to channel emotions through a mediating tool, as a musician does. When I discovered 3D, I fell in love with its language, which I use more to create fictions and scenes than for the tool itself.\n\n3D allows me to create worlds and characters, and to explore my identity through avatars that slowly transform, mutating between different elements.\n\nThis virtual interaction becomes a "mirror" that reflects and helps to understand parts of my identity that I can\'t always express in everyday life, anchoring who I am in the virtual world.'
    },
    {
      characterId: 'interviewer',
      content: 'Are we finding a more fluid definition of what it means to be human?'
    },
    {
      characterId: 'vixy',
      content: 'These tools push us toward a version of humanity that is no longer bound to organic boundaries. Instead, we see a flexible and transformative identity, allowing for new species of self, uncategorized and constantly changing and redefining.\n\nIn the end, these digital selves not only act as reflections of our inner complexities, but also show us how we might redefine our own humanity in terms that are new and radical.'
    }
  ],
  images: [],
  background: 'https://picsum.photos/1920/1080?random=10'
}; 