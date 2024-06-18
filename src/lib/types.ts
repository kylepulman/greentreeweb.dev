import type { ChipsShape } from './_Chips';

export type ImageShape = {
	source: string;
	alternativeText: string;
	width: number;
	height: number;
};

export type ListShape = {
	heading?: string;
	detail?: string;
}[];

export type ActionsShape = {
	label: string;
	action: string;
}[];

export type ArticleShape = {
	subheading?: string;
	image?: ImageShape;
	icon?: string;
	heading: string;
	detail?: string[];
	list?: ListShape;
	callsToAction?: ActionsShape;
};

export type GlobalShape = {
	title: string;
	description: string;
	icon: string;
	chips: ChipsShape;
	actions: ActionsShape;
};
