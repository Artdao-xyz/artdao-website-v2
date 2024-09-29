export interface IResponse {
	name?: string;
	text: string;
}

export interface IQuestion {
	question: string;
	response: IResponse[];
	selected: boolean;
}
