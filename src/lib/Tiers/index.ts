export type Tier = {
	type: string;
	heading: string;
	detail?: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	visual?: {
		source: string;
		alternativeText: string;
		width?: number;
		height?: number;
	};
	points: {
		heading?: string;
		detail?: string;
	}[];
};

export const tierContent: Tier[] = [
	{
		type: 'Standard',
		heading: '$150/mo',
		points: [
			{
				heading: 'Unlimited edits'
			},
			{
				heading: 'Includes hosting'
			},
			{
				heading: '24/7 customer service'
			},
			{
				heading: 'Lifetime updates'
			}
		],
		callsToAction: [
			{
				label: 'Contact Us',
				action: 'tel:9103867339'
			}
		]
	},
	{
		type: 'E-Commerce',
		heading: '$8K',
		points: [
			{
				heading: '$8000 min up front cost'
			},
			{
				heading: 'Custom designed'
			},
			{
				heading: 'Custom coded Shopify integration'
			},
			{
				heading: 'Easy to edit'
			}
		],
		callsToAction: [
			{
				label: 'Contact Us',
				action: 'tel:9103867339'
			}
		]
	},
	{
		type: 'Logos & Graphic Design',
		heading: '$0',
		points: [
			{
				heading: '2 revisions'
			},
			{
				heading: 'All file formats'
			},
			{
				heading: 'Ready to use'
			},
			{
				heading: 'FREE with subscription'
			}
		],
		callsToAction: [
			{
				label: 'Contact Us',
				action: 'tel:9103867339'
			}
		]
	}
];

export { default as Tiers } from './index.svelte';
