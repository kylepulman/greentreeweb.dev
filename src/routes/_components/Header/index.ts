export type HeaderShape = {
	title: string;
	navigation: {
		label: string;
		action: string;
	}[];
	pageTitle?: string;
};

export { default as Header } from './index.svelte';
