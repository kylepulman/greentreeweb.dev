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

export { default as ContactForm } from './index.svelte';
