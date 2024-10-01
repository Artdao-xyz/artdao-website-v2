import artistOne from '$lib/assets/images/projects/rave/audio/artistOne.png';
import artistTwo from '$lib/assets/images/projects/rave/audio/artistTwo.png';
import songImage from '$lib/assets/images/projects/rave/audio/audioImg.png';
import type { IAudioItem } from '$lib/elements/AudioFile/interfaces';

export const raveAudioFiles: IAudioItem[] = [
	{
		artist: 'PROXY FAE',
		songName: "GOD'S OFFLINE",
		songYear: '2024',
		artistImage: artistOne,
		songImage: songImage,
		songFile: 'https://storage.cloud.google.com/artdao-files/videos/Gods_Offline_-_Proxy_Fae.mov'
	},
	{
		artist: 'PROXY FAE',
		songName: 'BLINDED',
		songYear: '2024',
		artistImage: artistTwo,
		songImage: songImage,
		songFile: 'https://storage.cloud.google.com/artdao-files/videos/BLINDED_PROXY_FAE.mov'
	}
];
