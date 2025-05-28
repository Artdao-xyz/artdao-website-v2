import type { IAboutItem } from '$lib/elements/AboutCard/interfaces';
import newlife01 from '$lib/assets/images/projects/rave/finding-new-life.webp';
import digitalRave01 from '$lib/assets/images/projects/rave/digital-rave/digital_rave_1.webp';
import digitalRave02 from '$lib/assets/images/projects/rave/digital-rave/digital_rave_2.webp';
import digitalRave03 from '$lib/assets/images/projects/rave/digital-rave/digital_rave_3.webp';
import mixingWorlds01 from '$lib/assets/images/projects/rave/mixing-worlds/mixing-worlds-1.webp';
import mixingWorlds02 from '$lib/assets/images/projects/rave/mixing-worlds/mixing-worlds-2.webp';
import mixingWorlds03 from '$lib/assets/images/projects/rave/mixing-worlds/mixing-worlds-3.webp';
import mixingWorlds04 from '$lib/assets/images/projects/rave/mixing-worlds/mixing-worlds-4.webp';
import NewLifeAbout from './NewLifeAbout.svelte';
import DigitalRaveAbout from './DigitalRaveAbout.svelte';
import MixingWorldsAbout from './MixingWorldsAbout.svelte';

export const raveAbout: IAboutItem = {
    title: 'Finding New Life',
    subtitle: 'Immersive Experience',
    text: NewLifeAbout
};

export const findingNewLifeAboutImages = [
        newlife01
]; 

export const digitalRaveAbout: IAboutItem = {
    title: 'Digital Rave',
    subtitle: 'Immersive Experience',
    text: DigitalRaveAbout
};

export const digitalRaveAboutImages = [
    digitalRave01,
    digitalRave02,
    digitalRave03
];

export const mixingWorldsAbout: IAboutItem = {
    title: 'Mixing Worlds',
    subtitle: 'Immersive Experience',
    text: MixingWorldsAbout
};

export const mixingWorldsAboutImages = [
    mixingWorlds01,
    mixingWorlds02,
    mixingWorlds03,
    mixingWorlds04
];