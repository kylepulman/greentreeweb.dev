export type Contact = {
	visual: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
	};
	heading: string;
	detail: string;
	action: string;
};

export const contactsContent: Contact[] = [
	{
		visual: {
			source: '/favicon.svg',
			alternativeText: 'decoration',
			width: 64,
			height: 64
		},
		heading: 'Phone:',
		detail: '910-386-7339',
		action: 'tel:9103867339'
	},
	{
		visual: {
			source: '/favicon.svg',
			alternativeText: 'decoration',
			width: 64,
			height: 64
		},
		heading: 'Email:',
		detail: 'kyle@greentreeweb.dev',
		action: 'mail:kyle@greentreeweb.dev'
	}
];

export { default as Contacts } from './index.svelte';
