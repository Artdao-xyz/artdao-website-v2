import artifice01 from '$lib/assets/images/events/artifice-1-min.webp';
import artifice02 from '$lib/assets/images/events/artifice-2-min.webp';
import artifice03 from '$lib/assets/images/events/artifice-3-min.webp';
import artifice04 from '$lib/assets/images/events/artifice-4-min.webp';
import ceroUno01 from '$lib/assets/images/events/cero-1-min.webp';
import ceroUno02 from '$lib/assets/images/events/cero-2-min.webp';
import ceroUno03 from '$lib/assets/images/events/cero-3-min.webp';
import ceroUno04 from '$lib/assets/images/events/cero-4-min.webp';
import ethDenver01 from '$lib/assets/images/events/denver-1-min.webp';
import ethDenver02 from '$lib/assets/images/events/denver-2-min.webp';
import ethDenver03 from '$lib/assets/images/events/denver-3-min.webp';
import devCon01 from '$lib/assets/images/events/devcon-1-min.webp';
import devCon02 from '$lib/assets/images/events/devcon-2-min.webp';
import devCon03 from '$lib/assets/images/events/devcon-3-min.webp';
import intertwined01 from '$lib/assets/images/events/inter-1-min.webp';
import intertwined02 from '$lib/assets/images/events/inter-2-min.webp';
import intertwined03 from '$lib/assets/images/events/inter-3-min.webp';
import intertwined04 from '$lib/assets/images/events/inter-4-min.webp';
import nftParis01 from '$lib/assets/images/events/nft-paris-1-min.webp';
import nftParis02 from '$lib/assets/images/events/nft-paris-2-min.webp';
import nonPlaces01 from '$lib/assets/images/events/nonplaces-1-min.webp';
import nonPlaces02 from '$lib/assets/images/events/nonplaces-2-min.webp';
import nonPlaces03 from '$lib/assets/images/events/nonplaces-3-min.webp';
import orb01 from '$lib/assets/images/events/orb-1-min.webp';
import orb02 from '$lib/assets/images/events/orb-2-min.webp';
import orb03 from '$lib/assets/images/events/orb-3-min.webp';
import psispikoko01 from '$lib/assets/images/events/psi-1-min.webp';
import psispikoko02 from '$lib/assets/images/events/psi-2-min.webp';
import psispikoko03 from '$lib/assets/images/events/psi-3-min.webp';
import rave01 from '$lib/assets/images/events/rave-1-min.webp';
import rave02 from '$lib/assets/images/events/rave-2-min.webp';
import rave03 from '$lib/assets/images/events/rave-3-min.webp';
import rave04 from '$lib/assets/images/events/rave-4-min.webp';
import underworld01 from '$lib/assets/images/events/under-1-min.webp';
import underworld02 from '$lib/assets/images/events/under-2-min.webp';
import underworld03 from '$lib/assets/images/events/under-3-min.webp';
import underworld04 from '$lib/assets/images/events/under-4-min.webp';
import { ARTIFICE, INTERTWINED, NON_PLACES, ORB, RAVE } from '../../constants/routes';

export interface IMapEvent {
	title: string;
	subtitle: string;
	date: string;
	location: string;
	images: string[];
	city: string;
	watchMore?: string;
	isCenter?: boolean;
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
				images: [intertwined01, intertwined02, intertwined03, intertwined04],
				city: 'Lisbon',
				watchMore: INTERTWINED
			},
			{
				title: 'UNDERWORLD',
				subtitle: 'Exhibition / Party',
				date: 'July 18th-20th, 2023',
				location: '31 Rue HEnri Chevreu, Paris',
				images: [underworld01, underworld02, underworld03, underworld04],
				city: 'Lisbon'
			},
			{
				title: 'RAVE',
				subtitle: 'Exhibition / Party',
				date: 'May 5th, 2024',
				location: 'Higher Ground, Lisbon',
				images: [rave01, rave02, rave03, rave04],
				city: 'Lisbon',
				watchMore: RAVE
			},
			{
				title: 'ARTIFICE',
				subtitle: 'Exhibition / Party',
				date: 'May 28th-30th, 2024',
				location: 'RNA Studio, Lisbon',
				images: [artifice01, artifice02, artifice03, artifice04],
				city: 'Lisbon',
				watchMore: ARTIFICE,
				isCenter: true
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
				images: [nftParis01, nftParis02],
				city: 'Paris'
			},
			{
				title: 'NON PLACES',
				subtitle: 'EExhibition / Party',
				date: 'July 18th-20th, 2023',
				location: '31 Rue HEnri Chevreu, Paris',
				images: [nonPlaces01, nonPlaces02, nonPlaces03],
				city: 'Paris',
				watchMore: NON_PLACES,
				isCenter: true
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
				images: [ethDenver01, ethDenver02, ethDenver03],
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
				images: [devCon01, devCon02, devCon03],
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
				images: [orb01, orb02, orb03],
				city: 'São Paulo',
				watchMore: ORB,
				isCenter: true
			}
		]
	},
	{
		location: 'Buenos Aires',
		events: [
			{
				title: 'CERO UNO',
				subtitle: 'Exhibition / Talks / After Party',
				date: 'March 31th, 2023',
				location: 'Artlab, Buenos Aires',
				images: [ceroUno01, ceroUno02, ceroUno03, ceroUno04],
				city: 'Buenos Aires'
			},
			{
				title: 'PSIPSIKOKO',
				subtitle: 'Exhibition',
				date: 'October 26th-27th, 2023',
				location: 'Aura Fabrica, Buenos Aires',
				images: [psispikoko01, psispikoko02, psispikoko03],
				city: 'Buenos Aires'
			}
		]
	}
];
