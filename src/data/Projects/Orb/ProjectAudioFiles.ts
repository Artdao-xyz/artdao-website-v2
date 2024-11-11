import artistTwo from '$lib/assets/images/projects/orb/epx.webp';
import artistOne from '$lib/assets/images/projects/orb/kontronatura.webp';
import type { IAudioItem } from '$lib/elements/AudioFile/interfaces';

export const orbAudioFiles: IAudioItem[] = [
	{
		artist: 'Kontronatura',
		songName: 'Biyi',
		songYear: '2024',
		artistImage: artistOne,
		songImage: '',
		songFile: 'https://storage.googleapis.com/videoszine/ORB/MUSICA/Kontronatura%20-%20Biyi.mp4'
	},
	{
		artist: 'Epx',
		songName: 'Electric Blues',
		songYear: '2024',
		artistImage: artistTwo,
		songImage: '',
		songFile: 'https://storage.googleapis.com/videoszine/ORB/MUSICA/Electric%20Blues.mp4'
	}
];
