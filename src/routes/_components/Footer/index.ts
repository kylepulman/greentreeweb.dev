export type FooterShape = {
	title: string;
	email: string;
	phone: string;
	navigation: {
		items: {
			label: string;
			action: string;
		}[];
	};
	year: number;
};

export { default as Footer } from './index.svelte';
