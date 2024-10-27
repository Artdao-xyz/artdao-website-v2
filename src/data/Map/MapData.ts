import artifice from '$lib/assets/images/events/artifice-1 1-min.png';
import ceroUno from '$lib/assets/images/events/cerouno-1 1-min.png';
import devCon from '$lib/assets/images/events/devcon-1 1-min.png';
import ethDenver from '$lib/assets/images/events/eth-denver-1 1-min.png';
import intertwined from '$lib/assets/images/events/intertwined-1 1-min.png';
import nftParis from '$lib/assets/images/events/nft-paris-1 1-min.png';
import nonPlaces from '$lib/assets/images/events/non-places-min.png';
import orb from '$lib/assets/images/events/orb-1 1-min.png';
import psispikoko from '$lib/assets/images/events/psipsikoko-1 1-min.png';
import rave from '$lib/assets/images/events/rave-1 1-min.png';
import underworld from '$lib/assets/images/events/underworld-1 1-min.png';

export interface IMapEvent {
	title: string;
	subtitle: string;
	date: string;
	location: string;
	image: string;
	city: string;
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
				image: intertwined,
				city: 'Lisbon'
			},
			{
				title: 'UNDERWORLD',
				subtitle: 'EXHIBITION / PARTY',
				date: 'July 18th-20th, 2023',
				location: '31 Rue HEnri Chevreu, Paris',
				image: underworld,
				city: 'Lisbon'
			},
			{
				title: 'RAVE',
				subtitle: 'EXHIBITION / PARTY',
				date: 'May 5th, 2024',
				location: 'Higher Ground, Lisbon',
				image: rave,
				city: 'Lisbon'
			},
			{
				title: 'artifice',
				subtitle: 'EXHIBITION / PARTY',
				date: 'May 28th-30th, 2024',
				location: 'RNA Studio, Lisbon',
				image: artifice,
				city: 'Lisbon'
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
				image: nftParis,
				city: 'Paris'
			},
			{
				title: 'NON PLACES',
				subtitle: 'EXHIBITION / PARTY',
				date: 'July 18th-20th, 2023',
				location: '31 Rue HEnri Chevreu, Paris',
				image: nonPlaces,
				city: 'Paris'
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
				image: ethDenver,
				city: 'Denver'
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
				image: devCon,
				city: 'Bogotá'
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
				image: orb,
				city: 'São Paulo'
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
				image: ceroUno,
				city: 'Buenos Aires'
			},
			{
				title: 'psipsikoko',
				subtitle: 'Exhibition',
				date: 'October 26th-27th, 2023',
				location: 'Aura Fabrica, Buenos Aires',
				image: psispikoko,
				city: 'Buenos Aires'
			}
		]
	}
];
