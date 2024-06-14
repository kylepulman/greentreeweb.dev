export type Contact = {
	visual: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
	};
	heading: string;
	detail: string;
	action: string;
};

export { default as Contacts } from './index.svelte';
