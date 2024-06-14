export type HeroOptions = {
	reversed?: boolean;
	ratio?: number[];
};

export type HeroContent = {
	subheading?: string;
	heading: string;
	detail?: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	list?: {
		heading: string;
		detail?: string;
	}[];
	visual?: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
	};
};

export { default as Hero } from './index.svelte';
