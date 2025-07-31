import artifice01 from '$lib/assets/images/events/artifice-1.webp';
import artifice02 from '$lib/assets/images/events/artifice-2.webp';
import artifice03 from '$lib/assets/images/events/artifice-3.webp';
import artifice04 from '$lib/assets/images/events/artifice-4.webp';
import ceroUno01 from '$lib/assets/images/events/cerouno-1.webp';
import ceroUno02 from '$lib/assets/images/events/cerouno-2.webp';
import ceroUno03 from '$lib/assets/images/events/cerouno-3.webp';
import ceroUno04 from '$lib/assets/images/events/cerouno-4.webp';
import ethDenver01 from '$lib/assets/images/events/denver-1-min.webp';
import ethDenver02 from '$lib/assets/images/events/denver-2-min.webp';
import ethDenver03 from '$lib/assets/images/events/denver-3-min.webp';
import devCon01 from '$lib/assets/images/events/devcon-1-min.webp';
import devCon02 from '$lib/assets/images/events/devcon-2-min.webp';
import devCon03 from '$lib/assets/images/events/devcon-3-min.webp';
import intertwined01 from '$lib/assets/images/events/intertwined-1.webp';
import intertwined02 from '$lib/assets/images/events/intertwined-2.webp';
import intertwined03 from '$lib/assets/images/events/intertwined-3.webp';
import nftParis01 from '$lib/assets/images/events/nft-paris-1-min.webp';
import nftParis02 from '$lib/assets/images/events/nft-paris-2-min.webp';
import nonPlaces01 from '$lib/assets/images/events/nonplaces-1.webp';
import nonPlaces02 from '$lib/assets/images/events/nonplaces-2.webp';
import nonPlaces03 from '$lib/assets/images/events/nonplaces-3.webp';
import orb01 from '$lib/assets/images/events/orb-1.webp';
import orb02 from '$lib/assets/images/events/orb-2.webp';
import orb03 from '$lib/assets/images/events/orb-3.webp';
import orb04 from '$lib/assets/images/events/orb-4.webp';
import psispikoko01 from '$lib/assets/images/events/psipsikoko-1.webp';
import psispikoko02 from '$lib/assets/images/events/psipsikoko-2.webp';
import psispikoko03 from '$lib/assets/images/events/psipsikoko-3.webp';
import psispikoko04 from '$lib/assets/images/events/psipsikoko-4.webp';
import rave01 from '$lib/assets/images/events/rave-1.webp';
import rave02 from '$lib/assets/images/events/rave-2.webp';
import rave03 from '$lib/assets/images/events/rave-3.webp';
import rave04 from '$lib/assets/images/events/rave-4.webp';
import underworld01 from '$lib/assets/images/events/underworld-1.webp';
import underworld02 from '$lib/assets/images/events/underworld-2.webp';
import underworld03 from '$lib/assets/images/events/underworld-3.webp';
import underworld04 from '$lib/assets/images/events/underworld-4.webp';
import { ARTIFICE, INTERTWINED, NON_PLACES, ORB, RAVE } from '../../constants/routes';

export const eventImages = [
	intertwined01,
	intertwined02,
	intertwined03,
	underworld01,
	underworld02,
	underworld03,
	underworld04,
	rave01,
	rave02,
	rave03,
	rave04,
	artifice01,
	artifice02,
	artifice03,
	artifice04,
	nftParis01,
	nftParis02,
	nonPlaces01,
	nonPlaces02,
	nonPlaces03,
	ethDenver01,
	ethDenver02,
	ethDenver03,
	devCon01,
	devCon02,
	devCon03,
	orb01,
	orb02,
	orb03,
	orb04,
	ceroUno01,
	ceroUno02,
	ceroUno03,
	ceroUno04,
	psispikoko01,
	psispikoko02,
	psispikoko03,
	psispikoko04
];

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
				images: [intertwined01, intertwined02, intertwined03],
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
				subtitle: 'Exhibition / Party',
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
				images: [orb01, orb02, orb03, orb04],
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
				images: [psispikoko01, psispikoko02, psispikoko03, psispikoko04],
				city: 'Buenos Aires'
			}
		]
	}
];
