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

export const memeticRubbleChatInterview: ChatInterviewData = {
  characters: [
    {
      id: 'tomas-jones',
      name: 'Tomas Jones',
      avatar: '/media/artdao-question.webp',
      type: 'question'
    },
    {
      id: 'julian-brangold',
      name: 'Julian Brangold',
      avatar: '/media/memetic-rubble/interview/interviewer-1.webp',
      type: 'answer'
    },
    {
      id: 'femzor',
      name: 'Femzor',
      avatar: '/media/memetic-rubble/interview/interviewer-2.webp',
      type: 'answer'
    }
  ],
  messages: [
    {
      characterId: 'tomas-jones',
      content: 'What draws you to memes as a visual language?'
    },
    {
      characterId: 'julian-brangold',
      content: 'My interest in memes started out as a consumer. I\'ve always been drawn to how memes can carry meaning or communicate something culturally specific—sometimes with just one image or phrase. Over time, I became more curious about where these memes actually come from and started researching their origins and how they spread.'
    },
    {
      characterId: 'femzor',
      content: 'I like this idea of how an image or image-text as something goes viral, because it\'s a very organic form, I think memes the biggest example of this.\n\nWhen something goes viral, you kind of imagine it\'s because of the people behind it. But with memes, I don\'t imagine there\'s a select, secret group of people who are going to make the meme go viral, it\'s a very organic thing.'
    },
    {
      characterId: 'tomas-jones',
      content: 'How do memes complicate or expand what we consider an art object?'
    },
    {
      characterId: 'julian-brangold',
      content: 'At some point, I started thinking about what would happen if memes existed as physical artworks. Like, what if someone saw a meme printed on metal, in a white-walled gallery, and thought, "Okay, I have to look at this seriously, even if I don\'t like it." That shift in context makes people think differently.\n\nAt some point, I started thinking about what would happen if memes existed as physical artworks. Like, what if someone saw a meme printed on metal, in a white-walled gallery, and thought, "Okay, I have to look at this seriously, even if I don\'t like it." That shift in context makes people think differently.\n\nSo I started producing printed memes—sometimes on metal, sometimes layered with acrylic and text—because I wanted to see how far I could stretch the medium. In Buenos Aires, the art scene is still very traditional. Most people are focused on painting and sculpture. So showing memes in that environment feels like a small disruption.'
    },
    {
      characterId: 'femzor',
      content: 'If you\'re a traditional painter, you always have to post photos of your work with a white background and a serious tone. So playing with memes, and showing that you\'re not following those expectations, becomes its own kind of protest.\n\nAnd that\'s fine too. Like, when the BRAT album cover came out, the music world probably didn\'t take it too seriously at first. They maybe thought it was just provocation. But that says something—because nowadays, we expect artists to maintain a certain level of polish or seriousness.'
    },
    {
      characterId: 'tomas-jones',
      content: 'Why is remixing so important to your process?'
    },
    {
      characterId: 'julian-brangold',
      content: 'A lot of my work involves taking existing memes and processing them through AI to generate something unfamiliar. One thing I love about memes is that they don\'t belong to anyone. They\'re meant to be shared, remixed, transformed. That freedom creates room for experimentation.\n\nAt one point, I stopped worrying about whether people "understood" what I was doing. I\'m not trying to push a specific ideology. I\'m more interested in exploring basic emotional reactions—things people feel in their body before they have the words for it. It\'s about making strange connections that still hit on something real.'
    },
    {
      characterId: 'femzor',
      content: 'Most of the memes I make are based on memes that already exist. I try to give them a new face. If you pair a piece of text with two different images, it completely changes the meaning. I like playing with that—the unexpected element that appears in the image.\n\nAlso, if you search for any meme online, no matter how famous it is, you probably won\'t find an HD version. The image is already degraded because it\'s been shared so many times. I find that really interesting—this kind of destruction of the image over time.'
    },
    {
      characterId: 'tomas-jones',
      content: 'What role does humor play in how people engage with your work?'
    },
    {
      characterId: 'julian-brangold',
      content: 'In the art world, there\'s this expectation that you have to stick to one visual language for your whole career so people can recognize your work. I got tired of that. I also got tired of the academic artist persona—someone who always speaks in this heavy, theoretical language with a 20-page research statement.\n\nSo I made these three meme pieces for the biggest art fair here in Buenos Aires. They were hung in a very polished gallery booth alongside more "serious" work, and people were totally thrown off. I like that moment—when people don\'t know how to read the work at first, or they laugh and then realize they\'re also being asked to think.'
    },
    {
      characterId: 'femzor',
      content: 'The digital landscape is constantly challenging traditional expectations. We\'re seeing more space for unconventional approaches.\n\nI think it\'s interesting to see memes used as a form of protest. If you try to make a critique through a long, academic text, not everyone will pay attention. But if it\'s a meme—even a silly one with a weak message—it can go viral really fast. That can be used for both good and bad.\n\nAnd I think that\'s what makes memes so powerful in a contemporary art context. They might look simple, but often there\'s something stronger underneath.'
    }
  ],
  images: [],
  background: '/media/memetic-rubble/interview/interview-bg.webp'
}; 