import artistOne from '$lib/assets/images/projects/rave/audio/artistOne.webp';
import artistTwo from '$lib/assets/images/projects/rave/audio/artistTwo.webp';
import songImage from '$lib/assets/images/projects/rave/audio/audioImg.webp';
import type { IAudioItem } from '$lib/elements/AudioFile/interfaces';

export const raveAudioFiles: IAudioItem[] = [
	{
		artist: 'Proxy Fae',
		songName: "God's offline",
		songYear: '2024',
		artistImage: artistOne,
		songImage: songImage,
		songFile: 'https://storage.cloud.google.com/artdao-files/videos/Gods_Offline_-_Proxy_Fae.mov'
	},
	{
		artist: 'Proxy Fae',
		songName: 'Blinded',
		songYear: '2024',
		artistImage: artistTwo,
		songImage: songImage,
		songFile: 'https://storage.cloud.google.com/artdao-files/videos/BLINDED_PROXY_FAE.mov'
	}
];
