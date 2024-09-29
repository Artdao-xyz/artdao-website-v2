import imgOne from '$lib/assets/images/img-1.png';
import imgTwo from '$lib/assets/images/img-2.png';
import imgThree from '$lib/assets/images/img-3.png';
import imgFour from '$lib/assets/images/img-7.png';
import type { IPolaroidImage } from '$lib/elements/Polaroids/interface';

export const polaroidImages: IPolaroidImage[] = [
	{ image: imgOne, name: 'Image One', date: '12/03/19' },
	{ image: imgTwo, name: 'Image Two', date: '20/05/24' },
	{ image: imgThree, name: 'Image Three', date: '05/11/20' },
	{ image: imgFour, name: 'Image Four', date: '28/09/21' }
];
