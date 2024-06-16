export { default as BlockHeader } from './index.svelte';

export type BlockHeaderShape = {
	heading: string;
	detail?: string[];
	image?: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
	};
};
