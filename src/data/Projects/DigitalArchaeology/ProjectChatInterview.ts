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

export const digitalArchaeologyChatInterview: ChatInterviewData = {
  characters: [
    {
      id: 'alice',
      name: 'Alice Scope',
      avatar: '/media/artdao-question.webp',
      type: 'question'
    },
    {
      id: 'pinkyblue',
      name: 'Pinkyblue',
      avatar: '/media/digital-archaeology/interview/pfp1.webp',
      type: 'answer'
    },
    {
      id: 'sabato',
      name: 'Sabato',
      avatar: '/media/digital-archaeology/interview/pfp2.webp',
      type: 'answer'
    },
    {
      id: 'stipin',
      name: 'Stipin Pixel',
      avatar: '/media/digital-archaeology/interview/pfp3.webp',
      type: 'answer'
    }
  ],
  messages: [
    {
      characterId: 'alice',
      content: 'What role does nostalgia take in your work?'
    },
    {
      characterId: 'pinkyblue',
      content: 'Nostalgia appears in my work as a kind of suffering. It\'s often tied to remembering what once was but could not last, or to dreams that slowly turned into nightmares. This feeling unfolds in soft, natural environments or in dark, ambiguous spaces where the scene is not fully clear.\n\nI often work with themes of mourning, idealization, and waiting as ways to express nostalgia.'
    },
    {
      characterId: 'sabato',
      content: 'Nostalgia is a way to return to early digital tools and remember the artists who came before. I started in the 1990s without formal training, just playing around with digital art. I worked professionally with Photoshop and photography in the 2000s and 2010s, but along the way I lost touch with some early techniques. Going back now is a way to relearn.\n\nWhen I work with glitch and games, the process is all about testing things. You insert a glitch, wait, see what happens. It\'s slow and unpredictable. You try, fail, and eventually land on something interesting.'
    },
    {
      characterId: 'stipin',
      content: 'My interest in pixel art started, believe it or not, because of a technical limitation. The computer I was using at the time was so old that the only thing I could really make was pixel art. Traditional drawing programs were too slow to be useful.\n\nBut if I think back further, my connection to pixel art actually began in childhood. I was obsessed with pegboard games, and then later with video games—especially adventure games like Monkey Island, Gobliins, Zelda, and Maniac Mansion. Those games left a deep mark on me.\n\nEven now, I\'m drawn to the detail and the process. There\'s something I find fascinating about creating images using a digital language that was originally built for screens. What I love most is the challenge of simplifying visual information into tiny squares. It\'s like solving a puzzle with minimal means.'
    },
    {
      characterId: 'alice',
      content: 'Which limitations do you encounter while working with nostalgic elements?'
    },
    {
      characterId: 'pinkyblue',
      content: 'Sometimes I try to stay true to the look of a particular era. That can create small technical limitations, but they don\'t feel heavy. Things like resolution or the shape of curves can influence the direction of a piece, but they rarely interfere with the overall process.\n\nI actually find that limitations—especially around space and color—push me to be more creative. They help me come up with new ways to make something feel fresh using the same materials.'
    },
    {
      characterId: 'sabato',
      content: 'The biggest challenge is how to preserve a glitch or drawing and convert it into a format that still feels true to its origin. At first, I recorded my screen, but the image was never sharp enough. Codecs like H264 compress the file too much. I had to study how to export things in their native resolution to retain the sharpness of each pixel.'
    },
    {
      characterId: 'stipin',
      content: 'These days, there are very few limitations when it comes to software. Anyone can download a pixel art program and get started. But when it comes to hardware, the barriers haven\'t disappeared. It\'s 2025, and still not everyone has access to a phone or computer—especially in smaller or more rural communities.\n\nWhere I\'m from, in the interior of Argentina, there\'s a strong culture of doing a lot with very little. It\'s common to create with whatever tools you have on hand. I think that approach—resourceful, minimal, clever—is part of the DNA of my work.'
    },
    {
      characterId: 'alice',
      content: 'What attracts you to older aesthetics?'
    },
    {
      characterId: 'pinkyblue',
      content: 'I first got into pixel art through emulated Game Boy Advance games, but Minecraft was what really sparked my interest. That\'s when I started making my own images.\n\nAt first, I was drawn to the visual style of video games and game development. Over time, I became more interested in how pixel art is both artistic and mathematical. Working with something as small and precise as a pixel can be surprisingly expressive.'
    },
    {
      characterId: 'sabato',
      content: 'When I started posting art inspired by old video games, using tools like Deluxe Paint, people responded strongly. There was a shared memory. Many of us grew up with Super Nintendo or Mega Drive. That sense of connection made me want to keep going.\n\nPixel art is born from digital logic. It is not about copying traditional styles but about creating with a distinct kind of digital thinking. Even now, when it\'s easy to mimic old paintings with software, pixel art stands apart. It has its own structure and language.'
    },
    {
      characterId: 'stipin',
      content: 'For me, it has to do with a kind of grief—what I\'d call "the sadness of loss." In the SURI DIMENSION project, that sense of loss gets translated into a speculative world built from archaeological fragments of the Yungas region, especially Tucumán. I draw from local carvings, tiny vessels and sculptures, traditional foods, and everyday customs. It\'s a way of preserving and transforming memory.\n\nPixel art, to me, is all about precision. It\'s about capturing a whole idea with very little visual information. I think there\'s a kind of psychological connection between the pixel and the viewer—it\'s like your brain fills in the gaps. That automatic understanding, that mental completion, is something I really value.\n\nIn contrast, a lot of today\'s digital styles seem focused on maximizing everything—more texture, more detail, more everything. And that\'s fine, but I\'m interested in synthesis. Simplicity feels more intimate. And maybe it also reflects something human, something about the time we\'re living through.'
    }
  ],
  images: [],
  background: '/media/digital-archaeology/interview/interview-bg.webp'
};

export const digitalArchaeologyChatInterview2: ChatInterviewData = {
  characters: [
    {
      id: 'alice2',
      name: 'Alice Scope',
      avatar: '/media/artdao-question.webp',
      type: 'question'
    },
    {
      id: 'estelle',
      name: 'Estelle Flores',
      avatar: '/media/digital-archaeology/interview/pfp4.webp',
      type: 'answer'
    },
    {
      id: 'cydr',
      name: 'CYDR',
      avatar: '/media/digital-archaeology/interview/pfp5.webp',
      type: 'answer'
    }
  ],
  messages: [
    {
      characterId: 'alice2',
      content: 'What role does nostalgia play in your work?'
    },
    {
      characterId: 'estelle',
      content: 'My interest in games has always felt natural. It\'s deeply tied to fantasy. As children, we understand the language of play without needing to learn it. As adults, we often need help finding our way back.\n\nFor me, that return involves revisiting codes from the past. Nostalgia appears in my work, but not as a direct reference to pop culture. It shows up in how I relive and rework fragments of life to create something contemporary. It\'s almost performative.\n\nIn some ways, my work is the performance of games. It functions like a montage, where different elements are pieced together until they take on a new shape.\n\nThat\'s how I approach symbols from the past. They aren\'t fixed references. They\'re raw materials I use to build something else—something we\'re trying to revive or reimagine.'
    },
    {
      characterId: 'cydr',
      content: 'If you\'re going to make something meaningful, it often comes from what you\'re already drawn to. That might mean evoking nostalgia or simply creating a visual language that helps people feel more at ease with what they\'re seeing.\n\nNostalgia plays a big role in creating a unique experience. In some of my works, I reference things that shaped me. I hope others feel something when they see it too. Even though Web3 uses advanced technology, I think drawing on older aesthetics or the essence of the past helps people connect more deeply with the work.'
    },
    {
      characterId: 'alice2',
      content: 'Which limitations do you encounter while working with nostalgic elements?'
    },
    {
      characterId: 'estelle',
      content: 'We\'re surrounded by new media all the time. There\'s no real way to escape it. Even so, I\'m drawn to older aesthetics, and that\'s where much of my inspiration lives. In that sense, limitations aren\'t barriers. They\'re often a form of comfort.\n\nA blank page offers complete freedom, but that freedom can feel overwhelming. Too many choices can block the process. Constraints, by contrast, tend to make things move more easily.\n\nFor example, I get more creative freedom working in Paint than in Photoshop. Photoshop offers so many tools that it can become too much. Paint limits me to the basics, and that forces me to solve problems in more inventive ways.'
    },
    {
      characterId: 'cydr',
      content: 'There have been times when I regretted leaning too hard into nostalgic language. It can limit what a piece can do. You have to be intentional and know whether the aesthetic is actually serving the idea or just boxing it in.\n\nSome of the work I\'ve made didn\'t fit within that nostalgic look, and I chose not to share it. That helped me see that not everything needs to align with that theme. When you stick to a specific digital reference point, it can either force a creative breakthrough or make the whole thing feel tired.\n\nLately, I\'ve been exploring ways to open things up within that aesthetic. I want to avoid falling into the trap of just adding a VHS filter and calling it done. I\'m interested in expanding the visual language and bringing in new elements that still resonate with the past, but with more space to breathe.'
    },
    {
      characterId: 'alice2',
      content: 'What attracts you to older aesthetics?'
    },
    {
      characterId: 'estelle',
      content: 'In Brazil, technology often arrives late. That delay shapes how we create. We learn to work with what\'s already available—with scraps and workarounds. That experience stays with us. The things we dreamed of doing as kids only become possible later, when we finally have the tools to make them real.\n\nNow I approach newer formats with a different mindset. I use multi-channel strategies, like mixing an instructional video with a game in the background. The contrast keeps the viewer engaged in a way that mirrors how social media works.\n\nThat\'s where my aesthetic comes from—a screen split between something complex and something more familiar, like a game.'
    },
    {
      characterId: 'cydr',
      content: 'As a kid, I spent a lot of time in dark rooms watching movies and playing video games. That kind of environment changed how I see screens. It sharpened my sense of contrast and color. The blacks felt deeper, the colors more intense. That kind of visual experience stuck with me.\n\nI\'m not really into most newer digital works. I find the early generations of artificial intelligence more interesting. They weren\'t over-trained, and there was something more raw and authentic in how they operated. Today, so much is still new and experimental. It feels like we haven\'t had enough time to live with the tools, to develop a strong taste or point of view. Older aesthetics carry that slower, more deliberate sensibility, which I value.'
    }
  ],
  images: [],
  background: '/media/digital-archaeology/interview/interview-bg2.webp'
}; 