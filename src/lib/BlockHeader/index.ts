type BlockHeader = {
	heading: string;
	detail: string;
	callsToAction: {
		label: string;
		action: string;
	}[];
	visual: {
		source: string;
		alternativeText: string;
	};
};

export const content: BlockHeader = {
	heading: 'What We Do',
	detail:
		'We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business.',
	callsToAction: [
		{
			label: 'Learn More',
			action: '/about'
		}
	],
	visual: {
		source: '/favicon.svg',
		alternativeText: 'Decoration'
	}
};

export { default as BlockHeader } from './index.svelte';
