import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { forest: '#234536', moss: '#667a58', cream: '#f6f3eb', sand: '#e8dfcf' }, fontFamily: { display: ['Georgia','serif'] } } }, plugins: [] };
export default config;
