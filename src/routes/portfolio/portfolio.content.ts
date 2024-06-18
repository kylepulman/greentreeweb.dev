import type { CardsShape } from '$lib/Cards';
import type { HeadShape } from '../_components/Head';
import portfolioContent from '../_content/portfolioContent';

export default {
	page: {
		title: 'Our Portfolio',
		description: 'Description for Portfolio page.'
	},
	cardsOne: portfolioContent
} satisfies {
	page: HeadShape;
	cardsOne: CardsShape;
};
