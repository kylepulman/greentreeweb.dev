import type { ArticleShape } from '$lib/types';

export { default as Hero } from './index.svelte';

type FigureShape = {
	source: string;
	alternativeText?: string;
	width?: number;
	height?: number;
	figcaption?: {
		heading?: string;
		detail?: string;
	};
};

export type HeroOptions = {
	isColReverse?: boolean;
	isRowReverse?: boolean;
	isCover?: boolean;
	grow?: false | 'article' | 'figure';
	isRounded?: boolean;
};

export type HeroShape = {
	article: ArticleShape;
	figure: FigureShape;
};
