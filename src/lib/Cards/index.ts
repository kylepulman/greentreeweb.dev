export type Card = {
	order?: 'variant-one';
	heading: string;
	detail: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	visual: {
		source: string;
		alternativeText: string;
		width?: number;
		height?: number;
	};
};

export { default as Cards } from './index.svelte';
