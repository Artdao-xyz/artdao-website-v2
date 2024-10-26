export interface IMapEvent {
	title: string;
	subtitle: string;
	date: string;
	location: string;
	image: string;
}

export interface IMapLocation {
	location: string;
	events: IMapEvent[];
}

export const mapData: IMapLocation[] = [
	{
		location: 'Lisbon',
		events: [
			{
				title: 'INTERTWINED',
				subtitle: 'Exhibition / Party',
				date: 'Nov 10th-16th, 2023',
				location: 'Arroz Estudios, Lisbon',
				image: ''
			},
			{
				title: 'UNDERWORLD',
				subtitle: 'EXHIBITION / PARTY',
				date: 'July 18th-20th, 2023',
				location: '31 Rue HEnri Chevreu, Paris',
				image: ''
			},
			{
				title: 'RAVE',
				subtitle: 'EXHIBITION / PARTY',
				date: 'May 5th, 2024',
				location: 'Higher Ground, Lisbon',
				image: ''
			},
			{
				title: 'artifice',
				subtitle: 'EXHIBITION / PARTY',
				date: 'May 28th-30th, 2024',
				location: 'RNA Studio, Lisbon',
				image: ''
			}
		]
	},
	{
		location: 'Paris',
		events: [
			{
				title: 'NFT PARIS',
				subtitle: 'Lukas Truniger Showcase',
				date: 'February 23rd, 2023',
				location: '101 Rue Réaumur, PARIS',
				image: ''
			},
			{
				title: 'NON PLACES',
				subtitle: 'EXHIBITION / PARTY',
				date: 'July 18th-20th, 2023',
				location: '31 Rue HEnri Chevreu, Paris',
				image: ''
			}
		]
	},
	{
		location: 'Denver',
		events: [
			{
				title: 'ETH DENVER',
				subtitle: 'Exhibition',
				date: 'March 2th-6th, 2023',
				location: 'Denver, Colorado',
				image: ''
			}
		]
	},
	{
		location: 'Bogotá',
		events: [
			{
				title: 'DEVCON',
				subtitle: 'Exhibition / mural / talk',
				date: 'October 11th-14th, 2022',
				location: 'Bogotá, Colombia',
				image: ''
			}
		]
	},
	{
		location: 'São Paulo',
		events: [
			{
				title: 'O.R.B.',
				subtitle: 'Exhibition',
				date: 'March 23rd - April 6th, 2024',
				location: 'Caroço, São Pablo',
				image: ''
			}
		]
	},
	{
		location: 'Buenos Aires',
		events: [
			{
				title: 'CERO UNO',
				subtitle: 'Exhibition / TALKS / AFTER PARTY',
				date: 'March 31th, 2023',
				location: 'Artlab, Buenos Aires',
				image: ''
			},
			{
				title: 'psipsikoko',
				subtitle: 'Exhibition',
				date: 'October 26th-27th, 2023',
				location: 'Aura Fabrica, Buenos Aires',
				image: ''
			}
		]
	}
];
