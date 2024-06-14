export type HeroShape = {
	reversed?: boolean;
	subheading?: string;
	heading: string;
	detail: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	visual: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
	};
};

export { default as Hero } from './index.svelte';
