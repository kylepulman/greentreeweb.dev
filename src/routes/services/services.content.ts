import type { CardsShape } from '$lib/Cards';
import type { HeroShape } from '$lib/Hero';
import type { HeadShape } from '../_components/Head';
import tierContent from '../_content/tierContent';

export default {
	page: {
		title: 'Our Services',
		description: 'Description for Services page.'
	},
	heroOne: {
		article: {
			heading: 'Web Design & Development Done Differently',
			detail: ["What makes us unique in the development world is that we don't use WordPress, frameworks, or page builders. We meticulously write the code line by line. This gives us much more control over the design, and the website performs lightning fast because there's no bloated or messy code that slows it down.", 'Websites built by hand will out-perform most WordPress sites and drag and drop page builders which could cost thousands of dollars. When it comes to the web, the faster and more organized websites win.'],
			callsToAction: [
				{
					label: 'See Our Work',
					action: '/portfolio'
				}
			]
		},
		figure: {
			source: 'https://picsum.photos/900',
			alternativeText: 'A placeholder photo.',
			width: 900,
			height: 900
		}
	},
	heroTwo: {
		article: {
			heading: 'Search Engine Optimization for 2024',
			detail: ['If someone tells you they can get you to the front page of Google in 3 months - RUN! Unless your website was featured by The New York Times it could take years to rank in the top of the search results.', 'We offer a number of the latest search engine optimization techniques for 2021:'],
			list: [
				{
					heading: 'Keyword-Centered Content & Blogs'
				},
				{
					heading: 'Mobile-First-Optimized for the Best Experience'
				},
				{
					heading: 'Clean & Organized Code Structure For Web Crawlers'
				},
				{
					heading: 'Fully Responsive For Mobile, Tablet, & Desktop'
				}
			],
			callsToAction: [
				{
					label: 'See Our Work',
					action: '/portfolio'
				}
			]
		},
		figure: {
			source: 'https://picsum.photos/900',
			alternativeText: 'A placeholder photo.',
			width: 900,
			height: 900
		}
	},
	heroThree: {
		article: {
			heading: 'Logos, Graphic Design, & Branding',
			detail: ["We also offer logo and graphic design services via our own in-house graphic designer. If you have an existing logo that needs a touch up or need a completely new one we can help build your business's brand."],
			list: [
				{
					heading: 'Logos Starting at $350',
					detail: 'Rates may increase based on complexity, number of hours, and number of revisions'
				},
				{
					heading: 'Social Media Graphics',
					detail: 'Make a post that stands out with its own custom graphics. Give us a call for plans and rates.'
				}
			],
			callsToAction: [
				{
					label: 'See Our Work',
					action: '/portfolio'
				}
			]
		},
		figure: {
			source: 'https://picsum.photos/900',
			alternativeText: 'A placeholder photo.',
			width: 900,
			height: 900
		}
	},
	heroFour: {
		article: {
			heading: 'Lifetime Updates For Your Website',
			detail: ['Google changes its search algorithm standards every so often, changing what is important to rank. And web accessibility guidelines for users with screen readers get updated as well. So we also include lifetime updates to your website to make sure it never goes out of date and is always changing with the times.'],
			callsToAction: [
				{
					label: 'Read More',
					action: '#'
				}
			]
		},
		figure: {
			source: 'https://picsum.photos/900',
			alternativeText: 'placeholder',
			width: 900,
			height: 900
		}
	},
	cardsOne: tierContent
} satisfies {
	page: HeadShape;
	heroOne: HeroShape;
	heroTwo: HeroShape;
	heroThree: HeroShape;
	heroFour: HeroShape;
	cardsOne: CardsShape;
};
