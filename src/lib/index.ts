import type { RequestEvent } from '@sveltejs/kit';
import type { ValidationError } from './Contact';

export const handleFormInput = async (event: RequestEvent) => {
	const formData = await event.request.formData();

	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');

	const error: {
		name?: ValidationError;
		email?: ValidationError;
		message?: ValidationError;
	} = {};

	if (!name) error.name = { name: 'name', message: 'Name is required' };
	if (!isEmail(email)) error.email = { name: 'email', message: 'Invalid email' };
	if (!message) error.message = { name: 'message', message: 'Message is required' };

	if (!isObjectEmpty(error)) {
		return {
			error
		};
	}

	return {
		success: 'Message sent successfully!'
	};
};

function isEmail(email?: FormDataEntryValue | string | null | undefined): boolean {
	if (!email || typeof email !== 'string') return false;
	/* eslint-disable */ const regExp = RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/); /* eslint-enable */
	return regExp.test(email);
}

function isObjectEmpty(o: object) {
	for (const key in o) if (Object.hasOwn(o, key)) return false;
	return true;
}
