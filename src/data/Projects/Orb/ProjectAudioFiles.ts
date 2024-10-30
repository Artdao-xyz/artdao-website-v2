import artistTwo from '$lib/assets/images/projects/orb/epx.png';
import artistOne from '$lib/assets/images/projects/orb/kontronatura.png';
import type { IAudioItem } from '$lib/elements/AudioFile/interfaces';

export const orbAudioFiles: IAudioItem[] = [
	{
		artist: 'KONTRONATURA',
		songName: 'BIYI',
		songYear: '2024',
		artistImage: artistOne,
		songImage: '',
		songFile: 'https://storage.googleapis.com/videoszine/ORB/MUSICA/Kontronatura%20-%20Biyi.mp4'
	},
	{
		artist: 'EPX',
		songName: 'ELECTRIC BLUES',
		songYear: '2024',
		artistImage: artistTwo,
		songImage: '',
		songFile: 'https://storage.googleapis.com/videoszine/ORB/MUSICA/Electric%20Blues.mp4'
	}
];
