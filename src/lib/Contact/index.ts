import type { BlockHeaderShape } from '$lib/_BlockHeader';
import type { ChipsShape } from '$lib/_Chips';

export { default as Contact } from './index.svelte';

export type ContactShape = {
	header?: BlockHeaderShape;
	chips: ChipsShape;
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
		image: true
	},
	chips: [
		{
			label: '910-386-7339',
			action: `tel:910-386-7339`,
			icon: { source: 'Phone' }
		},
		{
			label: 'kyle@greentreeweb.dev',
			action: `mailto:kyle@greentreeweb.dev`,
			icon: { source: 'Email' }
		},
		{
			label: 'Twitter',
			action: '#',
			icon: { source: 'Social' }
		},
		{
			label: 'YouTube',
			action: '#',
			icon: { source: 'Video' }
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
