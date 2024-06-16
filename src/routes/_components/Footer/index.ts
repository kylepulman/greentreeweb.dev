export type FooterShape = {
	title: string;
	email: string;
	phone: string;
	navigation: {
		header: {
			heading: string;
		};
		items: {
			label: string;
			action: string;
		}[];
	};
	year: number;
};

export { default as Footer } from './index.svelte';
