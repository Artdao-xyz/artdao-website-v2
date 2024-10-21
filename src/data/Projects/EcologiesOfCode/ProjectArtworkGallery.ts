import hyperGalleryOne from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/gallery/img-01.png';
import hyperGalleryTwo from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/gallery/img-02.png';
import hyperGalleryThree from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/gallery/img-03.png';
import hyperGalleryFour from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/gallery/img-04.png';
import hyperGalleryFive from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/gallery/img-05.png';
import hyperGallerySix from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/gallery/img-06.png';
import hyperGallerySeven from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/gallery/img-07.png';
import hyperGalleryEight from '$lib/assets/images/projects/ecologiesOfCode/hypereikon/gallery/img-08.png';
import type { IGalleryImage, IGalleryImageMobile } from '$lib/elements/ArtworkContainer/interfaces';

export const ecologiesArtworkImages: IGalleryImage[] = [
	{ image: hyperGalleryOne, name: 'halloween', description: 'john carpenter' },
	{ image: hyperGalleryTwo, name: 'the fog', description: 'john carpenter' },
	{ image: hyperGalleryThree, name: 'the thing', description: 'john carpenter' },
	{ image: hyperGalleryFour, name: 'christine', description: 'john carpenter' },
	{ image: hyperGalleryFive, name: 'prince of darkness', description: 'john carpenter' },
	{ image: hyperGallerySix, name: 'they live', description: 'john carpenter' },
	{ image: hyperGallerySeven, name: 'eraserhead', description: 'david lynch' },
	{ image: hyperGalleryEight, name: 'blue velvet', description: 'david lynch' }
];

export const ecologiesGallery1: IGalleryImageMobile[] = [
	{ src: hyperGalleryFive, alt: '', name: '', description: '' },
	{ src: hyperGalleryTwo, alt: '', name: '', description: '' },
	{ src: hyperGallerySeven, alt: '', name: '', description: '' },
	{ src: hyperGalleryFour, alt: '', name: '', description: '' }
];

export const ecologiesGallery2: IGalleryImageMobile[] = [
	{ src: hyperGalleryOne, alt: '', name: '', description: '' },
	{ src: hyperGallerySix, alt: '', name: '', description: '' },
	{ src: hyperGalleryThree, alt: '', name: '', description: '' },
	{ src: hyperGalleryEight, alt: '', name: '', description: '' }
];
