export interface IResponseFilter {
	artist: string;
	text: string;
	selected: boolean;
}

export interface IQuestionFilter {
	question: string;
	responses: IResponseFilter[];
	selected: boolean;
}
