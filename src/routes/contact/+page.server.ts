import { handleFormInput } from '$lib';
import contactContent from './contact.content.js';

export const load = () => {
	return contactContent;
};

export const actions = {
	default: (event) => handleFormInput(event)
};
