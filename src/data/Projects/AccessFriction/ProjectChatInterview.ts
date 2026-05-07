import type { ChatInterviewData } from '../Orb/ProjectChatInterview';

export const accessFrictionChatInterviewBackground =
	'/media/access-friction/Captioning_System_(2024)_up_at_francoisghebaly_in_Scupper_curated_by_my_primo_homeboysdontcry_.webp';

export const accessFrictionChatInterview: ChatInterviewData = {
	characters: [
		{
			id: 'tomas',
			name: 'Tomas Jones',
			avatar: '/media/artdao-question.webp',
			type: 'question'
		},
		{
			id: 'nat',
			name: 'Natalee Decker',
			avatar: '/media/access-friction/about1.webp',
			type: 'answer'
		},
		{
			id: 'cielo',
			name: 'Cielo G. Saucedo',
			avatar: '/media/access-friction/cielo_headshot_lowres.webp',
			type: 'answer'
		}
	],
	messages: [
		{
			characterId: 'tomas',
			content: 'How is your personal relationship with digital and virtual technologies?'
		},
		{
			characterId: 'nat',
			content:
				"I think there's always been an intrigue and an interest, but it was largely this access strategy for me. It allowed me to make work and make certain types of work from the computer, from a way of letting my body rest and not having the same physical demands of traditional physical studio practices. I think virtual space and the social potentials of the Internet and the way that embodiment can be experienced in virtual space has been important to me as a disabled person myself, somebody with mobility disability. I think there's things that are interesting to me about the sort of weightlessness, the different relationship to laws of physics and limitations of embodiment that are possible in digital space."
		},
		{
			characterId: 'cielo',
			content:
				"To me, it's like my practice with technology is mostly like an augmentation. Like, I think about this prosthetic of myself and beyond myself. Recently I've been thinking a lot about my work with technology in terms of labor and history. My dad integrated schools, all white schools in California, and they taught him how to be a tech worker. Ninety percent of the computers imported into the United States are from Mexico. So most tech workers in this region are Mexican, and I'm Mexican. I also think about the ways in which people were born to be tech workers or become tech workers. I really align myself in that kind of lineage of labor, especially because as a disabled person I'm not often given the distinction as a laborer in a Marxist sense. Usually I'm the beneficiary of social services. So reclaiming my work with technology is something that is part of a lineage not only because of immigration lineages, but as a lineage of a disabled person who uses augmentation as a way to expand self or make self possible."
		},
		{
			characterId: 'tomas',
			content:
				'Was there a point where you understood that this was not totally designed for you, or it was not for everybody?'
		},
		{
			characterId: 'nat',
			content:
				"That was a moment of really encountering that sort of engineered bias. This project Cripping CG we're working on—we're trying to research and then produce something additive in the way that gaming and animation, VR, digital art, how these asset libraries, things like avatars, digital objects, motion systems, are reproducing normativity. The technology for gathering data for motion capture—it's like a suit with all these sensors on it—it was really only able to be calibrated if you're somebody that's able to stand in a specific T pose and change these positions very quickly in order to calibrate and use the equipment. That was an interesting reveal. We're always encountering that whether it's in the absence of disability from these archives in these asset libraries, or seeing how disability gets embedded in stigma. Like, an atypical gait is only animated when it's for a zombie character."
		},
		{
			characterId: 'cielo',
			content:
				"The person who invented Oculus VR, he's also a weapons manufacturer, and he's been doing a lot of work in the virtual border right now. He put up all these sentry towers that are meant to sense certain bodies. At the same time, VR is foreclosing a certain kind of imagination of the world, or a future of the world from certain bodies—disabled folks, folks with low vision, blind people—but he's also directly capturing people, different population people. The first VR headset was named the Sword of Damocles. The Sword of Damocles is this Grecian myth by Cicero where there's this emperor trying to exert power over his people, and someone was jealous of him. And he's like, fine, I'll put this sword with a horse hair over your head and that terror is sort of—see, you can't handle power because you're too scared. Power and fear has been encoded in VR since its inception."
		},
		{
			characterId: 'tomas',
			content:
				"How do you navigate the balance between documentation and the usability of the devices you're creating?"
		},
		{
			characterId: 'cielo',
			content:
				"The cleaning is something that we're actually actively trying to move against. When you collect mocap, a really big part of it is cleaning up the data, normalizing it, and removing glitch. Those sorts of artifacts of movements, you can think of it as kind of a ghostly figure haunting that movement that arises within the translation of the body in the real world into this digital place. We really specifically keep it so we don't try to remove anything that might warp or normalize the way in which we see our bodies. But at the same time, we have these terms of services where the people who give us their data have complete say in how they want their data to look. The beautiful thing about the virtual is the fact that we have very specific hand in our representation."
		},
		{
			characterId: 'nat',
			content:
				"We're moving away from a standardization of the assets within the library of the data. This process in its entirety has been slowing down, and it's kind of met a pace that is in line with our capacities. We're really slowing down that process and making each element, each object, each asset, kind of bespoke to a relationship of consent with the person whose data it is. Trying to really find moments to highlight the messiness. Resisting the clean. I think a lot of it's relationship with VR in general is one of refusal."
		},
		{
			characterId: 'tomas',
			content:
				'Where do you start seeing a pattern of this was not made for a disabled person to use or to use this platform as intended?'
		},
		{
			characterId: 'nat',
			content:
				"I think it's always been that way. As I had more lived experience with disability, as I learned more about disabled experience and accessibility, it became a lot more surfaced and apparent to me. If you just look at the volume of the Internet that is not engineered to be accessible in these basic levels of compliance. How many people that are engineers work in the web where accessibility is always this conversation at the end where we're just trying to fix something to be legally compliant and protected from litigation. It's not coming from a place of care or responsibility. Look at a fundamental level, how little care there is in making basic infrastructure like the Internet accessible. Often I don't trust if a company's like, we're making a VR headset so that a disabled person can live a full life. I don't trust that they don't give a shit for a second."
		},
		{
			characterId: 'cielo',
			content:
				"I also want to bring up paywall. Regardless of how accessible it is, it's going to be behind—I don't know if it's like Maya, like 500 bucks a year or something. I think it's like building out not only the infrastructure of accessibility at the very core, but also investing in open source communities, so we can actually make the tools, but also make them actually accessible. People don't understand about rampant and engineered poverty. To be able to even make art feels like a necessity, but also you're really ridden really hard over here and probably everywhere where fascism is spreading. Making them accessible financially is what I focus on. I'm learning Houdini right now, and it's rad, but you render and it has huge watermarks. There's a huge paywall, and then you get past the paywall, it's inaccessible. It's maddening."
		},
		{
			characterId: 'tomas',
			content: 'How do you imagine the future of VR and digital environments?'
		},
		{
			characterId: 'nat',
			content:
				"Part of this project is wanting to create opportunities for more disabled people to be able to feel like there's a place for them to create, or there's strategies for them to create in virtual space. The hope is that the more work like that being produced that is from a place of self-authorship that's telling personal, individual stories, that is going to just create more attention around the need for these accessibility features. I think it just contributes to the ecosystem, and through that kind of collective labor, things will improve."
		},
		{
			characterId: 'cielo',
			content:
				"It feels like an ideological shift. These people who created Meta, they basically stole it from Neal Stephenson in Snow Crash. The metaverse. It's just lifted from these cis white guys who are just reselling this idea of what the virtual world is. This kind of colonial impulse, right? That this is what virtuality is, and you can gain access to it through these certain platforms. By making alternative platforms that are open source, that are tool-based—so rather than just giving somebody a tool that's already premade, it's like allowing us to make the tools together for our own ends—I think that's what I kind of hope is the impact of this project. It can't be defined beyond ourselves. It's barren ground. If we can make certain corners a little bit more fertile for ourselves—and the disabled community is far and wide, and to be called disabled is also a really specific distinction, a political distinction. Everyone has their different needs, so being able to support the different needs is also something that not one platform can give. What I think it does is it gives language to what crip virtuality might be."
		}
	],
	images: [],
	background: accessFrictionChatInterviewBackground
};
