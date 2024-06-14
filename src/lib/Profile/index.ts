export type ProfileShape = {
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
