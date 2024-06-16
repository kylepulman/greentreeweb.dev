import type { BlockHeaderShape } from '$lib/_BlockHeader';

export { default as Cards } from './index.svelte';

export type CardShape = {
	header?: BlockHeaderShape;
	articles: {
		subheading?: string;
		image?: {
			source: string;
			alternativeText: string;
			width?: number;
			height?: number;
		};
		heading: string;
		detail?: string[];
		list?: { heading?: string; detail: string }[];
		callsToAction?: { label: string; action: string }[];
	}[];
};

export const cardDefaultContent = {
	header: {
		heading: 'What We Do',
		detail: ['We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business.'],
		image: {
			source: '/favicon.svg',
			alternativeText: 'A header decoration.',
			width: 48,
			height: 48
		}
	},
	articles: [
		{
			subheading: 'Seattle, WA',
			heading: 'Valley Construction',
			detail: ['Valley Construction Supply is the largest privately held construction supply company in Seattle, WA for over 35 years.'],
			image: {
				source: 'https://picsum.photos/400/200',
				alternativeText: 'Decoration',
				width: 400,
				height: 200
			},
			callsToAction: [
				{
					label: 'View the Website',
					action: '#valley'
				}
			]
		},
		{
			subheading: 'Oak Harbor, WA',
			heading: "AB's Hillbilly Gyros",
			detail: ["AB's Hillbilly Gyros is a local fusion gyros restaurant that opened in 2018, we made their first website."],
			image: {
				source: 'https://picsum.photos/400/200',
				alternativeText: 'Decoration',
				width: 400,
				height: 200
			},
			callsToAction: [
				{
					label: 'View the Website',
					action: '#gyros'
				}
			]
		},
		{
			subheading: 'Foster City, CA',
			heading: 'Dr. Victoria Chan',
			detail: ['Dr. Victoria Chan is a Naturopathic Doctor based in California who offers a holistic approach to mental health.'],
			image: {
				source: 'https://picsum.photos/400/200',
				alternativeText: 'Decoration',
				width: 400,
				height: 200
			},
			callsToAction: [
				{
					label: 'View the Website',
					action: '#dr'
				}
			]
		}
	]
};
