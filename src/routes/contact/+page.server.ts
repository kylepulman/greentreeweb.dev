import { handleFormInput } from '$lib';

export const load = () => {
	return {
		page: {
			title: 'Contact Us',
			description: 'Description for Contact page.'
		}
	};
};

export const actions = {
	default: (event) => handleFormInput(event)
};
