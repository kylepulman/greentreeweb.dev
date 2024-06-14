export type PitchShape = {
	reversed?: boolean;
	heading: string;
	detail: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	points: {
		heading: string;
		detail?: string;
	}[];
	visual: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
	};
};

export { default as Pitch } from './index.svelte';
