import type { BlockHeaderShape } from '$lib/_BlockHeader';

export { default as Contact } from './index.svelte';

export type ContactShape = {
	header?: BlockHeaderShape;
	chips: {
		action: string;
		label: string;
	}[];
	form: {
		input: {
			[Property in 'name' | 'email' | 'message']: {
				name: string;
				type: 'text' | 'email' | 'tel' | 'textarea';
				isRequired: boolean;
				label: string;
				placeholder: string;
			};
		};
		submit: {
			label: string;
		};
	};
};

export const contactDefaultContent: ContactShape = {
	header: {
		heading: 'Drop Us a Line',
		image: {
			source: '/favicon.svg',
			alternativeText: 'A header decoration.',
			width: 48,
			height: 48
		}
	},
	chips: [
		{
			label: '910-386-7339',
			action: 'tel:9103867339'
		},
		{
			label: 'kyle@greentreeweb.dev',
			action: 'mailto:kyle@greentreeweb.dev'
		},
		{
			label: 'Twitter',
			action: '#'
		},
		{
			label: 'YouTube',
			action: '#'
		}
	],
	form: {
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
		}
	}
};
