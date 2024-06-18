import type { CardsShape } from '$lib/Cards';
import type { ContactShape } from '$lib/Contact';
import type { HeroShape } from '$lib/Hero';
import globalContent from '$lib/globalContent';
import type { HeadShape } from '../_components/Head';
import contactContent from '../_content/contactContent';

export default {
	page: {
		title: 'About Us',
		description: 'Description for About page.'
	},
	heroOne: {
		article: {
			subheading: 'Greentree Web Development',
			heading: 'Giving Small Businesses The Big Business Treatment',
			detail: [
				'My name is Ryan P, I am the owner and sole developer of Oak Harbor Web Designs. I got into programming after my wife had our first child. I was and still am a stay-at-home dad, and I wanted a career that I can do from home and still be there with the kids to watch them grow up. So over the course of two years I taught myself how to code websites the right way by hand and just started calling small businesses to offer my help.',
				"What I found was that a lot of small businesses don't have the funds to spend thousands of dollars upfront on a new website. And the ones that did, got taken advantage of and have a terrible website that looks like it was built by someone in a dungeon and haven't seen design trends for the last 10 years. They were in a frustrating spot - they either can't afford a good website, and if they can they don't know who to trust to make something great. So I tweaked my business model to fit their needs. That's how I came up with my $0 down and $150 a month model. It's more manageable for a small business to handle and won't hurt their bank accounts."
			],
			callsToAction: [
				{
					label: "Let's Work Together",
					action: '/contact'
				}
			]
		},
		figure: {
			source: 'https://picsum.photos/id/351/500/700',
			alternativeText: 'A placeholder photo.',
			width: 500,
			height: 700
		}
	},
	cardsOne: {
		header: {
			heading: 'Quality Over Quantity',
			detail: ["We focus on the needs on each individual business and tailor content around what makes it unique. Our collaborative process is very hands on as we work closely with you to create a website you're 100% happy with and not something you just settle for."]
		},
		articles: [
			{
				heading: 'No pre-written content',
				detail: ['We write unique and engaging content around your company. Everyone is unique!'],
				icon: globalContent.icon
			},
			{
				heading: 'Unbeatable Customer Service',
				detail: ['No automated systems - When you need help the lead developer answers your call.'],
				icon: globalContent.icon
			},
			{
				heading: 'No Limits On Design',
				detail: ['We can edit the design to cater to your tastes. Everything is customizable!'],
				icon: globalContent.icon
			}
		]
	},
	contactOne: contactContent
} satisfies {
	page: HeadShape;
	heroOne: HeroShape;
	cardsOne: CardsShape;
	contactOne: ContactShape;
};
