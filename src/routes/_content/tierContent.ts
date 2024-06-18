import type { CardsShape } from '$lib/Cards';
import globalContent from '$lib/globalContent';

export default {
	header: {
		heading: "Let's Get Started",
		icon: globalContent.icon
	},
	articles: [
		{
			subheading: 'Standard',
			heading: '$150/mo',
			list: [
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
			subheading: 'E-Commerce',
			heading: '$8K',
			list: [
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
			subheading: 'Logos & Graphic Design',
			heading: '$0',
			list: [
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
	]
} satisfies CardsShape;
