export interface Project {
    title: string;
    subtitle: string;
    description: string;
    thumbnailPath: string[];
    thumbnailPathMobile: string;
    buttonPath: string;
    pagePath: string;
    artists: string[];
    artworks: string[]; 
    quote: string;
}

export const projects: Project[] = [
        {
                title: "Inherent Instability",
                subtitle: "NICØ, Elbi & Ina Vare",
                description: "“Every time I work with this equipment, something new happens—endless ways to connect each machine, it’s like creating a new network.”",
                thumbnailPath: [
                    "media/home/thumbnails-v2/inherent-instability/3.webp",
                    "media/home/thumbnails-v2/inherent-instability/2.webp",
                    "media/home/thumbnails-v2/inherent-instability/1.webp",
                ],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/inherent-instability.webp",
                buttonPath: "media/home/buttons/03-button-inherent-instability.png",
                pagePath: "/inherent-instability",
                artists: ["NICØ", "Elbi", "Ina Vare"],
                artworks: ["No One Has Ever Seen a T-Rex", "NicØ playing", "Mercy"],
                quote: "“Every time I work with this equipment, something new happens — it’s like creating a new network.”",
        },
        {
                title: "Ecologies Of Code",
                subtitle: "Joaquina Salgado, Okytomo & Hypereikon",
                description: "“Water has a fascinating duality it's both a real-world element and a powerful symbol in our collective imagination.”",
                thumbnailPath: [
                    "media/home/thumbnails-v2/ecologies-of-code/3.webp",
                    "media/home/thumbnails-v2/ecologies-of-code/2.webp",
                    "media/home/thumbnails-v2/ecologies-of-code/1.webp",
                ],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/ecologies-of-code.webp",
                buttonPath: "media/home/buttons/02-button-ecologies-of-code.png",
                pagePath: "/ecologies-of-code",
                artists: ["Joaquina Salgado", "Okytomo", "Hypereikon"],
                artworks: ["Untitled", "Guia", "Untitled"],
                quote: "“Water has a fascinating duality it’s both a real-world element and a powerful symbol.”",
        },
        {
                title: "Digital Matter",
                subtitle: "Marcus3D, Sulkian & Parsa",
                description: "“Digital mediums are like flying and physical mediums is like walking. It’s that kind of freedom.”",
                thumbnailPath: [
                    "media/home/thumbnails-v2/digital-matter/3.webp",
                    "media/home/thumbnails-v2/digital-matter/2.webp",
                    "media/home/thumbnails-v2/digital-matter/1.webp",
                ],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/digital-matter.webp",
                buttonPath: "media/home/buttons/01-button-digital-matter.png",
                pagePath: "/digital-matter",
                artists: ["Marcus3D", "Sulkian", "Parsa"],
                artworks: ["Aero", "Pay to Win", "Digestive Delight"],
                quote: "“Digital mediums are like flying... and physical mediums is like walking. It’s that kind of freedom.",
        },
        {
            title: "Conversation with Operator",
            subtitle: "Ania Catherine, Dejha Ti & Jeff Davis",
            description: "“Jeff Davis sat down for an intimate conversation with the artistic duo Operator: Ania Catherine and Dejha exploring the creative process around their 3 act project Human Unreadable.”",
            thumbnailPath: [
                "media/home/thumbnails-v2/operator/3.webp",
                "media/home/thumbnails-v2/operator/2.webp",
                "media/home/thumbnails-v2/operator/1.webp",
            ],
            thumbnailPathMobile: "media/home/thumbnails-v2-mobile/operator.webp",
            buttonPath: "media/home/buttons/05-button-conversation-with-operator.png",
            pagePath: "/in-conversation",
            artists: ["Operator"],
            artworks: ["Human Unreadable", "Operator Interview", "Human Unreadable"],
            quote: "“When flesh meets algorithm, we expose the hidden values encoded in our technological systems—disrupting digital art's sterile perfection.“",
        },
        {
                title: "Body Frontier",
                subtitle: "VIXY, CYMOONV, BRENDY & CYSHIMI",
                description: "\"3D allows me to create worlds and characters, and to explore my identity through avatars that slowly transform, mutating between different elements.\"",
                thumbnailPath: ["media/home/thumbnails-v2/body-frontier/3.webp", "media/home/thumbnails-v2/body-frontier/1.webp", "media/home/thumbnails-v2/body-frontier/2.webp"],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/body-frontier.webp",
                buttonPath: "media/home/buttons/10-button-body-frontier.png",
                pagePath: "/body-frontier",
                artists: ["VIXY", "CYMOONV", "BRENDY", "CYSHIMI"],
                artworks: ["Delirio", "Untitled", "Untitled"],
                quote: "\"3D allows me to create worlds and characters, and to explore my identity.\"",
        },
        {
                title: "Memetic Rubble",
                subtitle: "Julian Brangold & Fremzor",
                description: "\"Taking memes and processing them through AI, transforming them into something new is what makes memes exceptional. They lack ownership — inherently meant to be shared, remixed, and transformed by anyone.\"",
                thumbnailPath: ["media/home/thumbnails-v2/memetic-rubble/3.webp", "media/home/thumbnails-v2/memetic-rubble/2.webp", "media/home/thumbnails-v2/memetic-rubble/1.webp"],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/memetic-rubble.webp",
                buttonPath: "media/home/buttons/12-button-memetic-rubble.png",
                pagePath: "/memetic-rubble",
                artists: ["Julian Brangold", "Fremzor"],
                artworks: ["Untitled", "Koko Context", "Untitled"],
                quote: "\"Taking memes and processing them through AI, transforming them into something new is what makes memes exceptional.\"",
        },
        {
                title: "Projected Emotional Technologies",
                subtitle: "Arvida Byström",
                description: "Projected Emotional Technologies studies outsourced affection: AI dolls, deepfake labor, and the economic exhaustion that makes synthetic intimacy feel pragmatic instead of dystopian.",
                thumbnailPath: [
                        "media/pet/project/project-1.webp",
                        "media/pet/project/project-2.webp",
                        "media/pet/project/project-3.webp"
                ],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/pet.webp",
                buttonPath: "media/home/buttons/14-button-digital-archaeology.png",
                pagePath: "/pet",
                artists: ["Arvida Byström"],
                artworks: ["Harmony Diagnostics", "Deepfake Batch #17", "Quiet Logistics"],
                quote: "\"Arvida Byström's project PET arrives at a precise cultural moment: five million users subscribed to a single AI girlfriend app in its first month of operation.\"",
        },
        {
                title: "What's on your mind",
                subtitle: "Daniel Vasconcelos & H4wnee",
                description: "Artists weaponize platform mechanics—treating feeds, personas, and algorithms as mutable material—until the social web becomes a living studio where identity, attention, and resistance blur.",
                thumbnailPath: [
                        "media/whats-on-your-mind/carusel-1/daniel-gallery-2-1x.webp",
                        "media/whats-on-your-mind/carusel-1/daniel-gallery-3-1x.webp",
                        "media/whats-on-your-mind/carusel-2/h4wnee-gallery-1x.webp"
                ],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/whats-on-your-mind.webp",
                buttonPath: "media/home/buttons/11-button-whats-on-your-mind.png",
                pagePath: "/whats-on-your-mind",
                artists: ["Daniel Vasconcelos", "H4wnee"],
                artworks: ["Platforms Limitations", "Daniel Vasconcelos", "H4wnee"],
                quote: "\"A new digital self emerges—distributed, reactive, endlessly iterated.\"",
        },
        {
                title: "Subconscious Media",
                subtitle: "Cyberspace has evolved into a realization platform where individual creative expressions reveal emergent patterns of collective thinking.",
                description: "\"More tools gives the possibility to better express what you don't quite know what it is. Even if you are unsure of the path, the important thing is not to lose what guides you, the essential, what really matters.\"",
                thumbnailPath: ["media/home/thumbnails-v2/subconscious-media/3.webp", "media/home/thumbnails-v2/subconscious-media/2.webp", "media/home/thumbnails-v2/subconscious-media/1.webp"],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/subconscious-media.webp",
                buttonPath: "media/home/buttons/13-button-subconscious-media.png",
                pagePath: "/subconscious-media",
                artists: ["Vidal Herrera", "Gregorio Nash"],
                artworks: ["Untitled", "Observable Halo of a Comet Impact", "Influencer"],
                quote: "\"Cyberspace has evolved into a realization platform where individual creative expressions reveal emergent patterns of collective thinking.\"",
        },
        {
                title: "Digital Archaeology",
                subtitle: "PinkyBlu, Sabato, Stipin Pixel, Estelle Flores & CYDR",
                description: "We are constantly bombarded by new media — Yet, I remain influenced by the aesthetics of the past. Limitations offer a form of comfort when creating art.",
                thumbnailPath: ["media/home/thumbnails-v2/digital-archaeology/3.webp", "media/home/thumbnails-v2/digital-archaeology/1.webp", "media/home/thumbnails-v2/digital-archaeology/2.webp"],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/digital-archaeology.webp",
                buttonPath: "media/home/buttons/14-button-digital-archaeology.png",
                pagePath: "/digital-archaeology",
                artists: ["PinkyBlu", "Sabato", "Stipin Pixel", "Estelle Flores", "CYDR"],
                artworks: ["PinkyBlu", "Artifact", "Sabato"],
                quote: "\"Transforming retro aesthetics into critique unearthing how even our interfaces carry ideology, and how friction can liberate artists from the polish of the present.\"",
        },
        {
                title: "Queering the Web3",
                subtitle: "Zak Krevitt & Sky Goodman",
                description: "The foretold utopia of Web3 reveals itself as a contentious landscape—one where queer expression both flourishes and falls victim to praticable patterns of erasure.",
                thumbnailPath: ["media/home/thumbnails-v2/queering-the-web3/3.webp", "media/home/thumbnails-v2/queering-the-web3/1.webp", "media/home/thumbnails-v2/queering-the-web3/2.webp"],
                thumbnailPathMobile: "media/home/thumbnails-v2-mobile/queering-web3.webp",
                buttonPath: "media/home/buttons/15-button-queering-the-web3.png",
                pagePath: "/queering-the-web3",
                artists: ["Zak Krevitt", "Sky Goodman"],
                artworks: ["Digital Artifacts", "Digital Kinship", "Future Possibilities"],
                quote: "\"The foretold utopia of Web3 reveals itself as a contentious landscape—one where queer expression both flourishes and falls victim to praticable patterns of erasure.\"",
        },
        {
                title: "Chaos Agents",
                subtitle: "Rocco Gallo & Perfect Loop",
                description: "Digital art has long served as a crucible for conceptual experimentation, where computation, probability, and algorithmic logic combine to generate aesthetic forms grounded in chance and indeterminacy.",
                thumbnailPath: ["media/chaos-agents/about-1/about-1.webp", "media/chaos-agents/about-2/about-1.webp", "media/chaos-agents/about-3/about-1.webp"],
                thumbnailPathMobile: "media/chaos-agents/main-cover.webp",
                buttonPath: "media/home/buttons/15-button-chaos-agents.png",
                pagePath: "/chaos-agents",
                artists: ["Rocco Gallo", "Perfect Loop"],
                artworks: ["Nano", "Floppy Drive", "Mushroom nightmare"],
                quote: "Generative art offers a quiet form of resistance. It disrupts visual predictability by reintroducing randomness—not as chaotic noise, but as a creative force.",
        },
        {
                title: "Virality Overnight",
                subtitle: "Riniifish & Woc",
                description: "In the web3 ecosystem, digital artists navigate a fundamental paradox between permanence and vitality. With one hand, they engage a blockchain that derives its authority from immutable, decentralized records; with the other, they respond to an attention economy driven by novelty and hype.",
                thumbnailPath: ["media/virality-overnight/about-3/about-1.webp", "media/virality-overnight/about-1/about-1.webp", "media/virality-overnight/about-2/about-1.webp"],
                thumbnailPathMobile: "media/virality-overnight/main-cover.webp",
                buttonPath: "media/home/buttons/16-button-virality-overnight.png",
                pagePath: "/virality-overnight",
                artists: ["Riniifish", "Woc"],
                artworks: [],
                quote: "Is virality constructing a new system of artistic validation, or does it merely offer a mirage of recognition?",
        },
        {
                title: "Every Creation is Loss",
                subtitle: "Chepertom & Asdrúbal Gomez",
                description: "Cloud storage, blockchain immutability, and promises of data immortality all reflect digital culture's obsession with permanence. This mindset faces a direct challenge from artists who deliberately embrace entropy and digital erosion.",
                thumbnailPath: [
                        "media/every-creation-is-loss/artwork-grid-1/artwork-grid-1.webp",
                        "media/every-creation-is-loss/artwork-grid-1/artwork-grid-2.webp",
                        "media/every-creation-is-loss/artwork-grid-1/artwork-grid-3.webp"
                ],
                thumbnailPathMobile: "media/every-creation-is-loss/main-cover.webp",
                buttonPath: "media/home/buttons/17-button-every-creation-is-loss.png",
                pagePath: "/every-creation-is-loss",
                artists: ["Chepertom", "Asdrúbal Gomez"],
                artworks: ["Artwork 1", "Artwork 2", "Artwork 3"],
                quote: "\"Digital erosion is not merely an aesthetic choice, but a calculated resistance to imposed permanence\"",
        },
        {
                title: "One body, a thousand worlds",
                subtitle: "",
                description: "What does it mean to build an entire creative practice around a single character? In the hands of certain artists, such figures are far more than illustrated avatars—they operate as symbolic nodes, anchoring entire ecosystems of meaning.",
                thumbnailPath: [
                        "media/one-body-a-thousand-worlds/artworks-grid/artworks-grid-1.webp",
                        "media/one-body-a-thousand-worlds/artworks-grid/artworks-grid-2.webp",
                        "media/one-body-a-thousand-worlds/artworks-grid/artworks-grid-3.webp"
                ],
                thumbnailPathMobile: "media/one-body-a-thousand-worlds/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-one-body-a-thousand-worlds.png",
                pagePath: "/one-body-a-thousand-worlds",
                artists: ["Turro", "Salawaki"],
                artworks: [],
                quote: "What does it mean to build an entire creative practice around a single character?",
        },
        {
                title: "Corrupted Flesh",
                subtitle: "Veronika Peshekhonova, Tim Høibjerg & Matheus Carvalho",
                description:
                        "Technical systems assume seamless operation and infinite adaptability; as bodies are absorbed into them, strain replaces harmony. The artists here use corruption and transformation as resistance, positioning the fractured body as a site that confronts the costs of technological smoothness.",
                thumbnailPath: [
                        "media/corrupted-flesh/artworks-grid/artworks-grid-1.webp",
                        "media/corrupted-flesh/artworks-grid/artworks-grid-2.webp",
                        "media/corrupted-flesh/artworks-grid/artworks-grid-3.webp"
                ],
                thumbnailPathMobile: "media/corrupted-flesh/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-corrupted-flesh.png",
                pagePath: "/corrupted-flesh",
                artists: ["Veronika Peshekhonova", "Tim Høibjerg", "Matheus Carvalho"],
                artworks: [],
                quote: "By staging damage and incompleteness, the works reveal how seamless systems obscure the body's materiality and its capacity to resist."
        },
        {
                title: "Post-Catastrophe Imagination",
                subtitle: "Alfacenttauri & Linus Åberg",
                description:
                        "Contemporary artists use virtual environments and game engines to reimagine how worlds can exist—immersive spaces where landscapes breathe, creatures morph, and the usual rules of progress break down. This is a critical practice that asks whether digital experimentation can reveal new social, ecological, and perceptual possibilities.",
                thumbnailPath: [
                        "media/post-catastrophe-imagination/about-1/about-1.webp",
                        "media/post-catastrophe-imagination/about-2/about-1.webp",
                        "media/post-catastrophe-imagination/about-3/about-1.webp"
                ],
                thumbnailPathMobile: "media/post-catastrophe-imagination/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-post-catastrophe-imagination.png",
                pagePath: "/post-catastrophe-imagination",
                artists: ["Alfacenttauri", "Linus Åberg"],
                artworks: [],
                quote: "Can virtual imagination generate alternative ways of being? It is not escapism—it explores how digital experimentation can reveal new possibilities."
        },
        {
                title: "The End of the Muse",
                subtitle: "",
                description: "Artists no longer depict idealized sitters with flawless features. Instead, their subjects have disproportionate eyes, melting skin, and limbs elongated at impossible angles. Ugliness and disturbance have become artistic languages, echoing Umberto Eco's argument in History of Ugliness that beauty has always been a cultural convention and that the grotesque carries symbolic value capable of redefining art.",
                thumbnailPath: [
                        "media/the-end-of-the-muse/artworks-grid/artworks-grid-1.webp",
                        "media/the-end-of-the-muse/artworks-grid/artworks-grid-2.webp",
                        "media/the-end-of-the-muse/artworks-grid/artworks-grid-3.webp"
                ],
                thumbnailPathMobile: "media/the-end-of-the-muse/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-the-end-of-the-muse.png",
                pagePath: "/the-end-of-the-muse",
                artists: ["RAM", "lorenipsum"],
                artworks: [],
                quote: "Artists no longer depict idealized sitters with flawless features. These new muses are no longer bound to narrow ideals of beauty."
        },
        {
                title: "The Fashion Paradox",
                subtitle: "Matheus Araújo & Costas Kazantzis",
                description: "Fashion splits between garments that escape the body entirely into digital matter and those that bring digital aesthetics back into physical clothing, questioning whether digital tools should free us from material limits or radically transform them.",
                thumbnailPath: [
                        "media/the-fashion-paradox/artwork-grid-1/3.webp",
                        "media/the-fashion-paradox/artwork-grid-1/2.webp",
                        "media/the-fashion-paradox/artwork-grid-1/1.webp"
                ],
                thumbnailPathMobile: "media/the-fashion-paradox/intro.webp",
                buttonPath: "media/home/buttons/XX-button-the-fashion-paradox.png",
                pagePath: "/the-fashion-paradox",
                artists: ["Matheus Araújo", "Costas Kazantzis"],
                artworks: [],
                quote: "Fashion is shifting from mere decoration to something deeper—a bridge between who we are individually and how technology shapes us collectively."
        },
        {
                title: "Online Femininity",
                subtitle: "MINATI, Virk & Stulka",
                description: "Online Femininity examines how femme and women artists navigate Web3’s promise of liberation while contending with persistent hierarchies of visibility, exploitation, and control in digital space.",
                thumbnailPath: [
                        "media/online-femininity/about-1.webp",
                        "media/online-femininity/about-2.webp",
                        "media/online-femininity/about-3.webp"
                ],
                thumbnailPathMobile: "media/online-femininity/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-online-femininity.png",
                pagePath: "/online-femininity",
                artists: ["MINATI", "Virk", "Stulka"],
                artworks: [],
                quote: "Cyberfeminism is no longer about leaving the body behind. It’s about reclaiming how the body moves, appears, and circulates online."
        },
        {
                title: "Digital Homesteading",
                subtitle: "Resonant.Love & Huntrezz",
                description: "Digital Homesteading explores how artists cultivate sustainable relationships with technology, building independent infrastructures that foreground maintenance, interdependence, and environmental limits.",
                thumbnailPath: [
                        "media/digital-homesteading/artwork-grid/3.webp",
                        "media/digital-homesteading/artwork-grid/2.webp",
                        "media/digital-homesteading/artwork-grid/1.webp"
                ],
                thumbnailPathMobile: "media/digital-homesteading/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-digital-homesteading.png",
                pagePath: "/digital-homesteading",
                artists: ["Resonant.Love", "Huntrezz"],
                artworks: [],
                quote: "Digital homesteading is less about escaping into the virtual than about cultivating sustainable relationships with technology."
        },
        {
                title: "Care Bots / Browser Beasts",
                subtitle: "Bora & Jonathan Monaghan",
                description: "Care Bots/Browser Beasts examines how digital companions, AI bots, and virtual pets turn care into currency, while artists reimagine relationships with digital beings beyond gamification and extraction.",
                thumbnailPath: [
                        "media/care-bots-browser-beasts/artwork-grid/3.webp",
                        "media/care-bots-browser-beasts/artwork-grid/2.webp",
                        "media/care-bots-browser-beasts/artwork-grid/1.webp"
                ],
                thumbnailPathMobile: "media/care-bots-browser-beasts/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-care-bots-browser-beasts.png",
                pagePath: "/care-bots-browser-beasts",
                artists: ["Bora", "Jonathan Monaghan"],
                artworks: [],
                quote: "Browser pets and AI companions that populate our screens promise emotional connection while harvesting the very attention they claim to nurture."
        },
        {
                title: "We like being data",
                subtitle: "Mitchell F. Chan",
                description: "Doing a studio visit with Mitchell F. Chan is like entering a game. You jump between interactive conceptual environments, acutely aware of yourself as a character being observed.",
                thumbnailPath: [
                        "media/we-like-being-data/about-3.webp",
                        "media/we-like-being-data/about-2.webp",
                        "media/we-like-being-data/about-1.webp"
                ],
                thumbnailPathMobile: "media/we-like-being-data/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-we-like-being-data.png",
                pagePath: "/we-like-being-data",
                artists: ["Mitchell F. Chan"],
                artworks: [],
                quote: "Games can do something no other art form can. It's a medium of agency. It absorbs and reorganizes every other medium inside its structure."
        },
        {
                title: "New Nature",
                subtitle: "Mark Dorf & Sara Ludy",
                description:
                        "New Nature examines how technology is rewriting our relationships to nature—from AI ecosystem mapping and climate simulations to nature cams and bio-hacked organisms—where the natural and the technological dissolve into one another.",
                thumbnailPath: [
                        "media/new-nature/artwork-grid/1.webp",
                        "media/new-nature/artwork-grid-2/1.webp",
                        "media/new-nature/about-2.webp"
                ],
                thumbnailPathMobile: "media/new-nature/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-new-nature.png",
                pagePath: "/new-nature",
                artists: ["Mark Dorf", "Sara Ludy"],
                artworks: [],
                quote: "What really counts as nature within a cultural paradigm that prioritizes technological acceleration?"
        },
        {
                title: "Oracle Machines",
                subtitle: "Edgar Fabián Frías & Nora Berman",
                description:
                        "The confluence of technocapitalism, new-age spirituality, and the wellness industry has produced digital platforms that claim spiritual connection—often as aesthetic extraction dressed as mysticism. Artists in this exhibition probe spiritual technology that resists commodification and refuse extractive logics embedded in digital architecture.",
                thumbnailPath: [
                        "media/oracle-machines/about-1.webp",
                        "media/oracle-machines/about-2.webp",
                        "media/oracle-machines/about-3.webp"
                ],
                thumbnailPathMobile: "media/oracle-machines/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-oracle-machines.png",
                pagePath: "/oracle-machines",
                artists: ["Edgar Fabián Frías", "Nora Berman"],
                artworks: [],
                quote: "For these artists, the question is not whether technology can access the sacred, but whether spiritual practice can refuse the extractive logics embedded in digital architecture."
        },
        {
                title: "Contact Zones",
                subtitle: "Danielle Brathwaite-Shirley, Antigoni Tsagkaropoulou & Theo Triantafyllidis",
                description:
                        "What happens when game logic seeps into galleries and wearables? Artists in this series use touch, proximity, and participation to create uncanny contact zones where digital and physical realities share a nervous system—refusing smooth consumption in favor of friction, awkwardness, and embodied choice.",
                thumbnailPath: [
                        "media/contact-zones/image.webp",
                        "media/contact-zones/image%201.webp",
                        "media/contact-zones/image%202.webp"
                ],
                thumbnailPathMobile: "media/contact-zones/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-contact-zones.png",
                pagePath: "/contact-zones",
                artists: ["Danielle Brathwaite-Shirley", "Antigoni Tsagkaropoulou", "Theo Triantafyllidis"],
                artworks: [],
                quote: "When a gallery becomes half-field, half-videogame, you feel that negotiation rather than thinking about it abstractly."
        },
        {
                title: "Synthetic Senses",
                subtitle: "Parag Mital & Aurora Mititelu",
                description:
                        "What new sensations emerge when perception is no longer bound by biology, but coded, sculpted, and released into a digital system? Artists use machine learning, haptic sensors, and generative audio to scramble perception—building semi-autonomous systems that reclaim the glitch and the overflow.",
                thumbnailPath: [
                        "media/synthetic-senses/DSC08823-Edit.webp",
                        "media/synthetic-senses/crop1-1-1600x756.webp",
                        "media/synthetic-senses/N02-Genesis_02.webp"
                ],
                thumbnailPathMobile: "media/synthetic-senses/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-synthetic-senses.png",
                pagePath: "/synthetic-senses",
                artists: ["Parag Mital", "Aurora Mititelu"],
                artworks: [],
                quote: "Synthetic senses matter less for accuracy than for the forms of attention they demand."
        },
        {
                title: "MOTHERBOARD",
                subtitle: "Wednesday Kim & Addie Wagenknecht",
                description:
                        "Care and maintenance circulate in algorithms and interfaces that borrow the rhythms of parenting. MOTHERBOARD follows artists who make maternal labor legible in digital space—not optimizing care away, but holding repetition, failure, and presence in view.",
                thumbnailPath: [
                        "media/motherboard/download-12.webp",
                        "media/motherboard/c-PersonalWednesdayKim__ScreenShot20240419at1.57.21PM_1713560265804.webp",
                        "media/motherboard/jeremy-bailey-addie-wagenknecht.webp"
                ],
                thumbnailPathMobile: "media/motherboard/download-12.webp",
                buttonPath: "media/home/buttons/XX-button-motherboard.png",
                pagePath: "/motherboard",
                artists: ["Wednesday Kim", "Addie Wagenknecht"],
                artworks: [],
                quote: "They aren’t optimizing care. They are making it visible, on their own terms."
        },
        {
                title: "Portal Highway",
                subtitle: "Space Popular & Claudia Hart",
                description:
                        "Portals are magical infrastructure that determine what moves smoothly and where we end up. Artists in this terrain refuse frictionless crossings—building systems where entering requires choice, passage takes time, and you can still turn back.",
                thumbnailPath: [
                        "media/portal-highway/cover-main.webp",
                        "media/portal-highway/about-2.webp",
                        "media/portal-highway/SpacePopular_2023_PortalGalleries_MAK_Stills_VRfilm2D_001.webp"
                ],
                thumbnailPathMobile: "media/portal-highway/cover-main.webp",
                buttonPath: "media/home/buttons/XX-button-portal-highway.png",
                pagePath: "/portal-highway",
                artists: ["Space Popular", "Claudia Hart"],
                artworks: [],
                quote: "The portal becomes a new form of manifesto—protocols for crossing that resist exclusion and embrace the thickness of transition itself."
        },
        {
                title: "Human Caused Error",
                subtitle: "Marco Donnarumma & Mónica Rikić",
                description:
                        "Artists who claim misalignment, breakdown, and error as productive sites for inquiry—where friction between human bodies and machines exposes technological assumptions and new forms of embodiment begin to emerge.",
                thumbnailPath: [
                        "media/human-caused-error/Marco-Donnarumma-1-1280x853.webp",
                        "media/human-caused-error/Marco-Donnarumma_9_photo-eunice-maurice-CTM-Festival-jpg.webp",
                        "media/human-caused-error/image.webp"
                ],
                thumbnailPathMobile: "media/human-caused-error/Marco-Donnarumma-1-1280x853.webp",
                buttonPath: "media/home/buttons/XX-button-human-caused-error.png",
                pagePath: "/human-caused-error",
                artists: ["Marco Donnarumma", "Mónica Rikić"],
                artworks: [],
                quote: "Friction is not failure, it is where the system reveals itself."
        },
        {
                title: "Off-Platforms",
                subtitle: "Lou Fauroux & Alice Bucknell",
                description:
                        "Lou Fauroux and Alice Bucknell on what it feels like to live inside god-mode infrastructures at the moment their promises start to unravel.",
                thumbnailPath: [
                        "media/off-platforms/image.webp",
                        "media/off-platforms/image 1.webp",
                        "media/off-platforms/image 2.webp"
                ],
                thumbnailPathMobile: "media/off-platforms/image.webp",
                buttonPath: "media/home/buttons/XX-button-off-platforms.png",
                pagePath: "/off-platforms",
                artists: ["Lou Fauroux", "Alice Bucknell"],
                artworks: [],
                quote: "The most honest response to planetary-scale infrastructure might be learning to read the ground beneath your feet before the data does it for you."
        },
        {
                title: "Alien Alphabets",
                subtitle: "Alice Bucknell & Kyle McDonald",
                description:
                        "Artificial intelligence has made human knowledge more legible than ever. Yet many artists are moving away from this abundance, drawn instead to the slippery languages of more-than-human forces—communication systems built for beings that don't exist yet, grammars that resist translation by design.",
                thumbnailPath: [
                        "media/alien-alphabets/main-cover.webp",
                        "media/alien-alphabets/image_14.webp",
                        "media/alien-alphabets/AliceBucknell_1.webp"
                ],
                thumbnailPathMobile: "media/alien-alphabets/main-cover.webp",
                buttonPath: "media/home/buttons/XX-button-alien-alphabets.png",
                pagePath: "/alien-alphabets",
                artists: ["Alice Bucknell", "Kyle McDonald"],
                artworks: [],
                quote: "What if language's most interesting capacity is to disorient us into new paradigms of knowing—to leak, to sprawl, to speak for itself and to itself?"
        }
];