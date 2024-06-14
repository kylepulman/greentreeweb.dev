type Hero = {
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

export const content: Hero = {
	heading: 'No-nonsense website development for your business.',
	detail: 'Business websites for home and outdoor services.',
	callsToAction: [
		{
			label: 'Get in Touch!',
			action: 'tel:9103867339'
		}
	],
	visual: {
		source: 'https://picsum.photos/id/701/1920/1080',
		alternativeText: 'A placeholder photo.'
	}
};

export { default as Hero } from './index.svelte';
