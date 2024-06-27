/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				themeBlack: '#34495e',
				themeGray: {
					100: '#ecf0f1',
					300: '#bdc3c7',
					500: '#95a5a6',
					700: '#7f8c8d'
				},
				themeBlue: '#3498db',
				themeTeal: '#1abc9c',
				themeGreen: '#2ecc71',
				themeRed: '#e74c3c',
				themeYellow: '#f1c40f'
			}
		},
		
	},
	plugins: [
		require('daisyui'),
	],
}
