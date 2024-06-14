type Pitch = {
	heading: string;
	detail: string;
	callsToAction?: {
		label: string;
		action: string;
	}[];
	points: {
		heading: string;
		detail: string;
	}[];

	visual: {
		source: string;
		alternativeText: string;
	};
};

export const content: Pitch = {
	heading: '$0 Down, $150 Per Month,\n12 Month Minimum Contract',
	detail:
		'$0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved.\n\nYou own your domain, content, listing, and profiles. Cancel anytime with no fees or hassle.',
	visual: {
		source: 'https://picsum.photos/500',
		alternativeText: 'A placeholder photo.'
	},
	points: [
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
			detail:
				'We can achieve a perfect 100 on Google Page Speed scores and boost your search ranking.'
		},
		{
			heading: 'Google Analytics',
			detail: 'We install Analytics for free to monitor traffic and where it comes from.'
		}
	]
};

export { default as Pitch } from './index.svelte';
