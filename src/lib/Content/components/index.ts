import type { CallsToAction } from '$lib/types';

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

const heroContentKeys = ['subheading', 'heading', 'detail', 'list', 'callsToAction', 'visual'] as const;
export type HeroContentKey = (typeof heroContentKeys)[number];

export type List = {
	heading: string;
	detail?: string;
}[];

export type VisualShape = {
	source: string;
	alternativeText: string;
	width: number;
	height: number;
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

const newHeroContent = new Map<HeroContentKey, string | string[] | VisualShape | List | CallsToAction | ArrayLike<unknown> | Iterable<unknown>>();
export type NewHeroContent = typeof newHeroContent;
