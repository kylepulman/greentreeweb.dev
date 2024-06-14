export type Card = {
	order?: 'variant-one';
	heading: string;
	detail: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	visual: {
		source: string;
		alternativeText: string;
		width?: number;
		height?: number;
	};
};

export const portfolioContent: Card[] = [
	{
		order: 'variant-one',
		heading: 'Valley Construction - Seattle, WA',
		detail:
			'Valley Construction Supply is the largest privately held construction supply company in Seattle, WA for over 35 years.',
		visual: {
			source: 'https://picsum.photos/400/200',
			alternativeText: 'Decoration',
			width: 400,
			height: 200
		},
		callsToAction: [
			{
				label: 'Visit Valley Construction',
				action: '#valley'
			}
		]
	},
	{
		heading: "AB's Hillbilly Gyros - Oak Harbor, WA",
		detail:
			"AB's Hillbilly Gyros is a local fusion gyros restaurant that opened in 2018, we made their first website.",
		visual: {
			source: 'https://picsum.photos/400/200',
			alternativeText: 'Decoration',
			width: 400,
			height: 200
		},
		callsToAction: [
			{
				label: 'Visit Hillbilly Gyros',
				action: '#gyros'
			}
		]
	},
	{
		heading: 'Dr. Victoria Chan - Foster City, CA',
		detail:
			'Dr. Victoria Chan is a Naturopathic Doctor based in California who offers a holistic approach to mental health.',
		visual: {
			source: 'https://picsum.photos/400/200',
			alternativeText: 'Decoration',
			width: 400,
			height: 200
		},
		callsToAction: [
			{
				label: 'Visit Dr. Victoria',
				action: '#dr'
			}
		]
	}
];

export { default as Cards } from './index.svelte';
