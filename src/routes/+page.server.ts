import { processContent } from '$lib';
import type { ContentShape } from '$lib/Content';
import type { ContentBlock } from '$lib/types';

export const load = async () => {
	const hero: ContentBlock = {
		// prettier-ignore
		order: [
			'subheading', 
			'heading', 
			'detail', 
			'list',
			'callsToAction', 
		],
		raw: {
			heading: 'No-nonsense website development for your business.',
			detail: ['Business websites for home and outdoor services.'],
			callsToAction: [
				{
					label: 'Get in Touch!',
					action: 'tel:9103867339'
				}
			]
		},
		content: new Map<keyof ContentShape, ContentShape[keyof ContentShape]>(),
		visual: {
			source: 'https://picsum.photos/id/701/1920/1080',
			alternativeText: 'A placeholder photo.',
			width: 1920,
			height: 1080
		}
	};

	const pitch: ContentBlock = {
		// prettier-ignore
		order: [
			'subheading', 
			'heading', 
			'detail', 
			'list',
			'callsToAction', 
		],
		raw: {
			subheading: 'No-nonsense contract',
			heading: '$0 Down, $150 Per Month,\n12 Month Minimum Contract',
			detail: ['$0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved.', 'You own your domain, content, listing, and profiles. Cancel anytime with no fees or hassle.'],
			callsToAction: [
				{ label: 'Call Us', action: 'tel:3867339' },
				{ label: 'Learn More', action: '#' }
			],
			list: [
				{
					heading: 'Hosting Fees Included',
					detail: 'Hosting fees are built right into the monthly payment.'
				},
				{
					heading: 'Unlimited Edits',
					detail: 'Change anything you want at anytime and it will be done that day.'
				},
				{
					heading: '24/7 Customer Service',
					detail: 'Call direct anytime day or night, no phone trees or automated responses.'
				},
				{
					heading: 'Web Design & Development',
					detail: 'Includes over 40 hours of design, development, and testing.'
				},
				{
					heading: '100 Google Page Speed Score',
					detail: 'We can achieve a perfect 100 on Google Page Speed scores and boost your search ranking.'
				},
				{
					heading: 'Google Analytics',
					detail: 'We install Analytics for free to monitor traffic and where it comes from.'
				}
			]
		},
		content: new Map<keyof ContentShape, ContentShape[keyof ContentShape]>(),
		visual: {
			source: 'https://picsum.photos/900',
			alternativeText: 'A placeholder photo.',
			width: 900,
			height: 900
		}
	};

	const processed = processContent([hero, pitch]);

	return {
		hero: processed[0],
		pitch: processed[1]
	};
};
