type Input = {
	name: string;
	type: 'text' | 'email' | 'tel' | 'textarea';
	isRequired: boolean;
	label: string;
	placeholder: string;
};

export type ContactCard = {
	heading: string;
	visual: {
		source: string;
		alternativeText: string;
		width: number;
		height: number;
	};
	detail: string;
	action: string;
};

export type ContactShape = {
	heading: string;
	input: {
		name: Input;
		email: Input;
		message: Input;
	};
	submit: {
		label: string;
	};
	contactCards: ContactCard[];
};

export const contactContent: ContactShape = {
	heading: 'Drop Us a Line',
	input: {
		name: {
			name: 'name',
			type: 'text',
			label: 'Your name',
			placeholder: 'Kyle P.',
			isRequired: true
		},
		email: {
			name: 'email',
			type: 'email',
			label: 'Your email address',
			placeholder: 'kyle@greentreeweb.dev',
			isRequired: true
		},
		message: {
			name: 'message',
			type: 'textarea',
			label: 'Your message',
			placeholder: '',
			isRequired: true
		}
	},
	submit: {
		label: 'Send'
	},
	contactCards: [
		{
			visual: {
				source: '/favicon.svg',
				alternativeText: 'decoration',
				width: 48,
				height: 48
			},
			heading: 'Phone:',
			detail: '910-386-7339',
			action: 'tel:9103867339'
		},
		{
			visual: {
				source: '/favicon.svg',
				alternativeText: 'decoration',
				width: 48,
				height: 48
			},
			heading: 'Email:',
			detail: 'kyle@greentreeweb.dev',
			action: 'mailto:kyle@greentreeweb.dev'
		},
		{
			visual: {
				source: '/favicon.svg',
				alternativeText: 'decoration',
				width: 48,
				height: 48
			},
			heading: 'Twitter:',
			detail: '@greentreewebdev',
			action: '#'
		},
		{
			visual: {
				source: '/favicon.svg',
				alternativeText: 'decoration',
				width: 48,
				height: 48
			},
			heading: 'YouTube:',
			detail: '@greentreewebdev',
			action: '#'
		}
	]
};

export { default as Contact } from './index.svelte';
