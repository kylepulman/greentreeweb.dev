import type { GlobalShape } from '$lib/types';

export default {
	title: 'Greentree Web Development',
	description: 'Business websites for home and outdoor services.',
	icon: '/favicon.svg',
	chips: [
		{
			label: '910-386-7339',
			action: `tel:910-386-7339`,
			icon: 'Phone'
		},
		{
			label: 'kyle@greentreeweb.dev',
			action: `mailto:kyle@greentreeweb.dev`,
			icon: 'Email'
		},
		{
			label: 'Twitter',
			action: '#',
			icon: 'Social'
		},
		{
			label: 'YouTube',
			action: '#',
			icon: 'Video'
		}
	],
	actions: [
		{
			label: 'Home',
			action: '/'
		},
		{
			label: 'About',
			action: '/about'
		},
		{
			label: 'Services',
			action: '/services'
		},
		{
			label: 'Portfolio',
			action: '/portfolio'
		},
		{
			label: 'Contact',
			action: '/contact'
		}
	]
} satisfies GlobalShape;
