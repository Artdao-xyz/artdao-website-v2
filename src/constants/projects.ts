export interface Project {
    title: string;
    subtitle: string;
    description: string;
    thumbnailPath: string[];
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
            buttonPath: "media/home/buttons/05-button-conversation-with-operator.png",
            pagePath: "/in-conversation",
            artists: ["Operator"],
            artworks: ["Human Unreadable", "Operator Interview", "Human Unreadable"],
            quote: "“When flesh meets algorithm, we expose the hidden values encoded in our technological systems—disrupting digital art's sterile perfection.“",
        },
        // {
        //         title: "Artifice",
        //         subtitle: "Rua Ferreira Lapa 12a, Lisbon | 05.28 - 05.30.2024",
        //         description: "“As the boundary between artificial and real becomes increasingly blurred - technology leads us into deeper confrontations with the idea of a self that itself is born from fiction.”",
        //         thumbnailPath: [
        //             "media/home/thumbnails-v2/artifice/3.webp",
        //             "media/home/thumbnails-v2/artifice/2.webp",
        //             "media/home/thumbnails-v2/artifice/1.webp"
        //         ],
        //         buttonPath: "media/home/buttons/04-button-artifice.png",
        //         pagePath: "/artifice",
        //         artists: ["Okytomo", "Frenetik Void"],
        // },
        // {
        //         title: "O.R.B",
        //         subtitle: "Caroço, São Paulo | 03.23.24",
        //         description: "This self-declared 'reunion' deploys institutional parody as creative strategy—simultaneously celebrating and subverting traditional art structures while amplifying Brazilian digital creators on the global stage.",
        //         thumbnailPath: [
        //             "media/home/thumbnails-animation/3.webp",
        //             "media/home/thumbnails-animation/2.webp",
        //             "media/home/thumbnails-animation/1.webp",
        //         ],
        //         buttonPath: "media/home/buttons/09-button-orb.png",
        //         pagePath: "/orb",
        //         artists: ["Ygor Alves", "Pwdro", "MOXCA", "Occulted", "Cydr", "Cyshimi", "Subtle.Bubble", "Livi Liu", "Xobaia", "Estilara", "Femzor", "Kontronauta", "Epx"],
        // },
        // {
        //         title: "Non Places",
        //         subtitle: "31 Rue Henri Chevreu, Paris | 07.18 - 07.21.23",
        //         description: "In the age of digital code, binary partitions replace geographic coordinates — erasing distinctions between original and copy while transforming from specific location to sites of manifestation.",
        //         thumbnailPath: [
        //             "media/home/thumbnails-animation/1.webp",
        //             "media/home/thumbnails-animation/2.webp",
        //             "media/home/thumbnails-animation/3.webp"
        //         ],
        //         buttonPath: "media/home/buttons/06-button-non-places.png",
        //         pagePath: "/non-places",
        //         artists: ["Fede Bona", "Tomas Jones", "Luxi", "Daira", "Frenetik Void", "Parsa Mostaghim", "Zak Krevitt", "The Internet Office", "Fede Fauli"],
        // },
        // {
        //         title: "Intertwined",
        //         subtitle: "Tv. do Moinho de Vento, Lisbon | 06.06 - 06.08.2023",
        //         description: "By embracing the quirks and essence of code rather than just its output, digital artists enter a provocative dance of co-creation that questions who's really in control.",
        //         thumbnailPath: [
        //             "media/home/thumbnails-animation/3.webp",
        //             "media/home/thumbnails-animation/2.webp",
        //             "media/home/thumbnails-animation/1.webp",
        //         ],
        //         buttonPath: "media/home/buttons/07-button-intertwined.png",
        //         pagePath: "/intertwined",
        //         artists: ["Postmodern Bot", "Tomas Jones", "Panter Xhita", "Meelayya", "Lulu", "Falvio Malaguti", "Mardeformas"],
        // },
        // {
        //         title: "Body Frontier",
        //         subtitle: "VIXY, CYMOONV, BRENDY & CYSHIMI",
        //         description: "“3D allows me to create worlds and characters, and to explore my identity through avatars that slowly transform, mutating between different elements.”",
        //         thumbnailPath: "media/home/thumbnails/10-home-body-frontier.webp",
        //         buttonPath: "media/home/buttons/10-button-body-frontier.png",
        //         pagePath: "#",
        //         artists: ["VIXY", "CYMOONV", "BRENDY", "CYSHIMI"],
        // },
        // {
        //         title: "What's On Your Mind?",
        //         subtitle: "Daniel Vasconcelos & H4WNEE",
        //         description: "“Despite the many tools and possibilities there's a responsibility to use what cannot be easily translated into algorithms challenging the limitations of the platform while embracing its possibilities.”",
        //         thumbnailPath: "media/home/thumbnails/11-home-whats-on-your-mind.webp",
        //         buttonPath: "media/home/buttons/11-button-whats-on-your-mind.png",
        //         pagePath: "#",
        //         artists: ["Daniel Vasconcelos", "H4WNEE"],
        // },
        // {
        //         title: "Memetic Rubble",
        //         subtitle: "Julian Brangold & Fremzor",
        //         description: "“Taking memes and processing them through AI, transforming them into something new is what makes memes exceptional. They lack ownership — inherently meant to be shared, remixed, and transformed by anyone.”",
        //         thumbnailPath: "media/home/thumbnails/12-home-memetic-rubble.webp",
        //         buttonPath: "media/home/buttons/12-button-memetic-rubble.png",
        //         pagePath: "#",
        //         artists: ["Julian Brangold", "Fremzor"],
        // },
        // {
        //         title: "Subconscious Media",
        //         subtitle: "Vidal Herrera & Gregorio Nash",
        //         description: "“More tools gives the possibility to better express what you don't quite know what it is. Even if you are unsure of the path, the important thing is not to lose what guides you, the essential, what really matters.”",
        //         thumbnailPath: "media/home/thumbnails/13-home-subconscious-media.webp",
        //         buttonPath: "media/home/buttons/13-button-subconscious-media.png",
        //         pagePath: "#",
        //         artists: ["Vidal Herrera", "Gregorio Nash"],
        // },
        // {
        //         title: "Digital Archaeology",
        //         subtitle: "Pinky Blue, Sabato, Estella Flores & Stipin Pixel",
        //         description: "We are constantly bombarded by new media — Yet, I remain influenced by the aesthetics of the past. Limitations offer a form of comfort when creating art.",
        //         thumbnailPath: "media/home/thumbnails/14-home-digital-archaeology.webp",
        //         buttonPath: "media/home/buttons/14-button-digital-archaeology.png",
        //         pagePath: "#",
        //         artists: ["Pinky Blue", "Sabato", "Estella Flores", "Stipin Pixel"],
        // }
];