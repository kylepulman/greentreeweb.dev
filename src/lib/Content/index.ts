export type ContentShape = {
	subheading?: string;
	heading?: string;
	detail?: string[];
	list?: { heading?: string; detail?: string }[];
	callsToAction?: { label: string; action: string }[];
};

export { default as Content } from './index.svelte';
