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

export const queeringTheWeb3ChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas-jones',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'sky-goodman',
			name: 'Sky Goodman',
			avatar: '/media/queering-the-web3/interview/pfp1.webp',
			type: 'answer'
		},
		{
			id: 'zak-krevitt',
			name: 'Zak Krevitt',
			avatar: '/media/queering-the-web3/interview/pfp2.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas-jones',
			content: 'How has Web3 changed artistic opportunities for queer creators?'
		},
		{
			characterId: 'sky-goodman',
			content: `I was really excited about the opportunities it created for trans and queer people to actually make a living as artists. In 2021, and even into 2022, you saw people building real visibility for themselves—some were even able to quit their day jobs.

What I appreciated about the blockchain was its anonymity. It allowed people to share their work without the same fear of harassment. As a trans person, there's something powerful about being able to exist in that space without having your physical form put at risk.

But it didn't take long before the scene started to reflect society at large, with all the same "isms" and inequalities. Whenever the market dipped, people of color, trans people, queer folks, and women were often the first to be forgotten.`
		},
		{
			characterId: 'zak-krevitt',
			content: `Blockchain offers both potential and limitation for queer artists. Its permissionless architecture resists the kind of front-end censorship we often face on traditional platforms, creating space for expressions that would be filtered or removed elsewhere.

However, NFT markets still tend to conflate monetary value with cultural significance, which ends up reinforcing existing hierarchies. While Web3 expands creative possibilities beyond what traditional galleries might accept, the economic pressures can push artists toward self-censorship—to appeal to a largely homogeneous collector class. The technical barriers also limit access for many artists who want to use these tools but don't have the resources or training, adding another layer of exclusion even as certain doors open.`
		},
		{
			characterId: 'tomas-jones',
			content: 'Where do you find community during these politically challenging times?'
		},
		{
			characterId: 'sky-goodman',
			content: `Community preservation becomes essential when facing erasure from multiple fronts. Free from advertiser control, Web3 allows for expressions often censored elsewhere, but this doesn't replace the need for physical gathering spaces.

As oppressive forces gain terrain around the world, the erasure of marginalized creations becomes a reality that lives in tension with the urgent necessity for documentation and archival.

We need spaces that aren't just about monetary exchange but about cultural sustenance. The collective ownership models possible through blockchain could help sustain our community spaces, but only if we deliberately structure them to prioritize cultural preservation over profit maximization.`
		},
		{
			characterId: 'zak-krevitt',
			content: `There's a kind of power exchange that happens when you're physically in a room with people. Right now, I think we really need our local communities. We need both—to build and sustain community in digital spaces, and to nurture it in physical ones too.`
		},
		{
			characterId: 'tomas-jones',
			content: 'How do you see the preservation of queer art?'
		},
		{
			characterId: 'zak-krevitt',
			content: `Looking at queerness as a generative force behind cultural creation makes archiving an act of historical recovery rather than mere representation. Erasure, from the AIDS crisis to market-driven self-censorship, has systematically stripped foundational queer contributions from cultural memory.

The immutability and decentralization of blockchain could theoretically protect our cultural artifacts from censorship, but this exists alongside a market-driven ecosystem that reproduces the same hierarchies found in traditional art markets.

True preservation isn't bound to any platform but exists in the people who remember, support, and sustain each other—ensuring survival beyond the rise and fall of digital infrastructures.`
		},
		{
			characterId: 'sky-goodman',
			content: `It's strange, because as a queer person, you come into the world knowing you're already a bit outside of society. There's a kind of beauty in accepting that ephemerality.

There's resilience in fighting for more visibility and rights, but there's also something beautiful about embracing the margins and saying, well, fck it—this is my life and I'm going to live it.

Sometimes I find myself in a place where I'm not too concerned with legacy or how much will be remembered. I think about someone like Pauli Murray, who was doing civil rights work in the 1950s before Martin Luther King. Her legacy—because she was queer—has been almost completely erased from mainstream history, despite her enormous contributions.`
		}
	],
	images: [],
	background: '/media/queering-the-web3/interview/interview-bg.webp'
}; 