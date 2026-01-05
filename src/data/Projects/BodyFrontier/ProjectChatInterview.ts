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

export const bodyFrontierChatInterview1: ChatInterviewData = {
  characters: [
    {
      id: 'laura',
      name: 'Laura Butallo',
      avatar: '/media/artdao-question.webp',
      type: 'question'
    },
    {
      id: 'vixy',
      name: 'VIXY',
      avatar: '/media/body-frontier/interview/pfp-1.webp',
      type: 'answer'
    },
    {
      id: 'cymoonv',
      name: 'CYMOONV',
      avatar: '/media/body-frontier/interview/pfp-2.webp',
      type: 'answer'
    }
  ],
  messages: [
    { characterId: 'laura', content: 'What themes drive your creative process?' },
    { characterId: 'vixy', content: `In this series of works, everything centers on the connection between body and technology—what I call flesh and metal.\nToday, technology is not just a functional tool but an intimate terrain where human desire is challenged. It is both lover and control mechanism, reflecting how our digital connections, stripped of boundaries, open new doors to eroticism and sexuality in unexpected ways.` },
    { characterId: 'cymoonv', content: `My work explores self-perception, identity, dreams, and the subconscious. I'm especially interested in fiction in relation to the body, particularly the feminized and queer body.\n\nI aim to create fluid universes through the body as a form of personal healing and to redefine identity and expression in virtual spaces such as the online world, 3D modeling, and avatars.\n\nToday we all live through screens, and I'm fascinated by how we construct our identities in these virtual spaces.` },
    { characterId: 'laura', content: 'Has software shaped the way you see human identity?' },
    { characterId: 'vixy', content: `Working with digital tools, especially artificial intelligence, lets me explore human identity beyond traditional physical limitations.\nThis interaction reveals that identity is not a fixed essence but a construction that can be manipulated and rediscovered. Every feature, every line and texture can be amplified or deformed, showing both our malleable nature and our desire to transcend.` },
    { characterId: 'cymoonv', content: `For me, it feels natural to channel emotion through a mediating tool, like a musician does. When I discovered 3D, I fell in love with its language, which I use more to create fictions and scenes than for the tool itself.\n3D lets me invent worlds and characters and explore my identity through avatars that slowly transform and mutate between different elements.\nThis virtual interaction becomes a kind of "mirror" that reflects and helps me understand parts of my identity I can't always express in everyday life, anchoring who I am in the virtual world.` },
    { characterId: 'laura', content: 'Are we finding a more fluid definition of what it means to be human?' },
    { characterId: 'vixy', content: `These tools push us toward a version of humanity no longer bound by organic limits. We see identity as flexible and transformative, allowing for new “species of self” that are uncategorized, constantly changing, and redefining.\nI imagine my cyborgs interacting and experimenting with other digital selves in virtual environments, exploring and expanding our notions of intimacy and connection. In the end, these digital selves are not just reflections of our inner complexities—they help us redefine our humanity in radical new terms.` },
    { characterId: 'cymoonv', content: `I'm deeply inspired by the concept of the postnatural, influenced by body horror, science fiction, and magical realism as found in Latin American culture and literature, including Cuba's rich mix of religions and supernatural traditions.\n\nMy work moves away from what is considered natural, questioning established ideas about body and identity. I explore eroticism from a non-anthropocentric perspective, where nature itself expresses desire and connection—an insect penetrating a flower, or a plant seeking the sun.\n\nI want to strip eroticism of its exclusively human vision and present it as a universal, natural force where the impulse to approach or move toward something is a constant.` },
    { characterId: 'laura', content: 'How do digitally altered representations redefine our view of the human form?' },
    { characterId: 'vixy', content: `By incorporating wires, circuits, and metal that pierce the skin, and by presenting faceless, naked bodies, I question what it really means to be human in a world where technology is essential to our existence.\nThese hybrid figures evoke a new form of eroticism and vulnerability that is cold and depersonalized, reminding us that our identity is no longer purely organic.` },
    { characterId: 'cymoonv', content: `Digital media—including 3D, video games, augmented reality, and virtual reality—let us create and experience transformation in real time. They offer ways to see our bodies mutate, to apply filters, and to build identities from scratch in direct and interactive ways.\n\nIn my work, I construct a strange, fictitious reality that allows for constant transformation—something fluid that reinvents itself. I see the body as part of a larger whole: the earth, the trees, the natural world, all made of the same matter. My pieces explore the connection and intimacy between these elements, reflecting the emotional experience I have while creating them.` },
    { characterId: 'laura', content: 'What have you learned from blending human and digitally altered forms?' },
    { characterId: 'vixy', content: `I’ve learned that technology can do more than modify our external appearance—it can reframe our internal experiences and our definitions of identity and humanity.\n\nTechnology alters not only the body but also consciousness itself, suggesting that this body-technology fusion changes the way we perceive the limits of subjectivity.\n\nIt also gives rise to a new kind of pleasure, where the body becomes an unknown, amplified territory to be explored.` },
    { characterId: 'cymoonv', content: `For me, the creative process has become a form of activism, using imperfection and imagination to challenge dominant ideas. I value the autonomy the digital environment gives me to modify the body as I wish, exploring themes like intimacy and touch.\nMy goal is to express deep feelings of closeness through creative narratives, using unexpected elements to represent intimacy—for example, a mushroom emerging from the body.` }
  ],
  images: [],
  background: '/media/body-frontier/interview/interview-bg-1.webp'
};

export const bodyFrontierChatInterview2: ChatInterviewData = {
  characters: [
    {
      id: 'tomas',
      name: 'Tomas Jones',
      avatar: '/media/artdao-question.webp',
      type: 'question'
    },
    {
      id: 'cyshimi',
      name: 'Cyshimi',
      avatar: '/media/body-frontier/interview/pfp-3.webp',
      type: 'answer'
    },
    {
      id: 'brendy',
      name: 'Brendy',
      avatar: '/media/body-frontier/interview/pfp-4.webp',
      type: 'answer'
    }
  ],
  messages: [
    { characterId: 'tomas', content: 'What themes are present or inspire your work?' },
    { characterId: 'cyshimi', content: `Identity, beauty, and the body are themes that are always present in my work.\nThere is a digital essence in my nail sculptures. They gained strength through digitality and social media, and many of their roots lie in the idea of a transmuted body. Since 2021, I have also been commercializing images and videos of these sculptures in Web3.` },
    { characterId: 'brendy', content: `When developing a piece, I reflect on the references I've gathered throughout my artistic journey. While I didn't focus on my own territorial aesthetics in my collective work, in my solo projects I bring in the reality of São Paulo's periphery, shaped by funk, rap, skate, and soccer.\nI merge nostalgia for the past with the present, transforming objects I once wanted but couldn't have. My work involves wearable sculptures primarily for the foot, but I also explore other areas of the body and even spaces beyond it. I've long worked with upcycling, deconstructing clothes, and participating in fashion shows centered on that theme.\nEach piece draws from lived experience, past desires, and the idea of transmutable sculptures—creations that adapt to different parts of the body like the foot, leg, or arm while maintaining versatility.` },
    { characterId: 'tomas', content: 'Do your designs challenge societal conventions about the human body?' },
    { characterId: 'cyshimi', content: `Before I started experimenting with nail products, I studied the history of nails and saw how much they have been symbols of resistance and power in different cultures and communities. That inspired me greatly.\nWhen I had my own natural long nails, I thought they were very interesting, but people around me had strong opinions, calling them ugly or disgusting. Those reactions became fuel for me. I wanted to challenge these polished, hegemonic ideas of beauty and expand the boundaries of what nail art can be.\nNails already carry a deep baggage of identity, empowerment, and social meaning. For me, they are a way to feel present and connected with my body and physical form.` },
    { characterId: 'brendy', content: `From the beginning, my work has explored themes of the body and size. When I was in the Estileiras collective, we had a sector called Calçado de Monstro (Monster Footwear) that focused on feet.\nThis connected to a collaboration with Melissa, a well-known footwear brand in Brazil. I admired them as a child, seeing girls in my community wearing their shoes. In a project called Melissa Meio Fil, they invited us to create pieces using their shoes and write related texts.\nThe project aimed to launch a unisex shoe, but sizes only went up to 40 or 41, which excluded some of my colleagues—like one who wore size 43. I myself, with size 39, felt discomfort because the models didn't fit my foot, which didn't conform to the so-called "female shape."\nWe questioned the brand's ideas about gender and size, pointing out that trans women, tall women, plus-size women, and diverse bodies often fall outside these limited categories. From this critique, the term Calçado de Monstro emerged. It reflects how we felt facing these exclusions—as if we had "monster feet" that didn't fit into the system.` },
    { characterId: 'tomas', content: 'How are your works related to the human figure and technology?' },
    { characterId: 'cyshimi', content: `I see my work as a way to experiment with the human body, pushing the limits of its forms and exploring how it can expand and become hybrid between the natural and artificial. Nail extensions are a form of cyborg-ism.\nIn 2023, I also did a Web3 project called Cyshimi Custom Nails, which let me collaborate with a collector to create a physical nail set through a blockchain transaction.\nCurrently, I’m doing an artist residency at the Hybrid Body Lab at Cornell University. It has been the first time I’ve 3D-printed my nails, and I plan to keep developing work through this technology.` },
    { characterId: 'brendy', content: `It has always been about transmutation and this idea of a foot that doesn't fit into society. That's why, when I talk about wearable sculpture, I believe in a kind of utopia. Often it's not even human, it's not entirely real.\nWhen I started doing this in 2015 or 2016, there weren't many upcycled pieces—it was very early. The way I built them, tying things with cardboard or using less fixed materials, wasn't meant for someone to wear every day thinking it was practical—it isn't. These pieces are made for specific moments.\nThe idea behind my constructions isn't strictly human—it ends up being cyborg.\nWhen I entered Web3, I couldn't stop thinking about how to bring these physical pieces and sculptures into the digital world. That's when I had the idea to do a 360 scan. I'm still eager to create more elaborate scans with better equipment.` },
    { characterId: 'tomas', content: 'What did you learn about the human body and its alterations through your work?' },
    { characterId: 'cyshimi', content: `I believe what I create are not just static objects but performative sculptures. They affect my daily life, the way I interact with things around me, and how I see myself and my place in the world. In a way, I sculpt the sculptures, and they sculpt me back.\nIt’s interesting how they’re attached to one of the greatest tools of our body—our hands—but they inhibit one of its most utilitarian functions. Yet I, and many others, choose to have them as a form of identification and expression.` },
    { characterId: 'brendy', content: `I learned new ways of walking. I’m making these shoes that connect deeply to me, but when I see people’s feedback, I realize they also see themselves in them. The pieces generate memory and feeling because they remind people of something they’ve seen or felt before.\nI’m still discovering everything I absorb through this creative process. But I always see something new emerge—something I hadn’t done or even thought about before.\nI really like this idea that when I build a piece, it’s also a performance. It’s something new I’m discovering in the moment. Building a piece lets me absorb so many new things—that’s the essence of it.` }
  ],
  images: [],
  background: '/media/body-frontier/interview/interview-bg-2.webp'
}; 