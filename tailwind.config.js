/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
	media: false, // or 'media' or 'class'
	theme: {
		colors: {
			yellow: `#FFB21E`,
			blue: `#1125D6`,
			green: `#00BB8F`,
			red: `#FF5555`,
			darknavy: `#303B59`,
			lightblue: `#CAC9FF`,
			verylightblue: `#ECF2FF`,
			white: `#FFFFFF`,
			yellowwhite: `rgba(255, 178, 30, 0.05)`,
			bluewhite: `rgba(17, 37, 214, 0.05)`,
			greenwhite: `rgba(0, 187, 143, 0.05)`,
			redwhite: `rgba(255, 85, 85, 0.05)`,
		},
		backgroundImage: {
			gradient1: `linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)`,
			gradient2: `linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)`,
			gradient1active: `linear-gradient(0deg, #303B59, #303B59)`,
		},
		fontFamily: {
			hanken: ["Hanken Grotesk", "monospace"],
		},
		screens: {
			md: `389px`,
			lg: `1440px`,
		},
	},
	plugins: [],
};
