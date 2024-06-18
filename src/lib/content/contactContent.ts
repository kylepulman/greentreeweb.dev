import type { ContactShape } from '$lib/Contact';
import globalContent from './globalContent';

export default {
	blockHeader: {
		heading: 'Drop Us a Line',
		icon: '/favicon.svg'
	},
	chips: globalContent.chips,
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
} satisfies ContactShape;
