/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./dist/index.html", "./src/**/*.{tsx,ts}"],
	darkMode: ["selector", '[data-theme="dark"]'],
	theme: {
		extend: {},
	},
	plugins: [],
};
