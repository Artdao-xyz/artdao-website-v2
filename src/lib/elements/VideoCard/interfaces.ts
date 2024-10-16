export interface IVideoProject {
	name: string;
	artist: string;
	year: string;
	videoUrl: string;
	size?: 'rectangle' | 'square' | 'vertical';
}
