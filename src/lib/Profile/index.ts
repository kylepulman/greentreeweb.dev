import type { CallsToAction } from '$lib/types';

export type ProfileOptions = {
	reversed?: true;
};

export type ProfileShape = {
	heading: string;
	detail: string;
	callsToAction: CallsToAction;
	figcaption: {
		heading: string;
		detail: string;
	};
	visual: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
	};
};

export { default as Profile } from './index.svelte';
