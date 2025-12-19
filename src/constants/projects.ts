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
        // {
        //         title: "Digital Archaeology",
        //         subtitle: "Pinky Blue, Sabato, Estella Flores & Stipin Pixel",
        //         description: "We are constantly bombarded by new media — Yet, I remain influenced by the aesthetics of the past. Limitations offer a form of comfort when creating art.",
        //         thumbnailPath: ["media/home/thumbnails-v2/digital-archaeology/3.webp", "media/home/thumbnails-v2/digital-archaeology/1.webp", "media/home/thumbnails-v2/digital-archaeology/2.webp"],
        //         thumbnailPathMobile: "media/home/thumbnails-v2-mobile/digital-archaeology.webp",
        //         buttonPath: "media/home/buttons/14-button-digital-archaeology.png",
        //         pagePath: "/digital-archaeology",
        //         artists: ["Pinky Blue", "Sabato", "Estella Flores", "Stipin Pixel"],
        //         artworks: ["Pinky Blue", "Artifact", "Sabato"],
        //         quote: "\"We engage with these elements critically, subverting their original functions and assigning subjective meanings.\"",
        // },
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
        }
];