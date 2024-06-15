import { processContent } from '$lib';
import type { ContentShape } from '$lib/Content';
import type { ContentBlock } from '$lib/types';

export const load = async () => {
	const hero: ContentBlock = {
		// prettier-ignore
		order: [
			'subheading',
			"heading",
			"detail"
		],
		raw: {
			subheading: 'Greentree Web Development',
			heading: 'Giving Small Businesses The Big Business Treatment',
			detail: [
				'My name is Ryan P, I am the owner and sole developer of Oak Harbor Web Designs. I got into programming after my wife had our first child. I was and still am a stay-at-home dad, and I wanted a career that I can do from home and still be there with the kids to watch them grow up. So over the course of two years I taught myself how to code websites the right way by hand and just started calling small businesses to offer my help.',
				"What I found was that a lot of small businesses don't have the funds to spend thousands of dollars upfront on a new website. And the ones that did, got taken advantage of and have a terrible website that looks like it was built by someone in a dungeon and haven't seen design trends for the last 10 years. They were in a frustrating spot - they either can't afford a good website, and if they can they don't know who to trust to make something great. So I tweaked my business model to fit their needs. That's how I came up with my $0 down and $150 a month model. It's more manageable for a small business to handle and won't hurt their bank accounts."
			]
		},
		content: new Map<keyof ContentShape, ContentShape[keyof ContentShape]>(),
		visual: {
			source: 'https://picsum.photos/id/351/500/700',
			alternativeText: 'A placeholder photo.',
			width: 500,
			height: 700
		}
	};

	const processed = processContent([hero]);

	return {
		hero: processed[0]
	};
};

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		for (const [key, value] of formData.entries()) {
			console.log(key, value);
		}
	}
};
