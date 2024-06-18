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
			heading: 'Websites that help businesses thrive.',
			detail: ['A no-nonsense website solution so you can get back to running your business.'],
			callsToAction: [{ label: 'Get in Touch', action: '/contact' }]
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
			heading: 'What We Do',
			detail: ['We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business.']
		},
		articles: [
			{
				heading: 'Mobile-first Design',
				detail: ['We start building your site for mobile devices first, then we add on to it to make tablet and desktop.'],

				icon: globalContent.icon
			},
			{
				heading: 'Fully Responsive',
				detail: ['Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can access your site from anywhere.'],
				icon: globalContent.icon
			},
			{
				heading: 'Optimization',
				detail: ['60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines.'],
				icon: globalContent.icon
			}
		]
	},
	heroTwo: {
		article: {
			subheading: 'No-nonsense contract',
			heading: '$0 Down, $150 Per Month,\n12 Month Minimum Contract',
			detail: ['$0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved.', 'You own your domain, content, listing, and profiles. Cancel anytime with no fees or hassle.'],
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
			],
			callsToAction: [
				{ label: 'Call Us', action: 'tel:3867339' },
				{ label: 'Learn More', action: '#' }
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
			heading: 'Who We Are',
			detail: ['My name is Ryan, I am a stay at home dad and web developer. I started this business to help provide for the family while still being able to be home and raise the kids. I spent a year and a half teaching myself the right way to make websites and learning to write the code myself. Now after being in business professionally for over 5 years I have built hundreds websites and have my method down to a science.'],
			callsToAction: [
				{
					label: 'Learn More',
					action: '/about'
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
