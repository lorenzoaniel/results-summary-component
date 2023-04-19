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
		},
		backgroundImage: {
			gradient1: `linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)`,
			gradient2: `linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)`,
			yellowwhite: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E`,
			bluewhite: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6`,
			greenwhite: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F`,
			redwhite: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FF5555`,
		},
		fontFamily: {
			hanken: ["Hanken Grotesk", "monospace"],
		},
	},
	plugins: [],
};
