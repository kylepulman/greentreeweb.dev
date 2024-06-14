export type BlockHeaderShape = {
	heading: string;
	detail?: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	visual?: {
		source: string;
		alternativeText: string;
	};
};

export { default as BlockHeader } from './index.svelte';
