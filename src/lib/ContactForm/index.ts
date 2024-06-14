type Input = {
	name: string;
	type: 'text' | 'email' | 'tel' | 'textarea';
	isRequired: boolean;
	label: string;
	placeholder: string;
};

export type ContactFormShape = {
	heading: string;
	input: {
		name: Input;
		email: Input;
		message: Input;
	};
	submit: {
		label: string;
	};
};

export const contactFormContent: ContactFormShape = {
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
	}
};

export { default as ContactForm } from './index.svelte';
