/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: '#D9F99D', // Nasza neonowa limonka
				dark: '#0f0f0f', // Głębokie tło
			},
		},
	},
	plugins: [],
}
