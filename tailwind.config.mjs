/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-image': 'url(./src/images/stage.jpg)'
			},
			colors: {
				themeBlack: '#3b5369',
				themeGray: {
					100: '#eef1f2',
					300: '#c4c9cd',
					500: '#9eadae',
					700: '#899697'
				},
				themeBlue: '#3ba1df',
				themeTeal: '#1cc3a5',
				themeGreen: '#34d17c',
				themeRed: '#e95644',
				themeYellow: '#f2ca0d'
			}
		},
		
	},
	plugins: [
		require('daisyui'),
	],
}
