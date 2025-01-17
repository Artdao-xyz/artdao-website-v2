export interface IAboutDropdown {
	name: string;
	artist?: string;
	link?: string;
	date?: string;
	location?: string;
	about?: string;
	image: string;
	aboutArray?: string[];
}

export enum EAboutDropdownVariant {
	FULL = 'full',
	LINK = 'link',
	ARTIST = 'artist',
	ABOUT = 'about'
}
