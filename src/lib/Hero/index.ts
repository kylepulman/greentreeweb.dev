type Flex = 'flex-1' | 'flex-2';

export type HeroOptions = {
	reversed?: true;
	layout?: {
		article?: {
			flex?: Flex;
		};
		figure?: {
			flex?: Flex;
		};
	};
};

export type HeroContent = {
	subheading?: string;
	heading?: string;
	detail?: string[];
	list?: {
		heading: string;
		detail?: string;
	}[];
	callsToAction?: {
		label: string;
		action: string;
	}[];
	visual?: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
	};
};

export { default as Hero } from './index.svelte';
