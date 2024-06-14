export type Tier = {
	type: string;
	heading: string;
	detail?: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	visual?: {
		source: string;
		alternativeText: string;
		width?: number;
		height?: number;
	};
	points: {
		heading?: string;
		detail?: string;
	}[];
};

export { default as Tiers } from './index.svelte';
