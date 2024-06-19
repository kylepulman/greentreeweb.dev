import type { CardsShape } from '$lib/Cards';
import type { HeroShape } from '$lib/Hero';
import globalContent from '$lib/globalContent';
import type { HeadShape } from './_components/Head';
import portfolioContent from './_content/portfolioContent';
import tierContent from './_content/tierContent';

export default {
	page: {
		title: 'Greentree Web Development',
		description: 'Description for Home page.'
	},
	heroOne: {
		article: {
			heading: 'A no-nonsense web solution that helps businesses thrive.',
			detail: ["Hi, I'm Kyle. I'm a developer and the sole proprietor of Greentree Web Development.", "I've seen plenty of website solutions, but none seem to tackle the core issue."],
			callsToAction: [{ label: 'Get Started', action: '/contact' }]
		},
		figure: {
			source: 'https://picsum.photos/id/701/900/500',
			alternativeText: 'A field of blue flowers.',
			width: 900,
			height: 500
		}
	},
	cardsOne: {
		header: {
			heading: 'Here For You',
			icon: '/favicon.svg',
			detail: ['We specialize in website development for home and outdoors service businesses, including roofers, landscapers, painters, and more.']
		},
		articles: [
			{
				icon: globalContent.icon,
				heading: 'Here For You',
				detail: ['We specialize in business website development for roofers, landscapers, painters, and more.']
			},
			{
				heading: 'Get More Leads',
				detail: ['A website that is designed from its foundation'],
				icon: globalContent.icon
			},
			{
				heading: 'Rest Assured',
				detail: ["We'll work hard to turn your website into one of your business's greatest assets."],
				icon: globalContent.icon
			}
		]
	},
	heroTwo: {
		article: {
			subheading: 'No-nonsense contract',
			heading: 'A managed web solution for $200 per month.',
			detail: ["We're not just selling a website. Pay month-to-month with no commitment. Bring a domain name and content, and we'll handle the rest."],
			list: [
				{
					heading: 'Get a website up-and-running today.',
					detail: "When you're ready to see what a managed web solution can do for your business, subscribe for $200 per month."
				},
				{
					heading: 'No hidden fees or surprises.',
					detail: 'A no-nonsense website solution for no-nonsense businesses.'
				},
				{
					heading: 'Your new favorite employee.',
					detail: "Once it's online, we'll continue to tune your website so that it continues to produce the best results possible."
				},
				{
					heading: 'Direct support.',
					detail: "We'll be there to answer any question and address problems before they become problems."
				}
			],
			callsToAction: [
				{ label: 'Schedule a Call', action: '/contact' },
				{ label: 'See our Work', action: '/portfolio' }
			]
		},
		figure: {
			source: 'https://picsum.photos/id/701/900',
			alternativeText: 'A field of blue flowers.',
			width: 900,
			height: 900,
			figcaption: {
				heading: 'Blue Flowers',
				detail: 'A field of blue flowers.'
			}
		}
	},
	cardsTwo: portfolioContent,
	heroThree: {
		article: {
			heading: "Hello, I'm Kyle!",
			detail: ["I'm a developer from Wilmington, North Carolina. Greentree Web Development is solely owned and operated by me. I believe that businesses shouldn't have to settle for limited page builders or costly agencies, so I've made it my goal to provide a no-nonsense solution that produces tangible results. I'm ready to get to work, let's start a project!"],
			callsToAction: [
				{
					label: 'Schedule a Call',
					action: '/contact'
				}
			]
		},
		figure: {
			source: '/me.gif',
			alternativeText: 'Profile photo.',
			width: 900,
			height: 900,
			figcaption: {
				heading: 'Kyle P.',
				detail: 'Owner/Developer'
			}
		}
	},
	cardsThree: tierContent
} satisfies {
	page: HeadShape;
	heroOne: HeroShape;
	cardsOne: CardsShape;
	heroTwo: HeroShape;
	cardsTwo: CardsShape;
	heroThree: HeroShape;
	cardsThree: CardsShape;
};
