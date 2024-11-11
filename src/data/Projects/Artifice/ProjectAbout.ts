import koko01 from '$lib/assets/images/projects/artifice/4952049189110526975 1-min.webp';
import panels01 from '$lib/assets/images/projects/artifice/_DSC1456 1-min.webp';
import panels02 from '$lib/assets/images/projects/artifice/_DSC9753 1-min.webp';
import koko02 from '$lib/assets/images/projects/artifice/IMG Navigator 1-min.webp';
import furniture01 from '$lib/assets/images/projects/artifice/IMG Navigator-min.webp';
import FurnitureAbout from './FurnitureAbout.svelte';
import KokoAbout from './KokoAbout.svelte';
import PanelsAbout from './PanelsAbout.svelte';

import koko03 from '$lib/assets/images/projects/artifice/LISBORA_3 1-min.webp';

export const kokoAbout = {
	title: 'Ko ko ??',
	subtitle: 'Psipsikoko',
	text: KokoAbout
};

export const furnitureAbout = {
	title: 'furniture searchi',
	subtitle: 'Psipsikoko',
	text: FurnitureAbout
};

export const panelsAbout = {
	title: 'panels & exhibition',
	subtitle: 'Subtitle',
	text: PanelsAbout
};

export const kokoAboutImahges = [koko01, koko02, koko03];
export const furnitureAboutImages = [furniture01];
export const panelsAboutImages = [panels01, panels02];
