/** @type {import('tailwindcss').Config} */
const defaulTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./index.html', './src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				chivo: ['Chivo', ...defaulTheme.fontFamily.sans],
			},
			colors: {
				customTextGreen: '#54e6af',
				customTextGreenHover: '#b3ffe2',
				customTextLightGray: '#c2cbe5',
				customBgDark: '#121725',
				customBgLight: '#2c344b',
				customBgIcons: '#5a668a',
				customError: '#FB3E3E',
			},
		},
	},
	plugins: [],
};
