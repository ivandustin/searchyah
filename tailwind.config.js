/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			serif: ['Radley', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
			sans: [
				'Open Sans',
				'ui-sans-serif',
				'system-ui',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			]
		}
	},
	darkMode: 'media',
	plugins: []
};
