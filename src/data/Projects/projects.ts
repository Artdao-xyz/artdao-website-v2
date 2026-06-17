import artificeMobile from '$lib/assets/images/projects/footer/mobile-artifice-min.webp';
import conversationMobile from '$lib/assets/images/projects/footer/mobile-conversation-min.webp';
import digitalMobile from '$lib/assets/images/projects/footer/mobile-digital-min.webp';
import ecologiesMobile from '$lib/assets/images/projects/footer/mobile-ecologies-min.webp';
import inherentMobile from '$lib/assets/images/projects/footer/mobile-inherent-min.webp';
import intertwinedMobile from '$lib/assets/images/projects/footer/mobile-intertwined-min.webp';
import nonPlacesMobile from '$lib/assets/images/projects/footer/mobile-nonplaces-min.webp';
import orbMobile from '$lib/assets/images/projects/footer/mobile-orb-min.webp';
import raveMobile from '$lib/assets/images/projects/footer/mobile-rave-min.webp';
import artifice from '$lib/assets/images/projects/footer/projects_artifice-min.webp';
import artificeHover from '$lib/assets/images/projects/footer/projects_artirfice_hover-min.webp';
import digital from '$lib/assets/images/projects/footer/projects_digital-min.webp';
import digitalHover from '$lib/assets/images/projects/footer/projects_digital_hover-min.webp';
import ecologies from '$lib/assets/images/projects/footer/projects_ecologies-min.webp';
import ecologiesHover from '$lib/assets/images/projects/footer/projects_ecologies_hover-min.webp';
import conversation from '$lib/assets/images/projects/footer/projects_in_conversation-min.webp';
import conversationHover from '$lib/assets/images/projects/footer/projects_in_conversation_hover-min.webp';
import inherent from '$lib/assets/images/projects/footer/projects_inherent-min.webp';
import inherentHover from '$lib/assets/images/projects/footer/projects_inherent_hover-min.webp';
import intertwined from '$lib/assets/images/projects/footer/projects_intertiwned-min.webp';
import intertwinedHover from '$lib/assets/images/projects/footer/projects_intertwined_hover-min.webp';
import nonPlaces from '$lib/assets/images/projects/footer/projects_non_places-min.webp';
import nonPlacesHover from '$lib/assets/images/projects/footer/projects_non_places_hover-min.webp';
import orb from '$lib/assets/images/projects/footer/projects_orb-min.webp';
import orbHover from '$lib/assets/images/projects/footer/projects_orb_hover-min.webp';
import rave from '$lib/assets/images/projects/footer/projects_rave-min.webp';
import raveHover from '$lib/assets/images/projects/footer/projects_rave_hover-min.webp';
import { EProjects } from '../../constants/enums';
import {
	ARTIFICE,
	DIGITAL_ARCHAEOLOGY,
	DIGITAL_MATTER,
	ECOLOGIES_OF_CODE,
	IN_CONVERSATION,
	INHERENT,
	INTERTWINED,
	MEMETIC_RUBBLE,
	NON_PLACES,
	ORB,
	RAVE,
	QUEERING_THE_WEB3,
	CHAOS_AGENTS,
	SUBCONSCIOUS_MEDIA,
	PET,
	WHATS_ON_YOUR_MIND,
	THE_END_OF_THE_MUSE,
	POST_CATASTROPHE_IMAGINATION,
	CORRUPTED_FLESH,
	ONE_BODY_A_THOUSAND_WORLDS,
	EVERY_CREATION_IS_LOSS,
	VIRALITY_OVERNIGHT,
	ONLINE_FEMININITY,
	DIGITAL_HOMESTEADING,
	CARE_BOTS_BROWSER_BEASTS,
	WE_LIKE_BEING_DATA,
	NEW_NATURE,
	ORACLE_MACHINES,
	CONTACT_ZONES,
	SYNTHETIC_SENSES,
	MOTHERBOARD,
	PORTAL_HIGHWAY,
	HUMAN_CAUSED_ERROR
} from '../../constants/routes';

export interface IProject {
	name: EProjects;
	refs: EProjects[];
}

export const projects: IProject[] = [
	{
		name: EProjects.ARTIFICE,
		refs: [EProjects.DIGITAL_MATTER, EProjects.ECOLOGIES_OF_CODE, EProjects.IN_CONVERSATION]
	},
	{
		name: EProjects.DIGITAL_ARCHAEOLOGY,
		refs: [EProjects.DIGITAL_MATTER, EProjects.ECOLOGIES_OF_CODE, EProjects.INHERENT_INSTABILITY]
	},
	{
		name: EProjects.DIGITAL_MATTER,
		refs: [EProjects.INHERENT_INSTABILITY, EProjects.INTERTWINED, EProjects.NON_PLACES]
	},
	{
		name: EProjects.ECOLOGIES_OF_CODE,
		refs: [EProjects.ORB, EProjects.RAVE, EProjects.ARTIFICE]
	},
	{
		name: EProjects.IN_CONVERSATION,
		refs: [EProjects.NON_PLACES, EProjects.DIGITAL_MATTER, EProjects.INTERTWINED]
	},
	{
		name: EProjects.INHERENT_INSTABILITY,
		refs: [EProjects.RAVE, EProjects.ORB, EProjects.ECOLOGIES_OF_CODE]
	},
	{
		name: EProjects.INTERTWINED,
		refs: [EProjects.ARTIFICE, EProjects.INHERENT_INSTABILITY, EProjects.DIGITAL_MATTER]
	},
	{
		name: EProjects.MEMETIC_RUBBLE,
		refs: [EProjects.ARTIFICE, EProjects.DIGITAL_MATTER, EProjects.IN_CONVERSATION]
	},
	{
		name: EProjects.NON_PLACES,
		refs: [EProjects.ECOLOGIES_OF_CODE, EProjects.ORB, EProjects.IN_CONVERSATION]
	},
	{
		name: EProjects.ORB,
		refs: [EProjects.ARTIFICE, EProjects.RAVE, EProjects.NON_PLACES]
	},
	{
		name: EProjects.RAVE,
		refs: [EProjects.IN_CONVERSATION, EProjects.INTERTWINED, EProjects.INHERENT_INSTABILITY]
	},
	{
		name: EProjects.QUEERING_THE_WEB3,
		refs: [EProjects.ARTIFICE, EProjects.DIGITAL_MATTER, EProjects.ECOLOGIES_OF_CODE]
	},
	{
		name: EProjects.BODY_FRONTIER,
		refs: [EProjects.ARTIFICE, EProjects.ORB, EProjects.RAVE]
	},
	{
		name: EProjects.SUBCONSCIOUS_MEDIA,
		refs: [EProjects.ARTIFICE, EProjects.DIGITAL_MATTER, EProjects.ECOLOGIES_OF_CODE]
	},
	{
		name: EProjects.PET,
		refs: [EProjects.BODY_FRONTIER, EProjects.SUBCONSCIOUS_MEDIA, EProjects.DIGITAL_MATTER]
	},
	{
		name: EProjects.WHATS_ON_YOUR_MIND,
		refs: [EProjects.PET, EProjects.SUBCONSCIOUS_MEDIA, EProjects.DIGITAL_MATTER]
	},
	{
		name: EProjects.CHAOS_AGENTS,
		refs: [EProjects.ARTIFICE, EProjects.DIGITAL_MATTER, EProjects.ECOLOGIES_OF_CODE]
	},
	{
		name: EProjects.POST_CATASTROPHE_IMAGINATION,
		refs: [EProjects.BODY_FRONTIER, EProjects.PET, EProjects.SUBCONSCIOUS_MEDIA]
	},
	{
		name: EProjects.THE_END_OF_THE_MUSE,
		refs: [EProjects.BODY_FRONTIER, EProjects.PET, EProjects.SUBCONSCIOUS_MEDIA]
	},
	{
		name: EProjects.CORRUPTED_FLESH,
		refs: [EProjects.BODY_FRONTIER, EProjects.PET, EProjects.SUBCONSCIOUS_MEDIA]
	},
	{
		name: EProjects.VIRALITY_OVERNIGHT,
		refs: [EProjects.CHAOS_AGENTS, EProjects.WHATS_ON_YOUR_MIND, EProjects.SUBCONSCIOUS_MEDIA]
	},
	{
		name: EProjects.EVERY_CREATION_IS_LOSS,
		refs: [EProjects.VIRALITY_OVERNIGHT, EProjects.CHAOS_AGENTS, EProjects.WHATS_ON_YOUR_MIND]
	},
	{
		name: EProjects.ONE_BODY_A_THOUSAND_WORLDS,
		refs: [EProjects.EVERY_CREATION_IS_LOSS, EProjects.VIRALITY_OVERNIGHT, EProjects.CHAOS_AGENTS]
	},
	{
		name: EProjects.THE_FASHION_PARADOX,
		refs: [EProjects.BODY_FRONTIER, EProjects.POST_CATASTROPHE_IMAGINATION, EProjects.CHAOS_AGENTS]
	},
	{
		name: EProjects.ONLINE_FEMININITY,
		refs: [EProjects.SUBCONSCIOUS_MEDIA, EProjects.QUEERING_THE_WEB3, EProjects.WHATS_ON_YOUR_MIND]
	},
	{
		name: EProjects.DIGITAL_HOMESTEADING,
		refs: [EProjects.SUBCONSCIOUS_MEDIA, EProjects.PET, EProjects.WHATS_ON_YOUR_MIND]
	},
	{
		name: EProjects.CARE_BOTS_BROWSER_BEASTS,
		refs: [EProjects.SUBCONSCIOUS_MEDIA, EProjects.ONLINE_FEMININITY, EProjects.QUEERING_THE_WEB3]
	},
	{
		name: EProjects.WE_LIKE_BEING_DATA,
		refs: [EProjects.CARE_BOTS_BROWSER_BEASTS, EProjects.DIGITAL_HOMESTEADING, EProjects.SUBCONSCIOUS_MEDIA]
	},
	{
		name: EProjects.NEW_NATURE,
		refs: [EProjects.SUBCONSCIOUS_MEDIA, EProjects.PET, EProjects.DIGITAL_MATTER]
	},
	{
		name: EProjects.ORACLE_MACHINES,
		refs: [EProjects.NEW_NATURE, EProjects.WE_LIKE_BEING_DATA, EProjects.SUBCONSCIOUS_MEDIA]
	},
	{
		name: EProjects.CONTACT_ZONES,
		refs: [EProjects.ORACLE_MACHINES, EProjects.NEW_NATURE, EProjects.WE_LIKE_BEING_DATA]
	},
	{
		name: EProjects.SYNTHETIC_SENSES,
		refs: [EProjects.CONTACT_ZONES, EProjects.ORACLE_MACHINES, EProjects.NEW_NATURE]
	},
	{
		name: EProjects.MOTHERBOARD,
		refs: [EProjects.SYNTHETIC_SENSES, EProjects.CONTACT_ZONES, EProjects.PET]
	},
	{
		name: EProjects.PORTAL_HIGHWAY,
		refs: [EProjects.MOTHERBOARD, EProjects.SYNTHETIC_SENSES, EProjects.ORACLE_MACHINES]
	},
	{
		name: EProjects.HUMAN_CAUSED_ERROR,
		refs: [EProjects.PORTAL_HIGHWAY, EProjects.SYNTHETIC_SENSES, EProjects.CONTACT_ZONES]
	}
];

export const projectsDetails = [
	{
		name: EProjects.ARTIFICE,
		nameToShow: 'artifice',
		image: artifice,
		hover: artificeHover,
		url: ARTIFICE,
		mobileImage: artificeMobile
	},
	{
		name: EProjects.DIGITAL_ARCHAEOLOGY,
		nameToShow: 'digital archaeology',
		image: '/media/thumbnails/14-home-digital-archaeology.webp',
		hover: '/media/thumbnails/14-home-digital-archaeology.webp',
		url: DIGITAL_ARCHAEOLOGY,
		mobileImage: '/media/thumbnails/14-home-digital-archaeology.webp'
	},
	{
		name: EProjects.DIGITAL_MATTER,
		nameToShow: 'digital matter',
		image: digital,
		hover: digitalHover,
		url: DIGITAL_MATTER,
		mobileImage: digitalMobile
	},
	{
		name: EProjects.ECOLOGIES_OF_CODE,
		nameToShow: 'ecologies of code',
		image: ecologies,
		hover: ecologiesHover,
		url: ECOLOGIES_OF_CODE,
		mobileImage: ecologiesMobile
	},
	{
		name: EProjects.INHERENT_INSTABILITY,
		nameToShow: 'inherent instability',
		image: inherent,
		hover: inherentHover,
		url: INHERENT,
		mobileImage: inherentMobile
	},
	{
		name: EProjects.INTERTWINED,
		nameToShow: 'intertwined',
		image: intertwined,
		hover: intertwinedHover,
		url: INTERTWINED,
		mobileImage: intertwinedMobile
	},
	{
		name: EProjects.MEMETIC_RUBBLE,
		nameToShow: 'memetic rubble',
		image: '/media/home/thumbnails/12-home-memetic-rubble.webp',
		hover: '/media/home/thumbnails/12-home-memetic-rubble.webp',
		url: MEMETIC_RUBBLE,
		mobileImage: '/media/home/thumbnails/12-home-memetic-rubble.webp'
	},
	{
		name: EProjects.IN_CONVERSATION,
		nameToShow: 'in conversation',
		image: conversation,
		hover: conversationHover,
		url: IN_CONVERSATION,
		mobileImage: conversationMobile
	},
	{
		name: EProjects.NON_PLACES,
		nameToShow: 'non places',
		image: nonPlaces,
		hover: nonPlacesHover,
		url: NON_PLACES,
		mobileImage: nonPlacesMobile
	},
	{
		name: EProjects.ORB,
		nameToShow: 'orb',
		image: orb,
		hover: orbHover,
		url: ORB,
		mobileImage: orbMobile
	},
	{
		name: EProjects.RAVE,
		nameToShow: 'rave',
		image: rave,
		hover: raveHover,
		url: RAVE,
		mobileImage: raveMobile
	},
	{
		name: EProjects.QUEERING_THE_WEB3,
		nameToShow: 'queering the web3',
		image: '/media/queering-the-web3/main-cover.webp',
		hover: '/media/queering-the-web3/artwork-grid/artwork-grid-1.webp',
		url: QUEERING_THE_WEB3,
		mobileImage: '/media/queering-the-web3/main-cover.webp'
	},
	{
		name: EProjects.BODY_FRONTIER,
		nameToShow: 'body frontier',
		image: '/media/home/thumbnails/10-home-body-frontier.webp',
		hover: '/media/home/thumbnails/10-home-body-frontier.webp',
		url: '/body-frontier',
		mobileImage: '/media/home/thumbnails/10-home-body-frontier.webp'
	},
	{
		name: EProjects.SUBCONSCIOUS_MEDIA,
		nameToShow: 'subconscious media',
		image: '/media/home/thumbnails/13-home-subconscious-media.webp',
		hover: '/media/home/thumbnails/13-home-subconscious-media.webp',
		url: SUBCONSCIOUS_MEDIA,
		mobileImage: '/media/home/thumbnails/13-home-subconscious-media.webp'
	},
	{
		name: EProjects.PET,
		nameToShow: 'projected emotional technologies',
		image: '/media/pet/project/project-5.webp',
		hover: '/media/pet/project/project-5.webp',
		url: PET,
		mobileImage: '/media/pet/project/project-5.webp'
	},
	{
		name: EProjects.WHATS_ON_YOUR_MIND,
		nameToShow: "what's on your mind",
		image: '/media/whats-on-your-mind/carusel-1/daniel-gallery-2-1x.webp',
		hover: '/media/whats-on-your-mind/carusel-2/h4wnee-gallery-1x.webp',
		url: WHATS_ON_YOUR_MIND,
		mobileImage: '/media/home/thumbnails-v2-mobile/whats-on-your-mind.webp'
	},
	{
		name: EProjects.CHAOS_AGENTS,
		nameToShow: 'chaos agents',
		image: '/media/chaos-agents/main-cover.webp',
		hover: '/media/chaos-agents/about-1/about-1.webp',
		url: CHAOS_AGENTS,
		mobileImage: '/media/chaos-agents/main-cover.webp'
	},
	{
		name: EProjects.POST_CATASTROPHE_IMAGINATION,
		nameToShow: 'post catastrophe imagination',
		image: '/media/post-catastrophe-imagination/about-1/about-1.webp',
		hover: '/media/post-catastrophe-imagination/about-1/about-1.webp',
		url: POST_CATASTROPHE_IMAGINATION,
		mobileImage: '/media/post-catastrophe-imagination/main-cover.webp'
	},
	{
		name: EProjects.CORRUPTED_FLESH,
		nameToShow: 'Corrupted Flesh',
		image: '/media/corrupted-flesh/artworks-grid/artworks-grid-1.webp',
		hover: '/media/corrupted-flesh/artworks-grid/artworks-grid-1.webp',
		url: CORRUPTED_FLESH,
		mobileImage: '/media/corrupted-flesh/main-cover.webp'
	},
	{
		name: EProjects.VIRALITY_OVERNIGHT,
		nameToShow: 'virality overnight',
		image: '/media/virality-overnight/about-1/about-1.webp',
		hover: '/media/virality-overnight/about-1/about-1.webp',
		url: VIRALITY_OVERNIGHT,
		mobileImage: '/media/virality-overnight/main-cover.webp'
	},
	{
		name: EProjects.EVERY_CREATION_IS_LOSS,
		nameToShow: 'every creation is loss',
		image: '/media/every-creation-is-loss/main-cover.webp',
		hover: '/media/every-creation-is-loss/main-cover.webp',
		url: EVERY_CREATION_IS_LOSS,
		mobileImage: '/media/every-creation-is-loss/main-cover.webp'
	},
	{
		name: EProjects.ONE_BODY_A_THOUSAND_WORLDS,
		nameToShow: 'one body, a thousand worlds',
		image: '/media/one-body-a-thousand-worlds/artworks-grid/artworks-grid-1.webp',
		hover: '/media/one-body-a-thousand-worlds/artworks-grid/artworks-grid-1.webp',
		url: ONE_BODY_A_THOUSAND_WORLDS,
		mobileImage: '/media/one-body-a-thousand-worlds/main-cover.webp'
	},
	{
		name: EProjects.THE_END_OF_THE_MUSE,
		nameToShow: 'the end of the muse',
		image: '/media/the-end-of-the-muse/artworks-grid/artworks-grid-1.webp',
		hover: '/media/the-end-of-the-muse/artworks-grid/artworks-grid-1.webp',
		url: THE_END_OF_THE_MUSE,
		mobileImage: '/media/the-end-of-the-muse/main-cover.webp'
	},
	{
		name: EProjects.ONLINE_FEMININITY,
		nameToShow: 'online femininity',
		image: '/media/online-femininity/about-1.webp',
		hover: '/media/online-femininity/about-2.webp',
		url: ONLINE_FEMININITY,
		mobileImage: '/media/online-femininity/main-cover.webp'
	},
	{
		name: EProjects.DIGITAL_HOMESTEADING,
		nameToShow: 'digital homesteading',
		image: '/media/digital-homesteading/main-cover.webp',
		hover: '/media/digital-homesteading/main-cover.webp',
		url: DIGITAL_HOMESTEADING,
		mobileImage: '/media/digital-homesteading/main-cover.webp'
	},
	{
		name: EProjects.CARE_BOTS_BROWSER_BEASTS,
		nameToShow: 'care bots/browser beasts',
		image: '/media/care-bots-browser-beasts/main-cover.webp',
		hover: '/media/care-bots-browser-beasts/main-cover.webp',
		url: CARE_BOTS_BROWSER_BEASTS,
		mobileImage: '/media/care-bots-browser-beasts/main-cover.webp'
	},
	{
		name: EProjects.WE_LIKE_BEING_DATA,
		nameToShow: 'we like being data',
		image: '/media/we-like-being-data/main-cover.webp',
		hover: '/media/we-like-being-data/main-cover.webp',
		url: WE_LIKE_BEING_DATA,
		mobileImage: '/media/we-like-being-data/main-cover.webp'
	},
	{
		name: EProjects.NEW_NATURE,
		nameToShow: 'new nature',
		image: '/media/new-nature/main-cover.webp',
		hover: '/media/new-nature/main-cover.webp',
		url: NEW_NATURE,
		mobileImage: '/media/new-nature/main-cover.webp'
	},
	{
		name: EProjects.ORACLE_MACHINES,
		nameToShow: 'oracle machines',
		image: '/media/oracle-machines/main-cover.webp',
		hover: '/media/oracle-machines/about-1.webp',
		url: ORACLE_MACHINES,
		mobileImage: '/media/oracle-machines/main-cover.webp'
	},
	{
		name: EProjects.CONTACT_ZONES,
		nameToShow: 'contact zones',
		image: '/media/contact-zones/main-cover.webp',
		hover: '/media/contact-zones/image%203.webp',
		url: CONTACT_ZONES,
		mobileImage: '/media/contact-zones/main-cover.webp'
	},
	{
		name: EProjects.SYNTHETIC_SENSES,
		nameToShow: 'synthetic senses',
		image: '/media/synthetic-senses/main-cover.webp',
		hover: '/media/synthetic-senses/DSC08823-Edit.webp',
		url: SYNTHETIC_SENSES,
		mobileImage: '/media/synthetic-senses/main-cover.webp'
	},
	{
		name: EProjects.MOTHERBOARD,
		nameToShow: 'motherboard',
		image: '/media/motherboard/download-12.webp',
		hover: '/media/motherboard/aw_optomizationofparenthood_hr.webp',
		url: MOTHERBOARD,
		mobileImage: '/media/motherboard/download-12.webp'
	},
	{
		name: EProjects.PORTAL_HIGHWAY,
		nameToShow: 'portal highway',
		image: '/media/portal-highway/cover-main.webp',
		hover: '/media/portal-highway/SpacePopular_2021_The_Fabric_of_Civic_Teleportation_04.webp',
		url: PORTAL_HIGHWAY,
		mobileImage: '/media/portal-highway/cover-main.webp'
	},
	{
		name: EProjects.HUMAN_CAUSED_ERROR,
		nameToShow: 'human caused error',
		image: '/media/human-caused-error/output/VISIONARIAS_EXPOSICIoN-INAGURACION_ETOPIA_JULIAN-FALLAS-555.webp',
		hover: '/media/human-caused-error/output/Marco-Donnarumma_9_photo-eunice-maurice-CTM-Festival-jpg.webp',
		url: HUMAN_CAUSED_ERROR,
		mobileImage: '/media/human-caused-error/output/VISIONARIAS_EXPOSICIoN-INAGURACION_ETOPIA_JULIAN-FALLAS-555.webp'
	}
];
