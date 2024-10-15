export interface IPolaroidImage {
	image: string;
	name?: string;
	date?: string;
	quote?: string;
	description?: string;
}

export enum EPolaroidType {
	SQUARE = 'square',
	RECTANGLE = 'rectangle',
	VERTICAL = 'vertical'
}
