import type { BlockHeaderShape } from '$lib/_BlockHeader';
import type { ChipsShape } from '$lib/_Chips';

export { default as Contact } from './index.svelte';

type FormShape = {
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

export type ContactShape = {
	blockHeader?: BlockHeaderShape;
	chips: ChipsShape;
	form: FormShape;
};
