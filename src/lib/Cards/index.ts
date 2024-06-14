type Card = {
	heading: string;
	detail: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	visual: {
		source: string;
		alternativeText: string;
	};
};

export const content: Card[] = [
	{
		heading: 'Mobile-first Design',
		detail:
			'We start building your site for mobile devices first, then we add on to it to make tablet and desktop.',
		visual: {
			source: '/favicon.svg',
			alternativeText: 'Decoration'
		}
	},
	{
		heading: 'Fully Responsive',
		detail:
			'Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can access your site from anywhere.',
		visual: {
			source: '/favicon.svg',
			alternativeText: 'Decoration'
		}
	},
	{
		heading: 'Optimization',
		detail:
			'60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines.',
		visual: {
			source: '/favicon.svg',
			alternativeText: 'Decoration'
		}
	}
];

export { default as Cards } from './index.svelte';
