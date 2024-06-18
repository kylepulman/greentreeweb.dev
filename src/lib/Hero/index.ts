export { default as Hero } from './index.svelte';

export type HeroOptions = {
	isColReverse?: boolean;
	isRowReverse?: boolean;
	isCover?: boolean;
	grow?: false | 'article' | 'figure';
	isRounded?: boolean;
};

export type HeroShape = {
	article: {
		subheading?: string;
		heading: string;
		detail?: string[];
		list?: { heading?: string; detail?: string }[];
		callsToAction: { label: string; action: string }[];
	};
	figure: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
		figcaption?: {
			heading: string;
			detail: string;
		};
	};
};
