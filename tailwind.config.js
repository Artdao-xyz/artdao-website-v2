/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			laptopM: '1366px',
			// => @media(min-width: 1366px) {...}
			macBook: '1440px',
			// => @media(min-width: 1440px) {...}
			laptopL: '1500px',
			// => @media(min-width: 1500px) {...}
			bigScreen: '1700px',
			// => @media(min-width: 1700px) {...}
			xlScreen: '2000px'
			// => @media(min-width: 2000px) {...}
		},
		colors: {
			// flowbite-svelte
			primary: {
				50: '#FFF5F2',
				100: '#FFF1EE',
				200: '#FFE4DE',
				300: '#FFD5CC',
				400: '#FFBCAD',
				500: '#FE795D',
				600: '#EF562F',
				700: '#EB4F27',
				800: '#CC4522',
				900: '#A5371B'
			},
			'color-gray': 'rgba(255, 255, 255, 0.40)',
			'color-gray-secondary': 'rgba(255, 255, 255, 0.60)',
			'color-gray-background': '#A6A6A6',
			'color-dark': '#313431',
			'color-img-bg': '#D9D9D9',
			'color-white': '#FFFFFF',
			'color-black': '#000000',
			'color-interview-card': 'rgba(255, 255, 255, 0.40)',
			'color-progress-bar-bg': 'rgba(0, 0, 0, 0.20)',
			'color-play-button': 'rgba(0, 0, 0, 0.40)',
			'color-disabled': '#a0a0a0',
			'color-red': 'red',
			'color-green': 'green',
			'color-blue': 'blue',
			'color-gray-mobile': '#D9D9D9'
		},
		fontFamily: {
			roboto: ['Roboto-Regular'],
			robotoMono: ['Roboto-Mono'],
			clash: ['ClashDisplay-Regular'],
			neue: ['NeuePower-Variable']
		},
		borderRadius: {
			20: '1.25rem',
			30: '1.875rem',
			40: '2.5rem'
		},
		extend: {
			width: {
				'full-desktop-width': 'var(--full-desktop-width)',
				'home-content-width': 'var(--home-content-width)',
				'img-square-width': 'var(--img-square-width)',
				'img-rect-width': 'var(--img-rect-width)',
				'img-tall-width': 'var(--img-tall-width)',
				'card-width': 'var(--card-width)',
				'card-width-full-bg': 'var(--card-width-full-bg)',
				'card-big-width': 'var(--card-big-width)',
				'file-img-width': 'var(--file-img-width)',
				'file-audio-width': 'var(--file-audio-width)'
			},
			height: {
				'full-desktop-height': 'var(--full-desktop-height)',
				'home-content-drop-closed-height': 'var(--home-content-drop-closed-height)',
				'home-content-drop-open-height': 'var(--home-content-drop-open-height)',
				'home-content-top-height': 'var(--home-content-top-height)',
				'home-content-map-height': 'var(--home-content-map-height)',
				'home-content-socials-height': 'var(--home-content-socials-height)',
				'img-square-height': 'var(--img-square-height)',
				'img-rect-height': 'var(--img-rect-height)',
				'img-tall-heigth': 'var(--img-tall-heigth)',
				'card-height': 'var(--card-height)',
				'card-height-full-bg': 'var(--card-height-full-bg)',
				'file-img-height': 'var(--file-img-height)',
				'file-audio-height': 'var(--file-audio-height)'
			},
			boxShadow: {
				audioShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
			},
			padding: {
				'global-padding': 'var(--global-padding)'
			}
		}
	},
	plugins: [flowbitePlugin]
};
