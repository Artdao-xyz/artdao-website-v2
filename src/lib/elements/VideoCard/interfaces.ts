export interface IVideoProject {
	name: string;
	artist: string;
	year?: string;
	videoUrl: string;
	link?: string;
	size?: 'rectangle' | 'square' | 'vertical';
}
