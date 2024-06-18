import { handleFormInput } from '$lib';
import aboutContent from './about.content';

export const load = () => {
	return aboutContent;
};

export const actions = {
	default: (event) => handleFormInput(event)
};
